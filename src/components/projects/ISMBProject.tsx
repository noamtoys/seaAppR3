import React from 'react';
import { ProjectDetails } from './ProjectDetails';
import { StatsGrid } from '../common/StatsGrid';
import { Tag } from '../common/Tag';

export const ISMBProject: React.FC = () => {
  const stats = [
    {
      value: '2020',
      label: 'Year Established',
      description: 'Founded to serve safety officers across Israel',
    },
    {
      value: '1000+',
      label: 'Active Members',
      description: 'Safety officers registered and actively participating',
    },
    {
      value: '50+',
      label: 'Annual Seminars',
      description: 'Professional development events and training days',
    },
    {
      value: '24/7',
      label: 'Digital Access',
      description: 'Round-the-clock access to resources and systems',
    },
  ];

  const technologies = [
    'React',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'REST API',
    'Responsive Design',
    'Authentication',
    'CMS',
  ];

  return (
    <ProjectDetails
      title="Israeli Safety Officers Chamber (ISMB)"
      description="Digital platform for Israel's leading professional association of safety officers - connecting, educating, and empowering workplace safety professionals nationwide"
    >
      {/* Hero Visual Section */}
      <div className="mb-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 p-8 md:p-16">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 800 400">
              <defs>
                <pattern id="safety-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="20" fill="none" stroke="white" strokeWidth="2"/>
                  <path d="M30 15 L30 45 M15 30 L45 30" stroke="white" strokeWidth="2"/>
                </pattern>
              </defs>
              <rect width="800" height="400" fill="url(#safety-grid)"/>
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-white">
              <div className="mb-6">
                <img 
                  src="/images/ismb/ismb_logo.82ac18b5cd625063c620.png" 
                  alt="ISMB Logo" 
                  className="h-24 md:h-32 w-auto mb-4 drop-shadow-2xl"
                />
                <h3 className="text-3xl md:text-4xl font-bold drop-shadow-lg">Israeli Safety Officers Chamber</h3>
              </div>
              <p className="text-xl md:text-2xl mb-2 text-blue-50 leading-relaxed font-semibold">
                Israeli Safety Officers Chamber
              </p>
              <p className="text-lg md:text-xl mb-6 text-blue-100 leading-relaxed">
                "Together we will do and succeed" - The professional home for safety officers in Israel, providing training, resources, and community support
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">Professional Association</span>
                <span className="px-5 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">Digital Platform</span>
                <span className="px-5 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">Since 2020</span>
              </div>
            </div>

            {/* Safety Shield Visualization */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/30">
                  <svg className="w-64 h-64" viewBox="0 0 200 200">
                    {/* Main Shield */}
                    <path 
                      d="M100 20 L160 40 L160 90 C160 130 130 160 100 180 C70 160 40 130 40 90 L40 40 Z" 
                      fill="url(#shieldGradient)"
                      stroke="white"
                      strokeWidth="3"
                    />
                    
                    {/* Inner Shield Detail */}
                    <path 
                      d="M100 40 L145 55 L145 95 C145 125 122.5 147.5 100 162.5 C77.5 147.5 55 125 55 95 L55 55 Z" 
                      fill="url(#innerShieldGradient)"
                      opacity="0.7"
                    />
                    
                    {/* Checkmark */}
                    <path 
                      d="M75 95 L90 110 L125 70" 
                      stroke="white"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    
                    {/* Stars */}
                    {[{x: 70, y: 50, delay: 0}, {x: 130, y: 50, delay: 0.5}, {x: 100, y: 150, delay: 1}].map((star, i) => (
                      <circle 
                        key={i}
                        cx={star.x} 
                        cy={star.y} 
                        r="3" 
                        fill="white" 
                        opacity="0.8"
                      >
                        <animate 
                          attributeName="opacity" 
                          values="0.8;0.3;0.8" 
                          dur="2s" 
                          begin={`${star.delay}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    ))}

                    <defs>
                      <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9"/>
                        <stop offset="50%" stopColor="#6366F1" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9"/>
                      </linearGradient>
                      <linearGradient id="innerShieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.6"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About the Organization */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          About ISMB
        </h4>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The Israeli Safety Officers Chamber (ISMB) is a registered non-profit organization established in February 2020 
            to address the absence of a professional and representative body for safety officers in Israel. 
            The organization serves as the professional home for workplace safety officers across all industries.
          </p>
          <p>
            ISMB's mission is to strengthen workplace safety culture in Israel by providing safety officers with 
            professional resources, continuous education, legal support, and a strong community network. The chamber 
            works in close cooperation with the Ministry of Labor and Safety Administration to promote workplace safety standards.
          </p>
          <p>
            With the motto <strong>"Together we will do and succeed"</strong>, ISMB connects safety professionals, 
            provides access to expert knowledge, organizes professional development seminars, and serves as a unified 
            voice representing safety officers' interests to regulatory bodies and employers.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Chamber Services & Benefits
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg text-gray-900 mb-2">Professional Development</h5>
                <p className="text-gray-600">
                  Regular seminars, training days, and conferences featuring industry experts and regulatory updates
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg text-gray-900 mb-2">Professional Community</h5>
                <p className="text-gray-600">
                  Connect with fellow safety officers, share experiences, and build a supportive professional network
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg text-gray-900 mb-2">Resources & Documentation</h5>
                <p className="text-gray-600">
                  Access to professional articles, forms, templates, protocols, and regulatory guidelines
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg text-gray-900 mb-2">Professional Support</h5>
                <p className="text-gray-600">
                  Legal consultation, expert advisory committee, and support for workplace safety challenges
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* What We Built */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Digital Platform We Built
        </h4>
        <div className="bg-blue-50 rounded-xl p-6 mb-6">
          <p className="text-gray-800 leading-relaxed mb-4">
            We developed a comprehensive digital ecosystem for ISMB, including a public-facing website, member portal, 
            event registration system, and content management platform. The system connects safety officers across Israel 
            and streamlines chamber operations.
          </p>
        </div>

        {/* Visual Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Member Portal Card */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-100">
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            
            {/* Member Portal Visualization */}
            <div className="mb-6 bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JD
                </div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-200 rounded mb-2 w-32"></div>
                  <div className="h-2 bg-gray-100 rounded w-24"></div>
                </div>
              </div>
              <div className="space-y-2">
                {['My Profile', 'My Certifications', 'Event History', 'Resources'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded group-hover:bg-blue-50 transition-colors">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="text-xs text-gray-600">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <h5 className="font-bold text-xl text-gray-900 mb-3">Member Portal</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Personal member dashboard and profile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Digital membership card and certificates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Access to exclusive members-only content</span>
              </li>
            </ul>
          </div>

          {/* Event Registration Card */}
          <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-100">
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Event Calendar Visualization */}
            <div className="mb-6 bg-white rounded-xl p-4 shadow-md">
              <div className="text-center mb-3 pb-2 border-b border-gray-200">
                <div className="text-sm font-semibold text-gray-700">Upcoming Events</div>
              </div>
              <div className="space-y-2">
                {[
                  {date: 'Jan 15', title: 'Safety Seminar', color: 'from-purple-400 to-purple-300'},
                  {date: 'Jan 22', title: 'Training Day', color: 'from-pink-400 to-pink-300'},
                  {date: 'Feb 05', title: 'Annual Conference', color: 'from-indigo-400 to-indigo-300'}
                ].map((event, i) => (
                  <div key={i} className={`bg-gradient-to-r ${event.color} rounded-lg p-2 flex items-center gap-3 transform group-hover:translate-x-1 transition-transform`}>
                    <div className="bg-white/90 rounded px-2 py-1 text-xs font-bold text-gray-700">{event.date}</div>
                    <div className="text-xs text-white font-semibold">{event.title}</div>
                  </div>
                ))}
              </div>
            </div>

            <h5 className="font-bold text-xl text-gray-900 mb-3">Event Management System</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Online registration for seminars and training</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Automated attendance tracking and certificates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Event calendar and reminder notifications</span>
              </li>
            </ul>
          </div>

          {/* Resource Library Card */}
          <div className="group relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-teal-100">
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            {/* Resource Library Visualization */}
            <div className="mb-6 bg-white rounded-xl p-4 shadow-md">
              <div className="grid grid-cols-3 gap-2">
                {[
                  {icon: '📄', label: 'Forms'},
                  {icon: '📋', label: 'Protocols'},
                  {icon: '📰', label: 'Articles'},
                  {icon: '📚', label: 'Guides'},
                  {icon: '🔗', label: 'Links'},
                  {icon: '📊', label: 'Reports'}
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-3 text-center transform group-hover:scale-105 transition-transform">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="text-xs font-semibold text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <h5 className="font-bold text-xl text-gray-900 mb-3">Digital Resource Library</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Downloadable forms and templates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Professional articles and best practices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Safety protocols and regulatory updates</span>
              </li>
            </ul>
          </div>

          {/* CMS & Admin Card */}
          <div className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-amber-100">
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            {/* CMS Visualization */}
            <div className="mb-6 bg-white rounded-xl p-4 shadow-md">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-400 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div className="flex-1 h-3 bg-gray-100 rounded"></div>
                </div>
                <div className="pl-10 space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                      <div className="flex-1 h-2 bg-gray-50 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h5 className="font-bold text-xl text-gray-900 mb-3">Content Management System</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">✓</span>
                <span>Easy content publishing and updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">✓</span>
                <span>Member management and analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">✓</span>
                <span>Event organization and communication tools</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Member Portal Screenshots Gallery */}
        <div className="mb-10">
          <h5 className="text-xl font-semibold text-gray-900 mb-4">Member Portal Interface</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Screenshot 1 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/ismb/WhatsApp Image 2026-01-07 at 12.14.20 (1).jpeg" 
                  alt="ISMB Member Portal - Dashboard" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/ismb/WhatsApp Image 2026-01-07 at 12.14.20.jpeg" 
                  alt="ISMB Member Portal - Profile" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/ismb/WhatsApp Image 2026-01-07 at 12.14.21.jpeg" 
                  alt="ISMB Member Portal - Resources" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Impact */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
          Platform Impact
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
          href="https://www.ismb.org.il/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          <span>Visit Official ISMB Website</span>
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
