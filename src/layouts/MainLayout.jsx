import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Scroll to top when the path changes
    window.scrollTo(0, 0);
  }, [location.pathname]); // Run this effect whenever the route changes

  return (
    <>
      <Navbar />
      <Outlet /> {/* This will render the current route's content */}
      <Footer />
    </>
  );
};

export default MainLayout;
