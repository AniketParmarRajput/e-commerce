import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 6; // Display 6 images at a time

  const nextSlide = () => {
    if (currentIndex + imagesPerSlide < images.length) {
      setCurrentIndex(currentIndex + imagesPerSlide);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - imagesPerSlide);
    }
  };

  return (
    <div className="relative flex items-center justify-center py-8">
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-0 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 focus:outline-none"
        disabled={currentIndex === 0}
      >
        &#10094;
      </button>

      {/* Image Container */}
      <div className="overflow-hidden w-full">
        <div
          className="flex space-x-6 transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100 / imagesPerSlide}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-[14.285%] flex justify-center">
              <img src={image} alt={`Slide ${index}`} className="max-w-[100px] object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 focus:outline-none"
        disabled={currentIndex + imagesPerSlide >= images.length}
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
