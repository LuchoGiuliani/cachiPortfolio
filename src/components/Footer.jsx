import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useTypewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  const [text, count] = useTypewriter({
    words: [
      "AUDIOVISUAL",
      "PRODUCCIÓN",
      "POSTPRODUCCIÓN",
      "CONTINUIDAD",
      "EDICIÓN",
    ],
    loop: true,
    delaySpeed: 5000,
  });

 
  return (
   
      <div className="flex pt-10 z-10  bottom-0 left-2 ">
        <h2 className="text-slate-800 lg:w-[368px] font-bold navbar-text text-[14px] sm:text-xs">
          CARLA <span className="text-[#136968] font-bold">GIULIANI</span> |{" "}
          <span className="underline underline-offset-8"> {text}</span>
        </h2>
        <Typewriter
          className="text-white"
          options={{
            text: ["AUDIOVISUAL", "PRODUCCIÓN", "MONTAJE", "SONIDO"],
            loop: true,
            cursor: "",
          }}
        />
      </div>
   
  );
}

export default Footer;
