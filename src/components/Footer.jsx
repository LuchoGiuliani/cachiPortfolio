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
    loop: 30,
    delaySpeed: 5000,
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex gap-2 justify-between items-center p-6  w-full z-[60]  max-h-[10px] sm:max-h-[100px] bg-black ">
      {/* <div className="flex gap-2 items-center w-6 sm:w-full">
        <a className="eye" href="#">
          {" "}
          <img className="eye" src="./eye.png" alt="INICIO" />
        </a>
      </div> */}
      <div className="flex gap-2 px-16 ">
        <h2 className="text-white lg:w-[368px] font-bold navbar-text text-[14px] sm:text-xs">
          CARLA <span className="text-[#136968] font-bold">GIULIANI</span> |{" "}
          <span className="underline underline-offset-8"> {text}</span>
        </h2>
        {/* <FontAwesomeIcon
          icon={faEnvelope}
          className="w-[32px] h-[32px] text-[#ffffff] hover:scale-110 hover:text-[#136968]	"
        /> */}
        {/* <a target="_blank" href="https://www.instagram.com/cachideviaje/">
         
          <FontAwesomeIcon
            icon={faInstagram}
            className="w-6 h-5 sm:w-[36px] sm:h-[36px]  text-[#ffffff] hover:scale-110 hover:text-[#136968]	"
          />
        </a> */}
        <Typewriter
          className="text-white"
          options={{
            text: ["AUDIOVISUAL", "PRODUCCIÓN", "MONTAJE", "SONIDO"],
            loop: true,
            cursor: "",
          }}
        />
      </div>
    </div>
  );
}

export default Footer;
