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
          className="relative z-50 w-full flex flex-col lg:flex-row pt-64 pb-28 justify-between px-20 gap-4 overflow-x-hidden"
        >
          <motion.div
            variants={slideInFromRight(1.5)}
            className="glass-container w-full lg:w-1/2 h-full rounded-md"
          >
            <Profile />
          </motion.div>
          <motion.div
            variants={slideInFromRight(1.8)}
            className="glass-container w-full h-full rounded-md"
          >
            asd
          </motion.div>
          <motion.div
            variants={slideInFromRight(2)}
            className="glass-container w-1/6 h-full rounded-md"
          >
            asd
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default page;
