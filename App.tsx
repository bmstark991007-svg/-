import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ServiceInfo from './components/ServiceInfo';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import SocialShowcase from './components/SocialShowcase';
import ContactBanner from './components/ContactBanner';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-[#f2f4f6] text-[#191f28] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Hero />
      <div className="relative z-10 -mt-10 rounded-t-[2.5rem] bg-[#f2f4f6] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <Features />
        <ServiceInfo />
        <Portfolio />
        <Testimonials />
        <SocialShowcase />
        <ContactBanner />
        <Footer />
      </div>
      <FloatingCTA />
    </main>
  );
};

export default App;