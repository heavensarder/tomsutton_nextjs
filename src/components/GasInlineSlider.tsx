"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gasSliderDefault } from '@/lib/defaultComponentsData';

export default function GasInlineSlider({ data }: { data?: any }) {
  const activeServices = data?.services || gasSliderDefault.services;
  
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
      // Only auto scroll on desktop where we have flex row
      const isDesktop = window.innerWidth >= 640;
      if (isDesktop && scrollContainerRef.current && !isHovered && !isDragging) {
        const delta = time - lastTime;
        // Adjust speed here (higher = faster)
        const step = 0.05 * delta;
        
        scrollContainerRef.current.scrollLeft += step;
        
        // Exact 1-array width math for seamless loop. We mapped it 4 times below.
        const totalWidth = scrollContainerRef.current.scrollWidth;
        const jumpWidth = totalWidth / 4;
        
        if (scrollContainerRef.current.scrollLeft >= jumpWidth * 2) {
          scrollContainerRef.current.scrollLeft -= jumpWidth;
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollContainerRef.current?.scrollLeft || 0;
  };
  
  const handleMouseLeave = () => { setIsDragging(false); setIsHovered(false); };
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  // Maps array 4 times so dragging has lots of leeway
  const displayServices = [...activeServices, ...activeServices, ...activeServices, ...activeServices];

  return (
    <div className="w-full relative overflow-hidden bg-slate-50 py-10 mt-6 border-y border-slate-100 shadow-[inset_0_4px_15px_rgba(0,0,0,0.02)] select-none" style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
      <div 
        ref={scrollContainerRef}
        className="grid grid-cols-1 gap-4 px-4 sm:flex sm:overflow-x-auto sm:gap-6 sm:py-2 sm:px-8 w-full sm:cursor-grab active:cursor-grabbing no-scrollbar scroll-smooth"
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
          // Hide duplicates on mobile since it's a grid!
          const isDuplicate = i >= activeServices.length;
          return (
            <div key={i} className={`items-center gap-4 bg-white rounded-2xl px-6 py-5 shadow-sm border border-slate-200/60 sm:min-w-[340px] sm:max-w-[340px] shrink-0 sm:hover:shadow-[0_10px_30px_-5px_rgba(255,94,20,0.15)] sm:hover:border-[#ff5e14]/30 sm:hover:-translate-y-1 transition-all duration-300 ${isDuplicate ? 'hidden sm:flex' : 'flex'}`}>
              <div className="w-[48px] h-[48px] rounded-xl bg-gradient-to-br from-[#ff5e14] to-[#ff8c42] flex items-center justify-center shrink-0 shadow-inner border border-orange-400">
                <svg className="w-[24px] h-[24px] text-white stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
              </div>
              <span className="font-bold text-slate-800 text-[1rem] leading-[1.3]">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
