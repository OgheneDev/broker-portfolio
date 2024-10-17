import React from 'react'
import start from '../assets/images/start.png'
import lady from '../assets/images/lady.png'
import star from '../assets/images/star.png'

const Work = () => {
  return (
    <section className='works bg-back-blue px-[20px] py-[50px] pb-[100px]'>
      <article className='text-center mb-[30px]  flex flex-col gap-[20px]'>
        <span className='text-dark-accent uppercase'>Portfolio</span>
        <h1 className='text-white font-bold text-4xl'>Latest  Work</h1>
      </article>

      <div className="properties flex-col gap-[30px] flex mb-[30px]">
      <div className="relative bg-[url('/src/assets/images/town.webp')] w-[90%] mx-auto h-[500px] px-[20px] pb-[30px] flex flex-col justify-end bg-cover bg-center group rounded-[10px]">
        {/* Dark overlay effect */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

       <p className="relative text-white font-bold text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Township Residences
       </p>
     </div>

     <div className="relative bg-[url('/src/assets/images/glenn.webp')] w-[90%] mx-auto h-[500px] px-[20px] pb-[30px] flex flex-col justify-end bg-cover bg-center group rounded-[10px]">
        {/* Dark overlay effect */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

       <p className="relative text-white font-bold text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        The Glenn
       </p>
     </div>

     <div className="relative bg-[url('/src/assets/images/green.webp')] w-[90%] mx-auto h-[500px] px-[20px] pb-[30px] flex flex-col justify-end bg-cover bg-center group rounded-[10px]">
        {/* Dark overlay effect */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

       <p className="relative text-white font-bold text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Greenwood Plaza
       </p>
     </div>

      </div>

      <div className="flex justify-center mb-[100px]"><button className='border border-white px-[30px] py-[5px] rounded-[5px] text-white uppercase'>Explore more</button></div>

      <div className="start bg-custom-ash px-[20px] rounded-[10px]">
        <div className="star relative top-[-70px]">
          <img src={star} alt="" />
        </div>

        <article className='flex flex-col gap-[20px] items-start mb-[20px]'>
          <span className='text-dark-accent uppercase'>Get Started</span>

          <p className='text-dark font-bold text-3xl'>We Help Companies Move Faster</p>

          <button className='bg-custom-idk text-white py-[5px] px-[30px] rounded'>Contact Us</button>
        </article>

        <div className="image-container mb-[20px]">
          <img src={start} alt="" />
        </div>

        <div className="image flex justify-center">
          <img src={lady} alt="" />
        </div>
      </div>

      
    </section>
  )
}

export default Work
