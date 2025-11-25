import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const items = [
  { title: "Identifying rare causes of obesity" },
  { title: "How to diagnose genetic obesity?" },
  { title: "Genetic pathways involved in obesity" },
  { title: "Can obesity be inherited?" }
];

const ResourcesSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-normal text-slate-800 mb-6 leading-tight">
              Providing the <span className="text-teal-700 border-b-2 border-teal-200">latest expert</span> insights and research resources
            </h2>
            <p className="text-slate-600 mb-8 max-w-md">
              Explore a variety of educational materials, including presentations from international experts, infographics and downloadable handouts.
            </p>
            <button className="bg-lime-400 hover:bg-lime-500 text-teal-900 px-6 py-3 rounded-full text-sm font-semibold transition-colors">
              Access all scientific content
            </button>
          </div>

          {/* Accordion */}
          <div className="border-t border-gray-100">
            {items.map((item, index) => (
              <div key={index} className="border-b border-gray-100">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center py-6 text-left hover:bg-gray-50 transition-colors px-2"
                >
                  <span className="text-lg font-medium text-slate-800">{item.title}</span>
                  <span className="text-teal-600">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="pb-6 px-2 text-slate-500">
                    <p>Access detailed slides, clinical case studies, and expert commentary on this topic.</p>
                    <a href="#" className="text-teal-600 font-medium text-sm mt-2 inline-block hover:underline">Download PDF</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;