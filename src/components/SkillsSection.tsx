
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { 
  Shield, 
  Search, 
  Code, 
  Database, 
  Server, 
  Globe
} from "lucide-react";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay: number;
  isVisible: boolean;
}

const SkillBar = ({ name, percentage, delay, isVisible }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-cyber font-mono">{name}</span>
        <span className="text-cyber-secondary font-mono">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyber to-cyber-secondary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const SkillCard = ({ icon, title, description, delay, isVisible }: SkillCardProps) => {
  return (
    <div 
      className={cn(
        "cyber-panel hover:border-cyber/50 transition-all duration-300",
        isVisible ? "animate-fade-in" : "opacity-0"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 text-cyber">{icon}</div>
      <h3 className="text-xl font-cyber text-cyber-secondary mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills-section");
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

  const skills = [
    { name: "Penetration Testing", percentage: 95 },
    { name: "Network Security", percentage: 90 },
    { name: "Web Application Security", percentage: 92 },
    { name: "Security Analysis", percentage: 88 },
    { name: "Cryptography", percentage: 85 },
    { name: "Reverse Engineering", percentage: 80 }
  ];

  const expertiseAreas = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Security Assessment",
      description: "Comprehensive security audits and vulnerability assessments to identify weaknesses in systems and applications."
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Penetration Testing",
      description: "Ethical hacking to simulate real-world attacks and uncover security flaws before malicious actors."
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Secure Coding",
      description: "Implementing security best practices in software development to prevent common vulnerabilities."
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data Protection",
      description: "Strategies and solutions to secure sensitive information and prevent unauthorized access to critical data."
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Infrastructure Security",
      description: "Hardening servers, networks, and cloud environments against potential threats and intrusions."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Cyber Threat Intelligence",
      description: "Monitoring and analyzing emerging threats to stay ahead of potential security risks."
    }
  ];

  return (
    <section id="skills-section" className="py-20 bg-cyber-dark/50 relative cyber-grid">
      <div className="container px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-cyber mb-4 cyber-heading",
              isVisible && "animate-fade-in"
            )}
          >
            Technical Skills
          </h2>
          
          <div 
            className={cn(
              "w-20 h-1 bg-gradient-to-r from-cyber to-cyber-secondary mb-8",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.1s" }}
          ></div>
          
          <p 
            className={cn(
              "text-center max-w-2xl text-gray-300 mb-12",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            With extensive experience in cybersecurity, I've developed expertise across multiple domains of digital security.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div 
            className={cn(
              "cyber-panel", 
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-xl font-cyber text-cyber mb-8 text-center">Technical Proficiency</h3>
            <div>
              {skills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={300 + index * 150}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
          
          <div 
            className={cn(
              "cyber-panel flex flex-col justify-center",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-xl font-cyber text-cyber mb-6 text-center">Tools & Technologies</h3>
            
            <div className="grid grid-cols-3 gap-3">
              {[
                "Kali Linux", "Metasploit", "Wireshark", 
                "Burp Suite", "Nmap", "OWASP ZAP",
                "Nessus", "Aircrack-ng", "Snort",
                "IDA Pro", "Docker", "Kubernetes"
              ].map((tool, index) => (
                <div 
                  key={index}
                  className={cn(
                    "cyber-border px-3 py-2 text-center text-sm text-gray-300 hover:text-cyber hover:border-cyber/50 transition-all duration-200",
                    isVisible && "animate-fade-in"
                  )}
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <h3 
          className={cn(
            "text-2xl font-cyber text-center mb-12 cyber-heading",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "0.5s" }}
        >
          Areas of Expertise
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <SkillCard
              key={index}
              icon={area.icon}
              title={area.title}
              description={area.description}
              delay={600 + index * 100}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
