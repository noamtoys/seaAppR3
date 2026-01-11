import { MainLayout } from './components/Layout/MainLayout';
import { Hero } from './components/common/Hero';
import { Section } from './components/common/Section';
import { ClientsLogos } from './components/common/ClientsLogos';
import { ProcessSteps } from './components/common/ProcessSteps';
import { Testimonials } from './components/common/Testimonials';
import { FAQ } from './components/common/FAQ';
import { ProjectsTabs } from './components/projects/ProjectsTabs';
import { WhyChooseUs } from './components/common/WhyChooseUs';
import { ContactForm } from './components/common/ContactForm';
import './styles/global.css';

function App() {
  const scrollToSection = (section: string) => {
    if (section === 'projects') {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section === 'contact') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <MainLayout onNavigate={scrollToSection}>
      {/* Hero Section */}
      <Hero
        title="We Develop Applications That Connect Ideas to Real-World Results"
        subtitle="Advanced app development and digital solutions company, specializing in custom web and mobile system development for business clients"
        ctaText="Get In Touch"
        onCtaClick={() => scrollToSection('contact')}
      />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Clients Logos */}
      <ClientsLogos />

      {/* What We Do Section */}
      <Section
        title="What Stops People From Turning Their Idea Into an App?"
        subtitle="We specialize in developing custom digital solutions that deliver measurable business value"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          <div className="group relative bg-gradient-to-br from-white to-primary-50/30 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-primary-100/50 hover:border-primary-300 hover:-translate-y-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:to-primary-600/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-primary-500/30">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                Professional Knowledge
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Lack of technical knowledge and app development can be complex, but we guide you every step of the way
              </p>
              <div className="h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full mt-4 md:mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white to-blue-50/30 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100/50 hover:border-blue-300 hover:-translate-y-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/5 group-hover:to-blue-600/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-blue-500/30">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                Experience
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                No experience in the tech field? We're here to make the complex simple
              </p>
              <div className="h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mt-4 md:mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white to-green-50/30 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-100/50 hover:border-green-300 hover:-translate-y-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-600/0 group-hover:from-green-500/5 group-hover:to-green-600/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-green-500/30">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                Budget
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                No need for huge budgets - we offer flexible solutions tailored to any budget
              </p>
              <div className="h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full mt-4 md:mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white to-purple-50/30 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-100/50 hover:border-purple-300 hover:-translate-y-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-600/0 group-hover:from-purple-500/5 group-hover:to-purple-600/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-purple-500/30">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                Ideas
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Have an idea but don't know how to start? We'll help you turn it into reality
              </p>
              <div className="h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full mt-4 md:mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-lg md:text-xl px-10 md:px-14 py-5 md:py-6 rounded-full transition-all duration-300 shadow-2xl hover:shadow-primary-500/50 hover:scale-105 transform inline-flex items-center justify-center gap-3"
          >
            <span>Let's Start Together</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l-5 5 5 5" />
            </svg>
          </button>
        </div>
      </Section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* Projects Section */}
      <ProjectsTabs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Form */}
      <ContactForm />
    </MainLayout>
  );
}

export default App;
