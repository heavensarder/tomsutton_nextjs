import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    // Note: React 19 + Next.js 15: `params` is a promise
    const params = await context.params;
    const { id } = params;
    
    // We don't strictly need auth to *read* component data, 
    // but since this is an admin route, it's good practice.
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const [rows] = await pool.execute('SELECT data FROM components_data WHERE id = ?', [id]);
    const resultSet = rows as any[];
    
    if (resultSet.length === 0) {
      return NextResponse.json({ success: true, data: null });
    }

    const data = typeof resultSet[0].data === 'string' 
      ? JSON.parse(resultSet[0].data) 
      : resultSet[0].data;

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const params = await context.params;
    const { id } = params;
    
    const body = await request.json();
    const { data } = body;

    if (!data) {
      return NextResponse.json({ error: 'Data is required' }, { status: 400 });
    }

    const dataString = JSON.stringify(data);

    await pool.execute(
      'INSERT INTO components_data (id, data) VALUES (?, ?) ON DUPLICATE KEY UPDATE data = ?',
      [id, dataString, dataString]
    );

    return NextResponse.json({ success: true, message: 'Component updated successfully.' });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
