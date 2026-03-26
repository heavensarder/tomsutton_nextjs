'use client';

import { useEffect, useState, useRef } from 'react';

export default function QuoteComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    
    // Prevent duplicate injections in React Strict Mode which might cause flickering
    // Check if script already exists globally OR if the iframe has already built locally
    const existingScript = document.getElementById('truequote_script');
    const container = document.getElementById('truequote_container');
    
    // If the widget's iframe is already in the DOM from a previous fast-refresh/navigation, immediately halt loader.
    if (container && container.innerHTML.trim() !== '') {
       if (isMounted.current) setIsLoading(false);
       return;
    }

    // Deploy an observer to watch the target div. 
    // TrueQuote dynamically injects a massive iframe. When the nodes jump inside, hide the React spinner.
    let observer: MutationObserver | null = null;
    
    if (container) {
      observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.addedNodes.length > 0) {
            // Once the external API populates the DOM with the iFrame UI, disable loading flag securely.
            if (isMounted.current) setIsLoading(false);
            if (observer) observer.disconnect();
          }
        }
      });
      observer.observe(container, { childList: true, subtree: true });
    }

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'truequote_script';
      // Utilizing the raw WordPress exact script payload from Tom Sutton
      script.src = 'https://truequote.co.uk/quote/toms20200430071353/js';
      script.async = true;
      script.defer = true;
      // CRITICAL: Append precisely to our local layout container, NOT document.body!
      if (container) container.appendChild(script);
    } else {
      // If the script exists but container was empty, the script's global onload might have already fired elsewhere.
      // A fallback timeout just in case the observer misses it or the API hangs.
      setTimeout(() => {
         if (isMounted.current) setIsLoading(false);
      }, 2000);
    }

    return () => {
      isMounted.current = false;
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full relative min-h-[500px] lg:min-h-[700px] flex items-center justify-center bg-slate-50/50 rounded-3xl">
      
      {/* Interactive Loading Spinner UI */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-all duration-700 bg-white/80 backdrop-blur-md rounded-3xl ${
          isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#f38230] rounded-full border-t-transparent animate-spin"></div>
          {/* Pulsing inner dot */}
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
        <p className="mt-6 text-sm sm:text-[0.95rem] font-bold tracking-widest text-[#f38230] uppercase animate-pulse">
          Initializing Quote Engine...
        </p>
      </div>

      {/* Anchor container where the engine will natively build the widget */}
      <div 
        id="truequote_container" 
        className={`w-full h-full transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      ></div>
      
    </div>
  );
}
