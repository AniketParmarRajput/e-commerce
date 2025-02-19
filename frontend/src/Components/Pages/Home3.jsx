import React, { useEffect} from 'react';
import image22 from '../asset/hom3.jpg';
import image23 from '../asset/phone.jpg';
import image24 from '../asset/wireearphone.jpg';
import image25 from '../asset/earphone.jpg';
import image26 from '../asset/homes3.jpg';
import image27 from '../asset/homesed3.jpg';

import Side from '../Side/Side';

const Home3 = () => {
 
 


  useEffect(() => {
    const section = document.getElementById('animated-section');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
      
        }
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        id="animated-section"
        className="h-screen w-full bg-cover flex justify-start items-center"
        style={{ backgroundImage: `url(${image22})` }}
      >
        <aside className="h-56 w-1/2 pl-20 space-y-4">
          <p className="animate-fadeInBottom duration-700 delay-500">NEW COLLECTION</p>
          <h1 className="text-6xl font-bold animate-fadeInBottom duration-200 delay-500">
            New Series Of <br /> Digital Watch
          </h1>
          <button className="border border-primary-black px-8 py-4 rounded hover:text-primary-Camel hover:border-primary-Camel animate-fadeInBottom duration-200 delay-500">
            SHOP NOW
          </button>
        </aside>
      </section>

      {/* Sidebar Component */}
      <Side />

      {/* Image Section */}
      <section className="h-96 flex">
  <img src={image23} className="flex-1 object-cover h-full w-full" alt="Smartphone display" />
  <img src={image25} className="flex-1 object-cover h-full w-full" alt="Wireless earphones" />
  <img src={image24} className="flex-1 object-cover h-full w-full" alt="Wired earphones" />
</section>
<section className="h-96 flex">
  <img src={image26} className="flex-1 object-cover" alt="Home design with modern aesthetics" />
  <img src={image27} className="flex-1 object-cover" alt="Elegant home setup" />
</section>

    </div>
  );
};

export default Home3;
