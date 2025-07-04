'use client';

import ScrollReveal from '@/components/ScrollReveal';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white animate-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-black mb-6 leading-tight tracking-tight">
            Built for franchisees, by finance experts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Our platform is designed to handle the unique challenges of franchisee accounting,
            making your financial operations smoother and more efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <ScrollReveal>
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-black">Automated Processing</h3>
              <p className="text-gray-600 font-normal leading-relaxed">
                Automatically process and categorize franchisee invoices and financial documents
                with up to 98% accuracy.
              </p>
            </div>
          </ScrollReveal>

          {/* Feature 2 */}
          <ScrollReveal>
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-black">Seamless Integration</h3>
              <p className="text-gray-600 font-normal leading-relaxed">
                Connect with your existing accounting software and ERPs for a streamlined
                franchisee financial workflow.
              </p>
            </div>
          </ScrollReveal>

          {/* Feature 3 */}
          <ScrollReveal>
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 13l3 3 4-4 5 5" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-black">AI Analytics</h3>
              <p className="text-gray-600 font-normal leading-relaxed">
                Gain real-time insights with AI-powered analytics tailored to multi-location franchise operations.
              </p>
            </div>
          </ScrollReveal>

          {/* Removed Compliance Ready card as requested */}
        </div>

        {/* Removed Book a Demo button as per request */}
      </div>
    </section>
  );
} 