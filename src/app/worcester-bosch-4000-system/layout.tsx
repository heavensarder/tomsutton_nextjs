import type { Metadata } from 'next';
import { generatePageMetadata, getSchemaMarkup } from '@/lib/seo-metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/worcester-bosch-4000-system');
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const schema = await getSchemaMarkup('/worcester-bosch-4000-system');
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
