'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function FranchiseLogos() {
  const logosRef = useRef<HTMLUListElement>(null);

  const franchises = [
    {
      name: 'Dominos',
      logo: '/assets/images/dominos-logo.png',
      width: 100,
      height: 60
    },
    {
      name: 'GDK',
      logo: '/assets/images/gdk-logo.png',
      width: 100,
      height: 60
    },
    {
      name: 'Subway',
      logo: '/assets/images/subway-logo.png',
      width: 100,
      height: 60
    },
    {
      name: 'Fireaway',
      logo: '/assets/images/fireaway-logo.png',
      width: 100,
      height: 60
    },
    {
      name: 'Snap Fitness',
      logo: '/assets/images/snap-fitness-logo.png',
      width: 100,
      height: 60
    },
    {
      name: 'Costa Coffee',
      logo: '/assets/images/costa-logo.png',
      width: 100,
      height: 60
    }
  ];

  useEffect(() => {
    // Replicate the exact Alpine.js logic from the template
    const nextTick = () => {
      if (logosRef.current) {
        const ul = logosRef.current;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        if (ul.nextSibling) {
          (ul.nextSibling as HTMLElement).setAttribute('aria-hidden', 'true');
        }
      }
    };
    
    // Use setTimeout to replicate $nextTick behavior
    setTimeout(nextTick, 0);
  }, []);

  return (
    <section className="bg-gray-50 py-6 w-full">
      <div className="w-full px-6">
        
        {/* Logo Carousel animation - exact copy of template structure */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul 
            ref={logosRef} 
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            {franchises.map((franchise, index) => (
              <li key={index}>
                <Image
                  src={franchise.logo}
                  alt={`${franchise.name} logo`}
                  width={franchise.width}
                  height={franchise.height}
                  className="h-[22px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        </div>
        {/* End: Logo Carousel animation */}
        
      </div>
    </section>
  );
} 