'use client';

import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimateProps {
  children: ReactNode;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleUp' | 'fadeIn';
  delay?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollAnimate({
  children,
  animation = 'fadeUp',
  delay = 0,
  className = '',
  threshold = 0.15,
}: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('scroll-animate-visible');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`scroll-animate scroll-animate-${animation} ${className}`}>
      {children}
    </div>
  );
}
