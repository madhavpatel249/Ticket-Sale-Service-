import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import EventGallery from './EventGallery';
import { FaSearch } from 'react-icons/fa';
// import homepageBanner from './images/homepage_banner.jpg'; // Adjust the path if necessary

function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#6f1ab1]">
      {/* Pass the scrolled prop to the Navbar */}
      <Navbar scrolled={scrolled} />

      {/* Main content starts below the navbar */}
      <main className="relative pt-16 h-screen">
        {/* Left Side with Diagonal Split, Rounded Edges, and Background Image */}
        <div
          className="absolute inset-0 w-2/5 flex flex-col justify-center items-center rounded-tr-[50px] rounded-br-[50px] bg-cover bg-center"
          style={{ 
            // backgroundImage: `url(${homepageBanner})`, // Use imported image
            backgroundColor: '#6f1ab1', // Fallback color if the image doesn't load
          }}
        >
          <div className="relative z-10 flex flex-col items-center text-white p-6">
            <h1 className="text-5xl font-bold mb-2">MyTix</h1>
            <p className="text-lg">Find an event near you</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="absolute top-0 right-0 w-3/5 h-full bg-gray-100 flex justify-center items-center">
          <div className="w-full max-w-xl mb-6 flex items-center relative">
            <input
              type="text"
              placeholder="Find an event near me"
              className="w-full p-4 text-lg rounded-full border border-gray-300 focus:outline-none pr-14"
            />
            {/* Magnifying Glass Button */}
            <button className="absolute right-0 h-full p-3 rounded-r-full bg-gray-200 hover:bg-gray-300 active:bg-gray-400 border border-gray-300 transition-colors duration-300">
              <FaSearch className="text-gray-600 text-lg" />
            </button>
          </div>
        </div>
      </main>

      {/* Event Gallery Section */}
      <section className="bg-white py-10">
        <EventGallery />
      </section>
    </div>
  );
}

export default HomePage;
