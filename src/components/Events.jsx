import React from 'react';
import clock from '../assets/images/clock.svg';

const EventCard = ({ date, month, year, time, title, description }) => (
  <div className="rounded-lg px-[20px] py-[40px] border border-gray-600">
    <div className="flex items-start mb-4">
      <div className="text-white mr-4 flex gap-[20px]">
        <div className="text-7xl font-bold">{date}</div>
        <div className="text-2xl">{month}<br/>{year}</div>
      </div>
    </div>
    <div className="flex items-center mb-[40px]">
      <img src={clock} alt="Clock" className="w-4 h-4 mr-2" />
      <span className='text-white'>{time}</span>
    </div>
    <div className="border-b border-gray-600 mb-[40px]"></div>
    <h3 className="text-white text-2xl font-semibold mb-[20px]">{title}</h3>
    <p className="text-gray-400 text-[18px] mb-[20px]">{description}</p>
    <button className="text-gray-400 text-sm font-semibold">Explore Now</button>
  </div>
);

const Events = () => {
  return (
    <div className="bg-back-blue px-[20px] py-[50px] md:py-0">
      <div className="text-center mb-[20px] md:mb-[40px] flex flex-col gap-[20px]">
        <p className="text-dark-accent uppercase">Events</p>
        <h2 className="text-white text-4xl font-bold">Explore Future<br/>Conferences</h2>
      </div>
      
      <div className="flex flex-col gap-[20px] md:flex-row md:px-[150px]">
      <EventCard 
        date="3"
        month="November"
        year="2021"
        time="9:00 am - 3:00 pm"
        title="Design Weeks"
        description="Digital agency is a business you hire to outsource your digital."
      />
      
      <EventCard 
        date="15"
        month="November"
        year="2021"
        time="1:00 pm - 8:00 pm"
        title="Interior Design"
        description="Marketing efforts, instead of handling in-house."
      />
      
      <EventCard 
        date="2"
        month="December"
        year="2021"
        time="10:00 am - 2:00 pm"
        title="The F design events"
        description="Provide your business with a variety of digital solutions to promote."
      />
      </div>
      
      <div className='flex justify-center mt-[30px]'>
      <button className="w-fit text-white border border-white px-[30px] py-[5px] md:mb-[20px]">
        EXPLORE MORE
      </button>
      </div>
    </div>
  );
};

export default Events;
