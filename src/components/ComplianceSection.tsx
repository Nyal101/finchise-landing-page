export default function ComplianceSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            No compromises on process compliance.{' '}
            <span className="text-gray-500">
              Finchise integrates seamlessly into your franchise landscape and meets all necessary enterprise requirements.
            </span>
          </h2>
        </div>

        {/* Compliance Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Franchise Compliance */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-1">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-black rounded-full"></div>
                ))}
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Franchise-compliant processing of invoices</h3>
          </div>

          {/* Data Security */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <div className="grid grid-cols-6 gap-1">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-black rounded-full"></div>
                ))}
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Certified server infrastructure (SOC 2 & ISO 27001)</h3>
          </div>

          {/* Data Hosting */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <div className="relative">
                <div className="w-8 h-8 border-2 border-black rounded-full"></div>
                <div className="absolute top-2 left-2 w-4 h-4 bg-black rounded-full"></div>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Hosting in North America</h3>
          </div>

          {/* Privacy Compliance */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
                ))}
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Privacy-compliant</h3>
          </div>
        </div>
      </div>
    </section>
  );
} 