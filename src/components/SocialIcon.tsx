'use client';

import React from 'react';
import type { SocialPlatformId } from '@/lib/site-settings';

const SOCIAL_HOVER_CLASSES: Record<SocialPlatformId, { topbar: string; mobile: string; footer: string }> = {
  facebook: {
    topbar: 'hover:bg-[#1877F2]',
    mobile: 'hover:bg-[#1877F2]',
    footer: 'hover:bg-[#1877F2]',
  },
  linkedin: {
    topbar: 'hover:bg-[#0A66C2]',
    mobile: 'hover:bg-[#0A66C2]',
    footer: 'hover:bg-[#0A66C2]',
  },
  twitter: {
    topbar: 'hover:bg-[#1DA1F2]',
    mobile: 'hover:bg-[#1DA1F2]',
    footer: 'hover:bg-[#1DA1F2]',
  },
  instagram: {
    topbar: 'hover:bg-[#E4405F]',
    mobile: 'hover:bg-[#E4405F]',
    footer: 'hover:bg-[#E4405F]',
  },
  youtube: {
    topbar: 'hover:bg-[#FF0000]',
    mobile: 'hover:bg-[#FF0000]',
    footer: 'hover:bg-[#FF0000]',
  },
};

export function SocialIconSvg({ id, className }: { id: SocialPlatformId; className?: string }) {
  switch (id) {
    case 'facebook':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.582 6.186c-.23-.86-.908-1.538-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418c.86-.23 1.538-.908 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM9.999 15.5v-7l6.5 3.5-6.5 3.5z" />
        </svg>
      );
    default:
      return null;
  }
}

export function SocialLink({
  id,
  url,
  label,
  variant,
}: {
  id: SocialPlatformId;
  url: string;
  label: string;
  variant: 'topbar' | 'mobile' | 'footer';
}) {
  const hoverClass = SOCIAL_HOVER_CLASSES[id]?.[variant] || 'hover:bg-slate-700';

  if (variant === 'topbar') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`w-8 h-8 bg-white border border-gray-200 text-blue-900 rounded-full flex items-center justify-center ${hoverClass} hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg transition-all duration-300 group`}
      >
        <SocialIconSvg id={id} className="w-3.5 h-3.5 fill-current" />
      </a>
    );
  }

  if (variant === 'mobile') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`w-10 h-10 bg-white border border-gray-200 shadow-sm text-[#1e3a8a] rounded-full flex items-center justify-center ${hoverClass} hover:text-white hover:border-transparent transition-all duration-300`}
      >
        <SocialIconSvg id={id} className="w-4 h-4 fill-current" />
      </a>
    );
  }

  // variant === 'footer'
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`w-9 h-9 rounded-full bg-white/10 flex items-center justify-center ${hoverClass} hover:text-white transition-colors text-white`}
    >
      <SocialIconSvg id={id} className="w-[18px] h-[18px] fill-current" />
    </a>
  );
}
