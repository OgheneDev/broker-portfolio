import React from 'react'
import stories from '../assets/images/stories.png'
import talk from '../assets/images/talk.png'
import market from '../assets/images/market.png'

const Blog = () => {
  return (
    <section className='bg-custom-ash px-[20px] py-[50px] border border-b-custom-pink'>
      <article className="flex flex-col gap-[20px] mb-[30px]">
        <span className='uppercase text-dark-accent'>Our bLOG</span>
        <h1 className='text-4xl text-dark font-bold'>Latest Blog
        Articles</h1>
      </article>

      <button className='bg-white text-dark font-bold uppercase py-[10px] px-[30px] mb-[50px]'>Discover All</button>

      <div className="cards flex flex-col gap-[30px]">
        <div className="card">
         <div className="image-container mb-[20px]">
            <img src={stories} alt="" />
         </div>

          <div className="text-container flex flex-col gap-[20px]">
            <p className='text-[22px] text-dark'>Stories</p>
            <p className='text-3xl text-dark font-bold'>Agency is a business you hire to outsource</p>
            <span className='text-dark-grey text-[15px]'>5 Nov, 2021</span>
          </div>
        </div>

        <div className="card">
         <div className="image-container mb-[20px]">
            <img src={talk} alt="" />
         </div>

          <div className="text-container flex flex-col gap-[20px]">
            <p className='text-[22px] text-dark'>Design</p>
            <p className='text-3xl text-dark font-bold'>Outsource your digital and marketing efforts.</p>
            <span className='text-dark-grey text-[15px]'>20 Oct, 2021</span>
          </div>
        </div>

        <div className="card">
         <div className="image-container mb-[20px]">
            <img src={market} alt="" />
         </div>

          <div className="text-container flex flex-col gap-[20px]">
            <p className='text-[22px] text-dark'>Marketing</p>
            <p className='text-3xl text-dark font-bold'>Your business with a variety of digital</p>
            <span className='text-dark-grey text-[15px]'>29 Oct, 2021</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
