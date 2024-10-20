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
      <span className="text-white">{time}</span>
    </div>
    <div className="border-b border-gray-600 mb-[40px]"></div>
    <h3 className="text-white text-2xl font-semibold mb-[20px]">{title}</h3>
    <p className="text-gray-400 text-[18px] mb-[20px]">{description}</p>
    <button className="text-gray-400 text-sm font-semibold">Explore Now</button>
  </div>
);

const Events = () => {
  return (
    <div className="bg-back-blue px-[20px] py-[50px] md:py-[100px]">
      <div className="text-center mb-[40px] md:mb-[60px] flex flex-col gap-[20px]">
        <p className="text-dark-accent uppercase">Events</p>
        <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">Explore Future<br/>Conferences</h2>
      </div>
      
      {/* Changed to a grid layout on larger screens for better responsiveness */}
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[40px] md:px-[150px]">
        <EventCard 
          date="3"
          month="November"
          year="2021"
          time="9:00 am - 3:00 pm"
          title="Design Weeks"
          description="Novak Investments and Construction LLC is a business you hire to outsource your digital."
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
      
      {/* Adjusted button layout for both mobile and desktop */}
      <div className="flex justify-center mt-[40px]">
        <button className="w-fit text-white border border-white px-[40px] rounded py-[10px] text-sm font-semibold transition-transform transform hover:scale-105">
          EXPLORE MORE
        </button>
      </div>
    </div>
  );
};

export default Events;

