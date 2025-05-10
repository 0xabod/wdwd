
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import { Shield } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    document.title = "0xmohamed | Cybersecurity Expert";
  }, []);

  return (
    <div className="relative min-h-screen matrix-bg">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber/20">
        <div className="container px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="h-6 w-6 mr-2 text-cyber" />
            <span className="font-cyber text-cyber text-xl">0xmohamed</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-cyber transition-colors font-mono">Home</a>
            <a href="#about-section" className="text-gray-300 hover:text-cyber transition-colors font-mono">About</a>
            <a href="#skills-section" className="text-gray-300 hover:text-cyber transition-colors font-mono">Skills</a>
            <a href="#contact-section" className="text-gray-300 hover:text-cyber transition-colors font-mono">Contact</a>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-cyber transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      <footer className="bg-cyber-dark py-8 border-t border-cyber/20">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-5 w-5 mr-2 text-cyber" />
              <span className="font-cyber text-cyber">0xmohamed</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">© {new Date().getFullYear()} 0xmohamed. All rights reserved.</p>
              <p className="text-gray-500 text-xs">Security first. Always.</p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Binary Rain Animation Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i}
            className="absolute text-cyber/5 text-xs opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-50px`,
              animation: `matrix-rain ${2 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {Array.from({ length: 25 }).map((_, j) => (
              <div key={j}>
                {Math.random() > 0.5 ? "1" : "0"}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
