import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-400px] left-0 z-[2] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />

      <video
        autoPlay
        muted
        loop
        className="absolute bottom-[40px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/cards-video.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Hero;
