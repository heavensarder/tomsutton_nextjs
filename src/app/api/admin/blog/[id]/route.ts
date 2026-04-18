import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/auth';
import { cookies } from 'next/headers';
import { generateSitemap } from '@/lib/sitemap';

// GET: Get single post by ID
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const [rows] = await pool.execute(
      'SELECT * FROM blog_posts WHERE id = ?',
      [id]
    );

    const data = rows as any[];
    if (data.length === 0) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, post: data[0] });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// PUT: Update post
export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { 
      title, slug, content, excerpt, featured_image, 
      category_id, meta_title, meta_description, meta_keywords, status, is_energy_event 
    } = body;

    if (!title || !slug || !content) {
      return NextResponse.json({ error: 'Title, slug, and content are required' }, { status: 400 });
    }

    // Check if status changed from draft to published to set published_at
    const [currentPost] = await pool.execute('SELECT status, published_at FROM blog_posts WHERE id = ?', [id]);
    const postData = currentPost as any[];
    
    let publishedAtUpdate = '';
    if (postData.length > 0) {
      const prevStatus = postData[0].status;
      if (prevStatus !== 'published' && status === 'published') {
        publishedAtUpdate = ', published_at = NOW()';
      } else if (status === 'draft') {
        publishedAtUpdate = ', published_at = NULL';
      }
    }

    await pool.execute(
      `UPDATE blog_posts SET 
        title = ?, slug = ?, content = ?, excerpt = ?, 
        featured_image = ?, category_id = ?, 
        meta_title = ?, meta_description = ?, meta_keywords = ?, status = ?, is_energy_event = ?
        ${publishedAtUpdate}
       WHERE id = ?`,
      [
        title, slug, content, 
        excerpt || '', 
        featured_image || null, 
        category_id || null, 
        meta_title || '', 
        meta_description || '', 
        meta_keywords || '',
        status || 'draft',
        is_energy_event ? 1 : 0,
        id
      ]
    );

    // Rebuild sitemap whenever a post is updated (e.g. status changes, or title changes)
    await generateSitemap();

    return NextResponse.json({ success: true, message: 'Post updated successfully' });
  } catch (error: any) {
    if (error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json({ error: 'A post with this slug already exists' }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE: Delete post
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await pool.execute('DELETE FROM blog_posts WHERE id = ?', [id]);

    // Rebuild sitemap to remove the deleted post URL
    await generateSitemap();

    return NextResponse.json({ success: true, message: 'Post deleted successfully' });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
