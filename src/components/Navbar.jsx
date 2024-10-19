import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/images/logo.svg';
import menu from '../assets/images/menu.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className='bg-back-blue items-center w-full fixed top-0 z-10 flex justify-between px-[20px] md:px-[100px] py-[10px]'>
      <div className="logo">
        <Link to='/'><img src={logo} alt="Logo" /></Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <div className="flex gap-[70px]">
          <NavLink to='/about' className="text-white hover:text-gray-300">About</NavLink>
          <NavLink to='/services' className="text-white hover:text-gray-300">Services</NavLink>
          <HashLink smooth to='/#blog' className="text-white hover:text-gray-300">Blog</HashLink>
          <NavLink to='' className="text-white hover:text-gray-300">Remodelling Projects</NavLink>
        </div>
      </div>

      <div className="hidden md:block">
        <Link to='/contact'>
          <button className="text-white px-4 py-2 rounded border border-white">
            CONTACT
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden menu fixed w-full top-[70px] ${isOpen ? 'translate-x-0' : '-translate-x-full'} left-0 transition-transform duration-200 ease-in-out h-screen bg-back-blue py-[30px]`}>
        <ul className='flex flex-col items-center gap-[30px] text-white text-[18px]'>
          <li><NavLink to='/about'>About Us</NavLink></li>
          <li><NavLink to='/services'>Services</NavLink></li>
          <li><HashLink smooth to='/#blog'>Blog</HashLink></li>
          <li>Remodelling Projects</li>
          <li><Link to='/contact'><button>Contact</button></Link></li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden menu-button">
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={menu} alt="Menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


