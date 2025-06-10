import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Creative Analyst &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              I craft beautiful digital experiences that blend creativity with cutting-edge technology. 
              Let's build something amazing together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToPortfolio}
              className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-900 bg-white rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <Mail className="mr-2 w-5 h-5" />
              Let's Connect
            </button>
          </div>

          <div className="flex justify-center">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center px-6 py-3 text-sm font-medium text-blue-200 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;