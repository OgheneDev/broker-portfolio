import React from 'react'
import feat from '../assets/images/feat.png'

const Features = () => {
  return (
    <section>
       <div className="image-container">
          <img src={feat} alt="" />
       </div>

       <div className="text-content">
         <article>
            <span>Features</span>
            <h1>Give Your Site 
            A New Look</h1>
            <p>Service range including technical skills, design, business understanding.</p>
         </article>

         <ul>
            <li>Range including technical skills</li>
            <li>Business understanding</li>
            <li>Partner on the long run</li>
         </ul>
       </div>

       <div className="container">
         <article>
            <span>Features</span>
            <p>Long run, and work as an extension of the merchant's team.</p>
         </article>

         <div className="cards">
            
         </div>
       </div>
    </section>
  )
}

export default Features
