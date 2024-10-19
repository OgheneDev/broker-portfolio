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

           <p className='text-dark-grey text-[18px] mb-[30px]'>Mr Joshua has being a blessing, he literally changed my life and improved my credit score.</p>

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

           <p className='text-dark-grey text-[18px] mb-[30px]'>Nice Construction Planning and execution, He delivered exactly what I needed for my studio.</p>

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

           <p className='text-dark-grey text-[18px] mb-[30px]'>Nice job done and good customer interaction.</p>

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
