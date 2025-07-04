'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  rootMargin = '0px',
  threshold = 0.2,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // reveal only once
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={
        `${className} transition-opacity duration-700 ease-out ` +
        (isVisible ? 'animate-fade' : 'opacity-0 translate-y-6')
      }
    >
      {children}
    </div>
  );
} 