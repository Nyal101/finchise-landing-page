import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main CTA Section */}
      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Join the automation<br />
            leaders with Finchise
          </h2>
          <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-8 py-4 rounded-full hover:from-red-600 hover:to-purple-600 transition-colors font-medium text-lg">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Finchise</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#product" className="hover:text-white">Product</Link></li>
                <li><Link href="#features" className="hover:text-white">Features</Link></li>
                <li><Link href="#compliance" className="hover:text-white">Compliance</Link></li>
                <li><Link href="#demo" className="hover:text-white">Request Demo</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="#about" className="hover:text-white">About Us</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#privacy" className="hover:text-white">Data Privacy</Link></li>
                <li><Link href="#imprint" className="hover:text-white">Imprint</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:info@finchise.ai" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li><Link href="#linkedin" className="hover:text-white">LinkedIn</Link></li>
              </ul>
            </div>
          </div>

          {/* Company Description */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-sm">F</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">finchise.</h4>
                <p className="text-gray-400 text-sm max-w-md">
                  At Finchise, our mission is to take the manual out of 
                  franchise accounting - with AI agents that learn your processes, 
                  not your data.
                </p>
              </div>
              <div className="text-right">
                <div className="w-16 h-16 bg-gray-800 rounded-lg mb-4"></div>
                <p className="text-gray-400 text-sm">© 2025 Finchise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 