
import React from 'react';
import { Globe, PenTool, Wrench, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Sites profissionais que transmitem credibilidade e apresentam sua empresa de forma impactante no digital.",
    features: ["Design responsivo", "SEO otimizado", "Carregamento rápido"]
  },
  {
    icon: PenTool,
    title: "Landing Pages",
    description: "Páginas de conversão focadas em resultados, ideais para campanhas e captação de leads.",
    features: ["Alta conversão", "Integração com ferramentas", "A/B Testing"]
  },
  {
    icon: Smartphone,
    title: "Sites Responsivos",
    description: "Sites que se adaptam perfeitamente a todos os dispositivos, oferecendo a melhor experiência em qualquer tela.",
    features: ["Mobile-first", "Design adaptável", "Performance otimizada"]
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description: "Suporte técnico contínuo para manter seu site sempre atualizado, seguro e funcionando perfeitamente.",
    features: ["Backup automático", "Atualizações", "Suporte 24/7"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções digitais completas para transformar sua presença online e impulsionar seus negócios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/10">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-cyan-400" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
