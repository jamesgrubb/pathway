import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-teal-600 to-[#005f6b] overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="w-full h-full absolute inset-0 opacity-10 bg-[url('/images/hero_background.png')] bg-cover bg-center">
       
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 leading-tight">
            Welcome to Path4HCPs
          </h1>
          <p className="text-lg md:text-xl text-teal-50 font-light leading-relaxed">
            Your go-to portal for science-based information about the melanocortin-4 receptor pathway.
          </p>
        </div>
      </div>

      {/* Stylized Icons Overlay (Simulating the figures in the original design) */}
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-teal-800/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;