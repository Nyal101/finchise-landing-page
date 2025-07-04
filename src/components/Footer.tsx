'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.svg"
                alt="Finchise Logo"
                width={32}
                height={32}
                className="w-auto h-8"
              />
              <span className="text-lg font-medium text-gray-900 tracking-tight">Finchise</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md font-normal leading-relaxed">
              AI-powered accounting automation for franchisees. Streamline your financial operations 
              with intelligent document processing and seamless integrations.
            </p>
            <p className="text-sm text-gray-500 font-normal">
              © 2025 Finchise. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium text-black mb-4 uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#features" className="text-gray-600 hover:text-black font-normal text-sm transition-colors">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium text-black mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@finchise.ai" className="text-gray-600 hover:text-black font-normal text-sm transition-colors">
                  info@finchise.ai
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/finchise" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black font-normal text-sm transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 font-normal mb-4 md:mb-0">
            Launching September 2025
          </div>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="text-sm text-gray-500 hover:text-black font-normal transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-sm text-gray-500 hover:text-black font-normal transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 