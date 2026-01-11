import { useEffect, useState } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '4s'}}></div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 md:py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 text-white px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 transition-all duration-700 hover:bg-white/10 hover:scale-105 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </div>
            <span className="text-xs md:text-sm font-semibold tracking-wide">Leading Digital Innovation</span>
          </div>

          {/* Main Title */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="block text-white mb-2">
              {title}
            </span>
            <span className="block bg-gradient-to-r from-primary-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              That Change The Game
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {subtitle}
          </p>

          {/* CTA Buttons */}
          {ctaText && onCtaClick && (
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <button 
                onClick={onCtaClick} 
                className="w-full sm:w-auto group relative bg-gradient-to-r from-primary-500 via-cyan-500 to-blue-500 text-white font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/50 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative">
                  {ctaText}
                </span>
              </button>
              
              <button className="w-full sm:w-auto group bg-white/5 backdrop-blur-xl border-2 border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-2xl transition-all duration-300 hover:scale-105">
                <a href="#process" className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  See How It Works
                </a>
              </button>
            </div>
          )}

          {/* Stats */}
          <div className={`mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto px-4 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 md:mb-2">50+</div>
              <div className="text-xs md:text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 md:mb-2">100%</div>
              <div className="text-xs md:text-sm text-gray-400">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 md:mb-2">24/7</div>
              <div className="text-xs md:text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-24" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
