import React from 'react';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const NotFound = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen text-center space-y-4 ">
        <h1 className="text-9xl font-bold text-primary-Camel">404</h1>
        <p className="text-xl font-semibold">Oops! Page Not Found</p>
        <p className="text-gray-500">
          Sorry, but the page you are looking for does not exist, has been<br/>removed, the name changed, or is temporarily unavailable.
        </p>
        <div className="relative">
          <SearchOutlinedIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            className="p-2  border rounded-md w-64"
            type="text"
            placeholder="Search..."
          />
        </div>
        {/* Link back to home */}
        <Link to="/home">
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-primary-Camel  transition duration-300">
            Back to Home
          </button>
        </Link>
      </section>
    </>
  );
};

export default NotFound;
