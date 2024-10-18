import React from 'react'
import azah from '../assets/images/azah.png'

const Team = () => {
  return (
    <section>
      <article className='flex flex-col gap-[20px] bg-back-blue px-[20px] py-[50px]'>
        <span className='text-dark-accent uppercase'>Team</span>
        <h1 className='text-white font-bold text-4xl'>Teams Of Designers and Developers</h1>
      </article>

      <div className="image-container w-fit">
        <div>
            <img src={azah} alt="" className='w-fit' />
        </div>
      </div>
    </section>
  )
}

export default Team
