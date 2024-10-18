import React from 'react'
import rate from '../assets/images/rate.png'
import alan from '../assets/images/alan.png'
import rich from '../assets/images/rich.png'
import griff from '../assets/images/griff.png'
import maria from '../assets/images/maria.png'

const Testimonials = () => {
  return (
    <section className='bg-custom-ash px-[20px] pt-[70px]'>
      <article className='text-center flex gap-[20px] flex-col font-bold text-[18px] md:mb-[50px] mb-[30px]'>
        <span className='text-dark-accent uppercase'>Testimonials</span>
        <h1 className='text-dark text-3xl font-bold'>What Our 
        Clients Saying</h1>
      </article>

      <div className="cards mb-[30px] md:grid md:grid-cols-2 md:gap-4 md:px-[150px]">
        <div className="card bg-white px-[20px] py-[30px] border border-custom-pink rounded">
           <img src={rate} alt="" className='mb-[30px]' />

           <p className='text-dark-grey text-[18px] mb-[30px]'>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>

           <div className='flex gap-[20px]'>
            <img src={alan} alt="" />
            <article>
                <h5 className='text-dark text-[18px] font-bold'>Alan Martí</h5>
                <p className='text-dark-grey'>Meta Inc.</p>
            </article>
           </div>
        </div>

        <div className="card px-[20px] py-[30px] border border-custom-pink rounded">
           <img src={rate} alt="" className='mb-[30px]' />

           <p className='text-dark-grey text-[18px] mb-[30px]'>Provide your business with a variety of digital solutions to promote your product or service online.</p>

           <div className='flex gap-[20px]'>
            <img src={rich} alt="" />
            <article>
                <h5 className='text-dark text-[18px] font-bold'>Richardo Kann</h5>
                <p className='text-dark-grey'>Photogram</p>
            </article>
           </div>
        </div>

        <div className="card px-[20px] py-[30px] border border-custom-pink rounded">
           <img src={rate} alt="" className='mb-[30px]' />

           <p className='text-dark-grey text-[18px] mb-[30px]'>Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.</p>

           <div className='flex gap-[20px]'>
            <img src={griff} alt="" />
            <article>
                <h5 className='text-dark text-[18px] font-bold'>Graham Griffiths</h5>
                <p className='text-dark-grey'>Twitor</p>
            </article>
           </div>
        </div>

        <div className="card px-[20px] py-[30px] border border-custom-pink rounded">
           <img src={rate} alt="" className='mb-[30px]' />

           <p className='text-dark-grey text-[18px] mb-[30px]'>Promote your product or service online and help you hit your marketing goals and grow your business.</p>

           <div className='flex gap-[20px]'>
            <img src={maria} alt="" />
            <article>
                <h5 className='text-dark text-[18px] font-bold'>Maria Trofimova</h5>
                <p className='text-dark-grey'>Whochat</p>
            </article>
           </div>
        </div>

      </div>

      <div className="flex justify-center pb-[80px]"><button className='bg-white px-[30px] py-[5px] uppercase'>See All</button></div>
    </section>
  )
}

export default Testimonials
