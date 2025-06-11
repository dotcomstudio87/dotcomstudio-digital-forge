
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">DS</span>
            </div>
            <span className="text-xl font-bold">DotcomStudio</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Início</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Serviços</a>
            <a href="#benefits" className="hover:text-cyan-400 transition-colors">Benefícios</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projetos</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contato</a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Início</a>
              <a href="#services" className="hover:text-cyan-400 transition-colors">Serviços</a>
              <a href="#benefits" className="hover:text-cyan-400 transition-colors">Benefícios</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projetos</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contato</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
