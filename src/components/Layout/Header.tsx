import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', section: 'home' },
    { label: 'Our Projects', section: 'projects' },
    { label: 'Contact Us', section: 'contact' },
  ];

  const handleMenuClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200' 
          : 'bg-white/70 backdrop-blur-md border-b border-gray-100/50'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => handleMenuClick('home')} className="flex items-center gap-0 group">
              <img 
                src="/images/company/imagelogSeaApp.png" 
                alt="SeaApp Logo" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xl font-black tracking-tight text-gray-900 group-hover:text-primary-600 transition-colors -ml-3">
                SeaApp
              </span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleMenuClick(item.section)}
                className="px-5 py-2 font-semibold text-sm text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all duration-200 rounded-lg"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleMenuClick('contact')} 
              className="ml-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
            >
              Let's Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-lg hover:bg-gray-100 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50 bg-white/95 backdrop-blur-xl">
            {menuItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleMenuClick(item.section)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-semibold transition-colors duration-200 rounded-lg"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleMenuClick('contact')}
              className="w-full mt-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all duration-200"
            >
              Let's Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
