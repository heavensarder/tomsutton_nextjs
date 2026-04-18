import { loadEnvConfig } from '@next/env';
const projectDir = process.cwd();
loadEnvConfig(projectDir);

import pool from './src/lib/db';
import { SITE_PAGES } from './src/lib/seo-pages';

async function syncLiveDb() {
  console.log('--- STARTING LIVE DATABASE SYNC ---');
  let hasErrors = false;

  // 1. Migrate blog_posts table
  try {
    console.log('\n[1/2] Adding is_energy_event column to blog_posts...');
    await pool.execute('ALTER TABLE blog_posts ADD COLUMN is_energy_event BOOLEAN DEFAULT false;');
    console.log('✅ Column successfully added.');
  } catch (error: any) {
    if (error.code === 'ER_DUP_FIELDNAME') {
      console.log('⏭️ Column already exists on live server, skipping.');
    } else {
      console.error('❌ Failed to add column:', error.message);
      hasErrors = true;
    }
  }

  // 2. Clean SEO Settings
  try {
    console.log('\n[2/2] Cleaning up orphaned SEO pages...');
    const validPaths = SITE_PAGES.map(p => p.path);
    const placeholders = validPaths.map(() => '?').join(',');
    
    const [result] = await pool.execute(
      `DELETE FROM seo_settings WHERE page_path NOT IN (${placeholders})`,
      validPaths
    );
    
    const affectedRows = (result as any).affectedRows;
    console.log(`✅ Cleaned up ${affectedRows} orphaned pages from live database.`);
  } catch (error: any) {
    console.error('❌ Failed to cleanup SEO settings:', error.message);
    hasErrors = true;
  }

  console.log('\n--- SYNC COMPLETE ---');
  if (hasErrors) {
    console.log('⚠️ Completed with some errors. Please check the logs above.');
  } else {
    console.log('✨ Live database is fully synchronized and ready!');
  }
  
  process.exit(0);
}

syncLiveDb();
