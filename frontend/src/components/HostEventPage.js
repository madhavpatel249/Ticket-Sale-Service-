import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use this if you have React Router set up

function HostEventPage() {
  const navigate = useNavigate(); // Use this hook if you need navigation within the app

  const handleSignUpClick = () => {
    navigate('/Signup'); // Replace with your sign-up page route
  };

  const handleLoginClick = () => {
    navigate('/login'); // Replace with your login page route
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div
        className="bg-[#6f1ab1] py-10 px-6 rounded-lg flex flex-col justify-center items-center space-y-4"
        style={{ width: '20rem', height: '20rem' }} // Apply width and height
      >
        <button
          onClick={handleSignUpClick}
          className="w-full py-3 bg-white text-darkGray rounded-full border border-transparent hover:bg-gray-200 transition-all duration-300"
        >
          Sign Up
        </button>
        <button
          onClick={handleLoginClick}
          className="w-full py-3 bg-white text-darkGray rounded-full border border-transparent hover:bg-gray-200 transition-all duration-300"
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default HostEventPage;
