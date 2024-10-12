import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
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

  // Function to toggle drawer
  const toggleDrawer = (newOpen) => (event) => {
    // Ensure the event is handled properly
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 350, backgroundColor: 'black', color: 'white', height: '100%' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <section className="flex flex-col justify-center items-center h-full space-y-6">
        {/* Logo */}
        <img className="h-[28px] w-28" src={image22} alt="logo" />

        {/* Contact Info */}
        <div>
          <p>
            Address: Your address goes here.<br />
            Call Us: 0123456789, 0123456789<br />
            Email: demo@example.com
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="space-x-10">
          <FacebookOutlinedIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>

        {/* Navigation Links */}
        <div className="space-x-5">
          <Link to="/wishlist">
            <button className="hover:text-[#b19361]">Wishlist</button>
          </Link>

          <Link to="/cart">
            <button className="hover:text-[#b19361]">Cart</button>
          </Link>

          <Link to="/checkout">
            <button className="hover:text-[#b19361]">Checkout</button>
          </Link>
        </div>
      </section>
    </Box>
  );

  return (
    <div>
      <Button className={`text-black ${open ? 'bg-[#b19361]' : 'bg-gray-100'}`} onClick={toggleDrawer(true)}>
        <div className="rounded-full bg-gray-100 p-3 hover:bg-white">
          <DehazeIcon className="text-black hover:text-[#b19361]" />
        </div>
      </Button>

      {/* Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default BarDrawer;
