// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Navbar({ scrolled }) {
  return (
    <nav 
      className={`fixed top-0 left-0 w-full p-4 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-200 shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center">
          <Link 
            to="/" 
            className="text-lg px-5 py-3 rounded-full border border-transparent hover:border-gray-300 hover:bg-primary hover:text-white transition-all duration-300 text-darkGray"
          >
            Home
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex space-x-5">
          <Link 
            to="/host-event" 
            className="text-lg px-5 py-3 rounded-full border border-transparent hover:border-gray-300 hover:bg-primary hover:text-white transition-all duration-300 text-darkGray"
          >
            Host Event
          </Link>
          {/* <Link 
            to="/Signup" 
            className="text-lg px-5 py-3 rounded-full border border-transparent hover:border-gray-300 hover:bg-primary hover:text-white transition-all duration-300 text-darkGray"
          >
            Sign Up
          </Link>
          <Link 
            to="/login" 
            className="text-lg px-5 py-3 rounded-full border border-transparent hover:border-gray-300 hover:bg-primary hover:text-white transition-all duration-300 text-darkGray"
          >
            Log In
          </Link> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
