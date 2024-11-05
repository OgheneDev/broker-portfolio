import React, { useRef, useState } from 'react';
import phone from '../assets/images/phone.svg'
import email from '../assets/images/email.svg'
import emailjs from 'emailjs-com';

const ContactPage = () => {

  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm('service_oue08zn', 'template_a06fmjf', form.current, 'd-Ir5APRYvIMx9yz9')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
      })
      .finally(() => {
          setIsLoading(false);
      });
  };

  return (
    <div className='bg-custom-ash'>
      <header className='bg-back-blue text-center px-[20px] pt-[130px] pb-[40px] mb-[50px]'>
        <h1 className='text-white text-6xl font-bold mb-[20px]'>Contact</h1>
        <p className='text-light-grey text-[18px]'>Novak Investments and Construction LLC provides a full service range including technical skills, design, business understanding.</p>
      </header>

      <form ref={form} onSubmit={sendEmail} className='contact flex flex-col bg-white gap-[20px] px-[25px] py-[50px] rounded mb-[80px] md:w-[350px]'>
        <h3 className='font-bold text-dark text-3xl'>Get In Touch</h3>
        <input type="email" name="user_email" placeholder='Your email' className='bg-white py-[15px] pl-[10px] border border-custom-pink rounded' required />
        <input type="text" name="subject" placeholder='Subject' className='bg-white py-[15px] pl-[10px] border border-custom-pink rounded' required />
        <textarea name="message" placeholder='Message' className='bg-white py-[15px] pl-[10px] border border-custom-pink rounded' required />
        <div className="flex justify-end">
          <button 
            className="px-[30px] py-[10px] text-white bg-custom-idk rounded uppercase font-bold flex items-center" 
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loader mr-2"></span>
                Sending...
              </>
            ) : (
              'Submit now'
            )}
          </button>
        </div>
      </form>

      <div className="contacy-cards pb-[30px] mt-[50px] md:px-[150px] md:flex md:justify-center">
        <div className="card border border-custom-pink px-[20px] py-[30px] rounded w-[90%] mx-auto md:pr-[150px]">
           <div className='flex items-center gap-[20px]'>
             <div className='bg-custom-idk p-[15px] rounded-[50%] w-fit mb-[30px]'>
                <img src={phone} alt="" className='w-[35px]' />
             </div>
             <span className='text-dark-accent text-2xl uppercase'>Phone</span>
           </div>
            <p className='text-dark text-2xl md:text-[16px]'>+1 (231) 366-143</p>
        </div>
        <div className="card border border-custom-pink px-[20px] py-[30px] rounded w-[90%] mx-auto md:pr-[150px]">
           <div className='flex items-center gap-[20px]'>
             <div className='bg-custom-idk p-[15px] rounded-[50%] w-fit mb-[30px]'>
                <img src={email} alt="" className='w-[35px]' />
             </div>
             <span className='text-dark-accent text-2xl uppercase'>Email</span>
           </div>
            <p className='text-dark text-2xl md:text-[16px]'>novak14319@gmail.com</p>
        </div>
      </div>

    </div>
  )
}

export default ContactPage
