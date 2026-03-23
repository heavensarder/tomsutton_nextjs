'use client';

import React, { useEffect, useRef, useState } from 'react';

const WIDGET_SCRIPT_PATH = "https://reviews.beaver.codes/widget/web-google-reviews.js";
const INSTANCE_ID = "KkqJVOCuxuL4NL2hFBQw";

export default function ReviewWidget() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;
    
    const SCRIPT_ID = "beaver-google-reviews-script";
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    
    // Singleton Script Injection Guarantee: Prevent duplicate external payload execution.
    // If multiple ReviewWidget parallel rows layout simultaneously, only attach the script once.
    // The external payload is programmed to scan the entirely global DOM matrix and will
    // automatically map its iframes into ALL identically marked data-instance-id elements synchronously.
    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.async = true;
      script.src = WIDGET_SCRIPT_PATH;
      // The widget fundamentally requires its immediate parent node to possess the 
      // data-instance-id attribute to initialize its pipeline correctly.
      mountRef.current.appendChild(script);
    }

    // Deploy an aggressive MutationObserver strictly bound to this DOM node to detect when the
    // 3rd-party script finally finishes downloading and injects its widget payload.
    // The moment a non-script child is attached, natively unmount the Loading layout.
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          Array.from(mutation.addedNodes).forEach((node) => {
            if (node.nodeName !== 'SCRIPT') {
              setIsLoading(false);
              observer.disconnect();
            }
          });
        }
      }
    });

    observer.observe(mountRef.current, { childList: true });

    return () => {
      observer.disconnect();
      // Aggressive Strict-Mode Ghost Node Cleanup: Wipe the entire DOM node contents 
      if (mountRef.current) {
        mountRef.current.innerHTML = '';
      }
      
      // Cleanup the global singleton execution script when the user routes to a non-review page,
      // enabling the plugin to cleanly reboot and rescan the DOM upon return.
      setTimeout(() => {
        const survivingWidgets = document.querySelectorAll(`[data-instance-id="${INSTANCE_ID}"]`);
        if (survivingWidgets.length === 0) {
          const globalScript = document.getElementById(SCRIPT_ID);
          if (globalScript) {
            globalScript.remove();
          }
        }
      }, 50);
    };
  }, []);

  return (
    <div className="w-full relative min-h-[260px]">
      
      <style dangerouslySetInnerHTML={{__html: `
        /* Overrides to force Google Reviews text to be visible on our white background */
        [data-instance-id="${INSTANCE_ID}"] p,
        [data-instance-id="${INSTANCE_ID}"] span,
        [data-instance-id="${INSTANCE_ID}"] div,
        [data-instance-id="${INSTANCE_ID}"] h1,
        [data-instance-id="${INSTANCE_ID}"] h2,
        [data-instance-id="${INSTANCE_ID}"] h3,
        [data-instance-id="${INSTANCE_ID}"] h4,
        [data-instance-id="${INSTANCE_ID}"] a {
          color: #0f172a !important; 
          text-shadow: none !important;
          line-height: 1.2 !important; /* Neutralize Tailwind margins to fully resolve cropping safely */
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
        
        /* Fix crushed/missing avatar images caused by Tailwind collapsing empty flex-items */
        [data-instance-id="${INSTANCE_ID}"] img {
          display: inline-block !important;
          width: 48px !important;
          height: 48px !important;
          min-width: 48px !important;
          min-height: 48px !important;
          max-width: 48px !important;
          border-radius: 50% !important;
          object-fit: cover !important;
          background-color: #e2e8f0 !important;
          vertical-align: middle !important;
        }

        /* Ensure stars remain their original color */
        [data-instance-id="${INSTANCE_ID}"] svg,
        [data-instance-id="${INSTANCE_ID}"] svg * {
          color: unset !important;
        }

        /* HARD FLIP ENTIRE WIDGET (Reversing its internal closed-source slide direction physically) */
        .reverse-widget-container [data-instance-id="${INSTANCE_ID}"] {
          transform: scaleX(-1) !important;
        }

        /* COUNTER-FLIP CONTENT NODES (Restoring text legibility entirely while the track slides backwards) */
        .reverse-widget-container [data-instance-id="${INSTANCE_ID}"] p,
        .reverse-widget-container [data-instance-id="${INSTANCE_ID}"] span,
        .reverse-widget-container [data-instance-id="${INSTANCE_ID}"] a,
        .reverse-widget-container [data-instance-id="${INSTANCE_ID}"] h1,
        .reverse-widget-container [data-instance-id="${INSTANCE_ID}"] h2,
        .reverse-widget-container [data-instance-id="${INSTANCE_ID}"] h3,
        .reverse-widget-container [data-instance-id="${INSTANCE_ID}"] h4,
        .reverse-widget-container [data-instance-id="${INSTANCE_ID}"] img,
        .reverse-widget-container [data-instance-id="${INSTANCE_ID}"] svg {
          transform: scaleX(-1) !important;
          text-align: left !important;
        }
      `}} />

      {/* Strict Ref Injection Point */}
      <div 
        ref={mountRef} 
        data-instance-id={INSTANCE_ID}
        className="w-full relative min-h-[260px] flex items-center justify-center transition-all duration-300"
      >
        {/* State-Driven Loading Skeleton Array */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 animate-pulse z-0 pointer-events-none">
            <svg className="w-8 h-8 mb-4 text-[#3b82f6]/40 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-[0.75rem] font-bold tracking-[0.2em] uppercase text-slate-400/80">
              Syncing Live Reviews...
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
