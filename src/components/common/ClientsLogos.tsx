import React from 'react';

export const ClientsLogos: React.FC = () => {
  const clients = [
    { name: 'COBMINDEX', initials: 'CB', description: 'Medical Research App' },
    { name: 'GreenBrush', initials: 'GB', description: 'Solar Energy Solutions' },
    { name: 'ISMB', initials: 'ISMB', description: 'Safety Officers Association' },
    { name: 'PFABot', initials: 'PFA', description: 'Mental Health Support' },
    { name: 'Burns AI', initials: 'BAI', description: 'Medical Data Collection' },
  ];

  return (
    <div className="py-12 bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h3 className="text-lg md:text-xl font-bold text-gray-500 mb-2">Among Our Clients</h3>
        </div>
        
        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center border-2 border-blue-200 shadow-sm hover:shadow-lg hover:border-blue-400 transition-all">
                  <span className="text-xl font-black text-blue-600">{client.initials}</span>
                </div>
                <div className="text-center">
                  <span className="text-sm font-semibold text-gray-700 whitespace-nowrap block">{client.name}</span>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{client.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
