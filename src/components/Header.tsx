'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/10 backdrop-blur-lg border-b border-white/20 supports-[backdrop-filter]:bg-white/[0.01]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/#" className="flex items-center hover:opacity-80 transition-opacity">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="Finchise Logo"
                width={32}
                height={32}
                className="w-auto h-8"
              />
              <span className={`text-lg font-medium tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>Finchise</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#features" className={`hover:text-gray-900 font-normal text-sm transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-700'}`}>
              Product
            </a>
            <a href="/#features" className={`hover:text-gray-900 font-normal text-sm transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-700'}`}>
              Features
            </a>
            <a href="/#contact" className={`hover:text-gray-900 font-normal text-sm transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-700'}`}>
              Contact
            </a>
          </nav>

          {/* Sign In Button */}
          <div className="hidden md:flex items-center">
            <button 
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hover:text-gray-900 ${isScrolled ? 'text-gray-800' : 'text-gray-700'}`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg rounded-lg mt-2 border border-white/20">
              <a href="/#features" className="block px-3 py-2 text-base font-normal text-gray-800 hover:text-gray-900">
                Product
              </a>
              <a href="/#features" className="block px-3 py-2 text-base font-normal text-gray-800 hover:text-gray-900">
                Features
              </a>
              <a href="/#contact" className="block px-3 py-2 text-base font-normal text-gray-800 hover:text-gray-900">
                Contact
              </a>
              <div className="px-3 py-2">
                <button 
                  className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium text-sm"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 