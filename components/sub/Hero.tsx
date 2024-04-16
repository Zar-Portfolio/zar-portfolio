import Image from "next/image";
import React from "react";
import LOGO from "../../public/logo2.png";

const Hero = () => {
  return (
    <>
      <div className="absolute top-20 left-20">
        <div className="flex items-center gap-2">
          <Image
            src="/logo2.png"
            alt="LOGO"
            width={65}
            height={65}
            className="relative z-10"
          />
          <div>
            <p
              className="relative name-logo z-10 uppercase text-xl lg:text-3xl font-bold 
                  bg-gradient-to-r from-purple-600 via-[#33bfdf] to-blue-500 
                  text-transparent bg-clip-text animate-gradient [text-shadow:_2px_3px_0_rgb(0_0_0_/20%)]"
            >
              Zardron Pesquera
            </p>
            <p className="relative z-10 text-[12px] font-bold tracking-[.18em] pb-1 lg:p-0 lg:tracking-[.56em] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 uppercase">
              I turn coffee into code.
            </p>
          </div>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        className="hidden lg:block rotate-180 top-[-300px] absolute z-[1] h-full lg:w-full object-contain lg:object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </>
  );
};

export default Hero;
