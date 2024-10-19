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
    <section className='bg-back-blue md:px-[250px]'>
      <article className='flex flex-col gap-[20px]  px-[20px] py-[50px]'>
        <span className='text-dark-accent uppercase'>Team</span>
        <h1 className='text-white font-bold text-4xl'>Teams Of Designers <br /> and Developers</h1>
      </article>

      <div className="image-container w-fit pb-[100px] hidden md:block">
        <div className='md:flex justify-between gap-[30px]' >
            <div>
            <div className='border border-light-blue px-[20px] pt-[20px]'>
              <img src={azah} alt="" className='w-[150px]' />
            </div>
            <article className='mt-3'>
              <p className='text-white font-bold'>Azah Anyeni</p>
              <span className='text-light-grey text-[14px]'>Design</span>
            </article>
            </div>
            <div>
            <div className='border border-light-blue px-[20px] pt-[20px]'>
              <img src={roe} alt="" className='w-[150px]' />
            </div>
            <article className='mt-3'>
              <p className='text-white font-bold'>Roelof Bekkenenks</p>
              <span className='text-light-grey text-[14px]'>React Developer</span>
            </article>
            </div>
            <div>
            <div className='border border-light-blue px-[20px] pt-[20px]'>
              <img src={leo} alt="" className='w-[150px]' />
            </div>
            <article className='mt-3'>
              <p className='text-white font-bold'>Leonardo Oliveira</p>
              <span className='text-light-grey text-[14px]'>Illustrator</span>
            </article>
            </div>
            <div>
            <div className='border border-light-blue px-[20px] pt-[20px]'>
              <img src={iza} alt="" className='w-[150px]' />
            </div>
            <article className='mt-3'>
              <p className='text-white font-bold'>Izabella Tabakova</p>
              <span className='text-light-grey text-[14px]'>Product Designer</span>
            </article>
            </div>
        </div>
      </div>


    </section>
  )
}

export default Team

