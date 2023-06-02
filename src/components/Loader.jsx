import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Loader({ onLoad }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const [show, setShow] = useState(true);
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const images = [
      "loaderImage.png",
      "loaderImage2.png",
      "loaderImage3.png",
      "loaderImage4.png",
      "loaderImage5.png",
      "loaderImage6.png",
      "loaderImage7.png",
      "loaderImage8.png",
      "loaderImage9.png"
    ];

    const shuffleArray = (array) => {
      const newArray = array.slice();
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    const shuffledImages = shuffleArray(images);
    setRandomImages(shuffledImages);

    const timeout = setTimeout(() => {
      setShow(false);
      onLoad();
    }, 120000);

    return () => clearTimeout(timeout);
  }, [onLoad]);

  const generateAnimationClass = () => {
    // Genera una clase CSS única para cada imagen
    const randomId = Math.floor(Math.random() * 10000);
    return `fade-${randomId}`;
  };

  const createAnimationStyles = () => {
    // Crea estilos de animación para cada imagen
    const animationStyles = randomImages.reduce((styles, _, index) => {
      const animationClass = generateAnimationClass();
      const animationStyle = `
        .${animationClass} {
          opacity: 0;
          animation: fadeIn 3s ease-in-out forwards;
          animation-delay: ${index * 0.5}s;
        }
      `;
      return styles + animationStyle;
    }, "");

    return <style>{animationStyles}</style>;
  };

  return (
    show && (
      <div className="loading_page w-full h-screen flex gap-4 flex-wrap  p-4 justify-center items-center">
        {createAnimationStyles()}
        {randomImages.map((image, index) => {
          const animationClass = generateAnimationClass();
          return (
            <div key={index} className={`loader_image flex  ${animationClass}`}>
              <img className=" loader_image" src={image} alt="" />
            </div>
          );
        })}
      </div>
    )
  );
}

export default Loader;
