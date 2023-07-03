import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useTypewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hiddenn");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <div
      className="flex  fixed justify-center items-center  w-full z-[60] opacity-80 max-h-[10px] pt-16 sm:max-h-[100px] "
      // style={{ backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.1)" : "black" }}
    >
      
        <a className="  " href="#">
          <img className=" hiddenn w-[236px] sm:w-[428px] " src="./cachi.png" alt="INICIO" />
        </a>
      
      
    </div>
  );
}

export default Navbar;
