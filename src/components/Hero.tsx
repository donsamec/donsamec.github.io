import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg)',
          backgroundPosition: 'center 30%'
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Hero content */}
      <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Capturing Moments <span className="text-gray-200">That Last Forever</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Award-winning photography that tells stories and preserves memories in their most authentic form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#gallery" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              View Gallery
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#gallery" className="flex flex-col items-center">
          <span className="mb-2 text-sm font-medium">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;