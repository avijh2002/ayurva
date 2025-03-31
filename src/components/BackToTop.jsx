import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

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

  const bgColor = location.pathname.startsWith('/admin') ? 'bg-blue-500' : 'bg-[#283618]';

  return (
    <button
      onClick={scrollToTop}
      className={`cursor-pointer fixed bottom-6 right-6 p-3 ${bgColor} text-white rounded-full shadow-lg transition-opacity ${
        isVisible ? 'block' : 'hidden'
      }`}
      aria-label="Back to Top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTopButton;
