import type { Metadata } from 'next';
import { generatePageMetadata, getSchemaMarkup } from '@/lib/seo-metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/worcester-bosch-greenstar-ri-installation');
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const schema = await getSchemaMarkup('/worcester-bosch-greenstar-ri-installation');
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
