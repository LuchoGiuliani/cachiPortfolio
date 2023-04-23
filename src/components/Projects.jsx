import React, { useState, useEffect, useRef } from "react";
import { projects } from "../constants";

function Projects() {
  return (
    
      <div className="bg_projects bg-[#090409]">
        <div className="flex items-center justify-center p-6">
          
        /* <img className="" src="/projects-title2.png" alt="" /> */
        </div>
        <section className="relative ">
          <img src="/popCorn.png" alt="popCorn" className="popCorn absolute top-16 left-16 animate__animated animate__bounce" />
         
          <div className="  flex flex-col pt-6  items-center bg-slate-200  p-3 bloque">
            <iframe
              className="youtube_bloque"
              width="60%"
              height="660px" 
              src="https://www.youtube.com/embed/w4MdYkGZ0jk"
              title="EL CORTE (Blackout) (Trailer)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className="text-black text-center ">
              El Corte - Largometraje Ficción [Edición - Continuidad - 2018]{" "}
              <br />
              Proyecto realizado durante el año 2014/2015 y estrenado en mayo de
              2018 en Cine Gaumont. <br /> Actualmente disponible en CINE.AR{" "}
            </p>
          </div>
        </section>
        <section className="relative">
       
          <img src="/popCorn.png" alt="popCorn" className="popCorn absolute bottom-16 right-16 animate__animated animate__bounce" />
          <div className="bloque flex flex-col gap-4 items-center z-50 bg-yellow-200  p-6">
            <iframe
              className="youtube_bloque"
              width="60%"
              height="560px"
              src="https://www.youtube.com/embed/5fI7xZrygFE"
              title="Conectate a BA WIFI en el subte"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className=" text-slate-900 text-center ">
              Subterraneos de Buenos Aires [Edición - 2016]{" "}
            </p>
          </div>
        </section>
        <section className="relative ">
        <img src="/popCorn.png" alt="popCorn" className="popCorn absolute top-16 left-16 animate__animated animate__bounce" />
          
          <div className="bloque flex flex-col gap-4 items-center bg-[#292d3e]  p-3">
            <iframe
               className="youtube_bloque"
              width="60%"
              height="560px"
              src="https://www.youtube.com/embed/v2_QdjxscjE"
              title="Qué cábalas tienen nuestros pilotos?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className="text-white text-center ">
              #TopRaceQué cábalas tienen nuestros pilotos? [Edición - 2017]
            </p>
          </div>
        </section>
        <section className="relative">
        
          <img src="/popCorn.png" alt="popCorn" className="popCorn absolute bottom-16 right-16 animate__animated animate__bounce" />
          <div className="bloque flex flex-col gap-4 items-center bg-[#17152d]  p-3">
            <iframe
               className="youtube_bloque"
              width="60%"
              height="560px"
              src="https://www.youtube.com/embed/2YuYRLA64as"
              title="ENCARNAR"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className="text-white text-center ">
              ENCARNAR 2013 | CORTO DOCUMENTAL{" "}
            </p>
          </div>
        </section>
        <section className="relative ">
        <img src="/popCorn.png" alt="popCorn" className="popCorn absolute top-16 left-16 animate__animated animate__bounce animate__slower animate__repeat-2" />
         
          <div className="bloque flex flex-col gap-4 items-center bg-[#c74458]  p-3">
            <iframe
              className="youtube_bloque"
             width="60%"
             height="560px"
              src="https://www.youtube.com/embed/-JJiuLkZ9pI?controls=0&modestbranding=1"
              title="Corre Naranja Corre 2015"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            <p className="text-white text-center ">
              CORRE NARANJA CORRE | 2015[ANIMACION]{" "}
            </p>
          </div>
        </section>
      </div>
   
  );
}

export default Projects;
