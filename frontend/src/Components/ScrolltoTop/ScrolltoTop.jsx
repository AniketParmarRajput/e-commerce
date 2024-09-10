import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This adds a smooth scroll effect
    });
  };

  return (
    <div className="fixed bottom-5 left-5">
      <button
        onClick={scrollToTop}
        className="bg-primary-Camel p-4 border-none rounded-full text-primary-white hover:bg-primary-Camel transition duration-300"
      >
        <ArrowUpwardIcon />
      </button>
    </div>
  );
};

export default ScrollToTop;


