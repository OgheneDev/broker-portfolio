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

      <section className="stocks grid md:px-[150px] md:grid-cols-2 md:gap-4 gap-[30px] px-[20px] py-[60px] md:py-[100px] bg-custom-ash">
          <img src={first} className='md:w-[600px] h-[600px] w-[90%] mx-auto md:mx-0 md:h-[400px]' />
          <img src={second} className='md:w-[600px] h-[600px] w-[90%] mx-auto md:mx-0 md:h-[400px]' />
          <img src={third} className='md:w-[600px] h-[600px] w-[90%] mx-auto md:mx-0 md:h-[400px]' />
          <img src={fourth} className='md:w-[600px] h-[600px] w-[90%] mx-auto md:mx-0 md:h-[400px]' />
          <img src={fifth} className='md:w-[600px] h-[600px] w-[90%] mx-auto md:mx-0 md:h-[400px]' />
          <img src={sixth} className='md:w-[600px] h-[600px] w-[90%] mx-auto md:mx-0 md:h-[400px]' />
          <img src={seventh} className='md:w-[600px] h-[600px] w-[90%] mx-auto md:mx-0 md:h-[400px]' />
          <img src={eight} className='md:w-[600px] h-[600px] w-[90%] mx-auto md:mx-0 md:h-[400px]' />
          <img src={nine} className='md:w-[600px] h-[600px] w-[90%] mx-auto md:mx-0 md:h-[400px]' />
      </section>

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
