import React from 'react';
import { Download } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import { SocialIconGithub, SocialIconLinkedin, SocialIconTwitter } from '../components/social';
import Typewriter from '../components/Typewriter';
import Stats from '../components/Stats';
import HeroImage from '../components/HeroImage';

const HeroMobile: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative min-h-screen bg-black flex flex-col"
    >
      <ParticlesBackground />
      
      {/* Main content container with increased top padding */}
      <div className="relative z-20 flex-1 w-full flex flex-col items-center pt-12 px-4">
        {/* Content wrapper with adjusted spacing */}
        <div className="flex-1 w-full flex flex-col items-center justify-center mb-6">
          {/* Hero Image */}
          <div className="w-2/5 max-w-[160px] mb-8">
            <HeroImage 
              src="https://kphlkapuas-kahayan.info/wp-content/uploads/2025/05/upscalemedia-transformed.png"
              alt="Boby Mihing"
              width={160}
              height={160}             
            />
          </div>
          
          {/* Name and Title Section */}
          <div className="w-full mb-6 text-center">
            <h2 className="text-lg font-medium text-gray-300 mb-1">Hello I'm</h2>
            <h1 className="text-2xl font-extrabold mb-3">
              <span className="text-white">BOBY</span>
              <span className="text-[#00FF99] px-1 animate-pulse">_MIHING</span>
            </h1>
            
            {/* Typewriter roles */}
            <div className="h-[30px] mb-2">
              <Typewriter 
                text={[
                  "Full-Stack Developer & UX Designer",
                  "Frontend Developer",
                  "Backend Developer",
                  "UI/UX Designer"
                ]}
                className="text-base font-medium text-gray-400"
                speed={70}
              />
            </div>
            
            {/* Typewriter description */}
            <div className="h-[50px] mx-auto max-w-sm">
              <Typewriter 
                text={[
                  "I create exceptional digital experiences that blend innovative design with cutting-edge technology.",
                  "Building scalable and performant web applications with modern technologies.",
                  "Crafting beautiful and intuitive user interfaces for seamless experiences.",
                  "Turning complex problems into simple, elegant solutions."
                ]}
                delay={2500}
                speed={30}
                className="text-xs text-gray-300"
              />
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="w-full max-w-[220px] flex flex-col items-center gap-3 mb-8">
            <a 
              href="#contact" 
              className="w-full px-5 py-2 bg-[#398400] hover:bg-[#00FF00]/90 text-white text-sm rounded-full transition-colors duration-300 flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </a>
            
            <a 
              href="/resume.pdf" 
              className="w-full px-5 py-2 border border-[#00FF00] text-[#00FF00] text-sm hover:bg-[#00FF00]/10 rounded-full transition-all duration-300 flex items-center justify-center"
              download
            >
              <Download size={14} className="mr-2" />
              Resume
            </a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-4">
            <SocialIconGithub 
              href="https://github.com/"
              color="#50B106"
              hoverColor="#00FF00"
              size="small"
            />
            <SocialIconLinkedin 
              href="https://linkedin.com/"
              color="#50B106"
              hoverColor="#00FF00"
              size="small"
            />
            <SocialIconTwitter 
              href="https://twitter.com/"
              color="#50B106"
              hoverColor="#00FF00" 
              size="small"
            />
          </div>
        </div>
        
        {/* Stats Section - Moved up with negative margin */}
        <div className="w-full -mt-6">
          <Stats 
            experience={12}
            projects={206}
            skills={16}
            commits={+5000}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;