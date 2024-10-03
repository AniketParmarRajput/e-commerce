import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DehazeIcon from '@mui/icons-material/Dehaze';
import image1 from '../asset/logo.png';
import NavLink from '../NavLink/NavLink.jsx';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BarDrawer from '../Bar-Drawer/BarDrawer.jsx';
import WishList from '../WishList/WishList.jsx';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#b19361', // Custom secondary color
    },
  },
});

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className="bg-primary-Off-White-Peach sticky top-0 flex justify-between items-center p-4 z-50">
      {/* Logo Section */}
      <img className="h-[25px] w-[100px]" src={image1} alt="logo" />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-grow justify-center items-center">
        <NavLink />
        <ul className="flex gap-10 py-2 text-base font-medium">
          <li className="hover:text-primary-Camel">
            <Link to="/About">About Us</Link>
          </li>
          <li className="hover:text-primary-Camel">
            <Link to="/AddProduct">Add Products</Link>
          </li>
          <li className="hover:text-primary-Camel">
            <Link to="/ProductList">Products</Link>
          </li>
          <li className="hover:text-primary-Camel">
            <Link to="/Contect">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Right Section: Icons & Search */}
      <div className="flex items-center space-x-5">
        <ThemeProvider theme={theme}>
          <Stack spacing={2} direction="row">
            <Badge badgeContent={3} color="secondary">
              <WishList color="action" />
            </Badge>
            <Badge badgeContent={3} color="secondary">
              <ShoppingCart color="action" />
            </Badge>
          </Stack>
        </ThemeProvider>
        <SearchBar />
        <BarDrawer className="text-primary-black" />
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          <DehazeIcon />
        </button>
      </div>

      {/* Dropdown Mobile Menu */}
      {showMenu && (
        <nav className="absolute top-full left-0 w-full bg-primary-white border-t shadow-lg">
          <NavLink />
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link to="/About" onClick={toggleMenu}>About Us</Link>
            </li>
            <li>
              <Link to="/AddProduct" onClick={toggleMenu}>Add Products</Link>
            </li>
            <li>
              <Link to="/ProductList" onClick={toggleMenu}>Products</Link>
            </li>
            <li>
              <Link to="/Contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
