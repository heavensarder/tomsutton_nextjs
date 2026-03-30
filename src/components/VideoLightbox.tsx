'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function VideoLightbox({ videoId, thumbnailUrl, title }: { videoId: string; thumbnailUrl?: string; title?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const thumb = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <>
      {/* Thumbnail with Play Button */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_12px_30px_-8px_rgba(0,0,0,0.15)] group/vid cursor-pointer"
      >
        <Image
          src={thumb}
          alt={title || 'Video thumbnail'}
          fill
          className="object-cover group-hover/vid:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/30 group-hover/vid:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ff5e14] flex items-center justify-center shadow-xl group-hover/vid:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setIsOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-50 group"
          >
            <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Video Container */}
          <div
            className="w-[90vw] max-w-[1000px] aspect-video rounded-2xl overflow-hidden shadow-2xl animate-[scaleIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={title || 'Video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
