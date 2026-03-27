// Script to generate SEO layout.tsx files for all page directories
// Run with: node scripts/generate-seo-layouts.mjs

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcAppDir = join(__dirname, '..', 'src', 'app');

const pages = [
  { dir: 'about', path: '/about' },
  { dir: 'contact', path: '/contact' },
  { dir: 'blog', path: '/blog' },
  { dir: 'our-reviews', path: '/our-reviews' },
  { dir: 'new-boilers', path: '/new-boilers' },
  { dir: 'new-boiler-installation-2', path: '/new-boiler-installation-2' },
  { dir: 'combi-boiler-installation', path: '/combi-boiler-installation' },
  { dir: 'boiler-breakdowns', path: '/boiler-breakdowns' },
  { dir: 'boiler-servicing', path: '/boiler-servicing' },
  { dir: 'boiler-maintenance-plans', path: '/boiler-maintenance-plans' },
  { dir: 'gas', path: '/gas' },
  { dir: 'heating', path: '/heating' },
  { dir: 'oil', path: '/oil' },
  { dir: 'nest-thermostat-installation', path: '/nest-thermostat-installation' },
  { dir: 'unvented-hot-water', path: '/unvented-hot-water' },
  { dir: 'online-boiler-quote', path: '/online-boiler-quote' },
  { dir: 'our-boiler-brands', path: '/our-boiler-brands' },
  { dir: 'lpg-boilers', path: '/lpg-boilers' },
  { dir: 'oil-boilers', path: '/oil-boilers' },
  { dir: 'alpha', path: '/alpha' },
  { dir: 'alpha-e-tec-plus', path: '/alpha-e-tec-plus' },
  { dir: 'alpha-e-tec-regular', path: '/alpha-e-tec-regular' },
  { dir: 'alpha-e-tec-system', path: '/alpha-e-tec-system' },
  { dir: 'alpha-evoke', path: '/alpha-evoke' },
  { dir: 'worcester-bosch', path: '/worcester-bosch' },
  { dir: 'worcester-bosch-4000-combi', path: '/worcester-bosch-4000-combi' },
  { dir: 'worcester-bosch-4000-system', path: '/worcester-bosch-4000-system' },
  { dir: 'worcester-bosch-8000-installation', path: '/worcester-bosch-8000-installation' },
  { dir: 'worcester-bosch-cdi-compact', path: '/worcester-bosch-cdi-compact' },
  { dir: 'worcester-bosch-greenstar-ri-installation', path: '/worcester-bosch-greenstar-ri-installation' },
  { dir: 'worcester-bosch-i-system', path: '/worcester-bosch-i-system' },
];

let created = 0;
let skipped = 0;

for (const page of pages) {
  const filePath = join(srcAppDir, page.dir, 'layout.tsx');
  
  // Check if layout.tsx already exists
  if (existsSync(filePath)) {
    console.log(`⚠️  SKIP: ${page.dir}/layout.tsx already exists`);
    skipped++;
    continue;
  }

  const content = `import type { Metadata } from 'next';
import { generatePageMetadata, getSchemaMarkup } from '@/lib/seo-metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('${page.path}');
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const schema = await getSchemaMarkup('${page.path}');
  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      )}
      {children}
    </>
  );
}
`;

  // Ensure directory exists
  const dir = dirname(filePath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  writeFileSync(filePath, content, 'utf-8');
  console.log(`✅ Created: ${page.dir}/layout.tsx`);
  created++;
}

console.log(`\\nDone! Created ${created} layout files, skipped ${skipped}.`);
