'use client';

import Image from 'next/image';

export default function FranchiseLogos() {
  const franchises = [
    {
      name: 'Dominos',
      logo: '/assets/images/dominos-logo.jpg',
      width: 120,
      height: 60
    },
    {
      name: 'GDK',
      logo: '/assets/images/gdk-logo.jpeg',
      width: 100,
      height: 60
    },
    {
      name: 'Subway',
      logo: '/assets/images/subway-logo.jpg',
      width: 120,
      height: 60
    },
    {
      name: 'Fireaway',
      logo: '/assets/images/fireaway-logo.png',
      width: 140,
      height: 60
    }
  ];

  // Triple the array to ensure smooth infinite scroll
  const duplicatedFranchises = [...franchises, ...franchises, ...franchises];

  return (
    <section className="bg-gray-50 py-12 w-full">
      <div className="w-full px-6">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-500 mb-8">
            Designing with leading franchises
          </p>
          
          <div className="relative overflow-hidden">
            <div className="whitespace-nowrap animate-scroll">
              {duplicatedFranchises.map((franchise, index) => (
                <div 
                  key={`${franchise.name}-${index}`}
                  className="inline-flex items-center justify-center mx-12 align-middle"
                >
                  <div className="h-[60px] flex items-center">
                    <Image
                      src={franchise.logo}
                      alt={`${franchise.name} logo`}
                      width={franchise.width}
                      height={franchise.height}
                      className="max-w-full h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
} 