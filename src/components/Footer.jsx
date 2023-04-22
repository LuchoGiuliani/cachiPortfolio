
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { useTypewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className='flex gap-2 justify-between align-middle p-6  w-full z-[60]'
      style={{ backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.1)' : 'black' }}
    >
      <div className='flex gap-2 items-center'>
        <img src='./camara.png' alt='INICIO' />
      </div>
      <div className='flex gap-2'>
        <h2 className='text-white lg:w-[368px] font-semibold'>
        CARLA <span className='text-[#136968] font-bold'>GIULIANI</span>    |
         
        </h2>
        <FontAwesomeIcon icon={faEnvelope} className="w-[32px] h-[32px] text-[#ffffff] hover:scale-110 hover:text-[#136968]	" />
        <FontAwesomeIcon icon={faInstagram} className="w-[32px] h-[32px] text-[#ffffff] hover:scale-110 hover:text-[#136968]	"/>
       
       
        
      </div>
    </div>
  );

}

export default Footer