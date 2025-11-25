import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const cards = [
  {
    tag: "In adults",
    tagColor: "bg-slate-700 text-white",
    title: "Look beyond the obvious to identify adults with Bardet-Biedl syndrome",
    excerpt: "Undiagnosed adults with BBS face long-term risk of potentially life-threatening complications observed in general obesity.",
    linkText: "Learn more about the clinical features",
    // Abstract cells/tissue texture - relevant to biology/syndrome
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop", 
    type: "genetic"
  },
  {
    tag: "In children",
    tagColor: "bg-pink-800 text-white",
    title: "Rare MC4R Pathway Diseases: An Urgent and Growing Concern",
    excerpt: "Early identification of the clinical features of rare MC4R pathway diseases can help aid early diagnosis and move children living with these diseases onto their appropriate care path as early as possible.",
    linkText: "See how to identify the clinical features",
    // Abstract medical/science visualization
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop",
    type: "genetic"
  },
  {
    tag: "The impact to the eyes",
    tagColor: "bg-orange-500 text-white",
    title: "Connect the dots",
    excerpt: "Early ocular involvement is one of the first and most prevalent manifestations of Bardet-Biedl syndrome, meaning Ophthalmologists are one of the first healthcare professionals exposed.",
    linkText: "Learn more about the clinical features",
    // Abstract eye/iris visualization
    image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=800&auto=format&fit=crop",
    type: "acquired"
  }
];

const InsightCards: React.FC = () => {
  const [filter, setFilter] = useState<'genetic' | 'acquired' | 'all'>('genetic'); // Simulating the tab switch

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
           <h2 className="text-4xl font-normal text-teal-700 mb-2">Genetic <span className="text-slate-800">dolor sit amet</span></h2>
           
           {/* Toggle Pills */}
           <div className="flex gap-2 mt-8">
             <button 
               onClick={() => setFilter('genetic')}
               className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${filter === 'genetic' ? 'bg-teal-700 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
             >
               Genetic
             </button>
             <button 
               onClick={() => setFilter('acquired')}
               className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${filter === 'acquired' ? 'bg-teal-700 text-white' : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50'}`}
             >
               Acquired
             </button>
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {cards.map((card, idx) => (
             <div key={idx} className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
               <div className="p-8 pb-4 flex-grow">
                 <span className={`${card.tagColor} px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider inline-block mb-4`}>
                   {card.tag}
                 </span>
                 <h3 className="text-xl font-medium text-slate-900 mb-4 group-hover:text-teal-700 transition-colors">
                   {card.title}
                 </h3>
                 <p className="text-sm text-slate-500 leading-relaxed mb-6">
                   {card.excerpt}
                 </p>
                 <a href="#" className="inline-flex items-center text-sm font-medium text-slate-700 group-hover:text-teal-600 transition-colors mt-auto">
                   {card.linkText} <ArrowRight size={16} className="ml-2" />
                 </a>
               </div>
               <div className="h-48 overflow-hidden mt-4 mx-4 mb-4 rounded-xl">
                 <img 
                   src={card.image} 
                   alt={card.title} 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                 />
               </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default InsightCards;