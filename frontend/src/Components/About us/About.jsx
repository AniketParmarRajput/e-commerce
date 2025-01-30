import React, { useEffect, } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ScrollReveal from 'scrollreveal';
import { Avatar, Card, CardContent, Typography, CardMedia } from '@mui/material';
import ProgressBar from '../Progressbar.jsx';

// Image imports
import image7 from '../asset/image7.jpg';
import image21 from '../asset/image21.jpg';
import image22 from '../asset/image22.jpg';
import image23 from '../asset/image23.jpg';
import image24 from '../asset/image24.jpg';
import image91 from '../asset/image91.jpg';
import image92 from '../asset/image92.jpg';
import image93 from '../asset/image93.jpg';
import image94 from '../asset/image94.jpg';
import image95 from '../asset/image95.jpg';
import image96 from '../asset/image96.jpg';
import image97 from '../asset/image97.jpg';
import image86 from '../asset/leader1.png';
import image87 from '../asset/leader2.png';
import image88 from '../asset/leader3.png';
import image89 from '../asset/leader4.png';

// Developer card component
const DeveloperCard = React.memo(({ name, role, avatarUrl }) => (
  <Card className="flex flex-col justify-center items-center w-72 h-96 m-4" sx={{ maxWidth: 500 }}>
    <CardMedia>
      <Avatar sx={{ width: 200, height: 200 }} src={avatarUrl} />
    </CardMedia>
    <CardContent>
      <Typography gutterBottom variant="h5">
        {name}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {role}
      </Typography>
    </CardContent>
  </Card>
));
// const CustomLeftArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="absolute left-2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 focus:outline-none"
//     style={{ top: '50%', transform: 'translateY(-50%)' }}
//   >
//     &#10094; {/* HTML code for left arrow */}
//   </button>
// );

// const CustomRightArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="absolute right-2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 focus:outline-none"
//     style={{ top: '50%', transform: 'translateY(-50%)' }}
//   >
//     &#10095; {/* HTML code for right arrow */}
//   </button>
// );

// About section
const About = () => {
  
  // Scroll Reveal Effect
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 3000,
      delay: 600,
    });

    sr.reveal('.heros');
    sr.reveal('.hero', {
      delay: 1000,
      distance: '100px',
      interval: 100,
      origin: 'top',
    });
  }, []);

  const developers = [
    { img: image86, name: 'Ms. Veronica', role: 'Web Design', avatarUrl: '' },
    { img: image87,name: 'Missa Santos', role: 'CEO Founder', avatarUrl: '' },
    { img: image88,name: 'Lisa Antonia', role: 'Frontend Developer', avatarUrl: '' },
    { img: image89,name: 'Lisa Antonia', role: 'Full Stack Developer', avatarUrl: '' },
  ];

  const features = [
    { img: image21, title: 'Creative Always', description: 'Stay creative with Billey and the huge collection of premade elements, layouts & effects.' },
    { img: image22, title: 'Express Customization', description: 'Easy to install and configure the theme customization in a few clicks with Billey.' },
    { img: image23, title: 'Premium Integrations', description: 'Integrated premium plugins in Billey is the secret weapon for your business to thrive.' },
    { img: image24, title: 'Real-time Editing', description: 'Edit your work and preview the changes on the screen live with advanced page builder.' },
  ];

  

  const carouselImages = [
    image91, image92, image93, image94, image95, image96, image97
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1250 }, items: 6 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section>
      {/* Hero Section */}
      <section className="heros flex justify-center items-center h-2/3 w-full">
        <div className="flex p-20 gap-10">
          <img src={image7} alt="logo" className="h-96 object-cover" />
          <div className="flex flex-col space-y-5 w-[500px]">
            <Typography variant="h3" className="font-bold">ABOUT OUR HONO STORE</Typography>
            <Typography variant="subtitle1">We believe that every project existing in the digital world is a result of an idea and every idea has a cause.</Typography>
            <Typography className="text-primary-gray3">
              For this reason, each design serves an idea. Our strength in design is reflected by our name, our care for details. Our specialists go the extra mile just to approach near perfection.
            </Typography>
          </div>
        </div>
      </section>

      {/* About Text with Progress Bars */}
      <section className="hero flex justify-center items-center gap-10 h-2/3 w-full bg-primary-gray">
        <div className="flex flex-col space-y-5 w-[500px]">
          <Typography variant="subtitle1">Functionality meets perfection</Typography>
          <Typography className="text-primary-gray3">
            As the world becomes more digitized, the importance of graphic design has risen significantly.
          </Typography>
        </div>
        <div className="flex flex-col items-start">
          <ProgressBar label="UI/UX" percentage={60} />
          <ProgressBar label="Ideas" percentage={80} />
          <ProgressBar label="Design" percentage={95} />
        </div>
      </section>

      {/* Features Section */}
      <section className="flex justify-evenly h-80">
        {features.map((feature, idx) => (
          <div key={idx} className="text-center flex flex-col justify-center items-center w-[290px] space-y-5">
            <img src={feature.img} alt={feature.title} className="h-20" />
            <Typography variant="h6" className="font-medium">{feature.title}</Typography>
            <Typography className="text-primary-gray3">{feature.description}</Typography>
          </div>
        ))}
      </section>

      {/* Meet Our Team */}
      <section className="flex flex-col justify-center items-center h-screen w-full bg-primary-gray">
        <Typography variant="h4" className="font-bold">Meet Our Team</Typography>
        <div className="flex flex-wrap justify-center">
          {developers.map((dev, index) => (
            <DeveloperCard key={index} name={dev.name} role={dev.role} avatarUrl={dev.img} />
          ))}
        </div>
      </section>

      {/* Carousel Section */}
      <section className="w-full h-72 p-20 bg-white">
        <Carousel responsive={responsive} className="">
          {carouselImages.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`carousel-image-${index}`} height={100} width={100} />
            </div>
          ))}
        </Carousel>
      </section>
    </section>
  );
};

export default About;
