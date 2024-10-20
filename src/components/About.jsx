import React from 'react'
import { Link } from 'react-router-dom'
import digital from '../assets/images/digi.png'
import vortex from '../assets/images/vortex.png'
import travel from '../assets/images/travel.png'
import fuzion from '../assets/images/fuzion.png'
import media from '../assets/images/media.png'
import about from '../assets/images/about.png'

const About = () => {
  return (
    <section className='about pb-[70px] bg-custom-ash'>
      <div className='flex flex-wrap p-[25px] pb-[50px] items-start justify-center md:justify-between md:border md:border-b-custom-pink md:py-[30px] md:px-[100px] gap-[20px]'>
        <img className='w-[150px] md:w-[100px]' src={digital} alt="" />
        <img className='w-[150px] md:w-[100px]' src={vortex} alt="" />
        <img className='w-[150px] md:w-[100px]' src={travel} alt="" />
        <img className='w-[150px] md:w-[100px]' src={fuzion} alt="" />
        <img className='w-[150px] md:w-[100px]' src={media} alt="" />
      </div>

      <div className="hero px-[20px] py-[60px] md:flex md:px-[150px] gap-[100px] justify-center">
         <div className="image-content mb-[20px]">
            <img src={about} alt="" className='md:w-[500px]' />
         </div>

         <div className="text-content md:w-[400px]">
            <article className='flex flex-col gap-[20px] mb-[20px]'>
                <span className='text-dark-accent uppercase'>About</span>
                <h1 className='text-3xl text-dark font-bold'>An Experienced 
                Investment Agency</h1>
            </article>

            <article className='mb-[20px]'> 
                <h5 className='text-dark font-bold text-lg mb-[20px]'>Provides a full service range</h5>
                <p className='text-[12px] text-dark-grey'>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
            </article>

            <Link to='/about'>
             <button className='bg-white text-dark px-[35px] py-[10px] rounded uppercase font-bold'>
              About us
             </button>
            </Link>
         </div>
      </div>

      <div className="stats text-dark w-[90%] mx-auto md:flex md:justify-center">
        <div className="stat border border-custom-pink p-[30px] md:pr-[120px]">
            <h2 className='font-bold text-4xl'>8</h2>
            <p>Years of experience</p>
        </div>

        <div className="stat border border-custom-pink p-[30px] md:pr-[120px]">
            <h2 className='font-bold text-4xl'>20+</h2>
            <p>Agency members</p>
        </div>

        <div className="stat border border-custom-pink p-[30px] md:pr-[120px]">
            <h2 className='font-bold text-4xl'>500</h2>
            <p>Projects complete</p>
        </div>
      </div>

    </section>
  )
}

export default About
