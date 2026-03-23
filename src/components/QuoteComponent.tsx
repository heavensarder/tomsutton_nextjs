'use client';

import { useEffect } from 'react';

export default function QuoteComponent() {
  useEffect(() => {
    // Prevent duplicate injections in React Strict Mode
    if (document.getElementById('truequote_script')) return;

    const script = document.createElement('script');
    script.id = 'truequote_script';
    // Utilizing the raw WordPress exact script payload
    script.src = 'https://truequote.co.uk/quote/toms20200430071353/js';
    script.async = true;
    script.defer = true;

    // CRITICAL: Append precisely to our local layout container, NOT the global document.body!
    // This stops the widget from spawning down below the website footer.
    const container = document.getElementById('truequote_container');
    if (container) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full relative min-h-[500px]">
      {/* Anchor container where the engine will build the widget */ }
      <div id="truequote_container" className="w-full h-full"></div>
    </div>
  );
}
