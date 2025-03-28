import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`cursor-pointer fixed bottom-6 right-6 p-3 bg-[#283618] text-white rounded-full shadow-lg transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-label="Back to Top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTopButton;
