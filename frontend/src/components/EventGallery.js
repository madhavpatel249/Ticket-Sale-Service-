import React, { useRef } from 'react';

function EventGallery() {
  const galleryRef = useRef(null);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h3 className="text-2xl font-semibold mb-4">Top Events</h3>
      <div className="relative flex items-center w-full max-w-7xl overflow-hidden">
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-white text-gray-700 border border-gray-300 p-2 rounded-full hover:bg-gray-200 transition"
          aria-label="Scroll Left"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          ◀
        </button>

        <div
          ref={galleryRef}
          className="flex space-x-4 overflow-x-auto px-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* Temporary Gray Boxes */}
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="w-60 h-44 bg-gray-300 flex-shrink-0 rounded-lg"
            ></div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-white text-gray-700 border border-gray-300 p-2 rounded-full hover:bg-gray-200 transition"
          aria-label="Scroll Right"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default EventGallery;
