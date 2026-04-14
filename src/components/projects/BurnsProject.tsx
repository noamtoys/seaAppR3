import React from 'react';
import { ProjectDetails } from './ProjectDetails';
import { StatsGrid } from '../common/StatsGrid';
import { Tag } from '../common/Tag';

export const BurnsProject: React.FC = () => {
  const stats = [
    {
      value: '5,000+',
      label: 'Medical Images Collected',
      description: 'Censored and encrypted burn images collected for AI training purposes',
    },
    {
      value: '95%',
      label: 'AI Accuracy Rate',
      description: 'Machine learning model accuracy in burn classification and severity assessment',
    },
    {
      value: '50+',
      label: 'Medical Professionals',
      description: 'Doctors and specialists contributing data and validating AI predictions',
    },
    {
      value: '100%',
      label: 'Data Security',
      description: 'HIPAA-compliant platform with full encryption and patient privacy protection',
    },
  ];

  const technologies = [
    'Machine Learning',
    'Computer Vision',
    'TensorFlow',
    'Python',
    'React Native',
    'Medical Imaging',
    'HIPAA Compliance',
    'Cloud Security',
  ];

  return (
    <ProjectDetails
      title="BGU Burns Research - AI-Powered Burn Detection System"
      description="Advanced data collection and AI analysis system for burn identification at Ben-Gurion University Medical Center, helping doctors make accurate diagnoses"
    >
      {/* About the Project */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          About The Research Project
        </h4>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The BGU Burns Research Project is a groundbreaking initiative conducted at Ben-Gurion University 
            Medical Center, focused on developing an AI-powered burn detection and classification system. This innovative 
            research involves collecting and analyzing burn injury data to train artificial intelligence algorithms 
            that can accurately identify and classify different types of burns.
          </p>
          <p>
            Burns represent a complex medical challenge requiring rapid and accurate diagnosis. Our research team 
            developed a secure data collection platform that allows medical professionals to document burn cases 
            with high-quality, censored medical imagery. This data is then used to train machine learning models 
            that can assist doctors in making faster and more accurate burn diagnoses.
          </p>
          <p>
            The system prioritizes patient privacy and data security, ensuring all medical imagery is properly 
            censored and encrypted. The collected data helps build comprehensive AI models that can distinguish 
            between different burn severities, types, and healing stages, ultimately improving diagnostic accuracy 
            and patient outcomes.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Key Research Features
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:border-orange-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg text-gray-900 mb-2">AI Burn Detection</h5>
                <p className="text-gray-600">
                  Advanced machine learning algorithms trained to identify and classify burn injuries from medical imagery
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:border-orange-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg text-gray-900 mb-2">Secure Data Collection</h5>
                <p className="text-gray-600">
                  HIPAA-compliant platform with encrypted, censored medical imagery for safe data gathering
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:border-orange-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg text-gray-900 mb-2">Data Analytics & Classification</h5>
                <p className="text-gray-600">
                  Comprehensive analysis of burn severity, type classification, and healing progression tracking
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:border-orange-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg text-gray-900 mb-2">Medical Professional Support</h5>
                <p className="text-gray-600">
                  Tools and interfaces designed specifically for doctors to contribute data and validate AI predictions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Interface & Screenshots */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Research Application Interface
        </h4>
        <p className="text-gray-600 mb-8 text-lg">
          Screenshots from the secure burn data collection application developed for BGU medical research - all medical imagery is properly censored and encrypted
        </p>
        
        {/* Hero Section with App Overview */}
        <div className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/90 via-red-900/80 to-orange-900/90"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-white">
                <h3 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  Burns AI Detection System
                </h3>
                <p className="text-xl md:text-2xl mb-6 leading-relaxed text-orange-100">
                  A comprehensive AI-powered burn detection platform that collects secure, censored medical data 
                  to train machine learning algorithms for accurate burn identification and classification.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">AI & Machine Learning</span>
                  <span className="px-5 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">Secure & Censored</span>
                  <span className="px-5 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">Medical Grade</span>
                </div>
              </div>
              
              {/* Main App Screenshot */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                  <img 
                    src="/images/burns/WhatsApp Image 2026-01-13 at 11.29.49.jpeg" 
                    alt="Burns Research App Screenshot" 
                    className="relative h-[400px] md:h-[500px] w-auto drop-shadow-2xl rounded-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots Gallery */}
        <div className="mb-10">
          <h5 className="text-xl font-semibold text-gray-900 mb-4">Application Screenshots</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Screenshot 1 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/burns/WhatsApp Image 2026-01-13 at 11.30.06.jpeg" 
                  alt="Burns App Interface 1" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/burns/WhatsApp Image 2026-01-13 at 11.30.25.jpeg" 
                  alt="Burns App Interface 2" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/burns/WhatsApp Image 2026-01-13 at 11.30.39.jpeg" 
                  alt="Burns App Interface 3" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Screenshot 4 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/burns/WhatsApp Image 2026-01-13 at 11.30.51.jpeg" 
                  alt="Burns App Interface 4" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

          </div>
        </div>

        {/* Feature Highlights */}
        <div className="bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <h5 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">AI Research Innovation Features</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h6 className="font-bold text-lg text-gray-900 mb-3">AI Detection Engine</h6>
              <p className="text-gray-600">Advanced machine learning algorithms trained on censored medical data for burn classification</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h6 className="font-bold text-lg text-gray-900 mb-3">Secure Data Platform</h6>
              <p className="text-gray-600">HIPAA-compliant system ensuring all medical imagery is encrypted and properly censored</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
                </svg>
              </div>
              <h6 className="font-bold text-lg text-gray-900 mb-3">Clinical Decision Support</h6>
              <p className="text-gray-600">AI-powered tools to assist doctors in accurate burn diagnosis and treatment planning</p>
            </div>
          </div>
        </div>
      </div>

      {/* Research Impact */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Research Impact and Results
        </h4>
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 mb-6">
          <div className="space-y-4 text-gray-800">
            <p className="text-lg leading-relaxed">
              <strong>The AI research</strong> conducted at Ben-Gurion University Medical Center 
              has achieved significant milestones in burn detection and classification technology:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Development of highly accurate AI models for burn severity classification</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Successful collection and curation of censored medical imagery dataset</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Implementation of HIPAA-compliant security protocols for patient data protection</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Validation of AI predictions by medical professionals and specialists</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Creation of decision support tools to assist doctors in diagnosis</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
          AI Research Results
        </h4>
        <StatsGrid stats={stats} />
      </div>

      {/* Technologies */}
      <div className="mb-8">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Technologies Used In Research
        </h4>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <Tag key={tech} variant="primary">
              {tech}
            </Tag>
          ))}
        </div>
      </div>

      {/* Research Contact */}
      <div className="border-t border-gray-200 pt-8">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
          <h4 className="text-xl font-bold text-gray-900 mb-4">AI Research Contact</h4>
          <p className="text-gray-700 mb-4">
            For more information about the BGU Burns AI Research Project, data collaboration, and technology licensing:
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Ben-Gurion University Medical Center</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>AI & Machine Learning Research Unit</span>
            </div>
          </div>
        </div>
      </div>
    </ProjectDetails>
  );
};