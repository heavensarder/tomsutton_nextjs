const mysql = require('mysql2/promise');
require('dotenv').config({ path: './.env.local' });

async function run() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL);
  
  const settings = [
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

  for (const s of settings) {
    try {
      await connection.execute('INSERT IGNORE INTO site_settings (setting_key, setting_value, setting_group) VALUES (?, ?, ?)', [s.key, '', s.group]);
      console.log(`Inserted ${s.key}`);
    } catch(e) {
      console.log(`Error inserting ${s.key}:`, e.message);
    }
  }
  await connection.end();
}
run();
