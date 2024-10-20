import React from 'react';
import start from '../assets/images/start.png';
import lady from '../assets/images/lady.png';
import star from '../assets/images/star.png';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <section className='works bg-back-blue px-[20px] py-[50px] pb-[100px]'>
      {/* Portfolio Heading */}
      <article className='text-center mb-[30px] flex flex-col gap-[20px]'>
        <span className='text-dark-accent uppercase'>Portfolio</span>
        <h1 className='text-white font-bold text-4xl'>Latest Work</h1>
      </article>

      {/* Work Section */}
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mx-[100px]">
          {/* Work Item 1 */}
          <div className="relative aspect-square bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/town.webp')]">
            {/* Darkening effect on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Property</span>
              <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Township Residencies</h3>
            </div>
          </div>

          {/* Work Item 2 */}
          <div className="relative aspect-square bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/glenn.webp')]">
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Property</span>
              <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">The Glenn</h3>
            </div>
          </div>

          {/* Work Item 3 */}
          <div className="relative aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/green.webp')]">
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Property</span>
              <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Greenwood Plaza</h3>
            </div>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mb-[100px] mt-[50px]">
          <Link to='/remodeling-projects'>
          <button className='border border-white px-[35px] py-[10px] rounded-[5px] text-white uppercase'>
            Explore more
          </button>
          </Link>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="start bg-custom-ash px-[20px] rounded-[10px] md:flex md:w-[80%] md:mx-auto">
        <div className="star relative top-[-70px]">
          <img src={star} alt="star graphic" />
        </div>

        <article className='flex flex-col gap-[20px] items-start mb-[20px] md:mt-[30px]'>
          <span className='text-dark-accent uppercase'>Get Started</span>
          <p className='text-dark font-bold text-3xl'>We Help Companies Move Faster</p>
          <Link to='/contact'>
          <button className='bg-custom-idk text-white px-[35px] py-[10px] rounded'>
            Contact Us
          </button>
          </Link>
        </article>

        <div className="image-container mb-[20px] md:mt-[30px]">
          <img src={start} alt="Get Started" />
        </div>

        <div className="image flex justify-center">
          <img src={lady} alt="Lady Graphic" />
        </div>
      </div>
    </section>
  );
};

export default Work;

