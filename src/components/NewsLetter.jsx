import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import phone from '../assets/images/phone.svg';
import email from '../assets/images/email.svg';
import help from '../assets/images/help.png';
import emailjs from 'emailjs-com';

const NewsLetter = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');

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

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Implement subscribe logic here
    alert(`Subscribed with email: ${subscribeEmail}`);
    setSubscribeEmail('');
  };

  return (
    <section className='bg-custom-ash px-[30px] py-[40px] md:px-[150px]'>
      <div className='md:flex md:justify-between'>
        <h1 className='text-4xl font-bold text-dark mb-[30px]'>Newsletter</h1>

        <form onSubmit={handleSubscribe} className='flex flex-col md:flex-row md:items-start gap-[20px] mb-[100px] rounded'>
          <input 
            type="email" 
            placeholder='Your email' 
            className='bg-white py-[15px] md:pr-[100px] pl-[10px] rounded'
            value={subscribeEmail}
            onChange={(e) => setSubscribeEmail(e.target.value)}
            required 
          />
          <button type="submit" className='bg-white py-[15px] md:px-[30px] rounded'>Subscribe</button>
        </form>
      </div>

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

      <div className="contact-cards mb-[80px] md:flex md:justify-center md:gap-[20px]">
        <div className="card border border-custom-pink px-[20px] py-[30px] rounded md:pr-[50px] mb-[20px] md:mb-0">
          <div className='flex items-center gap-[20px]'>
            <div className='bg-custom-idk p-[15px] rounded-[50%] w-fit mb-[30px]'>
              <img src={phone} alt="Phone icon" className='w-[35px] md:w-[15px]' />
            </div>
            <span className='text-dark-accent text-xl uppercase'>Phone</span>
          </div>
          <p className='text-dark text-xl md:text-[16px]'>+1 (231) 366-143</p>
        </div>
        <div className="card border border-custom-pink px-[20px] py-[30px] rounded md:pr-[50px]">
          <div className='flex items-center gap-[20px]'>
            <div className='bg-custom-idk p-[15px] rounded-[50%] w-fit mb-[30px]'>
              <img src={email} alt="Email icon" className='w-[35px] md:w-[15px]' />
            </div>
            <span className='text-dark-accent text-xl uppercase'>Email</span>
          </div>
          <p className='text-dark text-xl md:text-[16px]'>novak14319@gmail.com</p>
        </div>
      </div>

      <div className="help bg-custom-idk md:flex md:flex-row-reverse md:justify-center md:gap-[30px] md:py-[60px] px-[20px] py-[30px] rounded">
        <div className="image-container mb-[30px] md:mb-0">
          <img src={help} alt="Help illustration" className='w-[300px]' />
        </div>

        <div className="text-content md:w-[500px]">
          <h1 className='text-white text-4xl md:text-4xl font-bold mb-[20px]'>We're Here To Build Your Dream Project</h1>
          <p className='text-light-grey md:text-[16px] text-[18px] mb-[30px]'>Novak Investments and Construction LLC is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
          <Link to='/contact'>
            <button className='text-dark font-bold py-[10px] px-[30px] uppercase bg-white rounded'>Contact Us</button>
          </Link>
        </div>
      </div>

      {/* ... rest of the component remains unchanged ... */}
    </section>
  );
};

export default NewsLetter;

