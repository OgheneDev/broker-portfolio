import React from 'react'
import tv from '../assets/images/tv.svg'
import brief from '../assets/images/case.svg'
import gear from '../assets/images/gear.svg'


const Services = () => {
  return (
    <section className='services px-[20px] mb-[100px]'>
      <article className='flex flex-col gap-[20px] mb-[30px]'>
      <span className='text-dark-accent uppercase'>Service</span>
      <h1 className='text-4xl text-dark font-bold'>How Our Agency
      Can Help</h1>
      </article>

      <div className="cards">
        <div className="card border border-custom-pink px-[20px] py-[50px] rounded">
           <div className='bg-custom-idk p-[15px] rounded-[50%] w-fit mb-[30px]'><img src={tv} alt="" className='w-[50px]' /></div>
           <article className='flex flex-col gap-[20px] mb-[30px]'>
             <h4 className='text-dark text-2xl font-bold'>Design</h4>
             <p className='text-dark-grey text-[18px]'>Agency provides a full service range including technical skills, design.</p>
           </article>
           <button className='text-black font-bold'>Learn More</button>
        </div>
        <div className="card border border-custom-pink px-[20px] py-[50px] rounded">
           <div className='bg-custom-idk p-[15px] rounded-[50%] w-fit mb-[30px]'><img src={brief} alt="" className='w-[50px]' /></div>
           <article className='flex flex-col gap-[20px] mb-[30px]'>
             <h4 className='text-dark text-2xl font-bold'>Development</h4>
             <p className='text-dark-grey text-[18px]'>Full service range including technical skills, design, business.</p>
           </article>
           <button className='text-black font-bold'>Discover More</button>
        </div>
        <div className="card border border-custom-pink px-[20px] py-[50px] rounded">
           <div className='bg-custom-idk p-[15px] rounded-[50%] w-fit mb-[30px]'><img src={gear} alt="" className='w-[50px]' /></div>
           <article className='flex flex-col gap-[20px] mb-[30px]'>
             <h4 className='text-dark text-2xl font-bold'>Marketing</h4>
             <p className='text-dark-grey text-[18px]'>Technical skills, design, business understanding, ability.</p>
           </article>
           <button className='text-black font-bold'>Explore Now</button>
        </div>
      </div>
    </section>
  )
}

export default Services
