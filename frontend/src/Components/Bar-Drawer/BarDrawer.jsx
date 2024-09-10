import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import DehazeIcon from '@mui/icons-material/Dehaze';
import image22 from '../asset/logo2.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const BarDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 350 ,backgroundColor: 'black',color: 'white',height: 1000 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
     <section className='flex flex-col justify-center items-center h-full space-x-8 space-y-6'>
     <img  className='h-[28px] w-28  ' src={image22} alt='logo'/>
     <div>
      <p>Address: Your address goes here.<br></br>
Call Us: 0123456789, 0123456789<br></br>
Email: demo@example.com</p>
     </div>
     
     <div className='space-x-10'>
          <FacebookOutlinedIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
        <div className='space-x-5'>
          <button className='hover:text-[#b19361]'>Wishlist</button>
          <button className='hover:text-[#b19361]'>Cart</button>
          <button className='hover:text-[#b19361]'>Checkout</button>
        </div>
     </section>
    </Box>
  );

  return (
    <div>
      <Button className={`text-black ${open ? 'bg-[#b19361]' : 'bg-gray-100'}`} onClick={toggleDrawer(true)}>
      <div className=' rounded-full  bg-gray-100 p-3 hover:bg-white'>
      <DehazeIcon className=' text-black hover:text-[#b19361] '/>
      </div>
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default BarDrawer;
