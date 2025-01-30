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
import home21 from '../asset/home21.jpg';
import home22 from '../asset/home22.jpg';
import home23 from '../asset/home23.jpg';
import home24 from '../asset/home24.jpg';
import home25 from '../asset/home25.jpg';
import image26 from '../asset/bannerhome2.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Side from '../Side/Side';

// Carousel images
const carouselImages = [
  image91, image92, image93, image94, image95, image96, image97
];

// Carousel responsive configuration
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
          <h1 className='text-6xl font-medium'>A Natural & <br /> Organic Skincare</h1>
          <button className='border border-primary-black px-8 py-4 rounded hover:text-primary-green hover:border-l-primary-green'>
            SHOP NOW
          </button>
        </aside>
      </section>

      {/* Carousel Section */}
      <section className="w-full h-58 p-20 bg-white">
        <Carousel responsive={responsive}>
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

      {/* Hero Section */}
      <section className='flex justify-center p-10 h-[600px]'>
        <article 
          className='h-[500px] w-4/5 bg-cover bg-no-repeat flex justify-start items-center' 
          style={{ 
            backgroundImage: `url(${home21})`, 
            backgroundPosition: 'left 200px center'  // Adjust left padding for the background image
          }}
        >
          <aside className='h-56 w-1/2 pl-5 font-bold space-y-8'>
            <p>JASMINE GREEN TEA</p>
            <h1 className='text-5xl font-bold'>Herbivore Botanicals Basic Collection</h1>
            <h1 className='text-base font-normal text-primary-gray3'>
              On a mission to create all-natural skin care that delivers tangible results, Herbivore ensures every ingredient within their formulas has a specific purpose, resulting in highly active.
            </h1>
            <button className='border border-primary-black px-8 py-4 rounded hover:text-primary-green hover:border-l-primary-green'>
              SHOP NOW
            </button>
          </aside>
        </article>
      </section>

      {/* Side Component */}
      <Side />

      {/* Featured Products Section */}
      <section className='flex h-96'>
        {[
          { img: home22, title: 'BAR STOOL', description: '20 Products' },
          { img: home23, title: 'ARMCHAIRS', description: '20 Products' },
          { img: home24, title: 'LIGHTING', description: '20 Products' },
          { img: home25, title: 'EASY CHAIRS', description: '20 Products' }
        ].map((link, index) => (
          <div key={index} className="text-center p-5 flex justify-between items-start w-[400px] space-y-5 bg-no-repeat bg-cover bg-center hover:text-primary-green" style={{ backgroundImage: `url(${link.img})` }}>
            <div className='space-y-5'>
              <h1 className="text-xl font-bold">{link.title}</h1>
              <p>{link.description}</p>
            </div>

            <div className='bg-primary-white p-2 rounded-full hover:bg-primary-green'>
              <ArrowForwardIcon className='text-primary-black hover:text-primary-white' />
            </div>
          </div>
        ))}
      </section>
      <div className='h-96 p-10 pb-10'>
        <div style={{ backgroundImage: `url(${image26})`, height:'400px', }}>
aniket
        </div>
</div>

    </div>
  );
}

export default Home2;
