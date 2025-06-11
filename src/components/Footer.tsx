
import React from 'react';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/6c98830e-bba2-47cb-bb20-8342df7b6883.png" 
                alt="DotcomStudio Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-white">DotcomStudio</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Especialistas em criar experiências digitais que transformam negócios. 
              Desenvolvemos sites profissionais que vendem, conectam e impressionam.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/dotcomstudio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Início</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Serviços</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-cyan-400 transition-colors">Benefícios</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Projetos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-400">contato@dotcomstudio.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-400">São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 DotcomStudio. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
