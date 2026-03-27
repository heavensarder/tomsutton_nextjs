import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/auth';
import { cookies } from 'next/headers';

// GET: Fetch all SEO settings
export async function GET() {
  try {
    // Verify auth
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const [rows] = await pool.execute(
      'SELECT * FROM seo_settings ORDER BY page_category, page_name'
    );

    return NextResponse.json({ success: true, data: rows });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// PUT: Update a single page's SEO settings
export async function PUT(request: Request) {
  try {
    // Verify auth
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { page_path, ...fields } = body;

    if (!page_path) {
      return NextResponse.json({ error: 'page_path is required' }, { status: 400 });
    }

    // Build dynamic UPDATE query from provided fields
    const allowedFields = [
      'meta_title', 'meta_description', 'meta_keywords', 'focus_keyword',
      'og_title', 'og_description', 'og_image', 'og_type',
      'twitter_card', 'twitter_title', 'twitter_description',
      'canonical_url', 'robots', 'custom_slug', 'schema_markup',
    ];

    const updates: string[] = [];
    const values: string[] = [];

    for (const field of allowedFields) {
      if (field in fields) {
        updates.push(`${field} = ?`);
        values.push(fields[field] ?? '');
      }
    }

    if (updates.length === 0) {
      return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 });
    }

    values.push(page_path);

    await pool.execute(
      `UPDATE seo_settings SET ${updates.join(', ')} WHERE page_path = ?`,
      values
    );

    return NextResponse.json({ success: true, message: 'SEO settings updated successfully.' });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
