// Server-only site settings DB helper — DO NOT import in client components
import pool from '@/lib/db';
import { DEFAULT_SETTINGS } from '@/lib/site-settings';
import type { SiteSettings } from '@/lib/site-settings';

// Fetch all site settings from the database
export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const [rows] = await pool.execute('SELECT setting_key, setting_value FROM site_settings');
    const dbSettings = (rows as { setting_key: string; setting_value: string }[])
      .reduce<Record<string, string>>((acc, row) => {
        acc[row.setting_key] = row.setting_value;
        return acc;
      }, {});

    return { ...DEFAULT_SETTINGS, ...dbSettings } as SiteSettings;
  } catch {
    // If table doesn't exist yet, return defaults
    return { ...DEFAULT_SETTINGS };
  }
}
