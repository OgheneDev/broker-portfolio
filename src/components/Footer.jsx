import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-custom-ash px-[20px] py-[40px] text-center'>
      <div className="logo text-dark font-bold text-[25px] mb-[40px]">
        Agency
      </div>

      <div className="menu mb-[60px]">
        <label className='uppercase text-dark-accent text-[16px]'>Menu</label>
        <ul className='text-dark flex flex-col gap-[5px] mt-[30px]'>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
      </div>

      <div className="service">
        <label className='uppercase text-dark-accent text-[16px]'>Service</label>
        <ul className='text-dark flex flex-col gap-[5px] mt-[30px]'>
            <li>Design</li>
            <li>Development</li>
            <li>Marketing</li>
            <li>See More</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
