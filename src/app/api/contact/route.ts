import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, postcode, address, service, message } = body;

    // 1. Fetch Mail settings
    const [rows]: any = await pool.execute("SELECT setting_key, setting_value FROM site_settings WHERE setting_group = 'Mail'");
    const conf: Record<string, string> = {};
    for (const r of rows) conf[r.setting_key] = r.setting_value;

    const {
      mail_sender_name, mail_sender_email, mail_receiver_email, mail_client_id, mail_client_secret, mail_refresh_token,
      mail_email_subject, mail_html_body, mail_auto_reply_enabled, mail_reply_subject, mail_reply_body
    } = conf;

    if (!mail_sender_email || !mail_client_id || !mail_refresh_token) {
      return NextResponse.json({ success: false, error: 'Mailing is not fully configured in the Admin Dashboard.' }, { status: 500 });
    }

    // 2. Setup OAuth2
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(mail_client_id, mail_client_secret, "https://developers.google.com/oauthplayground");
    oauth2Client.setCredentials({ refresh_token: mail_refresh_token });
    
    // In production you would want to handle token fetching safely, ignoring for now since it's an API route response.
    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) reject(err);
        resolve(token);
      });
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: mail_sender_email,
        clientId: mail_client_id,
        clientSecret: mail_client_secret,
        refreshToken: mail_refresh_token,
        accessToken: accessToken as string,
      }
    });

    // 3. Prepare replacement helper
    const replaceVars = (html: string) => {
      return html
        .replace(/\{\{name\}\}/g, name || '')
        .replace(/\{\{email\}\}/g, email || '')
        .replace(/\{\{phone\}\}/g, phone || '')
        .replace(/\{\{postcode\}\}/g, postcode || '')
        .replace(/\{\{address\}\}/g, address || '')
        .replace(/\{\{service\}\}/g, service || '')
        .replace(/\{\{message\}\}/g, (message || '').replace(/\n/g, '<br/>'))
        .replace(/\{\{date\}\}/g, new Date().toLocaleString('en-GB'));
    };

    const fromAddress = mail_sender_name ? `"${mail_sender_name}" <${mail_sender_email}>` : mail_sender_email;

    // 4. Send Enquiry to Admin
    await transporter.sendMail({
      from: fromAddress,
      to: mail_receiver_email || mail_sender_email,
      subject: mail_email_subject || 'New Website Enquiry',
      html: replaceVars(mail_html_body || `<p>New enquiry from ${name}</p>`),
      replyTo: email
    });

    // 5. Send Auto-Reply to User
    if (mail_auto_reply_enabled === 'true' && mail_reply_body) {
      try {
        await transporter.sendMail({
          from: fromAddress,
          to: email, // send to customer
          subject: mail_reply_subject || 'Thank you for your enquiry',
          html: replaceVars(mail_reply_body)
        });
      } catch (err) {
        console.warn('Auto-reply failed to send:', err);
      }
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' });

  } catch (error: any) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error. Unable to send.' }, { status: 500 });
  }
}
