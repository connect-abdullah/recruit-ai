'use client';

import { useCounter } from '@/hooks/useCounter';
import { dashboardElements } from '@/constraints/dashboard';

export default function Community() {
  const { count: brokersCount, ref: brokersRef } = useCounter(2500, 2000);
  const { count: satisfactionRate, ref: satisfactionRef } = useCounter(98, 1500);

  const communityStats = [
    {
      value: `${brokersCount.toLocaleString()}+`,
      label: 'Active Brokers',
      ref: brokersRef,
    },
    {
      value: `${satisfactionRate}%`,
      label: 'Satisfaction Rate',
      ref: satisfactionRef,
    },
  ];

  return (
    <section id="community" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Built for the
              <span className="block text-gray-600">Community</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
              Our platform thrives on collaboration. Recruiters, brokers, and AI work together 
              to create a network effect that benefits everyone in the ecosystem.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {communityStats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 sm:p-4 bg-gray-50 rounded-xl"
                  ref={stat.ref}
                >
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 sm:p-6 rounded-xl border border-gray-200">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Future Integration: AI Community Insights</h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Real-time community performance metrics, AI-powered matching suggestions, 
                collaborative workflow tools, and peer learning modules will be integrated here.
              </p>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-gray-100 via-white to-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-lg">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Community Dashboard</h3>
                <p className="text-gray-600 text-sm sm:text-base">Real-time collaboration metrics</p>
              </div>
              
              {/* Mock Dashboard */}
              <div className="space-y-3 sm:space-y-4">
                {dashboardElements.map((element) => (
                  <div
                    key={element.title}
                    className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border border-gray-100"
                  >
                    <div className="flex items-center space-x-3 min-w-0 flex-1">
                      {element.icon}
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-900 text-sm sm:text-base truncate">{element.title}</div>
                        <div className="text-xs sm:text-sm text-gray-600">{element.subtitle}</div>
                      </div>
                    </div>
                    <div className={`text-lg sm:text-2xl font-bold ${element.valueClass} ml-2`}>{element.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 