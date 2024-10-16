import React from 'react'
import feat from '../assets/images/feat.png'
import pro from '../assets/images/pro.svg'
import path from '../assets/images/Path.svg'

const Features = () => {
  return (
    <section className='px-[20px]'>
       <div className="image-container">
          <img src={feat} alt="" />
       </div>

       <div className="text-content">
         <article className='flex flex-col gap-[20px] mb-[20px]'>
            <span className='uppercase text-dark-accent'>Features</span>
            <h1 className='text-4xl font-bold text-dark'>Give Your Site 
            A New Look</h1>
            <p className='text-dark text-[18px]'>Service range including technical skills, design, business understanding.</p>
         </article>

         <ul className='text-dark-grey flex flex-col gap-[20px] mb-[100px]'>
            <li className='flex gap-[20px]'>
                <div className="check bg-custom-idk flex justify-center p-[5px]  w-fit rounded-[50%]"><img src={path} alt="" className='w-[15px]' /></div> 
                Range including technical skills
            </li>
            <li className='flex gap-[20px]'>
                <div className="check bg-custom-idk flex justify-center p-[5px]  w-fit rounded-[50%]"><img src={path} alt="" className='w-[15px]' /></div> 
                Business understanding
            </li>
            <li className='flex gap-[20px]'>
                <div className="check bg-custom-idk flex justify-center p-[5px]  w-fit rounded-[50%]"><img src={path} alt="" className='w-[15px]' /></div> 
                Partner on the long run
            </li>
         </ul>
       </div>

       <div className="container mb-[100px]">
         <article className='flex flex-col gap-[20px] mb-[20px]'>
            <span className='uppercase text-dark-accent'>Features</span>
            <p className='text-dark text-[18px]'>Long run, and work as an extension of the merchant's team.</p>
         </article>

         <div className="cards text-dark ">
             <div className="card w-[90%] bg-white p-[30px] mx-auto border border-custom-pink">
                <div className='bg-custom-idk w-fit mb-[30px] p-[15px] rounded-[50%]'><img src={pro} alt="" className='w-[30px]' /></div>
                <h4 className='font-bold text-dark text-2xl mb-[20px]'>Professional</h4>
                <p>Full service range including technical skills, design.</p>
             </div>

             <div className='card w-[90%] border border-x-custom-pink mx-auto p-[30px]'>
                 <h4 className='font-bold text-dark text-2xl mb-[20px]'>Accessibility</h4>
                 <p>Business understanding, ability to put themselves.</p>
             </div>
         </div>
       </div>
    </section>
  )
}

export default Features
