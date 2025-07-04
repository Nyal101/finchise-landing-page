'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-semibold text-black">finchise.</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#product" className="text-gray-600 hover:text-black transition-colors">
              Product
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-black transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-black transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors font-medium">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 