
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import BenefitsSection from '../components/BenefitsSection';
import ProjectsSection from '../components/ProjectsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
