import { NextResponse } from 'next/server';
import { ADMIN_USERNAME, ADMIN_EMAIL, hashPassword, getAdminPasswordHash, createSessionToken, SESSION_COOKIE_NAME } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required.' }, { status: 400 });
    }

    // Verify credentials against hardcoded admin
    const isValidUsername = username === ADMIN_USERNAME;
    const isValidPassword = hashPassword(password) === getAdminPasswordHash();

    if (!isValidUsername || !isValidPassword) {
      return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 });
    }

    // Create signed session token
    const token = createSessionToken(ADMIN_USERNAME, ADMIN_EMAIL);

    const response = NextResponse.json({
      success: true,
      user: { username: ADMIN_USERNAME, email: ADMIN_EMAIL },
    });

    response.cookies.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;
  } catch {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
