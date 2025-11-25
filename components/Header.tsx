import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
             <span className="text-2xl font-semibold tracking-tight text-teal-700">
               path<span className="text-lime-500 font-bold">4</span>HCPs
             </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">MC4R Pathway</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors group flex items-center gap-1">
              IMCIVREE
              <span className="text-[10px] align-top text-gray-400">▼</span>
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
            
            <div className="flex items-center space-x-4 border-l pl-6 border-gray-200">
              <button className="text-gray-500 hover:text-teal-600">
                <Search size={20} />
              </button>
              <button className="bg-lime-400 hover:bg-lime-500 text-teal-900 px-5 py-2 rounded-full text-sm font-semibold transition-colors">
                Sign in
              </button>
              <span className="text-xs font-bold text-gray-400">INT</span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4 shadow-lg">
          <a href="#" className="block text-base font-medium text-gray-700">MC4R Pathway</a>
          <a href="#" className="block text-base font-medium text-gray-700">IMCIVREE</a>
          <a href="#" className="block text-base font-medium text-gray-700">Contact</a>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
             <button className="w-full bg-lime-400 py-2 rounded-full text-teal-900 font-semibold">Sign in</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;