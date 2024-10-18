import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import menu from '../assets/images/menu.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-back-blue items-center w-full fixed top-0 z-10 flex justify-between px-[20px] py-[10px]'>
      <div className="logo">
        <Link to='/'><img src={logo} alt="Logo" /></Link>
      </div>

      {/* Menu */}
      <div className={`menu fixed w-full top-[70px] ${isOpen ? 'translate-x-0' : '-translate-x-full'} left-0 transition-transform duration-200 ease-in-out h-screen bg-back-blue py-[30px]`}>
        <ul className='flex flex-col items-center gap-[30px] text-white text-[18px]'>
          <li><NavLink to='/about'>About Us</NavLink></li>
          <li>Services</li>
          <li>Stocks</li>
          <li>Remodelling Projects</li>
          <li><button>Contact</button></li>
        </ul>
      </div>

      {/* Menu Button */}
      <div className="menu-button">
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={menu} alt="Menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


