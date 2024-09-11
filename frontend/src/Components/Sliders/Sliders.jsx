import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 6; // Display 6 images at a time
  const totalImages = images.length;

  const nextSlide = () => {
    if (currentIndex + imagesPerSlide < totalImages) {
      setCurrentIndex(currentIndex + imagesPerSlide);
    } else {
      setCurrentIndex(totalImages - imagesPerSlide); // Move to the last set of images
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - imagesPerSlide);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full py-8">
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
          style={{ transform: `translateX(-${(currentIndex / imagesPerSlide) * 100}%)` }}
        >
          {images.slice(currentIndex, currentIndex + imagesPerSlide).map((image, index) => (
            <div key={index} className="flex justify-center w-1/6">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="object-contain"
                style={{ width: '100px', height: '100px' }}  
              />
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 focus:outline-none"
        disabled={currentIndex + imagesPerSlide >= totalImages}
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
