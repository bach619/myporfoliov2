import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SocialIconGithub, SocialIconLinkedin, SocialIconTwitter } from './social';
import Squares from './Squares/Squares';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative py-8 transition-all duration-700 overflow-hidden">
      <div className="absolute inset-0">
        <Squares direction="right" speed={0.5} borderColor="#333" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <img 
              src="https://kphlkapuas-kahayan.info/wp-content/uploads/2025/05/Screenshot-2025-05-05-150403.png" 
              alt="Boby Logo" 
              className="h-16 w-auto opacity-90"
            />
          </div>
          
          <div className="flex space-x-6 mb-6">
            <SocialIconGithub 
              href="https://github.com/" 
              color="#ffffff"
              hoverColor="#00FF00"
              size="small"
            />
            <SocialIconLinkedin 
              href="https://linkedin.com/" 
              color="#ffffff"
              hoverColor="#00FF00"
              size="small"
            />
            <SocialIconTwitter
              href="https://twitter.com/" 
              color="#ffffff"
              hoverColor="#00FF00"
              size="small"
            />
          </div>
          
          <div className="text-center text-gray-400 mb-6">
            <p>© {new Date().getFullYear()} Boby Mihing. All rights reserved.</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-2 bg-[#00FF00] rounded-full hover:bg-[#00FF00]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00FF00] focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-black" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;