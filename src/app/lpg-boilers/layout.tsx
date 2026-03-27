import type { Metadata } from 'next';
import { generatePageMetadata, getSchemaMarkup } from '@/lib/seo-metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/lpg-boilers');
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const schema = await getSchemaMarkup('/lpg-boilers');
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
