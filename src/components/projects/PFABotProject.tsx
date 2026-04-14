import React from 'react';
import { ProjectDetails } from './ProjectDetails';
import { StatsGrid } from '../common/StatsGrid';
import { Tag } from '../common/Tag';

export const PFABotProject: React.FC = () => {
  const stats = [
    {
      value: '3',
      label: 'Languages Supported',
      description: 'Hebrew, English, and Arabic for comprehensive accessibility',
    },
    {
      value: '24/7',
      label: 'Available Support',
      description: 'Round-the-clock psychological first aid assistance',
    },
    {
      value: '1,000+',
      label: 'Users Helped',
      description: 'Soldiers and anxiety sufferers who received immediate support',
    },
    {
      value: '2024',
      label: 'Development Year',
      description: 'Latest research and methodologies in psychological first aid',
    },
  ];

  const technologies = [
    'Natural Language Processing',
    'React Native',
    'AI Chatbot',
    'Multi-language Support',
    'Psychology API',
    'Crisis Intervention',
    'Mobile App',
    'Cloud Platform',
  ];

  return (
    <ProjectDetails
      title="PFABot - Psychological First Aid Chatbot"
      description="Advanced AI chatbot providing psychological first aid support for soldiers and anxiety sufferers, developed by leading psychologists"
    >
      {/* About the Project */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          About The PFABot Project
        </h4>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            PFABot is a groundbreaking psychological first aid chatbot developed in 2024 by Dr. Talia Schwartz Tayri, 
            MSW, LSW, PhD, and Nurit Cohen Inger, MSc, PhD candidate. This innovative AI-powered system provides 
            immediate psychological support to soldiers, anxiety sufferers, and individuals experiencing mental health crises.
          </p>
          <p>
            The bot operates as a virtual psychological counselor, offering evidence-based psychological first aid 
            techniques through an intuitive chat interface. Available in three languages (Hebrew, English, and Arabic), 
            PFABot ensures accessible mental health support for diverse populations, particularly focusing on military 
            personnel and individuals dealing with anxiety disorders.
          </p>
          <p>
            Built on established psychological first aid protocols and powered by advanced natural language processing, 
            PFABot provides immediate, anonymous, and confidential support. The system is designed to complement 
            traditional therapy while offering crucial immediate intervention during crisis situations.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Key Features & Capabilities
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg text-gray-900 mb-2">AI-Powered Chat Support</h5>
                <p className="text-gray-600">
                  Intelligent chatbot providing real-time psychological first aid through natural conversation
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg text-gray-900 mb-2">Multi-Language Support</h5>
                <p className="text-gray-600">
                  Available in Hebrew, English, and Arabic to serve diverse communities effectively
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg text-gray-900 mb-2">Military-Focused Support</h5>
                <p className="text-gray-600">
                  Specialized protocols and interventions designed specifically for military personnel and veterans
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg text-gray-900 mb-2">Crisis Intervention</h5>
                <p className="text-gray-600">
                  Immediate response capabilities for anxiety attacks and acute psychological distress situations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Interface & Screenshots */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          PFABot Application Interface
        </h4>
        <p className="text-gray-600 mb-8 text-lg">
          Screenshots from the PFABot psychological first aid chatbot application
        </p>
        
        {/* Hero Section with App Overview */}
        <div className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/80 to-purple-900/90"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-white">
                {/* Logo Section */}
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="/images/pfaBot/LogoPFA-L-Ee4wOr.png" 
                    alt="PFABot Logo" 
                    className="h-16 md:h-20 w-auto drop-shadow-2xl"
                  />
                  <h3 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
                    PFABot
                  </h3>
                </div>
                <p className="text-xl md:text-2xl mb-6 leading-relaxed text-blue-100">
                  An AI-powered psychological first aid chatbot providing immediate mental health support 
                  for soldiers, veterans, and individuals experiencing anxiety or psychological distress.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">3 Languages</span>
                  <span className="px-5 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">24/7 Support</span>
                  <span className="px-5 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">Crisis Intervention</span>
                </div>
              </div>
              
              {/* Main App Screenshot */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                  <img 
                    src="/images/pfaBot/WhatsApp Image 2026-01-13 at 12.26.10.jpeg" 
                    alt="PFABot App Screenshot" 
                    className="relative h-[400px] md:h-[500px] w-auto drop-shadow-2xl rounded-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots Gallery */}
        <div className="mb-10">
          <h5 className="text-xl font-semibold text-gray-900 mb-4">Application Screenshots Gallery</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Screenshot 1 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/pfaBot/WhatsApp Image 2026-01-13 at 12.26.30.jpeg" 
                  alt="PFABot Chat Interface" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/pfaBot/WhatsApp Image 2026-01-13 at 12.26.43.jpeg" 
                  alt="PFABot Language Selection" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/pfaBot/WhatsApp Image 2026-01-13 at 12.26.56.jpeg" 
                  alt="PFABot Support Features" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Screenshot 4 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/pfaBot/WhatsApp Image 2026-01-13 at 12.27.08.jpeg" 
                  alt="PFABot Crisis Response" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

          </div>

          {/* Additional Screenshots Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            
            {/* Screenshot 5 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/pfaBot/WhatsApp Image 2026-01-13 at 12.38.00.jpeg" 
                  alt="PFABot Dashboard" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Screenshot 6 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/pfaBot/WhatsApp Image 2026-01-13 at 12.38.22.jpeg" 
                  alt="PFABot Settings" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Screenshot 8 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/pfaBot/WhatsApp Image 2026-01-13 at 12.38.33.jpeg" 
                  alt="PFABot Resources" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

          </div>
        </div>

        {/* Feature Highlights */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <h5 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Psychological First Aid Innovation</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h6 className="font-bold text-lg text-gray-900 mb-3">Evidence-Based Support</h6>
              <p className="text-gray-600">Built on proven psychological first aid protocols and clinical research</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h6 className="font-bold text-lg text-gray-900 mb-3">Immediate Response</h6>
              <p className="text-gray-600">Instant psychological support available 24/7 for crisis situations</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h6 className="font-bold text-lg text-gray-900 mb-3">Private & Secure</h6>
              <p className="text-gray-600">Anonymous support with complete privacy and data protection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Demo */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          PFABot Demo Video - Psychological First Aid in Action
        </h4>
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h5 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Watch PFABot Demonstration
            </h5>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              See how PFABot provides psychological first aid support through this comprehensive demonstration video by the development team
            </p>
          </div>
          
          {/* Video Thumbnail Container */}
          <div className="max-w-4xl mx-auto">
            <div className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              {/* Video Thumbnail Background */}
              <div className="aspect-video bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative">
                {/* YouTube Thumbnail Simulation */}
                <div className="absolute inset-0 bg-black/20"></div>
                <img 
                  src="https://img.youtube.com/vi/Plps_lYIl3o/maxresdefault.jpg" 
                  alt="PFABot Demo Video"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if YouTube thumbnail fails
                    e.currentTarget.src = '/images/pfaBot/WhatsApp Image 2026-01-13 at 12.26.10.jpeg';
                    e.currentTarget.className = 'w-full h-full object-contain bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-8';
                  }}
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 animate-pulse group-hover:animate-none">
                    <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 md:w-12 md:h-12 text-red-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* YouTube Logo */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-white text-sm font-medium">YouTube</span>
                  </div>
                </div>
                
                {/* Video Info Badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">PFA Demo</span>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Click Target */}
              <a
                href="https://www.youtube.com/watch?v=Plps_lYIl3o"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Watch PFABot Demo Video"
              ></a>
            </div>
            
            {/* Video Description */}
            <div className="mt-8 text-center">
              <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 font-medium">Live Demo</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Psychological First Aid</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span className="text-gray-700 font-medium">Multi-Language</span>
                </div>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Click to watch the comprehensive demonstration of PFABot's psychological first aid capabilities, 
                developed by Dr. Talia Schwartz Tayri and Nurit Cohen Inger in 2024.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Development Team */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Development Team & Research
        </h4>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-6">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-800">
              <strong>PFABot was developed in 2024</strong> by a team of leading psychologists and researchers 
              specializing in psychological first aid and crisis intervention:
            </p>
            
            {/* Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2">Dr. Talia Schwartz Tayri</h5>
                    <p className="text-sm text-blue-600 mb-2">MSW, LSW, PhD</p>
                    <p className="text-gray-600 text-sm">Lead developer and psychological first aid specialist</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2">Nurit Cohen Inger</h5>
                    <p className="text-sm text-indigo-600 mb-2">MSc, PhD Candidate</p>
                    <p className="text-gray-600 text-sm">Co-developer and research methodology specialist</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h6 className="font-semibold text-gray-900">Research Focus Areas:</h6>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Psychological first aid protocols for military personnel</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Crisis intervention techniques for anxiety disorders</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Multi-cultural and multi-language mental health support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">AI-powered mental health intervention systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
          Project Impact & Statistics
        </h4>
        <StatsGrid stats={stats} />
      </div>

      {/* Technologies */}
      <div className="mb-8">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Technologies & Methodologies Used
        </h4>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <Tag key={tech} variant="primary">
              {tech}
            </Tag>
          ))}
        </div>
      </div>

      {/* Project Contact */}
      <div className="border-t border-gray-200 pt-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h4 className="text-xl font-bold text-gray-900 mb-4">Project Information</h4>
          <p className="text-gray-700 mb-4">
            PFABot represents a breakthrough in accessible psychological first aid technology, 
            combining clinical expertise with innovative AI solutions for immediate mental health support.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>24/7 Psychological Support Available</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span>Hebrew, English & Arabic Support</span>
            </div>
          </div>
        </div>
      </div>
    </ProjectDetails>
  );
};