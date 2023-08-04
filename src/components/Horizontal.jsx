import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
import ercdisis from "../assets/ercdisis.mp4"
import sr from "../assets/sr.mp4";
import cda from "../assets/cda.mp4" 
import bvs from "../assets/bvs.mp4";
import cabalas from "../assets/cabalas.mp4";

gsap.registerPlugin(ScrollTrigger);
function Horizontal() {
  const main = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const sections = self.selector(".panel");
      let paneles = gsap.utils.toArray(".panel");
      let container = document.querySelector(".container");
      gsap.to(paneles, {
        xPercent: -100 * (paneles.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          // snap: 1 / (paneles.length - 1),
          end: "+=3500",
        },
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div className=" overflow-hidden">
      <div className="container" ref={main}>
        <section className="panel  justify-center items-center bg-stone-900">
          <video loop muted autoPlay src={sr}></video>
          {/* <div className="bg-red-200 p-4 rounded-md">
            
          <h2>Corpore</h2>
          <img className="w-[360px] h-[360px]" src="/CORPORE.jpg" alt="" />
          </div> */}
        </section>
        <section className="panel bg-white">
       
        <video loop muted autoPlay src={cda}></video>
        </section>
        <section className="panel bg-black">
        <video loop muted autoPlay src={ercdisis}></video>
     
        </section>
        <section className="panel  bg-white">
        <video loop muted autoPlay src={bvs}></video>
        </section>
        <section className="panel bg-stone-900">
        <video loop muted autoPlay src={cabalas}></video>
        </section>
      </div>
    </div>
  );
}

export default Horizontal;
