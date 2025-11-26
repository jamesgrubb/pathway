import React from 'react';
import { Plus } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Footer CTA */}
      <div className="bg-teal-700 py-16 px-4">
        <div className="bg-white max-w-5xl mx-auto rounded-xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl text-slate-800 mb-8 font-medium">
            Still have questions that haven't been answered?
          </h2>
          <button className="bg-lime-400 hover:bg-lime-500 text-teal-900 px-8 py-3 rounded-full font-bold text-sm transition-transform hover:scale-105">
            Contact →
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-white pt-12 pb-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* References Toggle */}
          <div className="flex justify-between items-center mb-12 border-b border-gray-100 pb-8">
            <span className="text-2xl text-slate-700">References</span>
            <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-sm hover:border-teal-600 transition-colors">
              Show <Plus size={14} />
            </button>
          </div>

          <div className="bg-teal-700 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
               <div>
                 <h3 className="text-2xl font-light mb-4">Got a specific question?</h3>
                 <button className="bg-lime-400 hover:bg-lime-500 text-teal-900 px-6 py-2 rounded-full text-sm font-bold transition-colors">
                   Contact →
                 </button>
               </div>
               
               <div className="flex flex-wrap gap-6 text-xs text-teal-100">
                 <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
                 <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                 <a href="#" className="hover:text-white transition-colors">Imprint</a>
                 <a href="#" className="hover:text-white transition-colors">HCP Privacy Policy</a>
                 <a href="#" className="hover:text-white transition-colors">Sitemap</a>
               </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-t border-teal-600 pt-8">
              <div className="flex items-center gap-4">
                 <img src="/images/Logo_0n_Dark.png" alt="Logo" width={90} height={26} />
                 <img src="/images/Rhythm.svg" alt="Rhythm Logo" width={90} height={24} />
              </div>
              <div className="text-[10px] text-teal-300 text-right">
                <p>This information is provided by Rhythm Pharmaceuticals B.V. (eu_medinfo@rhythm.com). Last updated: August 2025</p>
                <p>© 2025, Rhythm Pharmaceuticals, Inc. All rights reserved. Rhythm and its logo are trademarks of Rhythm Pharmaceuticals, Inc. INT-DSE-2300001 08/2025</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;