import React from "react";
import videoHero from "../assets/reel.mp4";

function Hero() {
  return (
    <div className="bg-[#0a050b]  mb-10">
      <video
        className="pt-[96px] sm:pt-[30px]"
        src={videoHero}
        autoPlay
        loop
        muted
      />
    </div>
  );
}

export default Hero;
