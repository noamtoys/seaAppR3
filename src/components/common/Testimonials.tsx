import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'David Cohen',
      role: 'CEO of Tech Company',
      text: 'Working with SeaApp was amazing. They turned our idea into a professional and impressive application in a short time. The result exceeded all expectations.',
      avatar: 'D.C'
    },
    {
      name: 'Sarah Levy',
      role: 'Entrepreneur & Founder',
      text: 'The professional team guided us at every step. The application they developed helped us increase sales by 200% within just three months!',
      avatar: 'S.L'
    },
    {
      name: 'Joseph Mizrahi',
      role: 'Product Manager',
      text: 'Simply perfect! SeaApp\'s listening to needs, creativity and professionalism made our project a reality. Highly recommended!',
      avatar: 'J.M'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary-100 text-primary-700 px-5 py-2 rounded-full text-sm font-bold">
              <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              What Our Clients Say
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Testimonials From Satisfied Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud of our work and client satisfaction
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="text-primary-500 text-5xl mb-4 opacity-20">
                "
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {testimonial.text}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-black text-primary-600 mb-2">50+</div>
            <div className="text-gray-600 font-semibold">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-primary-600 mb-2">100%</div>
            <div className="text-gray-600 font-semibold">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600 font-semibold">Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-primary-600 mb-2">5★</div>
            <div className="text-gray-600 font-semibold">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};
