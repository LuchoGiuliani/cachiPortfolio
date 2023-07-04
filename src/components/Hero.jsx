import React, { useState, useEffect } from "react";
import videoHero from "../assets/reel.mp4";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleVideoLoad = () => {
      setVideoLoaded(true);
    };

    const videoElement = document.getElementById("videoHero");

    videoElement.addEventListener("loadeddata", handleVideoLoad);

    return () => {
      videoElement.removeEventListener("loadeddata", handleVideoLoad);
    };
  }, []);

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      {!videoLoaded && <h1 className="text-white flex items-center justify-center text-6xl sm:text-6x1 absolute">Loading</h1>}
      <div className={`${videoLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
        <video
          id="videoHero"
          className="h-screen object-cover w-full"
          src={videoHero}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default Hero;
