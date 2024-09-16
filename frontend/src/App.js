import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from React Router
import './App.css'; // For global styles
import HomePage from './components/HomePage';
import HostEventPage from './components/HostEventPage'; // Import the HostEventPage component
import Signup from './components/Signup'; 
import Login from './components/Login'; 
import Navbar from './components/Navbar'; // Import Navbar if it's shared across pages

function App() {
  return (
    <Router>
      <Navbar /> {/* Render Navbar to be consistent across all routes */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Route for the Home Page */}
        <Route path="/host-event" element={<HostEventPage />} /> {/* Route for the Host Event Page */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
