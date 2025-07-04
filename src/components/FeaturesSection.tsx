export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            The intelligent solution for franchise accounting.{' '}
            <span className="text-gray-500">
              Finchise develops custom AI agents that work together like a team and serve as
              exclusive models tailored to your franchise operations.
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Automation Features */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold">Invoice Processing & Automation</h3>
            </div>
            
            <div className="bg-black rounded-xl p-6 text-white">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Recording of all documents</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Readout & Review</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>AI Vendor Communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Multi-location Management</span>
                </div>
              </div>
            </div>
          </div>

          {/* Accuracy & Review */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold">Readout & Review</h3>
            </div>
            
            <div className="bg-white border rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">RE 2025-0054</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>99% Readout Accuracy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Vendor Check</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Bank Account Check</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Compliance Check</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium text-lg">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
} 