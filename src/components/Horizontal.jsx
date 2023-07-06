import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";

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
          snap: 1 / (paneles.length - 1),
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
          <div className="bg-red-200 p-4 rounded-md">
          <h2>Corpore</h2>
          <img className="w-[360px] h-[360px]" src="/CORPORE.jpg" alt="" />
          </div>
        </section>
        <section className="panel bg-white">
          <div className="bg-green-200 p-4 rounded-md">
        <h2>Foto</h2>
          <img className="w-[360px] h-[360px]" src="/foto-5.jpg" alt="" />
        </div>
        </section>
        <section className="panel bg-black">
          <div className="bg-yellow-200 p-4 rounded-md">
        <h2>Memoria</h2>       
          <img className="w-[360px] h-[360px]" src="/MEMORIA.jpg" alt="" />
          </div>
        </section>
        <section className="panel  bg-white">
        <div className="bg-gray-200 p-4 rounded-md">
         <h2>Pájaro</h2>
          <img className="w-[360px] h-[360px]" src="/PAJARO.jpg" alt="" />
          </div>       
        </section>
        <section className="panel bg-stone-900">
          <div className="bg-purple-300 p-4 rounded-md">
         <h2>Complejo</h2>
          <img className="w-[360px] h-[360px]" src="/COMPLEJO.jpg" alt="" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Horizontal;
