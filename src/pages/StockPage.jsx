import React from 'react'
import first from '../assets/images/IMG-20241017-WA0004.jpg'
import second from '../assets/images/IMG-20241017-WA0005.jpg'
import third from '../assets/images/IMG-20241017-WA0006.jpg'
import fourth from '../assets/images/IMG-20241017-WA0007.jpg'
import fifth from '../assets/images/IMG-20241017-WA0008.jpg'
import sixth from '../assets/images/IMG-20241017-WA0009.jpg'
import seventh from '../assets/images/IMG-20241017-WA0010.jpg'
import eight from '../assets/images/IMG-20241017-WA0011.jpg'
import nine from '../assets/images/IMG-20241017-WA0012.jpg'
import help from '../assets/images/help.png';

const StockPage = () => {
  return (
    <div>
      <header className='bg-back-blue text-center px-[20px] pt-[130px] pb-[40px]'>
        <h1 className='text-white text-6xl md:text-5xl font-bold mb-[20px]'>Stocks</h1>
        <p className='text-light-grey text-[18px]'>Novak Investments and Construction LLC provides a full service range including technical skills, design, business understanding.</p>
      </header>

      <div className="bg-custom-ash">
  <section className="stocks grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] justify-center mx-auto px-[20px] py-[60px] md:py-[100px] max-w-[1000px]">
  <img src={seventh} className='w-[300px] h-auto mx-auto' />
   <img src={fourth} className='w-[300px] h-auto mx-auto' />
   <img src={fifth} className='w-[300px] h-auto mx-auto' />
   <img src={third} className='w-[300px] h-auto mx-auto' />
    <img src={sixth} className='w-[300px] h-auto mx-auto' />
    <img src={second} className='w-[300px] h-auto mx-auto' />
    <img src={eight} className='w-[300px] h-auto mx-auto' />
    <img src={nine} className='w-[300px] h-auto mx-auto' />
    <img src={first} className='w-[300px] h-auto mx-auto' />
  </section>
</div>



      {/* Help Section */}
      <div className="bg-custom-ash">
        <div className="help bg-custom-idk md:flex md:flex-row-reverse md:justify-center w-[90%] mx-auto md:gap-[30px] md:py-[50px] px-[20px] py-[30px] rounded">
          <div className="image-container mb-[30px] md:mb-0">
            <img src={help} alt="Help" />
          </div>

          <div className="text-content md:w-[500px]">
            <h1 className='text-white text-5xl md:text-4xl font-bold mb-[20px]'>We’re Here To Build Your Dream Project</h1>
            <p className='text-light-grey md:text-[16px] text-[18px] mb-[30px]'>Novak Investments and Construction LLC  is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
            <button className='text-dark font-bold py-[10px] px-[30px] uppercase bg-white rounded'>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StockPage
