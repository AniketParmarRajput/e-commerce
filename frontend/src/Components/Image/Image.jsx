import React, { useEffect, useRef, useState } from 'react';
// import image222 from '../asset/image222.jpg';
import data from '../data.json';

const Image = () => {
  const Datalength = data.length;
  const carouselRef = useRef(null);
  const [index, SetIndex] = useState(0);

  const handleNext = () => {
    SetIndex((prevIndex) => {
      if (index === Datalength - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handlePrev = () => {
    if (index === 0) {
      SetIndex(Datalength - 1);
    } else {
      SetIndex(index - 1);
    }
  };

  useEffect(() => {
    carouselRef.current = setInterval(handleNext, 3000);
    return () => clearInterval(carouselRef.current);
  }, [index]); // Add index as a dependency

  return (
    <div className='flex justify-center items-center h-screen m-0'>
      <div
        ref={carouselRef}
        onMouseEnter={() => clearInterval(carouselRef.current)}
        onMouseLeave={() => (carouselRef.current = setInterval(handleNext, 1000))}
        className='relative w-full h-[710px] flex justify-center items-center overflow-hidden'
      >
        <button
          onClick={handlePrev}
          className='absolute left-4 top-1/2 bg-primary-gray2 text-black rounded-3xl px-4 py-2 cursor-pointer text-2xl'
        >
          {'<'}
        </button>
        <img src={data[index].Image} alt='display' className='w-full h-full object-contain' />
        <button
          onClick={handleNext}
          className='absolute right-4 top-1/2 bg-primary-gray2 text-black rounded-3xl px-4 py-2 cursor-pointer text-2xl'
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Image;
