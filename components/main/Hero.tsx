import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen w-full bg-[#0b0119] -z-10">
      <div className="absolute top-10 left-20">
        <p
          className="relative name-logo z-10 uppercase text-2xl lg:text-4xl font-bold 
                  bg-gradient-to-r from-purple-600 via-[#33bfdf] to-blue-500 
                  text-transparent bg-clip-text animate-gradient [text-shadow:_2px_3px_0_rgb(0_0_0_/20%)]"
        >
          Zardron Pesquera
        </p>
        <p className="relative z-10 text-[12px] lg:text-sm font-bold tracking-[.34em] pb-1 lg:p-0 lg:tracking-[.59em] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 uppercase">
          I turn coffee into code.
        </p>
      </div>
      <video
        autoPlay
        muted
        loop
        className="absolute left-0 z-[1] h-full 2xl:w-full object-contain"
      >
        <source src="/cards-video.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
