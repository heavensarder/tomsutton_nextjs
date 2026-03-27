import type { Metadata } from 'next';
import { generatePageMetadata, getSchemaMarkup } from '@/lib/seo-metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/boiler-servicing');
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const schema = await getSchemaMarkup('/boiler-servicing');
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
