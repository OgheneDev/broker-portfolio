import React from 'react'
import { Link } from 'react-router-dom'
import How from '../components/How'
import tv from '../assets/images/tv.svg'
import brief from '../assets/images/case.svg'
import gear from '../assets/images/gear.svg'
import help from '../assets/images/help.png'
import path from '../assets/images/Path.svg'

const ServicesPage = () => {
  return (
    <div className='services'>
     <header className='bg-back-blue text-center px-[20px] pt-[130px] pb-[40px]'>
        <h1 className='text-white text-5xl md:text-5xl font-bold mb-[20px]'>Services</h1>
        <p className='text-light-grey text-[18px]'>Novak Investments and Construction LLC provides a full service range including technical skills, design, business understanding.</p>
      </header>

      <section className='bg-custom-ash px-[30px] py-[60px] md:flex md:gap-[100px] md:px-[100px] md:justify-center'>
        <article>
            <span className='text-dark-accent uppercase text-[18px]'>Services</span>
            <h1 className='text-dark text-4xl md:my-[20px] font-bold my-[30px]'>Novak Investments and Construction LLC is a <br /> business you hire to <br /> outsource your digital <br /> marketing efforts</h1>
        </article>

        <p className='text-[18px] md:text-[14px] md:w-[450px] text-dark-grey leading-[2rem]'>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team. Novak Investments and Construction LLCis a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
      </section>

     <section className="s bg-custom-ash px-[20px] md:px-[150px] ">
       <div className='flex flex-col md:flex-row gap-[10px] md:items-center mb-[20px]'>
       <div className='bg-custom-idk p-[15px] rounded-[50%] w-fit mb-[30px]'><img src={tv} alt="" className='w-[50px]' /></div>
        <h1 className='text-dark font-bold text-3xl'>Stock Investment Services</h1>
       </div>

       <div className="text-content md:w-[50%] md:ml-auto">
       <h2 className='text-dark font-bold text-2xl mb-[20px]'>
       Our stock investment services are designed to help you achieve financial success, no matter your level of experience.
       </h2>

       <p className='text-dark-grey mb-[20px]'>Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>

       <ul className='text-dark-grey flex flex-col gap-[20px] pb-[100px]'>
            <li className='flex gap-[20px]'>
                <div className="check bg-custom-idk flex justify-center p-[5px]  w-fit rounded-[50%]"><img src={path} alt="" className='w-[15px]' /></div> 
                Personalized Portfolio Management:
            </li>
            <li className='flex gap-[20px]'>
                <div className="check bg-custom-idk flex justify-center p-[5px]  w-fit rounded-[50%]"><img src={path} alt="" className='w-[15px]' /></div> 
                Investment Advisory:
            </li>
            <li className='flex gap-[20px]'>
                <div className="check bg-custom-idk flex justify-center p-[5px]  w-fit rounded-[50%]"><img src={path} alt="" className='w-[15px]' /></div> 
                Risk Analysis & Mitigation:
            </li>
         </ul>
        </div>
     </section>


     <section className="s bg-custom-ash px-[20px] md:px-[150px]">
       <div className='flex flex-col md:flex-row gap-[10px] md:items-center mb-[20px]'>
       <div className='bg-custom-idk p-[15px] rounded-[50%] w-fit mb-[30px]'><img src={brief} alt="" className='w-[50px]' /></div>
        <h1 className='text-dark font-bold text-3xl'>Construction Services</h1>
       </div>

       <div className="text-content md:w-[50%] md:ml-auto">
       <h2 className='text-dark font-bold text-2xl mb-[20px]'>
       From concept to completion, our construction services deliver top-tier quality and attention to detail.
       </h2>

       <p className='text-dark-grey mb-[20px]'>Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>

       <ul className='text-dark-grey flex flex-col gap-[20px] pb-[100px]'>
            <li className='flex gap-[20px]'>
                <div className="check bg-custom-idk flex justify-center p-[5px]  w-fit rounded-[50%]"><img src={path} alt="" className='w-[15px]' /></div> 
                Residential & Commercial Construct:
            </li>
            <li className='flex gap-[20px]'>
                <div className="check bg-custom-idk flex justify-center p-[5px]  w-fit rounded-[50%]"><img src={path} alt="" className='w-[15px]' /></div> 
                Design-Build & General Contracting:
            </li>
            <li className='flex gap-[20px]'>
                <div className="check bg-custom-idk flex justify-center p-[5px]  w-fit rounded-[50%]"><img src={path} alt="" className='w-[15px]' /></div> 
                Renovations & Expansions:
            </li>
         </ul>
       </div>
     </section>

      <How />

      <div className="bg-custom-ash pt-[30px]  md:pt-[100px]">
      <div className="help mx-auto w-[90%] bg-custom-idk md:flex md:flex-row-reverse md:justify-center md:gap-[30px] md:py-[60px] px-[20px] py-[30px] rounded">
         <div className="image-container mb-[30px] md:mb-0">
            <img src={help} alt="" className='w-[300px]' />
         </div>

         <div className="text-content md:w-[500px]">
            <h1 className='text-white text-4xl md:text-4xl font-bold mb-[20px]'>We’re Help To Build Your Dream Project</h1>
            <p className='text-light-grey md:text-[16px] text-[18px] mb-[30px]'>Novak Investments and Construction LLC  is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
            <Link to='/contact'>
            <button className='text-dark font-bold py-[10px] px-[30px] uppercase bg-white rounded'>
              Contact Us
            </button>
            </Link>
         </div>
      </div>
      </div>
      
    </div>
  )
}

export default ServicesPage
