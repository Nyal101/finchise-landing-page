export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Y Combinator Badge */}
          <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-8">
            <div className="w-5 h-5 bg-orange-500 text-white rounded text-xs flex items-center justify-center font-bold">
              Y
            </div>
            <span className="text-orange-700 text-sm font-medium">Backed by Y Combinator</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight">
            AI Accounting for<br />
            <span className="text-gray-600">franchises</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Finchise automates up to 75% of franchise accounting — invoice verification,
            supplier communication, account assignment, approval, and ERP posting
            in one streamlined step.
          </p>

          {/* CTA Button */}
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium text-lg">
            Book a Meeting
          </button>

          {/* Coming Soon Notice */}
          <div className="mt-8">
            <p className="text-sm text-blue-600 font-semibold">
              Launching September 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 