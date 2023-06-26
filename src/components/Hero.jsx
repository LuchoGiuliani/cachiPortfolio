import React, { useState, useEffect } from "react";
import videoHero from "../assets/reel.mp4";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const video = document.createElement("video");

    video.src = videoHero;
    video.preload = "metadata";

    const handleLoadedMetadata = () => {
      const duration = Math.ceil(video.duration);
      setCountdown(duration);
      setIsLoading(false);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <div className="flex justify-center items-center sm:h-screen hero p-10 pb-20">
      {isLoading ? (
        <div className="max-w-[1220px] rounded-lg p-1 bg-[#4A6D69] bloq_color">
          <div className="text-white">Cargando...</div>
          
        </div>
      ) : (
        <div className="max-w-[1220px] rounded-lg p-1 bg-[#4A6D69] bloq_color">
          <video className="rounded-lg" src={videoHero} autoPlay loop muted />
        </div>
      )}
    </div>
  );
};

export default Hero;
