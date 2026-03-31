import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/auth';
import { cookies } from 'next/headers';
import { generateSitemap } from '@/lib/sitemap';

// GET: List all posts
export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const [rows] = await pool.execute(`
      SELECT 
        p.id, p.title, p.slug, p.status, p.published_at, p.featured_image,
        c.name as category_name 
      FROM blog_posts p
      LEFT JOIN blog_categories c ON p.category_id = c.id
      ORDER BY p.created_at DESC
    `);
    
    return NextResponse.json({ success: true, posts: rows });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// POST: Create a new post
export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { 
      title, slug, content, excerpt, featured_image, 
      category_id, meta_title, meta_description, meta_keywords, status 
    } = await request.json();

    if (!title || !slug || !content) {
      return NextResponse.json({ error: 'Title, slug, and content are required' }, { status: 400 });
    }

    // Prepare published_at logic
    const publishedAtStr = status === 'published' ? 'NOW()' : 'NULL';

    const [result] = await pool.execute(
      `INSERT INTO blog_posts 
      (title, slug, content, excerpt, featured_image, category_id, meta_title, meta_description, meta_keywords, status, published_at) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ${status === 'published' ? 'NOW()' : 'NULL'})`,
      [
        title, slug, content, 
        excerpt || '', 
        featured_image || null, 
        category_id || null, 
        meta_title || '', 
        meta_description || '', 
        meta_keywords || '',
        status || 'draft'
      ]
    );

    const insertId = (result as { insertId: number }).insertId;

    if (status === 'published') {
      await generateSitemap(); // Auto rebuild sitemap seamlessly
    }

    return NextResponse.json({ success: true, id: insertId, slug });
  } catch (error: any) {
    if (error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json({ error: 'A post with this slug already exists' }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
