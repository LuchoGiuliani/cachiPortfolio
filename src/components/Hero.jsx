import React, { useState, useEffect } from "react";
import videoHero from "../assets/reel.mp4";

const Hero = () => {
  return (
    <div className="bg-black  h-screen">
      <div className="h-screen w-full">
      <video height="100%" className="h-screen object-cover w-full" src={videoHero} autoPlay loop muted />
      </div>

    </div>
  );
};

export default Hero;
