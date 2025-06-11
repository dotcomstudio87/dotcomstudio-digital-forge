
import React from 'react';
import { ArrowRight, MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-3xl p-12 border border-gray-600 backdrop-blur-sm">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Pronto para decolar?
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transforme sua ideia em uma <span className="text-cyan-400 font-semibold">experiência digital</span> que seus clientes vão amar
            </p>
            
            <div className="bg-gray-800/50 rounded-2xl p-6 mb-8 border border-gray-700">
              <p className="text-lg text-gray-300 italic">
                "Cada grande jornada digital começa com um único clique. 
                <span className="text-cyan-400 font-semibold"> O seu momento é agora.</span>"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 group min-w-fit"
              >
                <MessageCircle className="mr-3 w-6 h-6" />
                Solicitar Orçamento Gratuito
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors">
                <MessageCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">WhatsApp</span>
              </div>
              
              <div className="flex items-center justify-center space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">contato@dotcomstudio.com</span>
              </div>
              
              <div className="flex items-center justify-center space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default CTASection;
