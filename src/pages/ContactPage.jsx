import React from 'react'
import phone from '../assets/images/phone.svg'
import email from '../assets/images/email.svg'

const ContactPage = () => {
  return (
    <div className='bg-custom-ash'>
      <header className='bg-back-blue text-center px-[20px] pt-[130px] pb-[40px] mb-[50px]'>
        <h1 className='text-white text-6xl font-bold mb-[20px]'>Contact</h1>
        <p className='text-light-grey text-[18px]'>Agency provides a full service range including technical skills, design, business understanding.</p>
      </header>

      <form action="" className='flex flex-col bg-white w-[90%] mx-auto gap-[20px] px-[25px] py-[50px] rounded md:w-[350px]'>
        <h3 className='font-bold text-dark text-3xl'>Get In Touch</h3>
        <input type="email" placeholder='Your email' className='bg-white py-[15px] pl-[10px] border border-custom-pink rounded' />
        <input type="text" placeholder='Subject' className='bg-white py-[15px] pl-[10px] border border-custom-pink rounded' />
        <input type="text" placeholder='Message'  className='bg-white py-[15px] pb-[40px] pl-[10px] border border-custom-pink rounded' />
        <div className="flex justify-right ml-auto">
            <button className="px-[30px] py-[10px] text-white bg-custom-idk rounded uppercase font-bold">Submit now</button>
        </div>
      </form>

      <div className="contacy-cards pb-[30px] mt-[50px] md:px-[150px] md:flex md:justify-center">
        <div className="card border border-custom-pink px-[20px] py-[30px] rounded w-[90%] mx-auto md:pr-[150px]">
           <div className='flex items-center gap-[20px]'>
             <div className='bg-custom-idk p-[15px] rounded-[50%] w-fit mb-[30px]'>
                <img src={phone} alt="" className='w-[35px]' />
             </div>
             <span className='text-dark-accent text-2xl uppercase'>Phone</span>
           </div>
            <p className='text-dark text-2xl md:text-[16px]'>+1 (231) 366-143</p>
        </div>
        <div className="card border border-custom-pink px-[20px] py-[30px] rounded w-[90%] mx-auto md:pr-[150px]">
           <div className='flex items-center gap-[20px]'>
             <div className='bg-custom-idk p-[15px] rounded-[50%] w-fit mb-[30px]'>
                <img src={email} alt="" className='w-[35px]' />
             </div>
             <span className='text-dark-accent text-2xl uppercase'>Email</span>
           </div>
            <p className='text-dark text-2xl md:text-[16px]'>novak14319@gmail.com</p>
        </div>
      </div>

    </div>
  )
}

export default ContactPage
