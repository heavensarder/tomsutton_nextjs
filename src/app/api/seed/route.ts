import pool from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const settings = [
      { key: 'mail_sender_name', group: 'Mail' },
      { key: 'mail_sender_email', group: 'Mail' },
      { key: 'mail_receiver_email', group: 'Mail' },
      { key: 'mail_client_id', group: 'Mail' },
      { key: 'mail_client_secret', group: 'Mail' },
      { key: 'mail_refresh_token', group: 'Mail' },
      { key: 'mail_email_subject', group: 'Mail' },
      { key: 'mail_html_body', group: 'Mail' },
      { key: 'mail_auto_reply_enabled', group: 'Mail' },
      { key: 'mail_reply_subject', group: 'Mail' },
      { key: 'mail_reply_body', group: 'Mail' }
    ];

    const conn = await pool.getConnection();
    for (const s of settings) {
      await conn.execute('INSERT IGNORE INTO site_settings (setting_key, setting_value, setting_group) VALUES (?, ?, ?)', [s.key, '', s.group]);
    }
    conn.release();

    return NextResponse.json({ success: true, message: 'Mail settings seeded' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
