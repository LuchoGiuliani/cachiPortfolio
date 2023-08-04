import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGoogle,
  faLinkedin,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  // const pinn = useRef();

  // useLayoutEffect(() => {
  //   const  titles = document.querySelectorAll(".title")
  //   const ctx = gsap.context(() => {
  //     console.log(titles);
  //       gsap.to(titles, {
  //           scrollTrigger: {
  //             trigger: ".container_title",
  //             start: "top top ",
  //             end: "bottom 10%",
  //             pin: titles,
  //             toggleActions: "restart none none",
  //             scrub: 4,

  //           },
  //         }),
  //         gsap.to(titles, {
  //           scrollTrigger: {
  //             trigger: ".container_title",
  //             start: "top top ",
  //             end: "bottom 10%",
  //             pin: ".title2",
  //             duration:2,
  //             toggleActions: "restart none none",
  //             scrub: 4,

  //           },
  //         });
  //       }, pinn);

  //       // then later
  //     return () => ctx.revert();
  //   })

  return (
    <div className="flex justify-between gap-3 p-2 mb-2 opacity-70 rounded-xl fixed sm:mx-6 items-center z-10 container_title bottom-0 max-h-12 bg-black left-1/2 transform -translate-x-1/2">
    <h1 className=" text-white text-center p-2">Carla Giuliani</h1>
    <a target="_blank"  href="https://www.youtube.com/@cachideviaje/videos"> <FontAwesomeIcon className="text-white" icon={faYoutube} /></a>
    <a target="_blank"  href="mailto:cachicorreo@gmail.com"> <FontAwesomeIcon  className="text-white" icon={faGoogle} /></a>
    <a target="_blank" href="https://www.linkedin.com/in/cachi-giuliani-audiovisual/ "> <FontAwesomeIcon  className="text-white" icon={faLinkedin} /></a>
    <a target="_blank"  href="/twitter"> <FontAwesomeIcon  className="text-white" icon={faWhatsapp} /></a>
    <h1 className=" text-white p-2 text-center ">Diseño Audiovisual</h1>
  </div>
  );
}

export default Navbar;
