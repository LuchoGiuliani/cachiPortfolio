import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { photos } from "../constants";

function Fotos() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#1E0D1F]">
      <h1 className="text-bold text-[48px] sm:text-7xl text-[#E9262C] text-center p-9">Fotos</h1>
    <Slider className="rounded-xl overflow-hidden " {...settings}
   
  >
    {photos.map((foto) => (
      <img key={foto.id} className="w-[128px] h-[360px] rounded-xl p-4" src={foto.img} alt="" />
    ))}
  </Slider>
  </div>
  
  );
}


export default Fotos;
