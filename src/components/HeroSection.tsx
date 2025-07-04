'use client';

export default function HeroSection() {
  const handleBookMeeting = () => {
    // Replace with your Calendly link
    window.open('https://calendly.com/your-link', '_blank');
  };

  return (
    <section className="relative bg-white py-20 lg:py-32 animate-fade">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-8 leading-tight tracking-tight">
            AI Accounting for<br />
            <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent drop-shadow-sm">franchisees</span>
            </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
            Transform your franchise operations with Finchise. Automating 70% of accounting and reporting 
            through AI-powered document processing, multi-location analytics, and franchise-specific insights.
          </p>

          {/* CTA Button */}
          <button 
            onClick={handleBookMeeting}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
          >
            Book a Meeting
          </button>

          {/* Coming Soon Notice */}
          <div className="mt-6">
            <p className="text-sm text-gray-500 font-normal">
              Launching September 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 