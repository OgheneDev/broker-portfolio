import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import azah from '../assets/images/azah.png'
import roe from '../assets/images/roe.png'
import leo from '../assets/images/leo.png'
import iza from '../assets/images/iza.png'

const Team = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
  };

  return (
    <section className='bg-back-blue md:px-[200px]'>
      <article className='flex flex-col gap-[20px]  px-[20px] py-[50px]'>
        <span className='text-dark-accent uppercase'>Team</span>
        <h1 className='text-white font-bold text-4xl'>Team of Skilled <br /> Builders and Invetment Professionas</h1>
      </article>

      <div className="image-container  pb-[100px] hidden md:block">
        <div className='md:flex gap-[30px] justify-between' >
            <div>
            <div className='border border-light-blue px-[20px] pt-[20px]'>
              <img src={azah} alt="" className='w-[150px]' />
            </div>
            <article className='mt-3'>
              <p className='text-white font-bold'>David Carter</p>
              <span className='text-light-grey text-[14px]'>Designer</span>
            </article>
            </div>
            <div>
            <div className='border border-light-blue px-[20px] pt-[20px]'>
              <img src={roe} alt="" className='w-[150px]' />
            </div>
            <article className='mt-3'>
              <p className='text-white font-bold'>Matthew Wrights</p>
              <span className='text-light-grey text-[14px]'>Developer</span>
            </article>
            </div>
            <div>
            <div className='border border-light-blue px-[20px] pt-[20px]'>
              <img src={leo} alt="" className='w-[150px]' />
            </div>
            <article className='mt-3'>
              <p className='text-white font-bold'>Michael Thompson</p>
              <span className='text-light-grey text-[14px]'>Budget Organizer</span>
            </article>
            </div>
        </div>
      </div>

      <div className="mobile-slider md:hidden">
        <Slider {...settings} >
        <div className=''>
            <div className='border border-light-blue px-[20px] pt-[20px] w-[90%] mx-auto'>
              <img src={azah} alt="" className='w-[150px]' />
            </div>
            <article className='mt-3 text-center pb-[20px]'>
              <p className='text-white font-bold'>David Carter</p>
              <span className='text-light-grey text-[14px]'>Design</span>
            </article>
            </div>
            <div>
            <div className='border border-light-blue px-[20px] pt-[20px] w-[90%] mx-auto'>
              <img src={roe} alt="" className='w-[150px]' />
            </div>
            <article className='mt-3 text-center pb-[20px]'>
              <p className='text-white font-bold'>Matthew Wrights</p>
              <span className='text-light-grey text-[14px]'>Developer</span>
            </article>
            </div>
            <div>
            <div className='border border-light-blue px-[20px] pt-[20px] w-[90%] mx-auto'>
              <img src={leo} alt="" className='w-[150px]' />
            </div>
            <article className='mt-3 text-center pb-[20px]'>
              <p className='text-white font-bold'>Michael Thompson</p>
              <span className='text-light-grey text-[14px]'>Budget Organizer</span>
            </article>
            </div>
        </Slider>
      </div>


    </section>
  )
}

export default Team

