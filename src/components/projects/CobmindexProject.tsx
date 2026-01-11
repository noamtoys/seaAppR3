import React from 'react';
import { ProjectDetails } from './ProjectDetails';
import { StatsGrid } from '../common/StatsGrid';
import { Tag } from '../common/Tag';

export const CobmindexProject: React.FC = () => {
  const stats = [
    {
      value: '85%',
      label: 'Quality of Life Improvement',
      description: 'Study participants reported significant improvement in quality of life',
    },
    {
      value: '10 Minutes',
      label: 'Daily Practice',
      description: 'Short and simple practice once or twice a day',
    },
    {
      value: '70%',
      label: 'Symptom Reduction',
      description: 'Significant decrease in inflammation symptoms and flares',
    },
    {
      value: '4 Weeks',
      label: 'Structured Program',
      description: '4 graded learning units with daily practice',
    },
  ];

  const technologies = [
    'React Native',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'AWS',
    'Push Notifications',
    'Analytics',
    'REST API',
  ];

  return (
    <ProjectDetails
      title="COBMINDEX - Medical App for Crohn's Patients"
      description="Innovative digital solution for improving quality of life for Crohn's patients through research-based psychological techniques"
    >
      {/* About the Project */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          About The Project
        </h4>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            COBMINDEX is a groundbreaking medical application developed in collaboration with Ben-Gurion 
            University and Soroka Medical Center. The app is designed for Crohn's disease patients and provides 
            research-based psychological tools to reduce stress and improve quality of life.
          </p>
          <p>
            Crohn's disease is a chronic inflammatory disease of the digestive system, and research has shown a clear 
            connection between stress levels and disease flares. The COBMINDEX method combines cognitive-behavioral techniques, 
            mindfulness and coping strategies, in a structured and accessible program.
          </p>
          <p>
            The application was developed in Hebrew and specifically adapted to the Crohn's patient population in Israel, 
            with emphasis on accessibility, simplicity and effectiveness in daily use.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Key Features
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-primary-100 rounded-xl p-6 hover:border-primary-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg text-gray-900 mb-2">Structured Learning Program</h5>
                <p className="text-gray-600">
                  4 consecutive learning units with gradual progression, each unit teaches a new skill for coping with stress
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-primary-100 rounded-xl p-6 hover:border-primary-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg text-gray-900 mb-2">Short Daily Practice</h5>
                <p className="text-gray-600">
                  Just 10-minute exercises, once or twice a day, with full audio guidance
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-primary-100 rounded-xl p-6 hover:border-primary-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg text-gray-900 mb-2">Tracking and Progress</h5>
                <p className="text-gray-600">
                  Track exercise completion, unit progress, and graphs to illustrate improvement over time
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-primary-100 rounded-xl p-6 hover:border-primary-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg text-gray-900 mb-2">Smart Reminders</h5>
                <p className="text-gray-600">
                  Personalized notifications for practice, questionnaire reminders and research progress updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Screenshots & Mockups */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          App Interface & Features
        </h4>
        <p className="text-gray-600 mb-8 text-lg">
          A glimpse into the COBMINDEX application interface and user experience
        </p>
        
        {/* Hero Section with Logo & Background */}
        <div className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{backgroundImage: 'url(/images/cobmindex/Cobmindex-inner-bg.jpg)'}}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-pink-900/80 to-purple-900/90"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-white">
                <div className="mb-6">
                  <img 
                    src="/images/cobmindex/Cobmindex-logo-01.svg" 
                    alt="COBMINDEX Logo" 
                    className="h-20 md:h-28 w-auto"
                  />
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  COBMINDEX
                </h3>
                <p className="text-xl md:text-2xl mb-6 leading-relaxed text-purple-100">
                  A comprehensive mobile application designed to help Crohn's disease patients manage stress and improve their quality of life through evidence-based psychological techniques.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">iOS & Android</span>
                  <span className="px-5 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">Medical Grade</span>
                  <span className="px-5 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">Research Backed</span>
                </div>
              </div>
              
              {/* Main App Mockup */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                  <img 
                    src="/images/cobmindex/mockap-01.png" 
                    alt="COBMINDEX App Mockup" 
                    className="relative h-[400px] md:h-[500px] w-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <h5 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Key Interface Features</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h6 className="font-bold text-lg text-gray-900 mb-3">Intuitive Design</h6>
              <p className="text-gray-600">User-friendly interface designed for daily use with easy navigation</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h6 className="font-bold text-lg text-gray-900 mb-3">Visual Analytics</h6>
              <p className="text-gray-600">Clear charts and graphs showing your progress journey over time</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h6 className="font-bold text-lg text-gray-900 mb-3">Smart Reminders</h6>
              <p className="text-gray-600">Personalized notifications to keep you on track with your practice</p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Built */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          What We Built For The Research
        </h4>
        <div className="bg-primary-50 rounded-xl p-6 mb-6">
          <p className="text-gray-800 leading-relaxed">
            We developed a full native mobile app for iOS and Android, along with a content management 
            system and research dashboard. The system includes advanced backend infrastructure for user management, content, 
            analytics and research control.
          </p>
        </div>

        {/* Main Screenshots Gallery - Moved Here */}
        <div className="mb-10">
          <h5 className="text-xl font-semibold text-gray-900 mb-4">App Screens Gallery</h5>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            
            {/* Screenshot 1 - ps-01 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/cobmindex/ps-01.jpg" 
                  alt="COBMINDEX Dashboard" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Screenshot 2 - ps-05 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/cobmindex/ps-05.jpg" 
                  alt="Progress Tracking" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Screenshot 3 - ps-09 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/cobmindex/ps-09.jpg" 
                  alt="Exercise Library" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Screenshot 4 - ps-10 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/cobmindex/ps-10.jpg" 
                  alt="Mood Tracking" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Screenshot 5 - ps-11 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="/images/cobmindex/ps-11.jpg" 
                  alt="Personal Insights" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

          </div>
        </div>

        <div className="space-y-6">
          <div className="border-l-4 border-primary-500 pl-4">
            <h5 className="font-bold text-lg mb-2 text-gray-900">Mobile Application</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Intuitive and accessible user interface in Hebrew</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Integrated audio player with pause and rewind features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Interactive questionnaires for measuring mood and symptoms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Personal journal for documenting practices and feelings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Visual graphs to illustrate progress</span>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-primary-500 pl-4">
            <h5 className="font-bold text-lg mb-2 text-gray-900">Content Management System (CMS)</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Managing learning units and exercises</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Uploading and managing audio files and tutorials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Creating and editing dynamic questionnaires</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Sending notifications and messages to participants</span>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-primary-500 pl-4">
            <h5 className="font-bold text-lg mb-2 text-gray-900">Research Dashboard</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Tracking participants and their program progress</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Advanced analytics - usage, exercise completion, commitment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Exporting data for research - CSV, Excel, JSON</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Managing research groups and control groups</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Reports and visualization of research results</span>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-primary-500 pl-4">
            <h5 className="font-bold text-lg mb-2 text-gray-900">Technical Infrastructure</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Medical-grade information security - encryption, HIPAA compliance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Automatic backups and disaster recovery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Secure API for communication between app and server</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Offline work with automatic synchronization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>High performance and fast loading</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Research Impact */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Research Impact and Significance
        </h4>
        <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 mb-6">
          <div className="space-y-4 text-gray-800">
            <p className="text-lg leading-relaxed">
              <strong>The clinical research</strong> conducted at Ben-Gurion University and Soroka Medical Center 
              showed impressive results among Crohn's patients. Participants reported:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Significant improvement in quality of life and mental well-being</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Reduction in disease symptoms and inflammation markers</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Improved ability to cope with stress and pressure</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Decrease in feelings of anxiety and depression</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Prevention of flares and disease outbreaks</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Dr. Doron Schwartz, Senior Gastroenterologist at Soroka Medical Center: 
          <em className="block mt-2 pl-4 border-l-4 border-primary-300 text-gray-600">
            "Stressful situations increase the risk of disease flare-ups. The application we developed may help 
            significantly in preventing flares and preventing disease outbreaks."
          </em>
        </p>
      </div>

      {/* Results */}
      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
          Research Results
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
          href="https://web.cobmindex.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          <span>Visit Official COBMINDEX Website</span>
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
