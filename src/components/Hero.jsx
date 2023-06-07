import React from "react";
import videoHero from "../assets/reel.mp4";

function Hero() {
  return (
    <div className=" flex justify-center items-center sm:h-screen hero p-14">
      <div className="max-w-[1260px]  rounded-lg p-1 bg-[#4A6D69] bloq_color  ">
        <video className=" rounded-lg  " src={videoHero} autoPlay loop muted />
      </div>
    </div>
  );
}

export default Hero;
