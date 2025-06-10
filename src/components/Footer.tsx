import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Saravana Prashanth Kamalakannan</h3>
            <p className="text-gray-400">Creative Analyst & Developer</p>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of coffee</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
          >
            Back to top
            <ArrowUp className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Saravana Prashanth Kamalakannan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;