import React from 'react';

export const ClientsLogos: React.FC = () => {
  const clients = [
    { name: 'Ben Gurion University', initials: 'BGU' },
    { name: 'Abu Kabir', initials: 'AK' },
    { name: 'COBMINDEX', initials: 'CB' },
    { name: 'Greenbrush', initials: 'GB' },
    { name: 'ISMB', initials: 'ISMB' },
    { name: 'Tech Solutions', initials: 'TS' },
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
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <span className="text-2xl font-black text-gray-600">{client.initials}</span>
                </div>
                <span className="text-xs font-semibold text-gray-400 whitespace-nowrap">{client.name}</span>
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
