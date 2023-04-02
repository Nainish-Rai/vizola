import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

const Hero = () => {
  return (
    <div className="flex h-screen flex-col lg:flex-row justify-between items-center md:mx-12 mx-6">
      <motion.h1 variants={textVariant(0.5)} initial="hidden" whileInView="show"  className="text-4xl sm:text-5xl md:text-center text-left leading-loose font-medium ">
        Transforming Classrooms <br /> into Interesting Place with <br/>
        <motion.span variants={textVariant(0.6)} initial="hidden" whileInView="show" className=" bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-cyan-900 via-fuchsia-500 to-yellow-800 sm:text-9xl text-6xl font-bold text-transparent bg-clip-text tracking-widest">VIZOLA</motion.span>
      </motion.h1>
      <motion.div variants={textVariant(0.4)} initial="hidden" whileInView="show"  className="w-[60%] px-5 md:px-0 lg:w-1/3 aspect-square select-none mt-4 md:mt-0 cursor-grab">
        <Spline scene="https://prod.spline.design/j-rajp45Ds5skwbh/scene.splinecode" />
      </motion.div>
    </div>
  );
};

export default Hero;
