import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const WishList = () => {
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
     WishList
     </section>
    </Box>
  );

  return (
    <div>
      <Button className={`text-black ${open ? 'bg-[#b19361]' : 'bg-gray-100'}`} onClick={toggleDrawer(true)}>
      <div className=' rounded-full   p-3 hover:bg-white'>
      <FavoriteBorderOutlinedIcon className=' text-black   hover:text-[#b19361]  '/>
      </div>
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default WishList;
