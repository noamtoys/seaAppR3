import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 relative">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full transform -translate-y-full">
        <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#111827" fillOpacity="1"/>
        </svg>
      </div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Company Info - Takes more space */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-0 mb-6">
              <img 
                src="/images/company/imagelogSeaApp.png" 
                alt="SeaApp Logo" 
                className="h-14 w-auto"
              />
              <h3 className="text-2xl font-black text-white -ml-3">SeaApp</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Advanced application development and digital solutions company.<br />
              We turn ideas into impressive digital reality.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:050-123-4567" className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>050-123-4567</span>
              </a>
              <a href="mailto:info@seaapp.co.il" className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@seaapp.co.il</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Israel</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-white">Site Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-bold mb-6 text-white">Ready to Start?</h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Let's talk about your next project and see how we can help
            </p>
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              Let's Talk
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} All rights reserved to <span className="text-primary-400 font-bold">SeaApp</span>
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Accessibility
              </a>
              <span className="text-gray-700">|</span>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
