import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import fb from '../assets/images/facebook.svg'
import tw from '../assets/images/twitter.svg'
import insta from '../assets/images/instagram.svg'
import logo from '../assets/images/logo.png'

const Footer = () => {
  return (
    <footer className='bg-custom-ash px-[20px]  py-[40px] md:pt-[100px] text-center md:px-[100px]'>
      <div className='border-b border-b-custom-pink px-[30px] pb-[20px] flex items-center flex-col md:flex-row md:items-start md:justify-between'>
      <div className="logo mb-[50px] md:mb-0">
        <Link to='/'><img src={logo} alt="Logo" /></Link>
      </div>

      <div className="menu mb-[60px]">
        <label className='uppercase text-dark-accent text-[16px] md:text-[18px]'>Menu</label>
        <ul className='text-dark flex flex-col gap-[5px] mt-[30px] md:text-[16px]'>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><HashLink smooth to='/#blog'>Blog</HashLink></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>

      <div className="service">
        <label className='uppercase text-dark-accent text-[16px] md:text-[18px]'>Service</label>
        <ul className='text-dark flex flex-col gap-[5px] mt-[30px] md:text-[16px]'>
            <li>Remodeling</li>
            <li>Construction</li>
            <li>Stocks</li>
            <li>See More</li>
        </ul>
      </div>

      <div className="socials flex justify-center mt-[60px] gap-[20px] items-start">
        <a href="https://www.facebook.com/profile.php?id=61556416647196&mibextid=LQQJ4d"><div className="fb bg-custom-idk w-fit py-[12px] px-[15px] rounded-[50%]"><img src={fb} alt="" className='w-[10px]' /></div></a>
        <div className="fb bg-custom-idk w-fit py-[13px] px-[15px] rounded-[50%]"><img src={tw} alt="" className='w-[15px]' /></div>
        <div className="fb bg-custom-idk w-fit py-[12px] px-[15px] rounded-[50%]"><img src={insta} alt="" className='w-[15px]' /></div>
      </div>
      </div>

      <div className='pt-[50px] px-[30px] md:flex justify-between'>
        <p className='text-dark-grey text-[20px] px-[20px] mb-[35px]'>Copyright © 2022 Laaqiq. 
        All Rights Reserved.</p>

        <div className="flex justify-between text-dark-grey gap-[20px] text-[18px]">
          <p>Terms Of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
