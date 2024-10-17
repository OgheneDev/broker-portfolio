import React from 'react'
import phone from '../assets/images/phone.svg'
import email from '../assets/images/email.svg'
import help from '../assets/images/help.png'

const NewsLetter = () => {
  return (
    <section className='bg-custom-ash px-[30px] py-[40px]'>
      <h1 className='text-4xl font-bold text-dark mb-[30px]'>Newsletter</h1>

      <form action="" className='flex flex-col gap-[20px] mb-[100px] rounded'>
        <input type="email" placeholder='Your email' className='bg-white py-[15px] pl-[10px] rounded' />
        <button className='bg-white py-[15px] rounded'>Subscribe</button>
      </form>

      <form action="" className='flex flex-col bg-white gap-[20px] px-[25px] py-[50px] rounded mb-[80px]'>
        <h3 className='font-bold text-dark text-3xl'>Get In Touch</h3>
        <input type="email" placeholder='Your email' className='bg-white py-[15px] pl-[10px] border border-custom-pink rounded' />
        <input type="text" placeholder='Subject' className='bg-white py-[15px] pl-[10px] border border-custom-pink rounded' />
        <input type="text" placeholder='Message'  className='bg-white py-[15px] pb-[40px] pl-[10px] border border-custom-pink rounded' />
        <div className="flex justify-right ml-auto">
            <button className="px-[30px] py-[10px] text-white bg-custom-idk rounded uppercase font-bold">Submit now</button>
        </div>
      </form>

      <div className="contacy-cards mb-[80px]">
        <div className="card border border-custom-pink px-[20px] py-[30px] rounded">
           <div className='flex items-center gap-[20px]'>
             <div className='bg-custom-idk p-[15px] rounded-[50%] w-fit mb-[30px]'>
                <img src={phone} alt="" className='w-[35px]' />
             </div>
             <span className='text-dark-accent text-2xl uppercase'>Phone</span>
           </div>
            <p className='text-dark text-2xl'>+1 (231) 366-143</p>
        </div>
        <div className="card border border-custom-pink px-[20px] py-[30px] rounded">
           <div className='flex items-center gap-[20px]'>
             <div className='bg-custom-idk p-[15px] rounded-[50%] w-fit mb-[30px]'>
                <img src={email} alt="" className='w-[35px]' />
             </div>
             <span className='text-dark-accent text-2xl uppercase'>Email</span>
           </div>
            <p className='text-dark text-2xl'>novak14319@gmail.com</p>
        </div>
      </div>

      <div className="help bg-custom-idk px-[20px] py-[30px] rounded">
         <div className="image-container mb-[30px]">
            <img src={help} alt="" />
         </div>

         <div className="text-content">
            <h1 className='text-white text-5xl font-bold mb-[20px]'>We’re Help To Build Your Dream Project</h1>
            <p className='text-light-grey text-[18px] mb-[30px]'>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
            <button className='text-dark font-bold py-[10px] px-[30px] uppercase bg-white rounded'>Contact Us</button>
         </div>
      </div>
    </section>
  )
}

export default NewsLetter
