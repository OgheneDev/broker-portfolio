import React from 'react'
import plus from '../assets/images/plus.svg'

const Pricing = () => {
  return (
    <section className='px-[20px] py-[30px] bg-custom-ash'>
      <article className='flex flex-col gap-[20px] mb-[30px]'>
        <span className='text-dark-accent uppercase text-[18px] font-semibold'>Pricing</span>
        <h1 className='text-dark text-4xl font-bold'>Check Our Pricing Plans</h1>
      </article>

      <div className="cards">
        <div className="card border border-custom-pink px-[20px] py-[40px] rounded">
            <article className='flex flex-col gap-[20px]'>
              <span className='text-dark-accent uppercase text-[18px]'>Consultation</span>
              <h1 className='dark text-4xl font-bold text-dark'>Free</h1>
              <p className='text-dark-grey text-[16px] mb-[30px]'>Your digital marketing efforts, instead of handling in-house.</p>
            </article>

            <ul className='text-[18px] text-dark font-semibold flex flex-col gap-[20px] mb-[30px]'>
                <li className='flex gap-[20px]'><div className='bg-custom-idk p-[5px] rounded-[50%] flex justify-center w-[20px] h-[20px]'><img src={plus} alt="" /></div> Brand Design</li>
                <li className='flex gap-[20px]'><div className='bg-custom-idk p-[5px] rounded-[50%] flex justify-center w-[20px] h-[20px]'><img src={plus} alt="" /></div> Market Analysis</li>
                <li className='flex gap-[20px]'> <div className='bg-custom-idk p-[5px] rounded-[50%] flex justify-center w-[20px] h-[20px]'><img src={plus} alt="" /></div> Production</li>
            </ul>

            <button className='bg-white text-dark uppercase font-bold px-[30px] py-[10px] rounded'>Contact Us</button>
        </div>

        <div className="card border bg-white border-custom-pink px-[20px] py-[40px] rounded">
            <button className='bg-custom-idk text-white py-[8px] px-[20px] rounded-[25px] mb-[20px]'>Popular</button>
            <article className='flex flex-col gap-[20px]'>
              <span className='text-dark-accent uppercase text-[18px]'>Design</span>
              <h1 className='dark text-4xl font-bold text-dark'>$1500</h1>
              <p className='text-dark-grey text-[16px] mb-[30px]'>Provide your business with a variety of digital solutions to promote.</p>
            </article>

            <ul className='text-[18px] text-dark font-semibold flex flex-col gap-[20px] mb-[30px]'>
                <li className='flex gap-[20px]'><div className='bg-custom-idk p-[5px] rounded-[50%] flex justify-center w-[20px] h-[20px]'><img src={plus} alt="" /></div> Brand Design</li>
                <li className='flex gap-[20px]'><div className='bg-custom-idk p-[5px] rounded-[50%] flex justify-center w-[20px] h-[20px]'><img src={plus} alt="" /></div> Market Analysis</li>
                <li className='flex gap-[20px]'> <div className='bg-custom-idk p-[5px] rounded-[50%] flex justify-center w-[20px] h-[20px]'><img src={plus} alt="" /></div> Production</li>
            </ul>

            <button className='bg-custom-idk  text-white uppercase font-bold px-[30px] py-[10px] rounded'>Contact Us</button>
        </div>

        <div className="card border border-custom-pink px-[20px] py-[40px] rounded">
            <article className='flex flex-col gap-[20px]'>
              <span className='text-dark-accent uppercase text-[18px]'>Design+Code</span>
              <h1 className='dark text-4xl font-bold text-dark'>$2900</h1>
              <p className='text-dark-grey text-[16px] mb-[30px]'>Help you hit your marketing goals and grow your business.</p>
            </article>

            <ul className='text-[18px] text-dark font-semibold flex flex-col gap-[20px] mb-[30px]'>
                <li className='flex gap-[20px]'><div className='bg-custom-idk p-[5px] rounded-[50%] flex justify-center w-[20px] h-[20px]'><img src={plus} alt="" /></div> Brand Design</li>
                <li className='flex gap-[20px]'><div className='bg-custom-idk p-[5px] rounded-[50%] flex justify-center w-[20px] h-[20px]'><img src={plus} alt="" /></div> Market Analysis</li>
                <li className='flex gap-[20px]'> <div className='bg-custom-idk p-[5px] rounded-[50%] flex justify-center w-[20px] h-[20px]'><img src={plus} alt="" /></div> Production</li>
            </ul>

            <button className='bg-white text-dark uppercase font-bold px-[30px] py-[10px] rounded'>Contact Us</button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
