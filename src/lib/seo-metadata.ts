import type { Metadata } from 'next';
import pool from '@/lib/db';

interface SeoRow {
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  og_title: string;
  og_description: string;
  og_image: string;
  og_type: string;
  twitter_card: string;
  twitter_title: string;
  twitter_description: string;
  canonical_url: string;
  robots: string;
  schema_markup: string;
}

export async function generatePageMetadata(pagePath: string): Promise<Metadata> {
  const fallback: Metadata = {
    title: 'Tom Sutton Heating | New Forest',
    description: 'Professional boiler installation, servicing & repairs across the New Forest. Gas Safe registered. Call 01590 631671.',
  };

  try {
    const [rows] = await pool.execute(
      'SELECT meta_title, meta_description, meta_keywords, og_title, og_description, og_image, og_type, twitter_card, twitter_title, twitter_description, canonical_url, robots, schema_markup FROM seo_settings WHERE page_path = ? LIMIT 1',
      [pagePath]
    );

    const data = (rows as SeoRow[])[0];
    if (!data) return fallback;

    const metadata: Metadata = {};

    if (data.meta_title) metadata.title = data.meta_title;
    if (data.meta_description) metadata.description = data.meta_description;
    if (data.meta_keywords) metadata.keywords = data.meta_keywords.split(',').map((k: string) => k.trim());

    if (data.robots) {
      const parts = data.robots.split(',').map((s: string) => s.trim().toLowerCase());
      metadata.robots = {
        index: !parts.includes('noindex'),
        follow: !parts.includes('nofollow'),
      };
    }

    if (data.canonical_url) {
      metadata.alternates = { canonical: data.canonical_url };
    }

    // Open Graph
    if (data.og_title || data.og_description || data.og_image) {
      metadata.openGraph = {
        title: data.og_title || data.meta_title || undefined,
        description: data.og_description || data.meta_description || undefined,
        type: (data.og_type as 'website' | 'article') || 'website',
        url: data.canonical_url || undefined,
        siteName: 'Tom Sutton Heating',
        locale: 'en_GB',
        ...(data.og_image ? { images: [{ url: data.og_image, width: 1200, height: 630, alt: data.og_title || 'Tom Sutton Heating' }] } : {}),
      };
    }

    // Twitter
    if (data.twitter_card || data.twitter_title) {
      metadata.twitter = {
        card: (data.twitter_card as 'summary' | 'summary_large_image') || 'summary_large_image',
        title: data.twitter_title || data.meta_title || undefined,
        description: data.twitter_description || data.meta_description || undefined,
        ...(data.og_image ? { images: [data.og_image] } : {}),
      };
    }

    // Schema markup gets injected via a <script> tag in the page's layout
    // Next.js metadata doesn't directly support JSON-LD, so we handle it separately
    // via the layout component that uses this function

    return metadata;
  } catch {
    return fallback;
  }
}

// Helper to get raw schema markup for a page (used in layout components)
export async function getSchemaMarkup(pagePath: string): Promise<string | null> {
  try {
    const [rows] = await pool.execute(
      'SELECT schema_markup FROM seo_settings WHERE page_path = ? LIMIT 1',
      [pagePath]
    );
    const data = (rows as { schema_markup: string }[])[0];
    return data?.schema_markup || null;
  } catch {
    return null;
  }
}
