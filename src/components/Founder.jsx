import React from 'react'
import bitmap from '../assets/images/Bitmap.png'

const Founder = () => {
  return (
    <section className='bg-back-blue px-[20px] py-[50px] pb-[100px] md:pb-0 md:justify-center md:flex md:px-[100px]'>
      <div className="image-container mb-[30px] bg-[url('/src/assets/images/bg.png')] p-[20px] md:w-[500px] rounded-[10px] bg-no-repeat">
        <img src= {bitmap} alt="" />
      </div>

      <article className='flex flex-col gap-[30px] md:w-[450px]'>
        <span className='text-dark-accent uppercase text-[18px]'>Founder Words</span>

        <h3 className='text-3xl text-white'>Digital agency is a business you hire to outsource your digital marketing efforts</h3>

        <article>
            <p className='text-white text-[18px] mb-[10px]'>Ren Delan</p>
            <span className='text-gray-400'>Founder</span>
        </article>
      </article>
    </section>
  )
}

export default Founder
