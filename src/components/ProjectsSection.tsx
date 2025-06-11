
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "E-commerce Moderno",
    category: "Loja Virtual",
    description: "Plataforma completa de vendas online com design responsivo e sistema de pagamento integrado.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "Stripe"],
    link: "#"
  },
  {
    title: "Landing Page Corporativa",
    category: "Institucional",
    description: "Site institucional elegante para empresa de consultoria com foco em conversão.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "Tailwind", "Analytics"],
    link: "#"
  },
  {
    title: "Portal de Serviços",
    category: "Marketplace",
    description: "Plataforma para conectar prestadores de serviços com clientes em sua região.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tech: ["Vue.js", "Laravel", "MySQL"],
    link: "#"
  },
  {
    title: "Dashboard Analytics",
    category: "Aplicação Web",
    description: "Painel de controle avançado para análise de dados e métricas de negócio.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "D3.js", "API Rest"],
    link: "#"
  },
  {
    title: "App Mobile Híbrido",
    category: "Mobile",
    description: "Aplicativo multiplataforma para gestão de tarefas e produtividade.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    tech: ["React Native", "Firebase", "Redux"],
    link: "#"
  },
  {
    title: "Sistema ERP",
    category: "Enterprise",
    description: "Solução completa para gestão empresarial com módulos integrados.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tech: ["Angular", "Spring Boot", "PostgreSQL"],
    link: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Nossos Projetos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com tecnologia de ponta e design inovador
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-cyan-500/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-cyan-400 font-medium">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 p-0 h-auto font-medium group/btn"
                >
                  Ver projeto
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
