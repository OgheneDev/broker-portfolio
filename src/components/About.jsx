import React from 'react'
import digital from '../assets/images/digi.png'
import vortex from '../assets/images/vortex.png'
import travel from '../assets/images/travel.png'
import fuzion from '../assets/images/fuzion.png'
import media from '../assets/images/media.png'
import about from '../assets/images/about.png'

const About = () => {
  return (
    <section className='about bg-custom-pink mb-[70px]'>
      <div className='flex flex-wrap p-[20px] pb-[50px] items-start justify-center gap-[20px]'>
        <img className='w-[150px]' src={digital} alt="" />
        <img className='w-[150px]' src={vortex} alt="" />
        <img className='w-[150px]' src={travel} alt="" />
        <img className='w-[150px]' src={fuzion} alt="" />
        <img className='w-[150px]' src={media} alt="" />
      </div>

      <div className="hero px-[20px] py-[60px]">
         <div className="image-content mb-[20px]">
            <img src={about} alt="" />
         </div>

         <div className="text-content">
            <article className='flex flex-col gap-[20px] mb-[20px]'>
                <span className='text-dark-accent uppercase'>About</span>
                <h1 className='text-3xl text-dark font-bold'>An Experience 
                Design Agency</h1>
            </article>

            <article className='mb-[20px]'> 
                <h5 className='text-dark font-bold text-lg mb-[20px]'>Provides a full service range</h5>
                <p className='text-[12px] text-dark-grey'>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
            </article>

            <button className='bg-white text-dark py-[5px] px-[15px] uppercase font-bold'>About us</button>
         </div>
      </div>

      <div className="stats text-dark w-[90%] mx-auto">
        <div className="stat border border-custom-ash p-[30px]">
            <h2 className='font-bold text-5xl'>42%</h2>
            <p>Years of experience</p>
        </div>

        <div className="stat border border-custom-ash p-[30px]">
            <h2 className='font-bold text-5xl'>73+</h2>
            <p>Agency members</p>
        </div>

        <div className="stat border border-custom-ash p-[30px]">
            <h2 className='font-bold text-5xl'>5,0000</h2>
            <p>Projects complete</p>
        </div>
      </div>

    </section>
  )
}

export default About
