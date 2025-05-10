
import { useEffect, useState } from "react";
import Terminal from "./Terminal";
import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const commands = [
    "Initializing security protocols...",
    "Running vulnerability scan...",
    "Accessing secured systems...",
    "Bypassing firewall...",
    "Decrypting data packets...",
    "Welcome to 0xmohamed's security domain",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative cyber-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-cyber/5 text-xs opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `matrix-rain ${2 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {Array.from({ length: 10 }).map((_, j) => (
              <div key={j}>
                {Math.random() > 0.5 ? "1" : "0"}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="container px-4 flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center mb-4">
          <Shield className="h-10 w-10 mr-2 text-cyber" />
          <span className="text-xl text-cyber font-cyber">SECURITY EXPERT</span>
        </div>
        
        <h1 
          className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-cyber font-bold mb-4",
            "cyber-heading glitch-effect",
            isLoaded && "animate-fade-in"
          )}
          data-text="0xmohamed"
        >
          0xmohamed
        </h1>
        
        <p 
          className={cn(
            "text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl",
            isLoaded && "animate-fade-in"
          )}
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-cyber">Cybersecurity Expert</span> | Ethical Hacker | Security Researcher
        </p>
        
        <div 
          className={cn(
            "w-full max-w-xl mx-auto mb-8",
            isLoaded && "animate-fade-in"
          )}
          style={{ animationDelay: "0.4s" }}
        >
          <Terminal commands={commands} typingSpeed={40} className="mx-auto" startDelay={800} />
        </div>
        
        <div 
          className={cn(
            "flex flex-wrap justify-center gap-4",
            isLoaded && "animate-fade-in"
          )}
          style={{ animationDelay: "0.6s" }}
        >
          <button className="bg-cyber/10 hover:bg-cyber/20 text-cyber border border-cyber/30 px-6 py-3 rounded-md transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,65,0.5)]">
            My Projects
          </button>
          <button className="bg-cyber-secondary/10 hover:bg-cyber-secondary/20 text-cyber-secondary border border-cyber-secondary/30 px-6 py-3 rounded-md transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,119,255,0.5)]">
            Contact Me
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-cyber/50 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-6 border-r-2 border-b-2 border-cyber/50 transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
