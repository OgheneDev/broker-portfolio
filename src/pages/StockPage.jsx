import React from 'react';
import first from '../assets/images/IMG-20241017-WA0004.jpg';
import second from '../assets/images/IMG-20241017-WA0005.jpg';
import third from '../assets/images/IMG-20241017-WA0006.jpg';
import fourth from '../assets/images/IMG-20241017-WA0007.jpg';
import fifth from '../assets/images/IMG-20241017-WA0008.jpg';
import sixth from '../assets/images/IMG-20241017-WA0009.jpg';
import seventh from '../assets/images/IMG-20241017-WA0010.jpg';
import eight from '../assets/images/IMG-20241017-WA0011.jpg';
import nine from '../assets/images/IMG-20241017-WA0012.jpg';
import help from '../assets/images/help.png';
import rate from '../assets/images/rate.png'
import alan from '../assets/images/alan.png'
import rich from '../assets/images/rich.png'
import griff from '../assets/images/griff.png'
import maria from '../assets/images/maria.png'

const StockPage = () => {
  return (
    <div>
      <header className='bg-back-blue text-center px-[20px] pt-[130px] pb-[40px]'>
        <h1 className='text-white text-6xl md:text-5xl font-bold mb-[20px]'>Stocks</h1>
        <p className='text-light-grey text-[18px]'>Novak Investments and Construction LLC provides expert guidance in stock market investments. We help clients navigate the complexities of the market, offering tailored strategies to build and grow portfolios. With in-depth market analysis and a focus on risk management, we ensure informed decisions that align with your financial goals for long-term success.</p>
      </header>
      
      <div className="bg-custom-ash pt-[50px]">
        <section className="stocks grid grid-cols-1 md:grid-cols-3 gap-[20px] justify-center mx-auto px-[20px] py-[60px] md:py-[100px] max-w-[1000px]">
          <div className="md:col-span-3 flex flex-col md:flex-row justify-center items-center gap-[20px]">
            <img src={seventh} className='w-[300px] h-auto' />
            <img src={fourth} className='w-[300px] h-auto md:-mt-[50px]' />
            <img src={fifth} className='w-[300px] h-auto md:-mt-[50px]' />
          </div>
          <img src={third} className='w-[300px] h-auto mx-auto' />
          <img src={sixth} className='w-[300px] h-auto mx-auto' />
          <img src={second} className='w-[300px] h-auto mx-auto' />
          <img src={eight} className='w-[300px] h-auto mx-auto' />
          <img src={nine} className='w-[300px] h-auto mx-auto' />
          <img src={first} className='w-[300px] h-auto mx-auto' />
        </section>
      </div>

      <section className='bg-custom-ash px-[20px] pt-[70px]'>
      <article className='text-center flex gap-[20px] flex-col font-bold text-[18px] md:mb-[50px] mb-[30px]'>
        <span className='text-dark-accent uppercase'>Testimonials</span>
        <h1 className='text-dark text-3xl font-bold'>What Our 
        Clients Saying</h1>
      </article>

      <div className="cards mb-[30px] md:grid md:grid-cols-2 md:gap-4 md:px-[150px]">
        <div className="card bg-white px-[20px] py-[30px] border border-custom-pink rounded">
           <img src={rate} alt="" className='mb-[30px]' />

           <p className='text-dark-grey text-[18px] mb-[30px]'>Novak Investments helped me diversify my portfolio with confidence. Their strategies and market insights have consistently delivered strong returns.</p>

           <div className='flex gap-[20px]'>
            <img src={alan} alt="" />
            <article>
                <h5 className='text-dark text-[18px] font-bold'>James Caldwell</h5>
                <p className='text-dark-grey'>Solarblue</p>
            </article>
           </div>
        </div>

        <div className="card px-[20px] py-[30px] border border-custom-pink rounded">
           <img src={rate} alt="" className='mb-[30px]' />

           <p className='text-dark-grey text-[18px] mb-[30px]'>Thanks to Novak, I've navigated the stock market with ease. Their guidance has been invaluable in growing my investments over the years.</p>

           <div className='flex gap-[20px]'>
            <img src={rich} alt="" />
            <article>
                <h5 className='text-dark text-[18px] font-bold'>Ryan Harris</h5>
                <p className='text-dark-grey'>Aruban</p>
            </article>
           </div>
        </div>

        <div className="card px-[20px] py-[30px] border border-custom-pink rounded">
           <img src={rate} alt="" className='mb-[30px]' />

           <p className='text-dark-grey text-[18px] mb-[30px]'>The team at Novak Investments is top-notch. Their expertise in stock market trends and risk management has been key to my financial success.</p>

           <div className='flex gap-[20px]'>
            <img src={griff} alt="" />
            <article>
                <h5 className='text-dark text-[18px] font-bold'>David Nguyen</h5>
                <p className='text-dark-grey'>Twitor</p>
            </article>
           </div>
        </div>

        <div className="card px-[20px] py-[30px] border border-custom-pink rounded">
           <img src={rate} alt="" className='mb-[30px]' />

           <p className='text-dark-grey text-[18px] mb-[30px]'>I was new to stock trading, but Novak Investments made it simple and stress-free. Their personalized approach gave me the confidence I needed.</p>

           <div className='flex gap-[20px]'>
            <img src={maria} alt="" />
            <article>
                <h5 className='text-dark text-[18px] font-bold'>Linda Matthews</h5>
                <p className='text-dark-grey'>Redate</p>
            </article>
           </div>
        </div>

      </div>

      <div className="flex justify-center pb-[80px]"><button className='bg-white px-[35px] py-[10px] rounded uppercase'>See All</button></div>
    </section>
      
      {/* Help Section */}
      <div className="bg-custom-ash">
        <div className="help bg-custom-idk md:flex md:flex-row-reverse md:justify-center w-[90%] mx-auto md:gap-[30px] md:py-[50px] px-[20px] py-[30px] rounded">
          <div className="image-container mb-[30px] md:mb-0">
            <img src={help} alt="Help" className='w-[300px]' />
          </div>
          
          <div className="text-content md:w-[500px]">
            <h1 className='text-white text-5xl md:text-4xl font-bold mb-[20px]'>We're Here To Build Your Dream Project</h1>
            <p className='text-light-grey md:text-[16px] text-[18px] mb-[30px]'>Novak Investments and Construction LLC  is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
            <button className='text-dark font-bold py-[10px] px-[30px] uppercase bg-white rounded'>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockPage;
