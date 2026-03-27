import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect admin routes (except login page and API routes)
  if (
    pathname.startsWith('/admin') &&
    !pathname.startsWith('/admin/login') &&
    !pathname.startsWith('/api/')
  ) {
    const sessionCookie = request.cookies.get('admin_session');

    if (!sessionCookie?.value) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Basic structural and expiry validation (HMAC check happens server-side)
    const parts = sessionCookie.value.split('.');
    if (parts.length !== 2) {
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      response.cookies.delete('admin_session');
      return response;
    }

    try {
      const payload = JSON.parse(
        atob(parts[0].replace(/-/g, '+').replace(/_/g, '/'))
      );
      if (!payload.exp || payload.exp < Date.now()) {
        const response = NextResponse.redirect(new URL('/admin/login', request.url));
        response.cookies.delete('admin_session');
        return response;
      }
    } catch {
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      response.cookies.delete('admin_session');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
