import React from 'react'

const Work = () => {
  return (
    <section className='works bg-back-blue px-[20px] py-[50px] mb-[100px]'>
      <article className='text-center mb-[30px]  flex flex-col gap-[20px]'>
        <span className='text-dark-accent uppercase'>Portfolio</span>
        <h1 className='text-white font-bold text-4xl'>Latest  Work</h1>
      </article>

      <div className="properties flex-col gap-[30px] flex mb-[30px]">
      <div className="relative bg-[url('/src/assets/images/town.webp')] w-[90%] mx-auto h-[500px] px-[20px] pb-[30px] flex flex-col justify-end bg-cover bg-center group rounded-[10px]">
        {/* Dark overlay effect */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

       <p className="relative text-white font-bold text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Township Residences
       </p>
     </div>

     <div className="relative bg-[url('/src/assets/images/glenn.webp')] w-[90%] mx-auto h-[500px] px-[20px] pb-[30px] flex flex-col justify-end bg-cover bg-center group rounded-[10px]">
        {/* Dark overlay effect */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

       <p className="relative text-white font-bold text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        The Glenn
       </p>
     </div>

     <div className="relative bg-[url('/src/assets/images/green.webp')] w-[90%] mx-auto h-[500px] px-[20px] pb-[30px] flex flex-col justify-end bg-cover bg-center group rounded-[10px]">
        {/* Dark overlay effect */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

       <p className="relative text-white font-bold text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Greenwood Plaza
       </p>
     </div>

      </div>

      <div className="flex justify-center"><button className='border border-white px-[30px] py-[5px] rounded-[5px] text-white uppercase'>Explore more</button></div>
    </section>
  )
}

export default Work
