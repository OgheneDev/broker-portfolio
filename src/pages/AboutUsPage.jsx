import React from 'react'
import pro from '../assets/images/pro.svg'
import vid from '../assets/images/vid.png'
import plant from '../assets/images/plant.png'
import office from '../assets/images/line.png'
import laptop from '../assets/images/laptop.png'
import bag from '../assets/images/bag.png'

const AboutUsPage = () => {
  return (
    <div className='about'>
      <header className='bg-back-blue text-center px-[20px] pt-[130px] pb-[40px]'>
        <h1 className='text-white text-6xl font-bold mb-[20px]'>About Us</h1>
        <p className='text-light-grey text-[18px]'>Agency provides a full service range including technical skills, design, business understanding.</p>
      </header>

      <section className='bg-custom-ash px-[30px] py-[60px]'>
        <article>
            <span className='text-dark-accent uppercase text-[18px]'>About</span>
            <h1 className='text-dark text-4xl font-bold my-[30px]'>An Experience 
            Design Agency</h1>
        </article>

        <p className='text-[18px] text-dark-grey'>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team. A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
      </section>

      <div className="image-container bg-custom-ash px-[30px] pb-[60px]">
         <div className="video-cont w-full mb-[20px]">
            <img src={vid} alt="" className='w-full' />
         </div>

         <div className="container grid grid-cols-2 gap-4">
            <img src={plant} alt="" className='w-full' />
            <img src={office} alt="" className='w-full' />
            <img src={laptop} alt="" className='w-full' />
            <img src={bag} alt="" className='w-full' />
         </div>
      </div>

      <div className="container pb-[100px] bg-custom-ash px-[30px]">
         <article className='flex flex-col gap-[30px] mb-[20px]'>
            <span className='uppercase text-dark-accent'>Features</span>
            <p className='text-dark text-2xl'>Long run, and work as an extension of the merchant's team.</p>
            <p className='text-[18px] text-dark-grey'>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension.</p>
         </article>

         <div className="cards text-dark ">
             <div className="card w-full bg-white p-[30px] mx-auto border border-custom-pink">
                <div className='bg-custom-idk w-fit mb-[30px] p-[15px] rounded-[50%]'><img src={pro} alt="" className='w-[30px]' /></div>
                <h4 className='font-bold text-dark text-2xl mb-[20px]'>Professional</h4>
                <p>Full service range including technical skills, design.</p>
             </div>

             <div className='card w-full border border-x-custom-pink mx-auto p-[30px]'>
                 <h4 className='font-bold text-dark text-2xl mb-[20px]'>Accessibility</h4>
                 <p>Business understanding, ability to put themselves.</p>
             </div>
         </div>
       </div>

       <div className='bg-custom-ash pb-[100px]'>
       <div className="stats text-dark mx-auto w-[90%]">
        <div className="stat border border-custom-pink p-[30px]">
            <h2 className='font-bold text-5xl'>42%</h2>
            <p>Years of experience</p>
        </div>

        <div className="stat border border-custom-pink p-[30px]">
            <h2 className='font-bold text-5xl'>73+</h2>
            <p>Agency members</p>
        </div>

        <div className="stat border border-custom-pink p-[30px]">
            <h2 className='font-bold text-5xl'>5,0000</h2>
            <p>Projects complete</p>
        </div>
      </div>
       </div>

    </div>
  )
}

export default AboutUsPage
