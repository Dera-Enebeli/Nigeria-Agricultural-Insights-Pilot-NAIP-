import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        aria-label="Scroll to top"
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        
        {/* Arrow icon */}
        <svg
          className={`w-6 h-6 text-white mx-auto transform transition-transform duration-300 ${
            isHovered ? '-translate-y-1' : 'translate-y-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></div>
        
        {/* Tooltip */}
        <div className={`absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}>
          Back to top
          <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
        
        {/* Ripple effect on click */}
        <div className="absolute inset-0 rounded-full">
          <div className="w-full h-full rounded-full bg-white opacity-0 group-active:opacity-30 group-active:scale-150 transition-all duration-300"></div>
        </div>
      </button>
      
      {/* Decorative orbiting dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-green-300 rounded-full animate-spin" style={{ transform: 'translateX(-50%) translateY(-8px) transform-origin: center 28px', animationDuration: '3s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-green-200 rounded-full animate-spin" style={{ transform: 'translateX(-50%) translateY(8px) transform-origin: center -28px', animationDuration: '2s', animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );
};

export default ScrollToTopButton;