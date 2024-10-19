import React, { useState, useRef, useEffect } from 'react';
import azah from '../assets/images/azah.png';
import roe from '../assets/images/roe.png';
import leo from '../assets/images/leo.png';

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const teamContainerRef = useRef(null);
  const totalMembers = 3;

  const teamMembers = [
    { name: 'David Carter', role: 'Designer', imgSrc: azah },
    { name: 'Matthew Wrights', role: 'Developer', imgSrc: roe },
    { name: 'Michael Thompson', role: 'Budget Organizer', imgSrc: leo }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) { // Only for mobile
        const container = teamContainerRef.current;
        const scrollPosition = container.scrollLeft;
        const memberWidth = container.offsetWidth;
        const currentIndex = Math.round(scrollPosition / memberWidth);
        setActiveIndex(currentIndex);
      }
    };

    const container = teamContainerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (window.innerWidth < 768) { // Only autoplay on mobile
        const container = teamContainerRef.current;
        const nextIndex = (activeIndex + 1) % totalMembers;
        const memberWidth = container.offsetWidth;
        container.scrollTo({
          left: memberWidth * nextIndex,
          behavior: 'smooth',
        });
        setActiveIndex(nextIndex);
      }
    }, 15000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <section className='bg-back-blue md:px-[200px]'>
      <article className='flex flex-col gap-[20px] px-[20px] py-[50px]'>
        <span className='text-dark-accent uppercase'>Team</span>
        <h1 className='text-white font-bold text-4xl'>
          Team of Skilled <br /> Builders and Investment Professionals
        </h1>
      </article>

      <div
        className="team-container flex overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none space-x-[30px] px-4 md:justify-between"
        ref={teamContainerRef}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-[75vw] md:w-[30%] p-4 border border-light-blue flex flex-col items-center"
          >
            <img src={member.imgSrc} alt={member.name} className="w-full md:w-[200px] h-auto object-cover" />
            <p className="text-white font-bold mt-3">{member.name}</p>
            <span className="text-light-grey text-[14px]">{member.role}</span>
          </div>
        ))}
      </div>

      <div className="indicator-dots flex justify-center mt-4 md:hidden">
        {teamMembers.map((_, index) => (
          <span
            key={index}
            className={`dot h-[15px] w-[15px] mx-2 rounded-full cursor-pointer ${
              index === activeIndex
                ? 'bg-[#EF6D58]'
                : 'bg-transparent border border-white'
            }`}
            onClick={() => {
              const container = teamContainerRef.current;
              const memberWidth = container.offsetWidth;
              container.scrollTo({
                left: memberWidth * index,
                behavior: 'smooth',
              });
              setActiveIndex(index);
            }}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Team;



