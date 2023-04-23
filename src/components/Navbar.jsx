import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useTypewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [text, count] = useTypewriter({
    words: [
      "AUDIOVISUAL",
      "PRODUCCIÓN",
      "POSTPRODUCCIÓN",
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
    <div
      className="flex gap-2 justify-between items-center p-6 fixed w-full z-[60] opacity-80 max-h-[10px] sm:max-h-[100px] "
      style={{ backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.1)" : "black" }}
    >
      <div className="flex gap-2 items-center w-6 sm:w-full">
        <a className="eye" href="#">
          {" "}
          <img className="eye" src="./eye.png" alt="INICIO" />
        </a>
      </div>
      <div className="flex gap-2 ">
        <h2 className="text-white lg:w-[368px] font-bold navbar-text text-[14px] sm:text-xs">
          CARLA <span className="text-[#136968] font-bold">GIULIANI</span> |{" "}
          <span className="underline underline-offset-8"> {text}</span>
        </h2>

        <a target="_blank" href="https://www.instagram.com/cachideviaje/">
          {" "}
          <FontAwesomeIcon
            icon={faInstagram}
            className="w-6 h-5 sm:w-[36px] sm:h-[36px]  text-[#ffffff] hover:scale-110 hover:text-[#136968]	"
          />
        </a>
        
      </div>
    </div>
  );
}

export default Navbar;
