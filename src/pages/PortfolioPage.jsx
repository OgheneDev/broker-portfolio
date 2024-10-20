import React from 'react';
import { Link } from 'react-router-dom';
import help from '../assets/images/help.png';
import rate from '../assets/images/rate.png'
import alan from '../assets/images/alan.png'
import rich from '../assets/images/rich.png'
import griff from '../assets/images/griff.png'
import maria from '../assets/images/maria.png'

const PortfolioPage = () => {
  return (
    <div className='portfolio'>
      <header className='bg-back-blue text-center px-[20px] pt-[130px] pb-[40px]'>
        <h1 className='text-white text-5xl md:text-5xl font-bold mb-[20px]'>Remodeling Projects</h1>
        <p className='text-light-grey text-[18px]'>At Novak Investments and Construction LLC, we specialize in transforming homes into modern, functional spaces. Our project remodeling services focus on enhancing property value and meeting client needs through expert design, quality craftsmanship, and attention to detail. From concept to completion, we handle every aspect of your home remodeling project, ensuring a seamless and efficient process.</p>
      </header>

      {/* Projects Section */}
      <section className="projects py-[100px] md:grid-cols-2 md:px-[150px] md:gap-4 px-[30px] grid gap-[30px] bg-custom-ash">
        {/* Work Item 1 */}
        <div className="relative aspect-square bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/arcadia.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project</span>
            <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Arcadia Apartment Homes</h3>
          </div>
        </div>

        {/* Work Item 2 */}
        <div className="relative aspect-square bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/town.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project</span>
            <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Township Residencies</h3>
          </div>
        </div>

        {/* Work Item 3 */}
        <div className="relative aspect-square bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/glenn.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project</span>
            <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">The Glenn</h3>
          </div>
        </div>

        {/* Work Item 4 */}
        <div className="relative aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/green.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project</span>
            <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Greenwood Plaza</h3>
          </div>
        </div>

        {/* Work Item 5 */}
        <div className="relative aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/hensley.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project</span>
            <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Hensley at the District</h3>
          </div>
        </div>

        {/* Work Item 6 */}
        <div className="relative aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/villas.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project</span>
            <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">AMLI Littleton Village</h3>
          </div>
        </div>

        {/* Work Item 7 */}
        <div className="relative aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/keene.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project</span>
            <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Keene at the District</h3>
          </div>
        </div>
      </section>


      <section className='bg-custom-ash px-[20px] pt-[70px]'>
      <article className='text-center flex gap-[20px] flex-col font-bold text-[18px] md:mb-[50px] mb-[30px]'>
        <span className='text-dark-accent uppercase'>Testimonials</span>
        <h1 className='text-dark text-3xl font-bold'>What Our 
        Clients Saying</h1>
      </article>

      <div className="cards mb-[30px] md:grid md:grid-cols-2 md:gap-4 md:px-[150px]">
        <div className="card bg-white px-[20px] py-[30px] border border-custom-pink rounded">
           <img src={rate} alt="" className='mb-[30px]' />

           <p className='text-dark-grey text-[18px] mb-[30px]'>Novak Investments and Construction exceeded our expectations. They turned our outdated house into a modern, comfortable home, staying on time and within budget. Fantastic experience!</p>

           <div className='flex gap-[20px]'>
            <img src={alan} alt="" />
            <article>
                <h5 className='text-dark text-[18px] font-bold'>Michael Turner</h5>
                <p className='text-dark-grey'>Reke Ltd.</p>
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

           <p className='text-dark-grey text-[18px] mb-[30px]'>Novak Investments and Construction LLC completely transformed our outdated kitchen and living space. Their team was professional, attentive, and delivered exactly what we envisioned. Highly recommend!</p>

           <div className='flex gap-[20px]'>
            <img src={griff} alt="" />
            <article>
                <h5 className='text-dark text-[18px] font-bold'>John Mitchell</h5>
                <p className='text-dark-grey'>AlphaSeven</p>
            </article>
           </div>
        </div>

        <div className="card px-[20px] py-[30px] border border-custom-pink rounded">
           <img src={rate} alt="" className='mb-[30px]' />

           <p className='text-dark-grey text-[18px] mb-[30px]'>From start to finish, the remodeling process was seamless. Novak’s attention to detail and commitment to quality made all the difference. Our home feels brand new!</p>

           <div className='flex gap-[20px]'>
            <img src={maria} alt="" />
            <article>
                <h5 className='text-dark text-[18px] font-bold'>Emily Roberts</h5>
                <p className='text-dark-grey'>Whochat</p>
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
            <h1 className='text-white text-4xl md:text-4xl font-bold mb-[20px]'>We’re Here To Build Your Dream Project</h1>
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
  );
}

export default PortfolioPage;

