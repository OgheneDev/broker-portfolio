import React from 'react'
import hero from '../assets/images/pic.png'


const Hero = () => {
  return (
    <section className='hero flex flex-col bg-back-blue px-[20px] py-[15px]'>
      <div className="image-content bg-back-blue">
         <img src={hero} alt="" className="" />
      </div>

      <div className="text-content ">
        <article className="mb-[20px] flex flex-col gap-[20px]">
            <span className="uppercase text-light-accent font-bold">Modern Studio</span>
            <h1 className='text-white font-bold text-5xl'>We’re Help 
            To Build Your Dream Project</h1>
        </article>
        <p className='text-light-grey leading-normal mb-[20px]'>Agency provides a full service range including technical skills, design, business understanding.</p>
        <div className="buttons flex justify-between">
            <button className='bg-light-accent text-white py-[5px] px-[20px] rounded'>How We Work</button>
            <button className='border border-white text-white py-[5px] px-[20px] rounded'>Contact Us</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
