
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image8 from '../asset/imag3.jpg';
import image9 from '../asset/image4.jpg';
import image99 from '../asset/image99.jpg';

const SliderCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Change slide every 5 seconds
  };

  const slides = [
    { img: image8, title: 'BAR STOOL', description: '20 Products' },
    { img: image9, title: 'ARMCHAIRS', description: '20 Products' },
    { img: image8, title: 'LIGHTING', description: '20 Products' },
    { img: image99, title: 'EASY CHAIRS', description: '20 Products' },
  ];

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className=" h-96 w-11/12 mx-auto">
      <Slider  ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          // <div
          //   key={index}
          //   className=" relative text-center p-5 flex justify-between items-start w-full h-96 bg-no-repeat bg-cover bg-center hover:text-[#b19361] border border-red-800"
          //   style={{ backgroundImage: `url(${slide.img})` }}
          // >
            
            <div key={index} className="h-96 space-y-5">
              <h1 className="text-xl font-bold">{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          // </div>
        ))}
      </Slider>

      {/* Prev Button */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        onClick={goToPrev}
      >
        Prev
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        onClick={goToNext}
      >
        Next
      </button>
    </div>
  );
};

export default SliderCarousel;
