'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  featured_image: string | null;
  category_name: string | null;
}

export default function BlogSlider({ posts }: { posts: BlogPost[] }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Auto-scroll loop
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();
    const slider = sliderRef.current;
    
    const renderLoop = (time: number) => {
      if (slider && !isPaused && !isDown) {
        const delta = time - lastTime;
        // Protect against massive delta spikes when tab is backgrounded
        if (delta < 50) {
          slider.scrollLeft += delta * 0.05; 
        }
        // Jump back to start if we've reached the duplicated content
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      lastTime = time;
      animationId = requestAnimationFrame(renderLoop);
    };
    
    animationId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isDown]);

  // SMART Wheel Translation (Strictly releases Vertical Scroll after 1 cycle)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    let hasReachedEnd = false;

    const handleWheel = (e: WheelEvent) => {
      const isDesktop = window.innerWidth >= 1024;
      // We only intercept pure vertical scroll
      if (!isDesktop || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; 
      
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      
      if (e.deltaY > 0 && slider.scrollLeft >= maxScrollLeft - 1) {
        hasReachedEnd = true;
        return; 
      }
      if (e.deltaY < 0 && slider.scrollLeft <= 1) {
        return; 
      }

      if (hasReachedEnd && e.deltaY < 0) hasReachedEnd = false;
      
      if (!hasReachedEnd) {
        e.preventDefault();
        slider.scrollLeft += e.deltaY;
      }
    };
    
    slider.addEventListener('wheel', handleWheel, { passive: false });
    return () => slider.removeEventListener('wheel', handleWheel);
  }, []);

  // Mouse handlers for dragging
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    setIsDragging(false);
    if (!sliderRef.current) return;
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };
  const onMouseLeave = () => { setIsDown(false); setIsPaused(false); };
  const onMouseUp = () => { setIsDown(false); };
  const onMouseEnter = () => setIsPaused(true);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    sliderRef.current.scrollLeft = scrollLeftState - walk;
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
  };

  // Touch handlers for mobile/tablets
  const onTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setIsDown(true);
    if (!sliderRef.current) return;
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };
  const onTouchEnd = () => {
    setIsDown(false);
    setTimeout(() => setIsPaused(false), 2000);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDown || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <div className="w-full relative group my-2">
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Left/Right Fade Multipliers */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none"></div>

      <div 
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        className="flex overflow-x-auto hide-scrollbar px-6 sm:px-16 items-stretch pb-8 cursor-grab active:cursor-grabbing w-full gap-4 sm:gap-6"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* Render 3 copies of posts for infinite seamless loop effect */}
        {[...posts, ...posts, ...posts].map((post, index) => (
          <Link 
            href={`/blog/${post.slug}`} 
            key={`${post.slug}-${index}`} 
            onClick={(e) => { if (isDragging) e.preventDefault(); }}
            className="flex-shrink-0 w-[85vw] sm:w-[320px] lg:w-[380px] group bg-white rounded-3xl shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] transition-all duration-500 h-full select-none"
            draggable="false"
          >
            {/* Image Frame */}
            <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden pointer-events-none">
              {post.featured_image ? (
                <Image 
                  src={post.featured_image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  unoptimized
                  draggable="false"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100/50">
                  <svg className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              {post.category_name && (
                <div className="absolute bottom-4 left-4 z-10 w-[calc(100%-2rem)]">
                  <span className="inline-block px-3 py-1 bg-[#ff5e14] text-white text-[10px] sm:text-xs font-black tracking-widest uppercase rounded shadow-md backdrop-blur-sm">
                    {post.category_name}
                  </span>
                </div>
              )}
            </div>
            
            {/* Content Frame */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 pointer-events-none">
              <p className="text-slate-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-3">
                {new Date(post.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
              </p>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-[1.3] mb-4 group-hover:text-[#1d4ed8] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-5 border-t border-slate-50 flex items-center">
                <span className="text-xs font-black text-[#1d4ed8] tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                  READ ARTICLE
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
