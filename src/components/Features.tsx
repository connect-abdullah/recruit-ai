import { features } from "@/constraints/features";

export default function Features() {
  return (
    <section id="platform" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            The Future of
            <span className="block text-gray-600">Recruitment</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Four revolutionary pillars that redefine how talent meets opportunity in the modern era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="text-gray-900 mb-4 sm:mb-6 flex justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 sm:mt-20">
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Ready to transform your recruitment process?</p>
          <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
            Explore the Platform
          </button>
        </div>
      </div>
    </section>
  );
} 