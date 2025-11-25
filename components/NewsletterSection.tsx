import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Form Side */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl text-slate-800 mb-8 leading-tight">
              Sign up to stay up to date on the release of new resources
            </h2>
            <div className="max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email here..." 
                className="w-full bg-transparent border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-teal-600 transition-colors mb-6"
              />
              
              <div className="space-y-4 mb-8">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-teal-600 peer-checked:border-teal-600 transition-colors"></div>
                    <svg className="absolute w-3 h-3 text-white left-1 top-1 opacity-0 peer-checked:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-xs text-gray-500 leading-tight group-hover:text-gray-700">
                    Yes, I agree to receive information from Rhythm Pharmaceuticals about their products and services or with other content that may be of interest to me. I may unsubscribe at any time.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-teal-600 peer-checked:border-teal-600 transition-colors"></div>
                     <svg className="absolute w-3 h-3 text-white left-1 top-1 opacity-0 peer-checked:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-xs text-gray-500 leading-tight group-hover:text-gray-700">
                    By subscribing to the newsletter, I agree to the Rhythm Pharmaceuticals <a href="#" className="underline">Privacy Policy</a>.
                  </span>
                </label>
              </div>

              <button className="bg-lime-400 hover:bg-lime-500 text-teal-900 px-8 py-3 rounded-full font-bold text-sm transition-colors shadow-lg shadow-lime-200">
                Stay informed
              </button>
            </div>
          </div>

          {/* Event Card Side */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <span className="text-teal-600 text-sm font-bold uppercase tracking-widest">Upcoming event</span>
              </div>
              
              {/* Timer */}
              <div className="bg-teal-700 text-white rounded-lg p-6 mb-8 flex justify-between text-center">
                 <div>
                   <div className="text-3xl font-light">01</div>
                   <div className="text-[10px] uppercase opacity-70">Days</div>
                 </div>
                 <div className="text-3xl font-light opacity-50">|</div>
                 <div>
                   <div className="text-3xl font-light">12</div>
                   <div className="text-[10px] uppercase opacity-70">Hours</div>
                 </div>
                 <div className="text-3xl font-light opacity-50">|</div>
                 <div>
                   <div className="text-3xl font-light">31</div>
                   <div className="text-[10px] uppercase opacity-70">Minutes</div>
                 </div>
                 <div className="text-3xl font-light opacity-50">|</div>
                 <div>
                   <div className="text-3xl font-light">08</div>
                   <div className="text-[10px] uppercase opacity-70">Seconds</div>
                 </div>
              </div>

              <div className="text-center">
                <h3 className="font-bold text-slate-800 mb-2">Understanding rare MC4R pathway disorders</h3>
                <p className="text-sm text-slate-500 mb-8">Join our webinar to explore the latest insights into diagnosing and managing rare MC4R pathway diseases.</p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="bg-lime-400 hover:bg-lime-500 text-teal-900 px-4 py-2 rounded-full text-xs font-bold transition-colors">
                    View speakers and details
                  </button>
                  <button className="border border-slate-300 hover:border-teal-600 text-slate-600 px-4 py-2 rounded-full text-xs font-bold transition-colors">
                    View past events
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;