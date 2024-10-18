import React from 'react'
import How from '../components/How'
import tv from '../assets/images/tv.svg'
import brief from '../assets/images/case.svg'
import gear from '../assets/images/gear.svg'
import help from '../assets/images/help.png'

const ServicesPage = () => {
  return (
    <div className='services'>
     <header className='bg-back-blue text-center px-[20px] pt-[130px] pb-[40px]'>
        <h1 className='text-white text-6xl font-bold mb-[20px]'>Services</h1>
        <p className='text-light-grey text-[18px]'>Agency provides a full service range including technical skills, design, business understanding.</p>
      </header>

      <section className='bg-custom-ash px-[30px] py-[60px]'>
        <article>
            <span className='text-dark-accent uppercase text-[18px]'>Services</span>
            <h1 className='text-dark text-4xl font-bold my-[30px]'>Digital agency is a business you hire to outsource your digital marketing efforts</h1>
        </article>

        <p className='text-[18px] text-dark-grey'>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team. A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
      </section>

      <div className="cards bg-custom-ash pb-[30px]">
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

      <How />

      <div className="bg-custom-ash mt-[30px]">
      <div className="help bg-custom-idk px-[20px] w-[90%] mx-auto py-[30px] rounded">
         <div className="image-container mb-[30px]">
            <img src={help} alt="" />
         </div>

         <div className="text-content">
            <h1 className='text-white text-5xl font-bold mb-[20px]'>We’re Help To Build Your Dream Project</h1>
            <p className='text-light-grey text-[18px] mb-[30px]'>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
            <button className='text-dark font-bold py-[10px] px-[30px] uppercase bg-white rounded'>Contact Us</button>
         </div>
      </div>
      </div>
      
    </div>
  )
}

export default ServicesPage
