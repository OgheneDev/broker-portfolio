import React from 'react'
import fb from '../assets/images/facebook.svg'
import tw from '../assets/images/twitter.svg'
import insta from '../assets/images/instagram.svg'

const Footer = () => {
  return (
    <footer className='bg-custom-ash px-[20px] py-[40px] text-center md:px-[100px]'>
      <div className='border-b border-b-custom-pink px-[30px] pb-[20px] md:flex md:items-start md:justify-between'>
      <div className="logo text-dark font-bold text-[25px] mb-[40px]">
        Agency
      </div>

      <div className="menu mb-[60px]">
        <label className='uppercase text-dark-accent text-[16px] md:text-[18px]'>Menu</label>
        <ul className='text-dark flex flex-col gap-[5px] mt-[30px] md:text-[16px]'>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
      </div>

      <div className="service">
        <label className='uppercase text-dark-accent text-[16px] md:text-[18px]'>Service</label>
        <ul className='text-dark flex flex-col gap-[5px] mt-[30px] md:text-[16px]'>
            <li>Design</li>
            <li>Development</li>
            <li>Marketing</li>
            <li>See More</li>
        </ul>
      </div>

      <div className="socials flex justify-center mt-[60px] gap-[20px] items-start">
        <div className="fb bg-custom-idk w-fit py-[12px] px-[15px] rounded-[50%]"><img src={fb} alt="" className='w-[10px]' /></div>
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
