
import React from 'react';
import { Users, Shield, Clock, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: "Alcance Novos Clientes",
    description: "Expanda seu negócio além das fronteiras físicas e alcance clientes em qualquer lugar do mundo.",
    stat: "70% mais"
  },
  {
    icon: Shield,
    title: "Credibilidade Profissional",
    description: "Um site profissional transmite confiança e seriedade, essenciais para converter visitantes em clientes.",
    stat: "85% confiança"
  },
  {
    icon: Clock,
    title: "Presença 24/7",
    description: "Seu negócio funcionando 24 horas por dia, 7 dias por semana, mesmo quando você está dormindo.",
    stat: "24/7 online"
  },
  {
    icon: TrendingUp,
    title: "Crescimento Acelerado",
    description: "Ferramentas digitais que impulsionam suas vendas e aceleram o crescimento do seu negócio.",
    stat: "3x crescimento"
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Por que estar online?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            <span className="text-cyan-400 font-semibold">"Se não está na internet, sua empresa está invisível."</span>
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Descubra como uma presença digital profissional pode transformar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-cyan-400" />
                </div>
                
                <div className="text-3xl font-bold text-cyan-400 mb-4">
                  {benefit.stat}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para transformar seu negócio?
            </h3>
            <p className="text-gray-300 mb-6">
              Não deixe seus concorrentes saírem na frente. Comece sua jornada digital hoje mesmo.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              Quero meu site agora!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
