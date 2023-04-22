import React from 'react'
import videoHero from '../assets/reel.mp4'


function Hero() {
  return (
    <div className='bg-[#0a050b]  mb-10'>
      <video className='pt-[96px] sm:pt-[30px]' src={videoHero} autoPlay loop muted  />
      {/* <div className='carousel-container bg-[#060307]'>
        <p className='text-white '>
        “Los momentos de juego con el montaje que hace confluir lo coral resultan lo destacado del despliegue técnico, que en los demás aspectos es correcto y simple”
        </p>
      
      </div> */}
    </div>
  )
}

export default Hero