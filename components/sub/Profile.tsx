import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="relative p-4">
      <div className="absolute -top-20 right-1/2 translate-x-1/2 rounded-md border border-white/80 overflow-hidden">
        <Image
          src="/profile_pic.png"
          width={150}
          height={150}
          alt="profile-pic"
          className="hover:scale-110  transition-all ease-in-out duration-300"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="text-white/60 pt-14 text-lg font-semibold">
          Zardron Angelo Pesquera
        </p>
        <p className="text-white/80 text-[11px] tracking-widest uppercase bg-white/10 px-2 py-1 rounded-md">
          Full Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Profile;
