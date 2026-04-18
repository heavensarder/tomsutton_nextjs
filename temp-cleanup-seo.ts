import pool from './src/lib/db';
import { SITE_PAGES } from './src/lib/seo-pages';

async function run() {
  try {
    const validPaths = SITE_PAGES.map(p => p.path);
    const placeholders = validPaths.map(() => '?').join(',');
    
    console.log('Cleaning up orphaned SEO settings...');
    const [result] = await pool.execute(
      `DELETE FROM seo_settings WHERE page_path NOT IN (${placeholders})`,
      validPaths
    );
    
    const affectedRows = (result as any).affectedRows;
    console.log(`Cleaned up ${affectedRows} orphaned pages from database.`);
  } catch (e) {
    console.error('Failed to cleanup', e);
  } finally {
    process.exit(0);
  }
}

run();
