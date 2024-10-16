import { section } from 'framer-motion/client'
import React from 'react'

const How = () => {
  return (
    <section className="how px-[20px] mb-[60px]">
    <div className='pb-[50px]'>
      <article className='flex flex-col gap-[20px] mb-[20px] '>
        <span className='text-dark-accent uppercase'>How we work</span>
        <h1 className='text-3xl text-dark font-bold'>Making Your Projects 
        Look Awesome</h1>
      </article>
      <p className='text-dark-grey'>Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.</p>
    </div>

    <div className='px-[10px] flex flex-col gap-[30px]'>
       <div className='flex gap-[30px]'>
         <h1 className='font-bold text-6xl text-dark'>1</h1>
         <p className='text-dark text-2xl font-bold'>Full service range including</p>
       </div>

       <div className='flex gap-[30px]'>
        <h1 className='font-bold text-6xl text-dark'>2</h1>
        <p className='text-dark text-2xl font-bold'>Technical skills, design, business</p>
       </div>

       <div className='flex gap-[30px]'>
         <h1 className='font-bold text-6xl text-dark'>3</h1>
         <p className='text-dark text-2xl font-bold'>Themselves in the merchant's</p>
       </div>
    </div>
    </section>
  )
}

export default How
