import React,{useState,useEffect} from 'react'
import image5 from '../asset/image.jpg';
import image6 from '../asset/image1.jpg';
import image7 from '../asset/image2.jpg';
import image8 from '../asset/imag3.jpg';
import image9 from '../asset/image4.jpg';
import image99 from '../asset/image99.jpg';
import image55 from '../asset/image55.jpg';
import image66 from '../asset/image66.jpg';
import image77 from '../asset/image77.jpg';
import image88 from '../asset/image88.jpg';
import image12 from '../asset/image12.jpg';
import image13 from '../asset/image13.jpg';
import image14 from '../asset/image14.jpg';
import image15 from '../asset/image15.jpg';
import image16 from '../asset/image16.jpg';
import image17 from '../asset/image17.jpg';
import image222 from '../asset/image222.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Side from '../Side/Side';
import Product from '../Product/Product.jsx';


const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById('animated-section');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div>
      {/* <SliderCarousel/> */}
      <section className='h-screen w-full bg-cover  flex justify-start items-center  ' style={{backgroundImage:`url(${image222})`}}>
<aside className=' h-56 w-1/2 pl-20 space-y-4 '>
  <p className='animate-fadeInBottom duration-700 delay-5s'>NEW COLLECTION</p>
  <h1 className='text-6xl font-medium animate-fadeInBottom duration-200 delay-[59.3s]' >Best Of NeoCon <br></br>Glod Award</h1>
  <button className='border border-primary-black px-8 py-4 rounded hover:text-primary-Camel hover:border-primary-Camel animate-fadeInBottom duration-200 delay-[59.3s]'>SHOP NOW</button>

</aside>
      </section>
      <Side />
    <div
      id="animated-section"
      className={`h-96 flex m-20 ${
        isVisible ? 'animate-fadeInBottom duration-200 delay-[59.3s]' : 'opacity-0'
      }`}
    >
      <div
        className="flex-1 bg-cover h-96 w-2/3 flex justify-center items-center"
        style={{ backgroundImage: `url(${image5})` }}
      >
        <div className="h-auto w-72 ml-40 p-5 space-y-7">
          <h1 className="text-3xl text-left">
            Mini rechargeable Table Lamp - <br />
            E216
          </h1>
          <p>WE DESIGN YOUR HOME</p>
          <button className="border border-black border-3 p-5">DISCOVER NOW</button>
        </div>
      </div>

      <div className="flex-1 space-y-14">
        <div className="flex justify-evenly">
          <div
            className="flex bg-cover h-40 w-80"
            style={{ backgroundImage: `url(${image6})` }}
          >
            <div className="h-auto w-72 ml-40 pt-5 space-y-6">
              <h1 className="text-2xl text-left">Kitchen utensils</h1>
              <button>SHOP ME</button>
            </div>
          </div>
          <div
            className="flex bg-cover h-40 w-80"
            style={{ backgroundImage: `url(${image7})` }}
          >
            <div className="h-auto w-72 ml-40 pt-5 space-y-6">
              <h1 className="text-2xl text-left">Sofas and Armchairs</h1>
              <button>SHOP ME</button>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div
            className="flex bg-cover h-40 w-80"
            style={{ backgroundImage: `url(${image8})` }}
          >
            <div className="h-auto w-72 ml-40 pt-5 space-y-6">
              <h1 className="text-2xl text-left">Chair & Bar stools</h1>
              <button>SHOP ME</button>
            </div>
          </div>
          <div
            className="flex bg-cover h-40 w-80"
            style={{ backgroundImage: `url(${image9})` }}
          >
            <div className="h-auto w-72 ml-40 pt-5 space-y-6">
              <h1 className="text-2xl text-left">Interior lighting</h1>
              <button>SHOP ME</button>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div>
    <div className='pl-[100px]'>
      <h1 className='text-2xl'>THE NEW ARRIVALS</h1>
      <p>Preorder now to receive exclusive deals & gifts</p>
    </div>
<div>
  
</div>
    </div>
    <div>
<Product />
    </div>
    


    <section className='h-svh w-auto flex justify-center items-center'>
    <div className=' flex-1 bg-contain bg-center bg-no-repeat h-2/3 w-auto flex justify-center items-center ' style={{backgroundImage:`url(${image99})`}}>
    <div  className='   h-auto w-auto ml-40 p-5 space-y-7'>
      <h1 className="  text-5xl font-semibold">Modern Furniture<br></br> Basic Collection</h1>
      <p className='text-xl'>We design your home more beautiful
      </p>
      <button className='border border-primary-black border-3 p-5 '>DISCOVER NOW</button>
      </div>
    </div>

    </section>
    <section className='flex  h-96 '>
      {
        [{ img: image55, title: 'BAR STOOL', description: '20 Products' },
          { img: image66, title: 'ARMCHAIRS', description: '20 Products' },
          { img: image77, title: 'LIGHTING', description: '20 Products' },
          { img: image88, title: 'EASY CHAIRS', description: '20 Products' },

        ].map((link, index)=>(
        <div key={index} className="text-center  p-5 flex  justify-between items-start w-[400px] space-y-5 bg-no-repeat bg-cover bg-center  hover:text-primary-Camel" style={{backgroundImage:`url(${link.img})`}} >
          <div className='space-y-5'>
            <h1 className="text-xl font-bold">{link.title}</h1>
            <p>{link.description}</p>
            </div>

            <div className='bg-primary-white p-2 rounded-full hover:bg-primary-Camel'>
          <ArrowForwardIcon className='text-primary-black hover:text-primary-white'/>
            </div>
          </div>


        ))
      }
    </section>
    <section className='relative h-80 w-full p-20 bg-primary-gray flex justify-center items-center'>
  {
    [{ img: image12 },
      { img: image13 },
      { img: image14 },
      { img: image15 },
      { img: image16 },
      { img: image17 },
    ].map((link, index) => (
      <div 
        key={index} 
        className="text-center h-44 w-full p-5 flex space-y-5 bg-no-repeat bg-cover bg-center hover:text-primary-Camel" 
        style={{ backgroundImage: `url(${link.img})` }}
      >
      </div>
    ))
  }

  {/* Button */}
  <button 
    className="absolute z-50 bg-primary-white  text-lg px-4 py-2 rounded-md "
    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
  >
    HONOTEMOLATE
  </button>
</section>




    </div>
    
    
    

  
  )
}

export default Home


