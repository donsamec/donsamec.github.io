import React from 'react';
import { Camera, Award, Map, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Camera />, value: '10+', label: 'Years Experience' },
    { icon: <Award />, value: '250+', label: 'Projects Completed' },
    { icon: <Map />, value: '15+', label: 'Countries Visited' },
    { icon: <Users />, value: '120+', label: 'Happy Clients' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg aspect-[4/5] shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                alt="Photographer at work" 
                className="w-full h-full object-cover"
              />
              {/* Image overlay decoration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-100 dark:bg-gray-700 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-gray-200 dark:border-gray-600 rounded-lg -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">About Me</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Passionate About Capturing Life's Moments</h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                I'm a professional photographer with over 10 years of experience capturing stunning images across various styles and environments. My passion lies in finding beauty in everyday moments and turning them into timeless memories.
              </p>
              <p>
                My approach combines technical expertise with artistic vision to create photographs that tell stories and evoke emotions. Whether it's a breathtaking landscape, a candid portrait, or a detailed architectural study, I bring the same level of dedication and creativity to every project.
              </p>
              <p>
                I've had the privilege of working with clients worldwide, from individuals seeking personal portraits to major publications and brands requiring commercial photography. Each project presents a unique opportunity to create something special.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;