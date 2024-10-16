import React from 'react'
import logo from '../assets/images/logo.svg'
import menu from '../assets/images/menu.svg'

const Navbar = () => {
  return (
    <nav className='bg-back-blue flex justify-between px-[20px] py-[10px]'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="menu hidden">
        <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Stocks</li>
            <li>Remodelling Projects</li>
        </ul>

        <div className="button">
            <button>Contact</button>
        </div>
      </div>

      <div className="menu-button">
        <button><img src={menu} alt="" /></button>
      </div>
    </nav>
  )
}

export default Navbar
