// src/components/HeroSection.jsx

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const HeroSection = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 3000,
      delay: 600,
    });

    sr.reveal('.hero__text');
  }, []);  // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="hero__section">
      <div className="hero__text">
        {/* Your animated content here */}
        <h1>Welcome to Our Site</h1>
        <p>Discover amazing content as you scroll down.</p>
      </div>
    </div>
  );
};

export default HeroSection;
