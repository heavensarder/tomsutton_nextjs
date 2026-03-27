import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/auth';
import { cookies } from 'next/headers';
import { writeFileSync, unlinkSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const UPLOAD_DIR = join(process.cwd(), 'public', 'uploads');

// GET: List all media
export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const [rows] = await pool.execute(
      'SELECT * FROM media_library ORDER BY uploaded_at DESC'
    );
    return NextResponse.json({ success: true, data: rows });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// POST: Upload file and register in library
export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!existsSync(UPLOAD_DIR)) {
      mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    const formData = await request.formData();
    const files = formData.getAll('files') as File[];

    if (files.length === 0) {
      // Fallback: single file upload
      const file = formData.get('file') as File | null;
      if (file) files.push(file);
    }

    if (files.length === 0) {
      return NextResponse.json({ error: 'No files provided' }, { status: 400 });
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'image/gif', 'image/x-icon'];
    const maxSize = 8 * 1024 * 1024;
    const uploaded: { id: number; url: string; filename: string }[] = [];

    for (const file of files) {
      if (!allowedTypes.includes(file.type)) {
        continue; // skip invalid types
      }
      if (file.size > maxSize) {
        continue; // skip oversized
      }

      const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
      const timestamp = Date.now();
      const safeName = file.name
        .replace(/\.[^.]+$/, '')
        .replace(/[^a-zA-Z0-9-_]/g, '-')
        .replace(/-+/g, '-')
        .substring(0, 50);
      const filename = `${safeName}-${timestamp}.${ext}`;
      const filePath = join(UPLOAD_DIR, filename);

      const buffer = Buffer.from(await file.arrayBuffer());
      writeFileSync(filePath, buffer);

      const url = `/uploads/${filename}`;
      const sizeKb = Math.round(file.size / 1024);

      const [result] = await pool.execute(
        'INSERT INTO media_library (filename, url, original_name, mime_type, file_size, alt_text, uploaded_at) VALUES (?, ?, ?, ?, ?, ?, NOW())',
        [filename, url, file.name, file.type, sizeKb, '']
      );

      const insertId = (result as { insertId: number }).insertId;
      uploaded.push({ id: insertId, url, filename });
    }

    return NextResponse.json({
      success: true,
      uploaded,
      message: `${uploaded.length} file(s) uploaded successfully.`,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// DELETE: Delete media (single or batch)
export async function DELETE(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { ids } = body as { ids: number[] };

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'No IDs provided' }, { status: 400 });
    }

    // Get filenames before deleting from DB
    const placeholders = ids.map(() => '?').join(',');
    const [rows] = await pool.execute(
      `SELECT id, filename FROM media_library WHERE id IN (${placeholders})`,
      ids
    );

    const mediaRows = rows as { id: number; filename: string }[];

    // Delete files from disk
    for (const row of mediaRows) {
      const filePath = join(UPLOAD_DIR, row.filename);
      try {
        if (existsSync(filePath)) {
          unlinkSync(filePath);
        }
      } catch { /* skip file deletion errors */ }
    }

    // Delete from database
    await pool.execute(
      `DELETE FROM media_library WHERE id IN (${placeholders})`,
      ids
    );

    return NextResponse.json({
      success: true,
      message: `${mediaRows.length} file(s) deleted.`,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// PUT: Update media metadata (name, alt text)
export async function PUT(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, original_name, alt_text } = body as { id: number; original_name?: string; alt_text?: string };

    if (!id) {
      return NextResponse.json({ error: 'No ID provided' }, { status: 400 });
    }

    const updates: string[] = [];
    const values: (string | number)[] = [];

    if (original_name !== undefined) {
      updates.push('original_name = ?');
      values.push(original_name);
    }
    if (alt_text !== undefined) {
      updates.push('alt_text = ?');
      values.push(alt_text);
    }

    if (updates.length === 0) {
      return NextResponse.json({ error: 'Nothing to update' }, { status: 400 });
    }

    values.push(id);
    await pool.execute(
      `UPDATE media_library SET ${updates.join(', ')} WHERE id = ?`,
      values
    );

    return NextResponse.json({ success: true, message: 'Media updated.' });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
