
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Mail, MessageCircle, AtSign } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("contact-section");
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
    <section id="contact-section" className="py-20 relative cyber-grid">
      <div className="container px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-cyber mb-4 cyber-heading",
              isVisible && "animate-fade-in"
            )}
          >
            Connect With Me
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
            Interested in working together or have a security concern? Reach out through any of the following channels.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div 
            className={cn(
              "cyber-panel", 
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-xl font-cyber text-cyber mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-1 font-mono">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gray-900/70 border border-cyber/30 rounded-md px-3 py-2 text-white focus:outline-none focus:border-cyber focus:ring-1 focus:ring-cyber/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-1 font-mono">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-900/70 border border-cyber/30 rounded-md px-3 py-2 text-white focus:outline-none focus:border-cyber focus:ring-1 focus:ring-cyber/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-1 font-mono">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-gray-900/70 border border-cyber/30 rounded-md px-3 py-2 text-white focus:outline-none focus:border-cyber focus:ring-1 focus:ring-cyber/50"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-cyber/10 hover:bg-cyber/20 text-cyber border border-cyber/30 px-6 py-3 rounded-md transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,65,0.5)] w-full font-mono"
              >
                SEND SECURE MESSAGE
              </button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div 
              className={cn(
                "cyber-panel",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-xl font-cyber text-cyber-secondary mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-cyber mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-mono">Email</p>
                    <p className="text-cyber">contact@0xmohamed.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <AtSign className="text-cyber mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-mono">Social</p>
                    <p className="text-cyber">@0xmohamed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className={cn(
                "cyber-panel", 
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: "0.5s" }}
            >
              <h3 className="text-xl font-cyber text-cyber-secondary mb-4">Secure Communication</h3>
              <p className="text-gray-300 mb-4">
                For sensitive communications, please use my PGP key available on my GitHub profile.
              </p>
              <div className="flex justify-center">
                <button className="bg-cyber-secondary/10 hover:bg-cyber-secondary/20 text-cyber-secondary border border-cyber-secondary/30 px-4 py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,119,255,0.5)] font-mono text-sm">
                  DOWNLOAD PGP KEY
                </button>
              </div>
            </div>
            
            <div 
              className={cn(
                "cyber-panel", 
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center mb-4">
                <MessageCircle className="text-cyber mr-3 flex-shrink-0" />
                <h3 className="text-xl font-cyber text-cyber-secondary">Response Time</h3>
              </div>
              <p className="text-gray-300">
                I typically respond to inquiries within 24-48 hours. For urgent security matters, please indicate so in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
