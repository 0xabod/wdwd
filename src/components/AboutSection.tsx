
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Lock, Fingerprint, Shield } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about-section");
      if (!element) return;
      
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about-section" className="py-20 relative cyber-grid">
      <div className="container px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-cyber mb-4 cyber-heading",
              isVisible && "animate-fade-in"
            )}
          >
            About Me
          </h2>
          
          <div 
            className={cn(
              "w-20 h-1 bg-gradient-to-r from-cyber to-cyber-secondary mb-8",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.1s" }}
          ></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div 
            className={cn(
              "cyber-panel",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-xl font-cyber text-cyber mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              I am 0xmohamed, a dedicated cybersecurity professional specializing in ethical hacking and security research. With a passion for uncovering vulnerabilities and strengthening digital defenses, I work to protect systems against evolving cyber threats.
            </p>
            <p className="text-gray-300">
              My expertise spans penetration testing, vulnerability assessment, and implementing robust security measures. I believe in responsible disclosure and collaborate with organizations to enhance their security posture.
            </p>
          </div>
          
          <div className="space-y-6">
            <div 
              className={cn(
                "cyber-panel flex items-start",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: "0.3s" }}
            >
              <Lock className="text-cyber mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-cyber text-cyber-secondary mb-2">Security First</h3>
                <p className="text-gray-300">
                  I approach every project with security as the top priority, ensuring that protective measures are built into systems from the ground up.
                </p>
              </div>
            </div>
            
            <div 
              className={cn(
                "cyber-panel flex items-start",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: "0.4s" }}
            >
              <Fingerprint className="text-cyber mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-cyber text-cyber-secondary mb-2">Attention to Detail</h3>
                <p className="text-gray-300">
                  Security vulnerabilities often hide in the smallest details. My meticulous approach helps identify and address potential weaknesses.
                </p>
              </div>
            </div>
            
            <div 
              className={cn(
                "cyber-panel flex items-start", 
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: "0.5s" }}
            >
              <Shield className="text-cyber mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-cyber text-cyber-secondary mb-2">Continuous Learning</h3>
                <p className="text-gray-300">
                  The cybersecurity landscape evolves rapidly. I stay at the forefront through continuous research and skill development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
