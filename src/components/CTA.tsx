export default function CTA() {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform
            <span className="block text-gray-300">Your Recruitment?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
            Join thousands of recruitment professionals who are already experiencing 
            the future of talent acquisition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0">
            <button className="w-full sm:w-auto group bg-white text-black px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Free Trial
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
              Schedule Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-400 text-xs sm:text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">SOC2</div>
              <div className="text-gray-400 text-xs sm:text-sm">Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">99.9%</div>
              <div className="text-gray-400 text-xs sm:text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">14 Days</div>
              <div className="text-gray-400 text-xs sm:text-sm">Free Trial</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 