
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect} from "react";

gsap.registerPlugin(ScrollTrigger);






function Horizontal() {

  
  const main = useRef();


  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const sections = self.selector(".panel");
      let paneles = gsap.utils.toArray(".panel");
      let container = document.querySelector(".container");
      console.log(paneles);
      console.log(sections);
      console.log(container);

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
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div className=" overflow-hidden">
    
     
      <div className="container" ref={main}>
        

        <section className="panel flex justify-center items-center bg-black">
          <img  className="w-[360px] h-[360px]" src="/CORPORE.jpg" alt="" />
        </section>
        <section className="panel bg-white"> <img  className="w-[360px] h-[360px]" src="/foto-5.jpg" alt="" /></section>
        <section className="panel bg-black"> <img  className="w-[360px] h-[360px]" src="/MEMORIA.jpg" alt="" /></section>
        <section className="panel  bg-white"> <img  className="w-[360px] h-[360px]" src="/PAJARO.jpg" alt="" /></section>
        <section className="panel bg-black"> <img  className="w-[360px] h-[360px]" src="/COMPLEJO.jpg" alt="" /></section>
      </div>
     
    </div>
  );
}

export default Horizontal;
