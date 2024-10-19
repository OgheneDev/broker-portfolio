import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/images/pic.png'


const Hero = () => {
  return (
    <section className='hero flex flex-col bg-back-blue px-[30px] py-[75px] md:flex-row-reverse md:p-[100px] md:gap-[50px] md:pt-[150px]'>
      <div className="image-content bg-back-blue">
         <img src={hero} alt="" className="" />
      </div>

      <div className="text-content ">
        <article className="mb-[20px] flex flex-col gap-[20px] md:gap-[30px]">
            <span className="uppercase text-light-accent font-bold">Modern Studio</span>
            <h1 className='text-white font-bold text-5xl'>We're dedicated to building your dream spaces and empowering your financial success</h1>
        </article>
        <p className='text-light-grey leading-normal mb-[20px]'>Novak Investments and Construction LLC provides a full service range including technical skills, design, business understanding.</p>
        <div className="buttons flex justify-between md:justify-start md:gap-[30px]">
            <button className='bg-light-accent text-white py-[5px] px-[20px] rounded'>How We Work</button>
           <Link to='/contact'>
            <button className='border border-white text-white py-[5px] px-[20px] rounded'>
              Contact Us
             </button>
           </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
