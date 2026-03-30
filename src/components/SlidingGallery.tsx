'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

interface SlidingGalleryProps {
  images: string[];
}

export default function SlidingGallery({ images }: SlidingGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = useCallback((globalIndex: number) => {
    setActiveIndex(globalIndex);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setActiveIndex(prev => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  return (
    <>
      {/* Sliding Gallery Rows */}
      <div className="w-full lg:w-[50%] relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-50 to-gray-100 min-h-[400px] lg:min-h-[560px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-100 to-transparent z-20 pointer-events-none"></div>

        <div className="flex flex-col justify-center h-full gap-4 py-8">
          {[0, 1, 2, 3].map(row => {
            const offset = (row * 3) % images.length;
            const rowImages = [...images.slice(offset), ...images.slice(0, offset)];
            const direction = row % 2 === 0 ? 'gallery-row-left' : 'gallery-row-right';
            return (
              <div key={row} className={`flex gap-4 ${direction}`} style={{ width: 'max-content' }}>
                {[0, 1].map(set => (
                  <div key={set} className="flex gap-4">
                    {rowImages.map((src, i) => {
                      const globalIdx = (offset + i) % images.length;
                      return (
                        <button
                          key={`${set}-${i}`}
                          onClick={() => openLightbox(globalIdx)}
                          className="w-[200px] h-[130px] rounded-xl overflow-hidden shrink-0 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500 relative group/img cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ff5e14] focus:ring-offset-2"
                        >
                          <Image src={src} alt={`Gallery ${globalIdx + 1}`} fill sizes="200px" className="object-cover group-hover/img:brightness-110 transition-all duration-500" unoptimized />
                          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-all duration-300 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center" onClick={closeLightbox}>
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all z-50 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 text-white/70 font-bold text-sm tracking-widest z-50">
            {activeIndex + 1} / {images.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all z-50 hover:scale-110 group"
          >
            <svg className="w-7 h-7 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all z-50 hover:scale-110 group"
          >
            <svg className="w-7 h-7 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Main Image */}
          <div
            className="relative w-[90vw] h-[70vh] sm:w-[80vw] sm:h-[75vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`Gallery Image ${activeIndex + 1}`}
              fill
              className="object-contain rounded-2xl"
              sizes="80vw"
              priority
            />
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50 max-w-[90vw] overflow-x-auto pb-2 px-4">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
                className={`relative w-16 h-10 rounded-lg overflow-hidden shrink-0 transition-all duration-300 ${i === activeIndex ? 'ring-2 ring-[#ff5e14] scale-110 brightness-100' : 'opacity-50 hover:opacity-80'}`}
              >
                <Image src={src} alt={`Thumb ${i + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
