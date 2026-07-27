import pool from './src/lib/db';

async function run() {
  try {
    console.log('Running migration: Updating SEO path...');
    const [result] = await pool.execute(
      `UPDATE seo_settings 
       SET page_path = '/leave-us-a-review',
           page_name = 'Leave a Review',
           custom_slug = 'leave-us-a-review'
       WHERE page_path = '/our-reviews'`
    );
    console.log('Migration successful.', result);
  } catch (error: any) {
    console.error('Migration failed:', error);
  } finally {
    process.exit(0);
  }
}

run();
