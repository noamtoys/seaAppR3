import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How long does it take to develop an application?',
      answer: 'Development time depends on project complexity. A standard project typically takes 2-4 months. We provide an accurate timeline after the discovery meeting and requirements analysis.'
    },
    {
      question: 'Do you provide support after launch?',
      answer: 'Yes! We provide full post-launch support, including bug fixes, updates, and upgrades. We have several maintenance packages to choose from.'
    },
    {
      question: 'What is the process for developing an app with you?',
      answer: 'The process includes: 1) Discovery meeting and needs analysis, 2) Quote and planning, 3) Specification and design, 4) Development and testing, 5) Launch, 6) Ongoing support.'
    },
    {
      question: 'How much does it cost to develop an application?',
      answer: 'The price varies depending on project complexity, required features, and platforms (iOS, Android, Web). We\'d be happy to provide a customized quote once we understand your needs.'
    },
    {
      question: 'Do you also develop mobile applications?',
      answer: 'Yes! We develop mobile apps (iOS and Android), web applications, and advanced management systems. We use the most advanced technologies.'
    },
    {
      question: 'Can you help me with design as well?',
      answer: 'Absolutely! We have professional UX/UI designers who will help you create an excellent user experience and impressive design that fits your brand.'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary-100 text-primary-700 px-5 py-2 rounded-full text-sm font-bold">
              <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Questions & Answers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you wanted to know about app development
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-gray-900 flex-1">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center transition-transform duration-300 ml-4 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 animate-slide-bottom">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Didn't find an answer to your question?
          </p>
          <a href="#contact" className="bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform inline-flex items-center gap-3">
            <span>Contact Us</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
