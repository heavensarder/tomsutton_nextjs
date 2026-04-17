"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function HeatingServiceSlider({ data }: { data?: any }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Auto-scroll loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const scroll = (time: number) => {
      // Only run auto-scroll if it's rendered as a flex row (desktop)
      const isDesktop = window.innerWidth >= 1024;
      
      if (isDesktop && scrollContainerRef.current && !isHovered && !isDragging) {
        // Delta time makes the speed consistent regardless of framerate
        const delta = time - lastTime;
        // Pixel step per millisecond (approx 60px per second)
        const step = 0.06 * delta; 
        
        scrollContainerRef.current.scrollLeft += step;
        
        // Exact 1-array width math for seamless loop
        // We rendered the array 3 times. If we scroll exactly 1 array width, we snap back seamlessly.
        const scrollWidth = scrollContainerRef.current.scrollWidth;
        const oneThird = scrollWidth / 3;
        
        if (scrollContainerRef.current.scrollLeft >= oneThird * 1.5) {
          scrollContainerRef.current.scrollLeft -= oneThird;
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (window.innerWidth < 1024) return;
    setIsDragging(true);
    startX.current = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollContainerRef.current?.scrollLeft || 0;
  };
  const handleMouseLeave = () => { setIsDragging(false); setIsHovered(false); };
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || window.innerWidth < 1024) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  // We duplicate the services 3 times total so manual dragging in either direction won't easily hit a wall
  const heatingServices = data?.services || [];
  const displayServices = [...heatingServices, ...heatingServices, ...heatingServices];

  return (
    <div className="w-full relative py-8 px-4 sm:px-6 lg:px-0 lg:max-w-none max-w-[1250px] mx-auto">
      {/* Fade Overlays only visible on desktop slider */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#f4f6f8] to-transparent z-10 pointer-events-none"></div>
      <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#f4f6f8] to-transparent z-10 pointer-events-none"></div>
      
      <div 
        ref={scrollContainerRef}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full lg:flex lg:flex-row lg:overflow-x-auto no-scrollbar lg:py-6 lg:cursor-grab lg:active:cursor-grabbing select-none lg:pl-16 lg:pr-24"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {displayServices.map((item, i) => {
          const isDuplicate = i >= heatingServices.length;
          return (
            <div 
              key={i} 
              className={`flex-col items-start bg-white rounded-2xl p-5 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-slate-100/60 hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.1)] hover:border-orange-200 transition-all duration-300 group lg:flex-shrink-0 lg:w-[320px] ${isDuplicate ? 'hidden lg:flex' : 'flex'}`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff5e14]/10 to-[#ff8c42]/10 flex items-center justify-center shrink-0 mb-4 group-hover:from-[#ff5e14] group-hover:to-[#ff8c42] group-hover:shadow-lg group-hover:shadow-[#ff5e14]/30 transition-all duration-300">
                <svg className="w-6 h-6 text-[#ff5e14] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d={item.icon} />
                </svg>
              </div>
              
              <h3 className="font-extrabold text-slate-800 text-[1.1rem] mb-2 leading-snug group-hover:text-[#ff5e14] transition-colors">{item.title}</h3>
              <p className="font-medium text-slate-500 text-[0.95rem] leading-[1.6]">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
