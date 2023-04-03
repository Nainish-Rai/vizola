import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

const Hero = () => {
  return (
    <div id="home" className=" snap-center flex lg:h-screen flex-col mt-12 md:mt-24 lg:mt-0 lg:flex-row justify-between items-center md:mx-12 mx-5">
      <motion.h1 variants={textVariant(0.5)} initial="hidden" whileInView="show"
        className="text-4xl sm:text-5xl md:text-center text-left leading-loose font-medium ">
        Transforming Classrooms <br /> into Interesting Place with <br/>
        <motion.span variants={textVariant(0.6)} initial="hidden" whileInView="show" className=" bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-cyan-900 via-fuchsia-500 to-yellow-800 sm:text-9xl text-6xl font-bold text-transparent bg-clip-text tracking-widest">VIZOLA</motion.span>
      </motion.h1>
      <motion.div variants={textVariant(0.4)}
      whileHover={{scale:1.1}} initial="hidden" whileInView="show"  className=" hidden md:block w-[80%] md:w-[50%] px-5 md:px-0 lg:w-1/3 aspect-square select-none my-24 lg:my-0 lg:mt-0 cursor-grab">
        {/* <Spline scene="https://prod.spline.design/j-rajp45Ds5skwbh/scene.splinecode" />
         */}
                <Spline scene="https://prod.spline.design/gikAonIqYsdZm4Dy/scene.splinecode" />
               
      </motion.div>
    </div>
  );
};

export default Hero;
