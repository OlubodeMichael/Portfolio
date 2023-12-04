import React, { useState, useEffect } from 'react';
import  Arrow  from "../assest/arrow.svg"

export const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`flex align-center fixed bottom-8 right-8 text-white py-2 px-4  cursor-pointer transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <img src={Arrow} alt={Arrow} className="w-10 h-10"/>
    </div>
  );
};
