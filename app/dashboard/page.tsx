"use client";

import Transition from "@/components/main/Transition";
import Hero from "@/components/sub/Hero";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";
import Profile from "@/components/sub/Profile";

const page = () => {
  return (
    <>
      <div className="h-screen w-full bg-[#030014]">
        <Transition />
        <Hero />

        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-10 h-full w-full flex items-center justify-between px-20 gap-4"
        >
          <motion.div
            variants={slideInFromRight(1.5)}
            className="border-2 w-1/2 border-white"
          >
            <Profile />
          </motion.div>
          <motion.div
            variants={slideInFromRight(1.8)}
            className="border-2 w-full border-white"
          >
            asd
          </motion.div>
          <motion.div
            variants={slideInFromRight(2)}
            className="border-2 w-1/6 border-white"
          >
            asd
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default page;
