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
      <div className="flex justify-center items-center">
        <img
          src="/fotos.png"
          alt="title fotos"
          className="p-3 w-[360px] h-[120px]"
        />
      </div>
      <Slider className="rounded-xl overflow-hidden " {...settings}>
        {photos.map((foto) => (
          <img
            key={foto.id}
            className="w-[128px] h-[360px] rounded-xl p-4"
            src={foto.img}
            alt=""
          />
        ))}
      </Slider>


      <Slider className="pt-6 block_projects  overflow-hidden" ref={sliderRef} {...settings}>
        <section className="relative block_projects">
          <div className=" h-screen  flex flex-col pt-6 justify-center  items-center bg-slate-200  p-3 bloque">
            <iframe
              className="youtube_bloque"
              width="60%"
              height="100%"
              src="https://www.youtube.com/embed/w4MdYkGZ0jk"
              title="EL CORTE (Blackout) (Trailer)"
            ></iframe>
            <div className="bg-[#fff] p-4 rounded-2xl mx-16">
              <p className="text-black text-center  ">
                El Corte - Largometraje Ficción [Edición - Continuidad - 2018]{" "}
                <br />
                Proyecto realizado durante el año 2014/2015 y estrenado en mayo
                de 2018 en Cine Gaumont. <br /> Actualmente disponible en
                CINE.AR
              </p>
            </div>
          </div>
        </section>
        <section className="relative">
          <div className="h-screen bloque flex flex-col  justify-center  gap-4 items-center z-50 bg-yellow-200  p-6">
            <iframe
              className="youtube_bloque"
              width="60%"
              height="100%"
              src="https://www.youtube.com/embed/5fI7xZrygFE"
              title="Conectate a BA WIFI en el subte"
            ></iframe>
            <p className=" text-slate-900 text-center ">
              Subterraneos de Buenos Aires [Edición - 2016]{" "}
            </p>
          </div>
        </section>
        <section className="relative ">
          <div className="h-screen bloque flex flex-col   justify-center gap-4 items-center bg-[#292d3e]  p-3">
            <iframe
              className="youtube_bloque"
              width="60%"
              height="100%"
              src="https://www.youtube.com/embed/v2_QdjxscjE"
              title="Qué cábalas tienen nuestros pilotos?"
            ></iframe>
            <p className="text-white text-center ">
              #TopRaceQué cábalas tienen nuestros pilotos? [Edición - 2017]
            </p>
          </div>
        </section>
        <section className="relative">
          {/* <img src="/popCorn.png" alt="popCorn" className="popCorn absolute bottom-16 right-16 animate__animated animate__bounce" /> */}
          <div className="h-screen bloque flex flex-col  justify-center  gap-4 items-center bg-[#17152d]  p-3">
            <iframe
              className="youtube_bloque"
              width="60%"
              height="100%"
              src="https://www.youtube.com/embed/2YuYRLA64as"
              title="ENCARNAR"
            ></iframe>
            <p className="text-white text-center ">
              ENCARNAR 2013 | CORTO DOCUMENTAL{" "}
            </p>
          </div>
        </section>
        <section className="relative ">
          {/* <img src="/popCorn.png" alt="popCorn" className="popCorn absolute top-16 left-16 animate__animated animate__bounce animate__slower animate__repeat-2" /> */}

          <div className="h-screen bloque flex flex-col  justify-center  gap-4 items-center bg-[#c74458]  p-3">
            <iframe
              className="youtube_bloque"
              width="60%"
              height="100%"
              src="https://www.youtube.com/embed/-JJiuLkZ9pI?controls=0&modestbranding=1"
              title="Corre Naranja Corre 2015"
            ></iframe>

            <p className="text-white text-center ">
              CORRE NARANJA CORRE | 2015[ANIMACION]{" "}
            </p>
          </div>
        </section>
      </Slider>
    </div>
  );
}

export default Fotos;
