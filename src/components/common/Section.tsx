import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = '',
  id,
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16 text-center">
            {title && (
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
