import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const FloatingCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 100px
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 lg:hidden transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
    }`}>
      <div className="relative">
        <a
          href="tel:252-937-3276"
          className="flex items-center justify-center bg-blue-700 text-white w-16 h-16 rounded-full shadow-2xl hover:bg-blue-800 transition-colors animate-pulse relative z-10"
          aria-label="Call Wilkins Carpet Cleaning"
        >
          <Phone className="h-7 w-7" />
        </a>
      
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-blue-700 animate-ping opacity-20"></div>
      </div>
    </div>
  );
};

export default FloatingCallButton;