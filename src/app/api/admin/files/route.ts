import { NextResponse } from 'next/server';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/auth';
import { SITE_PAGES } from '@/lib/seo-pages';
import { cookies } from 'next/headers';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const PUBLIC_DIR = join(process.cwd(), 'public');

function getFilePath(filename: string): string | null {
  if (filename === 'sitemap.xml') return join(PUBLIC_DIR, 'sitemap.xml');
  if (filename === 'robots.txt') return join(PUBLIC_DIR, 'robots.txt');
  return null;
}

// GET: Read current sitemap.xml and robots.txt
export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const sitemapPath = join(PUBLIC_DIR, 'sitemap.xml');
    const robotsPath = join(PUBLIC_DIR, 'robots.txt');

    const sitemap = existsSync(sitemapPath) ? readFileSync(sitemapPath, 'utf-8') : '';
    const robots = existsSync(robotsPath) ? readFileSync(robotsPath, 'utf-8') : '';

    return NextResponse.json({ success: true, sitemap, robots });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// PUT: Write sitemap.xml or robots.txt
export async function PUT(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { filename, content } = body;

    if (!filename || typeof content !== 'string') {
      return NextResponse.json({ error: 'filename and content are required' }, { status: 400 });
    }

    const filePath = getFilePath(filename);
    if (!filePath) {
      return NextResponse.json({ error: 'Invalid filename. Only sitemap.xml and robots.txt are allowed.' }, { status: 400 });
    }

    writeFileSync(filePath, content, 'utf-8');

    return NextResponse.json({ success: true, message: `${filename} saved successfully.` });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// POST: Auto-generate sitemap.xml from site pages
export async function POST() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const baseUrl = 'https://tomsuttonheating.co.uk';
    const today = new Date().toISOString().split('T')[0];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    for (const page of SITE_PAGES) {
      const loc = page.path === '/' ? baseUrl : `${baseUrl}${page.path}`;
      const priority = page.path === '/' ? '1.0' : page.category === 'Services' ? '0.8' : '0.6';
      const changefreq = page.path === '/' ? 'weekly' : 'monthly';

      xml += `  <url>\n`;
      xml += `    <loc>${loc}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      xml += `  </url>\n`;
    }

    xml += `</urlset>\n`;

    const filePath = join(PUBLIC_DIR, 'sitemap.xml');
    writeFileSync(filePath, xml, 'utf-8');

    // Also generate robots.txt if it doesn't exist
    const robotsPath = join(PUBLIC_DIR, 'robots.txt');
    if (!existsSync(robotsPath)) {
      const robotsContent = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
      writeFileSync(robotsPath, robotsContent, 'utf-8');
    }

    return NextResponse.json({
      success: true,
      message: `Sitemap generated with ${SITE_PAGES.length} URLs.`,
      content: xml,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
