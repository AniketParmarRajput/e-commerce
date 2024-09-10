import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
const ShoppingCart = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 350 ,backgroundColor: 'white',color: 'black',height: '100vh' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
     <section className='flex justify-center items-center h-80 font-semibold'>
     Shopping Cart
     </section>
    </Box>
  );

  return (
    <div>
      <Button className={`text-black ${open ? 'bg-primary-Camel' : 'bg-primary-gray'}`} onClick={toggleDrawer(true)}>
      <div className=' rounded-full  p-3 hover:bg-primary-white'>
      <ShoppingBagOutlinedIcon className='text-primary-black hover:text-primary-Camel '/>
      </div>
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default ShoppingCart;
