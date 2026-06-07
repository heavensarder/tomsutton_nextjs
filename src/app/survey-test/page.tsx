import React from 'react';
import Script from 'next/script';
import { generatePageMetadata } from '@/lib/seo-metadata';

export async function generateMetadata() {
  return await generatePageMetadata('/survey-test');
}

export default function SurveyTestPage() {
  return (
    <main className="w-full min-h-screen pt-[80px]">
      <iframe 
        src="https://link.leadhero.ai/widget/survey/W24mC0pYziWccHT2Ygcu" 
        style={{ border: 'none', width: '100%', minHeight: '100vh' }} 
        scrolling="no" 
        id="W24mC0pYziWccHT2Ygcu"
        title="Survey Form"
      ></iframe>
      <Script src="https://link.leadhero.ai/js/form_embed.js" strategy="lazyOnload" />
    </main>
  );
}
