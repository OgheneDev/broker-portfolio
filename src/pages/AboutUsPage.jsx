import React from 'react'
import { Link } from 'react-router-dom'
import Team from '../components/Team'
import pro from '../assets/images/pro.svg'
import vid from '../assets/images/glenn.webp'
import plant from '../assets/images/plant.png'
import office from '../assets/images/line.png'
import laptop from '../assets/images/laptop.png'
import bag from '../assets/images/bag.png'
import rate from '../assets/images/rate.png'
import alan from '../assets/images/alan.png'
import rich from '../assets/images/rich.png'
import griff from '../assets/images/griff.png'
import maria from '../assets/images/maria.png'
import help from '../assets/images/help.png'

const AboutUsPage = () => {
  return (
    <div className='about'>
      <header className='bg-back-blue text-center px-[20px] pt-[130px] pb-[40px]'>
        <h1 className='text-white text-5xl font-bold mb-[20px]'>About Us</h1>
        <p className='text-light-grey text-[18px]'>Novak Investments and Construction LLC provides a full service range including technical skills, design, business understanding.</p>
      </header>

      <section className='bg-custom-ash px-[30px] py-[60px] md:flex md:gap-[100px] md:px-[100px] md:justify-center'>
        <article>
            <span className='text-dark-accent uppercase text-[18px]'>About</span>
            <h1 className='text-dark text-4xl font-bold my-[30px] md:my-[20px]'>An Experience <br className='hidden md:block' />
            Design Agency</h1>
        </article>

        <p className='text-[18px] md:text-[14px] md:w-[450px] text-dark-grey'>Welcome to Novak Investments and Construction LLC, where life innovation meets reliability in the world of construction and investment. Founded by Joshua Novak, a passionate civil engineer with roots in the Czech Republic and a thriving career in the United States, our company is driven by a commitment to excellence and a vision for success.
After moving to the U.S. in 2014, I graduated with a Master’s degree in Civil Engineering from Arizona State University, equipping myself with the knowledge and skills necessary to excel in the building industry. My experience and education serve as the foundation for our company, which aims to transform dreams into tangible realities.
At Novak Investments and Construction LLC, we specialize in construction and property development, dedicated to delivering high-quality projects that exceed our clients’ expectations. We understand that trust and reliability are paramount in this industry. This is why our team is committed to honesty, transparency, and a client-first approach in every endeavor we undertake.
</p>
      </section>

      <div className="image-container md:flex md:items-center bg-custom-ash px-[30px] pb-[60px] md:px-[150px] md:gap-[30px]">
         <div className="video-cont w-full mb-[20px]">
            <img src={vid} alt="" className='w-full rounded-lg' />
         </div>

         <div className="container grid grid-cols-2 gap-3">
            <img src={plant} alt="" className='w-full' />
            <img src={office} alt="" className='w-full' />
            <img src={laptop} alt="" className='w-full' />
            <img src={bag} alt="" className='w-full' />
         </div>
      </div>

      <div className="bg-custom-ash">
      <div className="container pb-[100px] bg-custom-ash px-[30px] md:flex md:px-[150px] md:gap-[50px]">
         <article className='flex flex-col gap-[30px] mb-[20px]'>
            <p className='text-dark-grey text-[14px]'>In addition to our construction services, I am also passionate about investment opportunities. My team and I have successfully guided numerous clients towards financial growth through intelligent stock investments. We take pride in helping our clients achieve their goals and build a successful future. As we look to the future, our ambition is to continue expanding our services, transforming properties, and creating lasting partnerships. We believe that success is best when shared, and we are dedicated to fostering an environment where our clients, partners, and team members can thrive.</p>
         </article>

         <div className="cards text-dark md:flex md:items-end">
             <div className="card w-full bg-white p-[30px] md:w-[280px] mx-auto border border-custom-pink">
                <div className='bg-custom-idk w-fit mb-[30px] p-[15px] rounded-[50%]'><img src={pro} alt="" className='w-[30px]' /></div>
                <h4 className='font-bold text-dark text-2xl mb-[20px]'>Professional</h4>
                <p>Full service range including technical skills, design.</p>
             </div>

             <div className='card w-full border md:w-[280px] border-x-custom-pink mx-auto p-[30px]'>
                 <h4 className='font-bold text-dark text-2xl mb-[20px]'>Accessibility</h4>
                 <p>Business understanding, ability to put themselves.</p>
             </div>
         </div>
       </div>
      </div>

       <div className='bg-custom-ash pb-[100px]'>
       <div className="stats text-dark mx-auto w-[90%] md:flex md:justify-center">
        <div className="stat border border-custom-pink p-[30px] md:pr-[120px]">
            <h2 className='font-bold text-4xl'>8</h2>
            <p>Years of experience</p>
        </div>

        <div className="stat border border-custom-pink p-[30px] md:pr-[120px]">
            <h2 className='font-bold text-4xl'>20+</h2>
            <p>Agency members</p>
        </div>

        <div className="stat border border-custom-pink p-[30px] md:pr-[120px]">
            <h2 className='font-bold text-4xl'>500</h2>
            <p>Projects complete</p>
        </div>
      </div>
       </div>
        <Team />

        <section>
            <article className='bg-back-blue text-center px-[20px] py-[40px]'>
                <span className='text-dark-accent uppercase text-[18px] '>Testimonials</span>
                <h1 className='text-4xl text-white mt-[20px] font-bold'>What Our 
                Clients Saying</h1>
            </article>

            <div className="cards bg-custom-ash pb-[30px] md:mb-0 md:py-[50px] md:grid md:grid-cols-2 md:gap-4 md:px-[150px]">
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
        </section>

        <div className="bg-custom-ash">
        <div className="help bg-custom-idk md:flex md:flex-row-reverse md:justify-center w-[90%] mx-auto md:gap-[30px] md:py-[60px] px-[20px] py-[30px] rounded">
         <div className="image-container mb-[30px] md:mb-0">
            <img src={help} alt="" />
         </div>

         <div className="text-content md:w-[500px]">
            <h1 className='text-white text-4xl md:text-4xl font-bold mb-[20px]'>We’re Help To Build Your Dream Project</h1>
            <p className='text-light-grey md:text-[16px] text-[18px] mb-[30px]'>Novak Investments and Construction LLC is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
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

export default AboutUsPage
