'use client';

import { useCounter } from '@/hooks/useCounter';

export default function Hero() {
  const { count: recruitersCount, ref: recruitersRef } = useCounter(10000, 2000);
  const { count: matchesCount, ref: matchesRef } = useCounter(50000000, 2500);
  const { count: successRate, ref: successRef } = useCounter(95, 1500);

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-white py-16 sm:py-24 lg:py-40 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(0_0_0_/_0.15)_1px,_transparent_0)] bg-[length:24px_24px] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Recruiting Without
            <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Limits.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 sm:mb-12 font-light tracking-wide">
            Speed and Scale.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-12 sm:mb-16 font-light px-4 sm:px-0">
              We&apos;re building a new model for recruitment. One that combines{" "}
              <span className="font-medium text-gray-900">revenue sharing</span>,{" "}
              <span className="font-medium text-gray-900">a marketing engine</span>,{" "}
              <span className="font-medium text-gray-900">a competitive broker community</span>, and{" "}
              <span className="font-medium text-gray-900">an AI-driven learning platform</span>.{" "}
              This is recruitment rewritten for the modern era.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
            <button className="w-full sm:w-auto group bg-black text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Join the Platform
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </button>
            <button className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto px-4 sm:px-0">
            <div className="text-center" ref={recruitersRef}>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {recruitersCount.toLocaleString()}+
              </div>
              <div className="text-sm sm:text-base text-gray-600">Active Recruiters</div>
            </div>
            <div className="text-center" ref={matchesRef}>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {matchesCount > 1000000 ? `${Math.floor(matchesCount / 1000000)}M+` : `${matchesCount.toLocaleString()}+`}
              </div>
              <div className="text-sm sm:text-base text-gray-600">Candidate Matches</div>
            </div>
            <div className="text-center" ref={successRef}>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {successRate}%
              </div>
              <div className="text-sm sm:text-base text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 