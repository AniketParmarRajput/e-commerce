import React, { useEffect, useState, useCallback } from 'react';
import ScrollReveal from 'scrollreveal';
import { Avatar, Card, CardContent, Typography, CardMedia } from '@mui/material';

import image7 from '../asset/image7.jpg';
import image21 from '../asset/image21.jpg';
import image22 from '../asset/image22.jpg';
import image23 from '../asset/image23.jpg';
import image24 from '../asset/image24.jpg';
import ProgressBar from '../Progressbar.jsx';
import image91 from '../asset/image91.jpg'; 
import image92 from '../asset/image92.jpg'; 

const About = () => {
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
    { name: 'Ms. Veronica', role: 'Web Design', avatarUrl: '' },
    { name: 'Missa Santos', role: 'Ceo Founder', avatarUrl: '' },
    { name: 'Lisa Antonia', role: 'Frontend Developer', avatarUrl: '' },
    { name: 'Lisa Antonia', role: 'Full Stack Developer', avatarUrl: '' },
  ];

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const DeveloperCard = ({ name, role, avatarUrl }) => (
    <Card className="flex flex-col justify-center items-center w-72 h-96 m-4" sx={{ maxWidth: 500 }}>
      <CardMedia>
        <Avatar sx={{ width: 200, height: 200 }} src={avatarUrl} />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography
          className="flex justify-center items-center"
          variant="body2"
          sx={{ color: 'text.secondary' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {role}
        </Typography>
        {isHovered && (
          <Typography className="flex justify-center items-center ">
            <i className="icon icon1">🌟</i>
            <i className="icon icon2">🚀</i>
            <i className="icon icon3">🔥</i>
          </Typography>
        )}
      </CardContent>
    </Card>
  );

  

  const features = [
    { img: image21, title: 'Creative Always', description: 'Stay creative with Billey and the huge collection of premade elements, layouts & effects.' },
    { img: image22, title: 'Express Customization', description: 'Easy to install and configure the theme customization in a few clicks with Billey.' },
    { img: image23, title: 'Premium Integrations', description: 'Integrated premium plugins in Billey is the secret weapon for your business to thrive.' },
    { img: image24, title: 'Real-time Editing', description: 'Edit your work and preview the changes on the screen live with advanced page builder.' },
  ];

  return (
    <section>
      <section className="heros h-2/3 w-full flex justify-center items-center">
        <div className="flex overflow-hidden object-cover p-20 gap-10">
          <img src={image7} alt="logo" className="h-96" />
          <div className="flex flex-col justify-center items-start space-y-5 w-[500px]">
            <Typography variant="h3" className="font-bold">
              ABOUT OUR HONO STORE
            </Typography>
            <Typography variant="subtitle1">
              We believe that every project existing in the digital world is a result of an idea and every idea has a cause.
            </Typography>
            <Typography className="text-primary-gray3">
              For this reason, each design serves an idea. Our strength in design is reflected by our name, our care for details. Our specialists go the extra mile just to approach near perfection. We don't require everything to be perfect, but we need them to be perfectly cared for. That's why we are willing to contribute our best efforts. No detail is missed under Billey's professional eyes. The amount of dedication and effort equals the level of passion and determination. Get better, together as one.
            </Typography>
          </div>
        </div>
      </section>

      <section className="hero h-2/3 w-full flex justify-center items-center gap-10 bg-primary-gray">
        <div className="flex flex-col justify-center items-start h-96 space-y-5 w-[500px]">
          <Typography variant="subtitle1">
            Functionality meets perfection
          </Typography>
          <Typography className="text-primary-gray3">
            In today’s day and age, design, the art of creating striking visuals to captivate your audience, has become crucial. As the world becomes more digitized, the importance of graphic design has risen significantly.
          </Typography>
        </div>
        <div className="flex flex-col items-start">
          <ProgressBar label="UI/UX" percentage={60} />
          <ProgressBar label="Ideas" percentage={80} />
          <ProgressBar label="Design" percentage={95} />
        </div>
      </section>

      <section className="flex justify-evenly h-80">
        {features.map((feature, idx) => (
          <div key={idx} className="text-center flex flex-col justify-center items-center w-[290px] space-y-5">
            <img className="h-20" src={feature.img} alt={feature.title} />
            <Typography variant="h6" className="font-medium">{feature.title}</Typography>
            <Typography className="text-primary-gray3">{feature.description}</Typography>
          </div>
        ))}
      </section>

      <section className="h-screen w-full bg-primary-gray flex flex-col justify-center items-center">
        <Typography variant="h4" className="font-bold">Meet Our Team</Typography>
        <div className="flex flex-wrap justify-center">
          {developers.map((dev, index) => (
            <DeveloperCard key={index} name={dev.name} role={dev.role} avatarUrl={dev.avatarUrl} />
          ))}
        </div>
      </section>

      
    </section>
  );
};

export default About;
