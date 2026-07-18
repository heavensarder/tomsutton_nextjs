import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/animations.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { SiteSettingsProvider } from "@/components/SiteSettingsProvider";
import { getSiteSettings } from "@/lib/site-settings-server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tom Sutton Heating | Boiler Installation, Servicing & Repairs | New Forest",
  description: "Tom Sutton Heating provides expert boiler installation, servicing, repairs and heating solutions across Lymington, New Milton, Highcliffe, Christchurch and the New Forest. Gas Safe registered. Call 01590 631671.",
};

export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href={settings.site_favicon || 'https://i.postimg.cc/X7skSxGn/favicon.png'} />
        <link rel="apple-touch-icon" href={settings.site_favicon || 'https://i.postimg.cc/X7skSxGn/favicon.png'} />
        {(() => {
          if (!settings.custom_header_code) return null;
          
          let trimmed = settings.custom_header_code.trim();
          let isJson = false;
          
          // Check if it's raw JSON (like schema markup)
          if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
            try {
              JSON.parse(trimmed);
              isJson = true;
            } catch (e) {}
          }

          if (isJson) {
            return (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: trimmed }}
              />
            );
          }
          
          // If it contains script tags or other HTML, use the injection hack
          return <script dangerouslySetInnerHTML={{ __html: `</script>${settings.custom_header_code}<script>` }} />;
        })()}
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <SiteSettingsProvider settings={settings}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </SiteSettingsProvider>
      </body>
    </html>
  );
}
