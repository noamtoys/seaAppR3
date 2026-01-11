import React from 'react';
import { ProjectDetails } from './ProjectDetails';
import { StatsGrid } from '../common/StatsGrid';
import { Tag } from '../common/Tag';

export const GreenbrushProject: React.FC = () => {
  const stats = [
    {
      value: 'Up to 25%',
      label: 'Output Improvement',
      description: 'Regular cleaning improves panel efficiency and increases annual income',
    },
    {
      value: '15-20 min',
      label: 'Average Cleaning Time',
      description: 'Quick and efficient cleaning for a standard home system',
    },
    {
      value: '10+ Years',
      label: 'Market Experience',
      description: 'Rich experience in the solar energy field',
    },
    {
      value: 'Significant Savings',
      label: 'Cost Reduction',
      description: 'Self-cleaning reduces the need for external maintenance services',
    },
  ];

  const technologies = [
    'React',
    'TypeScript',
    'Vite',
    'Tailwind CSS',
    'REST API',
    'Responsive Design',
  ];

  return (
    <ProjectDetails
      title="Greenbrush - Cleaning Solutions for Solar Systems"
      description="Leading Israeli company in the field of cleaning and maintenance solutions for solar energy systems"
    >
      {/* Hero Visual Section with Logo */}
      <div className="mb-8 md:mb-12">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 p-6 md:p-12 lg:p-16">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 800 400">
              <defs>
                <pattern id="solar-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <rect x="10" y="10" width="60" height="60" fill="white" opacity="0.5" rx="4"/>
                  <line x1="15" y1="40" x2="65" y2="40" stroke="white" strokeWidth="2"/>
                  <line x1="40" y1="15" x2="40" y2="65" stroke="white" strokeWidth="2"/>
                </pattern>
              </defs>
              <rect width="800" height="400" fill="url(#solar-grid)"/>
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-1 text-white w-full">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-xl md:rounded-2xl flex items-center justify-center border-2 border-white/50 shadow-xl overflow-hidden flex-shrink-0">
                  <img 
                    src="/images/greenbrush/greenBrushs-logo.png" 
                    alt="Greenbrush Logo" 
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">Greenbrush</h3>
              </div>
              <p className="text-base md:text-xl lg:text-2xl mb-4 md:mb-6 text-green-50 leading-relaxed">
                Advanced cleaning solutions for solar systems - Maximize your energy output with smart maintenance
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                <span className="px-3 py-2 md:px-5 md:py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-semibold border border-white/30">Solar Energy</span>
                <span className="px-3 py-2 md:px-5 md:py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-semibold border border-white/30">Smart Maintenance</span>
                <span className="px-3 py-2 md:px-5 md:py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-semibold border border-white/30">10+ Years Experience</span>
              </div>
            </div>

            {/* Solar Panel Visualization */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-yellow-400 via-green-400 to-teal-400 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-50 animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-4 md:p-8 rounded-2xl md:rounded-3xl border-2 border-white/30">
                  <svg className="w-40 h-40 md:w-64 md:h-64" viewBox="0 0 200 200">
                    {/* Solar Panel Grid */}
                    {[0, 1, 2].map((row) => 
                      [0, 1, 2].map((col) => (
                        <g key={`${row}-${col}`}>
                          <rect
                            x={10 + col * 60}
                            y={10 + row * 60}
                            width="55"
                            height="55"
                            fill="url(#panelGradient)"
                            stroke="white"
                            strokeWidth="2"
                            rx="4"
                          />
                          <line
                            x1={15 + col * 60}
                            y1={37.5 + row * 60}
                            x2={60 + col * 60}
                            y2={37.5 + row * 60}
                            stroke="white"
                            strokeWidth="1"
                            opacity="0.5"
                          />
                          <line
                            x1={37.5 + col * 60}
                            y1={15 + row * 60}
                            x2={37.5 + col * 60}
                            y2={60 + row * 60}
                            stroke="white"
                            strokeWidth="1"
                            opacity="0.5"
                          />
                        </g>
                      ))
                    )}
                    
                    {/* Sun Icon */}
                    <circle cx="170" cy="30" r="20" fill="#FCD34D" opacity="0.9">
                      <animate attributeName="r" values="20;22;20" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <g stroke="#FCD34D" strokeWidth="3" strokeLinecap="round">
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                        const rad = (angle * Math.PI) / 180;
                        return (
                          <line
                            key={angle}
                            x1={170 + Math.cos(rad) * 25}
                            y1={30 + Math.sin(rad) * 25}
                            x2={170 + Math.cos(rad) * 32}
                            y2={30 + Math.sin(rad) * 32}
                            opacity="0.8"
                          />
                        );
                      })}
                    </g>

                    {/* Sparkles Effect */}
                    <circle cx="40" cy="170" r="3" fill="white" opacity="0.8">
                      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="100" cy="175" r="2" fill="white" opacity="0.6">
                      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="160" cy="170" r="3" fill="white" opacity="0.7">
                      <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.8s" repeatCount="indefinite"/>
                    </circle>

                    <defs>
                      <linearGradient id="panelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.9"/>
                        <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.9"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Screenshots Gallery */}
      <div className="mb-8 md:mb-12">
        <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center px-4">
          Digital Application - User Experience
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto px-4">
          <div className="group relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img 
              src="/images/greenbrush/greenBruhs-1.jpeg" 
              alt="Greenbrush Application - Dashboard" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h5 className="text-lg md:text-xl font-bold mb-1 md:mb-2">System Dashboard</h5>
              <p className="text-xs md:text-sm text-gray-200">User interface showing solar system management and performance tracking</p>
            </div>
          </div>
          
          <div className="group relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img 
              src="/images/greenbrush/greenBrush-2.jpeg" 
              alt="Greenbrush Application - Features" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h5 className="text-lg md:text-xl font-bold mb-1 md:mb-2">System Dashboard</h5>
              <p className="text-xs md:text-sm text-gray-200">User interface showing solar system management and performance tracking</p>
            </div>
          </div>
        </div>
      </div>

      {/* About the Company */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          About Greenbrush
        </h4>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Greenbrush is an Israeli company that specializes in standard washing solutions for solar systems of all
            types and sizes - small residential systems, medium systems on commercial roofs, and
            large solar installations.
          </p>
          <p>
            They have over a decade of experience in the solar energy field, including deep understanding of
            maintenance, cleaning and panel manufacturer requirements. They developed a dedicated brush and cleaning
            kits designed specifically for solar panels, so cleaning can be done easily, quickly
            and efficiently - while maintaining manufacturer warranty for years.
          </p>
          <p>
            Their solutions help solar system owners increase output and revenue from the system,
            save on external cleaning costs, and keep the system in good condition over time. The products
            are manufactured locally and adapted to the Israeli climate, dust, sand and humidity.
          </p>
        </div>
      </div>

      {/* Customer Benefits */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          What The Product Offers End Customers
        </h4>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-primary-600 text-xl">✓</span>
            <span>
              Self-cleaning of the solar system instead of relying only on external service companies
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-600 text-xl">✓</span>
            <span>Improved solar system output (less dust and dirt = more energy)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-600 text-xl">✓</span>
            <span>Time savings - relatively fast cleaning for any system</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-600 text-xl">✓</span>
            <span>
              Working with standard equipment that meets manufacturer guidelines and maintains panel warranty
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-600 text-xl">✓</span>
            <span>Customized solutions for residential, medium and large commercial systems</span>
          </li>
        </ul>
      </div>

      {/* What We Built */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          What We Built For Greenbrush
        </h4>
        <div className="bg-primary-50 rounded-xl p-6 mb-6">
          <p className="text-gray-800 leading-relaxed mb-4">
            Web system and digital application that creates transparency, guidance and measurement for Greenbrush customers,
            connecting the physical product (brush and washing kit) to an advanced digital user experience.
          </p>
        </div>

        {/* Visual Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Dashboard Card */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-100">
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            
            {/* Mini Dashboard Visualization */}
            <div className="mb-6 bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gray-500">System Output</span>
                <span className="text-xs font-bold text-green-600">+25%</span>
              </div>
              <div className="flex items-end gap-1 h-20">
                {[40, 55, 48, 70, 85, 78, 92].map((height, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-gradient-to-t from-green-500 to-green-400 rounded-t transition-all duration-300 group-hover:from-green-600 group-hover:to-green-500"
                    style={{height: `${height}%`}}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">Jan</span>
                <span className="text-xs text-gray-400">Jul</span>
              </div>
            </div>

            <h5 className="font-bold text-xl text-gray-900 mb-3">Dashboard for System Management</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>System information - size, panels, location</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Personalized cleaning recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Revenue calculation from maintenance</span>
              </li>
            </ul>
          </div>

          {/* Digital Guidance Card */}
          <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-100">
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Video Tutorial Visualization */}
            <div className="mb-6 bg-white rounded-xl p-4 shadow-md">
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg h-32 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                      <div className={`h-full bg-white ${i <= 2 ? 'w-full' : 'w-0'}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h5 className="font-bold text-xl text-gray-900 mb-3">Digital Guidance</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Step-by-step product usage instructions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Tutorial videos and visual guides</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Proper washing techniques</span>
              </li>
            </ul>
          </div>

          {/* Maintenance Journal Card */}
          <div className="group relative bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-teal-100">
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>

            {/* Calendar Visualization */}
            <div className="mb-6 bg-white rounded-xl p-4 shadow-md">
              <div className="grid grid-cols-7 gap-1">
                {['S','M','T','W','T','F','S'].map((day, i) => (
                  <div key={i} className="text-center text-xs font-semibold text-gray-400">{day}</div>
                ))}
                {Array.from({length: 28}, (_, i) => (
                  <div 
                    key={i} 
                    className={`aspect-square rounded flex items-center justify-center text-xs font-medium ${
                      [6, 13, 20, 27].includes(i) 
                        ? 'bg-gradient-to-br from-green-400 to-teal-400 text-white shadow-md' 
                        : 'bg-gray-50 text-gray-600'
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

            <h5 className="font-bold text-xl text-gray-900 mb-3">Maintenance Journal & Tracking</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Cleaning log documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Automatic cleaning reminders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Performance improvement tracking</span>
              </li>
            </ul>
          </div>

          {/* Store Integration Card */}
          <div className="group relative bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-orange-100">
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>

            {/* Store Visualization */}
            <div className="mb-6 bg-white rounded-xl p-4 shadow-md">
              <div className="space-y-2">
                {[
                  {name: 'Basic Kit', price: '$49', color: 'from-orange-400 to-orange-300'},
                  {name: 'Pro Kit', price: '$89', color: 'from-yellow-400 to-yellow-300'},
                  {name: 'Premium', price: '$149', color: 'from-amber-400 to-amber-300'}
                ].map((item, i) => (
                  <div key={i} className={`bg-gradient-to-r ${item.color} rounded-lg p-3 flex items-center justify-between transform group-hover:translate-x-1 transition-transform`}>
                    <span className="text-white font-semibold text-sm">{item.name}</span>
                    <span className="text-white font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <h5 className="font-bold text-xl text-gray-900 mb-3">Store & System Integration</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-0.5">✓</span>
                <span>Direct links to packages and upgrades</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-0.5">✓</span>
                <span>Easy purchase of additional kits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-0.5">✓</span>
                <span>CRM system integration</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legacy Text Content */}
        <div className="space-y-4 text-gray-700">
          <div>
            <h5 className="font-semibold text-lg mb-2 text-gray-900">
              Dashboard for Solar System Management
            </h5>
            <ul className="ml-6 space-y-2">
              <li className="list-disc">
                General information about the system - size, number of panels, geographic location
              </li>
              <li className="list-disc">
                Personalized recommendations - how many times a year cleaning is recommended based on location, climate conditions
                and system type
              </li>
              <li className="list-disc">
                Estimated calculation of additional annual revenue thanks to regular maintenance and cleaning
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-lg mb-2 text-gray-900">Digital Guidance</h5>
            <ul className="ml-6 space-y-2">
              <li className="list-disc">
                Detailed explanations on how to use the product - connecting the brush, opening the telescopic pole,
                proper washing techniques
              </li>
              <li className="list-disc">
                Tutorial videos and visual guides integrated in the application
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-lg mb-2 text-gray-900">
              Maintenance Journal and Tracking
            </h5>
            <ul className="ml-6 space-y-2">
              <li className="list-disc">
                Option to save a "cleaning log" - documenting dates when user performed cleaning
              </li>
              <li className="list-disc">Automatic reminders for next cleaning</li>
              <li className="list-disc">
                Tracking system performance and output improvement over time
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-lg mb-2 text-gray-900">
              Store and System Integration
            </h5>
            <ul className="ml-6 space-y-2">
              <li className="list-disc">
                Direct links to different packages and upgrade options
              </li>
              <li className="list-disc">Smooth transition to purchasing additional kits or spare parts</li>
              <li className="list-disc">
                Connection to CRM system for advanced customer service
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Business Outcomes */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
          Business Results
        </h4>
        <StatsGrid stats={stats} />
      </div>

      {/* Technologies */}
      <div className="mb-8">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Technologies Used In Project
        </h4>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <Tag key={tech} variant="primary">
              {tech}
            </Tag>
          ))}
        </div>
      </div>

      {/* Link to Website */}
      <div className="border-t border-gray-200 pt-8">
        <a
          href="https://www.greenbrush.co.il/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          <span>Visit Official Greenbrush Website</span>
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </ProjectDetails>
  );
};
