import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const ProcessSteps: React.FC = () => {
  const getIcon = (iconName: string) => {
    const icons: Record<string, JSX.Element> = {
      users: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      clipboard: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      code: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      rocket: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    };
    return icons[iconName] || icons.users;
  };

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery Meeting',
      description: 'We meet to understand your needs, vision and goals. We listen carefully and propose appropriate solutions.',
      icon: 'users'
    },
    {
      number: '02',
      title: 'Planning & Design',
      description: 'We build a detailed work plan, design the interface and define all necessary features.',
      icon: 'clipboard'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Our professional team starts developing the application while maintaining ongoing communication and updates.',
      icon: 'code'
    },
    {
      number: '04',
      title: 'Testing & Launch',
      description: 'We conduct comprehensive testing, fix bugs and launch the application. We\'re here even after launch!',
      icon: 'rocket'
    }
  ];

  return (
    <div id="process" className="py-16 md:py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-3 md:mb-4">
            <span className="bg-primary-100 text-primary-700 px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-bold">
              <svg className="w-3 h-3 md:w-4 md:h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Our Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            How It Works?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            A simple and transparent process - from idea to launch
          </p>
        </div>

        {/* Flow Chart Design */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop Flow Chart - Hidden on Mobile */}
          <div className="hidden lg:block relative">
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#3B82F6" />
                </marker>
              </defs>
              <path d="M 240 120 L 480 120" stroke="#3B82F6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
              </path>
              <path d="M 720 120 L 960 120" stroke="#3B82F6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
              </path>
              <path d="M 1200 120 L 1440 120" stroke="#3B82F6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
              </path>
            </svg>
            
            <div className="grid grid-cols-4 gap-12 relative" style={{ zIndex: 1 }}>
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-primary-200 hover:border-primary-400 hover:-translate-y-3 hover:scale-105">
                    {/* Number Badge with Glow */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                        <div className="relative w-14 h-14 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center text-white font-black text-xl shadow-2xl border-4 border-white">
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Icon Container */}
                    <div className="mt-8 mb-6 flex justify-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary-50 to-blue-100 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        {getIcon(step.icon)}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-center text-sm">
                      {step.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Flow Chart - Vertical */}
          <div className="lg:hidden relative">
            {/* Vertical Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-blue-400 to-primary-300 rounded-full"></div>
            
            <div className="space-y-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative pl-20">
                  {/* Number Badge */}
                  <div className="absolute left-0 top-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-500 rounded-full blur-md opacity-50"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center text-white font-black text-lg shadow-xl border-4 border-white z-10">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-100 hover:border-primary-300 transition-all">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-50 to-blue-100 rounded-2xl flex items-center justify-center shadow-md">
                        {getIcon(step.icon)}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg">
            Ready to start the journey?
          </p>
          <a href="#contact" className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white font-bold text-base md:text-lg px-8 md:px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform inline-flex items-center justify-center gap-3">
            <span>Let's Get Started</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l-5 5 5 5" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
