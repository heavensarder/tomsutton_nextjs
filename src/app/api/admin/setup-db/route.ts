import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { ADMIN_USERNAME, ADMIN_EMAIL, getAdminPasswordHash } from '@/lib/auth';
import { SITE_PAGES } from '@/lib/seo-pages';
import { DEFAULT_SETTINGS, SETTINGS_LABELS } from '@/lib/site-settings';

export async function POST() {
  try {
    const conn = await pool.getConnection();

    // Create admin_users table
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);

    // Create seo_settings table
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS seo_settings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        page_path VARCHAR(255) NOT NULL UNIQUE,
        page_name VARCHAR(255) NOT NULL,
        page_category VARCHAR(100) DEFAULT 'Main Pages',
        meta_title VARCHAR(255) DEFAULT '',
        meta_description TEXT,
        meta_keywords TEXT,
        focus_keyword VARCHAR(255) DEFAULT '',
        og_title VARCHAR(255) DEFAULT '',
        og_description TEXT,
        og_image VARCHAR(512) DEFAULT '',
        og_type VARCHAR(50) DEFAULT 'website',
        twitter_card VARCHAR(50) DEFAULT 'summary_large_image',
        twitter_title VARCHAR(255) DEFAULT '',
        twitter_description TEXT,
        canonical_url VARCHAR(512) DEFAULT '',
        robots VARCHAR(255) DEFAULT 'index, follow',
        custom_slug VARCHAR(255) DEFAULT '',
        schema_markup LONGTEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);

    // Seed admin user (INSERT IGNORE = skip if exists)
    const passwordHash = getAdminPasswordHash();
    await conn.execute(
      `INSERT IGNORE INTO admin_users (username, email, password_hash) VALUES (?, ?, ?)`,
      [ADMIN_USERNAME, ADMIN_EMAIL, passwordHash]
    );

    // Seed all pages with intelligent default SEO data
    const baseUrl = 'https://tomsuttonheating.co.uk';

    for (const page of SITE_PAGES) {
      const metaTitle = page.path === '/'
        ? 'Tom Sutton Heating | Boiler Installation, Servicing & Repairs | New Forest'
        : `${page.name} | Tom Sutton Heating - New Forest`;

      const metaDescription = page.path === '/'
        ? 'Tom Sutton Heating provides expert boiler installation, servicing, repairs and heating solutions across Lymington, New Milton, Highcliffe, Christchurch and the New Forest. Gas Safe registered. Call 01590 631671.'
        : `Professional ${page.name.toLowerCase()} services by Tom Sutton Heating. Gas Safe & OFTEC registered engineers serving Lymington, New Milton & the New Forest. Call 01590 631671 for a free quote.`;

      const canonicalUrl = `${baseUrl}${page.path === '/' ? '' : page.path}`;
      const customSlug = page.path === '/' ? '/' : page.path.replace(/^\//, '');

      const schemaMarkup = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Tom Sutton Heating',
        description: metaDescription,
        url: canonicalUrl,
        telephone: '+441590631671',
        email: 'info@tomsuttonheating.co.uk',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '19 Longleat Gardens',
          addressLocality: 'New Milton',
          addressRegion: 'Hampshire',
          postalCode: 'BH25 5UZ',
          addressCountry: 'GB',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 50.757245,
          longitude: -1.670417,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: '150',
          bestRating: '5',
        },
        priceRange: '££',
      }, null, 2);

      await conn.execute(
        `INSERT IGNORE INTO seo_settings
         (page_path, page_name, page_category, meta_title, meta_description, meta_keywords,
          focus_keyword, og_title, og_description, og_image, og_type, twitter_card,
          twitter_title, twitter_description, canonical_url, robots, custom_slug, schema_markup)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          page.path,
          page.name,
          page.category,
          metaTitle,
          metaDescription,
          `${page.name.toLowerCase()}, tom sutton heating, new forest, boiler, heating, gas safe`,
          page.name.toLowerCase().split(' ')[0],
          metaTitle,
          metaDescription,
          'https://i.postimg.cc/V65kTYN4/tom-sutton-logo.webp',
          'website',
          'summary_large_image',
          metaTitle,
          metaDescription,
          canonicalUrl,
          'index, follow',
          customSlug,
          schemaMarkup,
        ]
      );
    }

    // Create site_settings table
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS site_settings (
        setting_key VARCHAR(100) PRIMARY KEY,
        setting_value TEXT,
        setting_group VARCHAR(50) DEFAULT 'general',
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);

    // Seed site settings with defaults
    for (const [key, value] of Object.entries(DEFAULT_SETTINGS)) {
      const group = SETTINGS_LABELS[key]?.group || 'general';
      await conn.execute(
        'INSERT IGNORE INTO site_settings (setting_key, setting_value, setting_group) VALUES (?, ?, ?)',
        [key, value, group]
      );
    }

    conn.release();

    return NextResponse.json({
      success: true,
      message: `Database initialized. ${SITE_PAGES.length} pages seeded with default SEO data. Site settings configured.`,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: `Database setup failed: ${message}` }, { status: 500 });
  }
}
