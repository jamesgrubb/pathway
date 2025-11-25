import React from 'react';

const CommunityBanner: React.FC = () => {
  return (
    <section className="bg-lime-400 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
         <div className="bg-white rounded-3xl p-12 shadow-2xl shadow-lime-900/10">
            <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-8">
              Join our community of healthcare professionals
            </h2>
            <button className="bg-lime-400 hover:bg-lime-500 text-teal-900 px-8 py-3 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-lime-400/50">
              Sign up
            </button>
         </div>
      </div>
    </section>
  );
};

export default CommunityBanner;