import React from 'react';
import Whatapp from '../SVGS/Whatapp'; // Renamed to follow PascalCase for components

const WhatsappButton = () => {
  return (
    <div 
      className="fixed bottom-5 right-5 cursor-pointer" 
      style={{ zIndex: 6 }} // No need for quotes around numeric zIndex
    >
      <a
        href="https://wa.me/918283044940?text=Hello%20how%20can%20I%20help%20you?" // Fixed 'herf' typo and encoded spaces
        target="_blank" // Corrected '_black' to '_blank'
        rel="noopener noreferrer" // Security best practice for external links
      >
        <Whatapp /> {/* Ensure component uses the correct name */}
      </a>
    </div>
  );
};

export default WhatsappButton;
