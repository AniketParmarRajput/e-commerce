import React from 'react';
import home2 from '../asset/home2.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image91 from '../asset/image91.jpg';
import image92 from '../asset/image92.jpg';
import image93 from '../asset/image93.jpg';
import image94 from '../asset/image94.jpg';
import image95 from '../asset/image95.jpg';
import image96 from '../asset/image96.jpg';
import image97 from '../asset/image97.jpg';
import image82 from '../asset/image82.jpg';
import image83 from '../asset/image83.jpg';
import image84 from '../asset/image84.jpg';

const carouselImages = [
  image91, image92, image93, image94, image95, image96, image97
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1250 }, items: 6 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Home2 = () => {
  return (
    <div>
      {/* Background Section */}
      <section className='h-screen w-full bg-cover flex justify-start items-center' style={{ backgroundImage: `url(${home2})` }}>
        <aside className='h-56 w-1/2 pl-20 space-y-4'>
          <p>MADE OF FRESH INGREDIENTS</p>
          <h1 className='text-6xl font-medium'>A Natural & <br />Organic Skincare</h1>
          <button className='border border-primary-black px-8 py-4 rounded hover:text-primary-green hover:border-l-primary-green'>
            SHOP NOW
          </button>
        </aside>
      </section>

      {/* Carousel Section */}
      <section className="w-full h-58 p-20 bg-white">
        <Carousel responsive={responsive} className="">
          {carouselImages.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Product ${index + 1}`} height={100} width={100} />
            </div>
          ))}
        </Carousel>
      </section>

      {/* Image Grid Section */}
      <section className="h-72 w-full flex justify-center items-center gap-7">
  {[
    { id: 1, src: image82, alt: "First Decorative Element" },
    { id: 2, src: image83, alt: "Second Decorative Element" },
    { id: 3, src: image84, alt: "Third Decorative Element" },
  ].map((image) => (
    <img
      key={image.id}
      className="h-52 w-34 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:opacity-90"
      src={image.src}
      alt={image.alt}
    />
  ))}
</section>

    </div>
  );
}

export default Home2;
