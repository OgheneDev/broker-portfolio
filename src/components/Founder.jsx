import React from 'react'
import bitmap from '../assets/images/Bitmap.png'

const Founder = () => {
  return (
    <section className='bg-back-blue px-[20px] py-[50px] pb-[100px] md:pb-0 md:justify-center md:flex md:gap-[50px] md:px-[100px]'>
      <div className="image-container mb-[30px]  p-[20px] md:w-[500px] rounded-[10px]">
        <img src= {bitmap} alt="" />
      </div>

      <article className='flex flex-col gap-[30px] md:w-[450px]'>
        <span className='text-dark-accent uppercase text-[18px]'>Founder Words</span>

        <h3 className='text-3xl text-white'>'Novak LLC is an agency you hire to outsource your digital marketing efforts'</h3>

        <article>
            <p className='text-white text-[18px] mb-[10px]'>Joshua Novak</p>
            <span className='text-gray-400'>Founder</span>
        </article>
      </article>
    </section>
  )
}

export default Founder
