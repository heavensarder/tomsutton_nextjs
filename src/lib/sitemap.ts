import { SITE_PAGES } from './seo-pages';
import pool from './db';
import { join } from 'path';
import { writeFileSync, existsSync } from 'fs';

export async function generateSitemap(): Promise<string> {
  const baseUrl = 'https://tomsuttonheating.co.uk';
  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // 1. Static Pages
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

  // 2. Dynamic Blog Posts
  try {
    const [rows] = await pool.execute(
      `SELECT slug, updated_at, published_at FROM blog_posts WHERE status = 'published'`
    );
    const posts = rows as any[];

    for (const post of posts) {
      const loc = `${baseUrl}/blog/${post.slug}`;
      const lastmodDate = new Date(post.updated_at || post.published_at || Date.now());
      const lastmod = lastmodDate.toISOString().split('T')[0];

      xml += `  <url>\n`;
      xml += `    <loc>${loc}</loc>\n`;
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.7</priority>\n`;
      xml += `  </url>\n`;
    }
  } catch (error) {
    console.error('Failed to fetch blog posts for sitemap:', error);
    // Continue building the sitemap even if blogs fail to prevent complete breakage
  }

  xml += `</urlset>\n`;

  // 3. Write securely to Public directory
  const PUBLIC_DIR = join(process.cwd(), 'public');
  const filePath = join(PUBLIC_DIR, 'sitemap.xml');
  writeFileSync(filePath, xml, 'utf-8');

  // Also verify robots.txt exists
  const robotsPath = join(PUBLIC_DIR, 'robots.txt');
  if (!existsSync(robotsPath)) {
    const robotsContent = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
    writeFileSync(robotsPath, robotsContent, 'utf-8');
  }

  return xml;
}
