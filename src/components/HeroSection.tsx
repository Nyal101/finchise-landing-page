'use client';

import BeamsBackground from '@/components/kokonutui/beams-background';

export default function HeroSection() {
  const handleBookMeeting = () => {
    // Replace with your Calendly link
    window.open('https://calendly.com/your-link', '_blank');
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden animate-fade">
      {/* BeamsBackground with custom styling */}
      <BeamsBackground 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"
        intensity="medium"
      />
      
      {/* Additional blue overlay to match your color scheme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0081CC]/3 via-transparent to-[#0081CC]/5"></div>
      
      {/* Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center pt-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-8 leading-tight tracking-tight">
              AI Accounting for<br />
              <span className="bg-gradient-to-r from-[#0081CC] via-blue-600 to-[#0081CC] bg-clip-text text-transparent drop-shadow-sm font-medium">franchisees</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
              Transform your franchise operations with Finchise. Automating 70% of accounting and reporting 
              through AI-powered document processing, multi-location analytics, and franchise-specific insights.
            </p>

            {/* CTA Button */}
            <button 
              onClick={handleBookMeeting}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book a Meeting
            </button>

            {/* Coming Soon Notice */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 font-normal">
                Launching September 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 

