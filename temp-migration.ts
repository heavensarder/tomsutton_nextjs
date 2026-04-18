import pool from './src/lib/db';

async function run() {
  try {
    console.log('Running migration: Adding is_energy_event column...');
    await pool.execute('ALTER TABLE blog_posts ADD COLUMN is_energy_event BOOLEAN DEFAULT false;');
    console.log('Migration successful.');
  } catch (error: any) {
    if (error.code === 'ER_DUP_FIELDNAME') {
      console.log('Column already exists, skipping.');
    } else {
      console.error('Migration failed:', error);
    }
  } finally {
    process.exit(0);
  }
}

run();
