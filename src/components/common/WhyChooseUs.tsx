import React from 'react';

interface Benefit {
  icon: JSX.Element;
  number: string;
  label: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    number: 'Fast',
    label: 'Development Process',
    description: 'Quick and efficient development with advanced workflows',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    number: '100%',
    label: 'Client Satisfaction',
    description: 'All our clients recommend our service',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    number: 'Fair',
    label: 'Transparent Pricing',
    description: 'Clear and honest pricing for every project type',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    number: '24/7',
    label: 'Support & Maintenance',
    description: 'Always available for any questions or issues',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="white"/>
        </svg>
      </div>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-blue-100/30 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-slideInFromTop">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Why Choose SeaApp
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            The Company That Turns Your Ideas Into Reality
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            We don't just develop applications - we build digital solutions that drive businesses forward
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 animate-fadeIn overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:to-primary-600/10 transition-all duration-500 rounded-3xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-3xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-primary-500/30">
                  {benefit.icon}
                </div>

                {/* Number */}
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {benefit.number}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-gray-800 mb-3">
                  {benefit.label}
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative line */}
                <div className="h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-sm border-2 border-white">
                  A.M
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold text-sm border-2 border-white">
                  Y.L
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-semibold text-sm border-2 border-white">
                  D.K
                </div>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">50+ Satisfied Clients</div>
                <div className="text-sm text-gray-600">Join our family</div>
              </div>
            </div>
            <a
              href="#contact"
              className="btn-primary px-8 py-3 text-lg font-semibold whitespace-nowrap"
            >
              Let's Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
