import React from 'react'
import { Link } from 'react-router-dom'
import service from '../assets/images/service.png'
import jenny from '../assets/images/jenny.png'

const Service = () => {
  return (
    <section className='service px-[30px] pb-[100px] bg-custom-ash md:flex md:px-[150px] md:justify-center md:gap-[100px]'>
      <div className="image-content mb-[30px]">
        <img src={service} alt="" className='w-[500px]' />
      </div>

      <div className='md:w-[400px]'>
      <div className="text-content">
        <article className='flex flex-col gap-[20px] mb-[30px]'>
        <span className='text-dark-accent uppercase'>Service</span>
        <h1 className='text-4xl text-dark font-bold'>Making Complex
        Building Products</h1>
        <p className='text-dark text-[18px]'>Novak Investments and Construction LLC provides a full service range including technical skills, design, business.</p>
        </article>
      </div>

      <div className='flex items-start gap-[20px] mb-[30px]'>
        <div className='bg-custom-yellow p-[5px] rounded-[50%]'><img src={jenny} alt="" className='w-[80px]' /></div>
        <article>
            <p className='text-dark-grey text-[13px] mb-[15px]'>"Understanding, ability to put themselves in the merchant's shoes. It is meant to partner."</p>
            <p className='text-dark font-bold'>Jenny Murtaugh</p>
        </article>
      </div>
      <Link to='remodeling-projects'>
      <button className='bg-white px-[35px] py-[10px] rounded uppercase font-bold'>
        Explore
      </button></Link>
      </div>
    </section>
  )
}

export default Service
