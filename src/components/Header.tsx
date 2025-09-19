import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate?: (view: 'home' | 'blog') => void;
  currentView?: 'home' | 'blog';
}

const Header = ({ onNavigate, currentView }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (currentView === 'blog') {
      // Navigate to home first, then scroll to section
      onNavigate?.('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-blue-900/95 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => onNavigate?.('home')}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src="/wilkins-logo.webp" 
                alt="Wilkins Carpet Cleaning Logo" 
                className="h-16 w-auto"
              />
            </button>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-blue-300 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-blue-300 font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-blue-300 font-medium transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-300 font-medium transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => onNavigate?.('blog')}
              className="text-white hover:text-blue-300 font-medium transition-colors"
            >
              Why Wilkins?
            </button>
          </nav>

          {/* Phone Number - Desktop */}
          <div className="hidden lg:flex items-center">
            <a 
              href="tel:252-937-3276" 
              className="flex items-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              252-937-3276
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-blue-800 border-t border-blue-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-white hover:text-blue-200 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-white hover:text-blue-200 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2 text-white hover:text-blue-200 font-medium"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-white hover:text-blue-200 font-medium"
              >
                Contact
              </button>
              <button
                onClick={() => onNavigate?.('blog')}
                className="block w-full text-left px-3 py-2 text-white hover:text-blue-200 font-medium"
              >
                Why Wilkins?
              </button>
              <a 
                href="tel:252-937-3276" 
                className="block w-full bg-yellow-400 text-blue-900 text-center px-3 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors mt-4"
              >
                <Phone className="inline h-5 w-5 mr-2" />
                Call Now: 252-937-3276
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;