'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function InfiniteReviewSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Drag to scroll states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const GOOGLE_REVIEW_LINK = "https://www.google.com/maps/place/Tom+Sutton+Heating/@50.7572451,-1.6704168,688m/data=!3m2!1e3!4b1!4m6!3m5!1s0x487383d967293ef5:0x722abc9b62d8ffc2!8m2!3d50.7572451!4d-1.6704168!16s%2Fg%2F11b5pjq4ng?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D";

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const scroll = (time: number) => {
      // Manage speed: 1 pixel roughly every 16ms
      if (!isPaused && !isDragging && containerRef.current) {
        const deltaTime = time - lastTime;
        if (deltaTime > 16) {
          const { scrollLeft, scrollWidth } = containerRef.current;
          
          // We've appended exactly 1 duplicate of the children. 
          // So the exact halfway point is scrollWidth / 2.
          if (scrollLeft >= scrollWidth / 2) {
            containerRef.current.scrollLeft = 0; // jump back to start seamlessly
          } else {
            containerRef.current.scrollLeft += 1; // smoothly increase
          }
          lastTime = time;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setHasDragged(false);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault(); // Prevents native drag behaviors
    setHasDragged(true);
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  // The actual review data
  const reviews = [
    {
      id: 1,
      name: "Sarah Williams",
      type: "Hampshire Resident",
      initials: "SW",
      bgFrom: "from-indigo-500",
      bgTo: "to-purple-600",
      text: "Unbelievable service. They replaced my entire boiler system in 48 hours. Completely transparent pricing and the engineers were incredibly respectful of my home."
    },
    {
      id: 2,
      name: "James Peterson",
      type: "New Build Owner",
      initials: "JP",
      bgFrom: "from-emerald-500",
      bgTo: "to-teal-600",
      text: "Tom and his team installed an air source heat pump for our new build. The technical knowledge they possess is unmatched and the system works flawlessly."
    },
    {
      id: 3,
      name: "Mark Davies",
      type: "Local Business Owner",
      initials: "MD",
      bgFrom: "from-orange-500",
      bgTo: "to-red-600",
      text: "The most reliable plumbing service in the county. Showed up exactly on time, fixed the issue immediately, and left the workspace perfectly clean. Highly recommended."
    }
  ];

  return (
    <div className="relative w-full overflow-hidden mt-8 lg:mt-12 overflow-x-hidden pt-4 pb-12">
      
      {/* Gradient edges for smooth entrance/exit */}
      <div className="absolute top-0 left-0 bottom-0 w-12 lg:w-40 bg-gradient-to-r from-[#0a0f1c] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 bottom-0 w-12 lg:w-40 bg-gradient-to-l from-[#0a0f1c] to-transparent z-20 pointer-events-none"></div>
      
      {/* The scrollable track */}
      <div 
        ref={containerRef}
        className={`flex w-full overflow-x-auto gap-6 lg:gap-8 px-4 no-scrollbar touch-pan-x transition-cursor ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseEnter={() => !isDragging && setIsPaused(true)}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar cleanly
      >
        
        {/* We map two identical instances of the cards to create the seamless infinite scroll. */}
        {[1, 2].map((loopIndex) => (
          <div key={loopIndex} className="flex gap-6 lg:gap-8 flex-shrink-0 pr-6 lg:pr-8">
            {reviews.map((r) => (
              <a 
                key={r.id} 
                href={GOOGLE_REVIEW_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => hasDragged && e.preventDefault()}
                draggable={false}
                className="w-[300px] md:w-[340px] lg:w-[420px] group flex-shrink-0 relative bg-[#131b2f]/80 backdrop-blur-sm border border-white/5 p-6 lg:p-8 rounded-[2rem] hover:bg-white/5 hover:border-white/20 transition-all duration-300 select-none block focus:outline-none focus:ring-2 focus:ring-[#ff5e14]/50"
              >
                <div className="absolute top-6 right-6 lg:top-8 lg:right-8 text-[#ff5e14] opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                </div>
                <div className="flex text-[#ffc107] gap-1 mb-6">
                  {[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                </div>
                <p className="text-white/90 text-[14px] lg:text-[15px] leading-relaxed mb-6 lg:mb-8 relative z-10 font-medium">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-slate-700/50 pt-6">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.bgFrom} ${r.bgTo} flex flex-shrink-0 items-center justify-center text-white font-bold`}>
                    {r.initials}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{r.name}</h4>
                    <p className="text-slate-500 text-xs mt-0.5">{r.type}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
      
      {/* Hide scrollbar injected style for webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
      
      {/* Action Link below marquee */}
      <div className="container mx-auto px-4 mt-8 text-center relative z-10">
        <a 
          href={GOOGLE_REVIEW_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white/5 hover:bg-[#ff5e14]/10 border border-white/10 hover:border-[#ff5e14]/50 text-white hover:text-white font-bold text-[13px] uppercase tracking-[0.15em] py-4 px-8 rounded-full transition-all duration-300 group shadow-[0_4px_20px_rgb(0,0,0,0.2)] hover:shadow-[#ff5e14]/20"
        >
          <span>Read All Verified Reviews</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-[#ff5e14]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </a>
      </div>

    </div>
  );
}
