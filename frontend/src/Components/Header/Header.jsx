import React,{useState,useRef} from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';
import { Link,  } from 'react-router-dom';
import DehazeIcon from '@mui/icons-material/Dehaze';
import image1 from '../asset/logo.png';
import NavLink from '../NavLink/NavLink.jsx';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BarDrawer from '../Bar-Drawer/BarDrawer.jsx';
import WishList from '../WishList/WishList.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#b19361', // Example of changing secondary color to a custom orange
    },
  },
});




const Header = () => {
  const [ShowMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };


  const toggleMenu = () => {
    setShowMenu(!ShowMenu);
  };
 

 
  
  return (
    <>
 <div className='bg-primary-Off-White-Peach sticky top-0 flex justify-around items-center   p-4  '  ref={menuRef}>
  
   <img  className='h-[25px] w-25   ' src={image1} alt='logo'/>
   <NavLink/>
    <nav className=" sm:hidden md:block  flex justify-center items-center    ">
      <ul className="flex    py-2  gap-20  text-base font-medium ">
        
        
        <li className='hover:text-primary-Camel'>
          <Link to="/About">About us</Link>
        </li>
        <li className='hover:text-primary-Camel'>
          <Link to="/AddProduct">Add Products</Link>
        </li>
        <li className='hover:text-primary-Camel'>
          <Link to="/ProductList">Products</Link>
        </li>
        <li className='hover:text-primary-Camel'>
          <Link to="/Contect">Content</Link>
        </li>
      
        
       
      </ul>
    </nav>
    <div className=' flex items-center space-x-5 cursor-pointer'>
    <ThemeProvider theme={theme} className="space-x-5">
      <Stack spacing={2} direction="row">
        <Badge  badgeContent={3} color="secondary">
          <WishList color="action" />
        </Badge>
        <Badge badgeContent={3} color="secondary">
          <ShoppingCart color="action" />
        </Badge>
      </Stack>
    </ThemeProvider>
    <SearchBar/>
      <BarDrawer className="text-primary-black"/>
    </div>
    



     <nav className=' flex-1 sm:block md:hidden  py-2 '>
      <div className='flex justify-center items-center' onClick={toggleMenu}>
      <DehazeIcon/>
      </div>
      {ShowMenu &&(
        <ul className='flex flex-col justify-center items-center  border gap-2 bg-primary-white  '>
        <li >
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/Shop">Shop</Link>
        </li>
        <li>
          <Link to="/Contect">Content</Link>
        </li>
     
        
      </ul>
      )}

     </nav>
    
   
</div> 

 
  </>
  )
}

export default Header
