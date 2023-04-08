import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import FeatureCard from "@/components/FeatureCard";

const Features = () => {
  return (
    <div
      id="features"
      className="w-full snap-center  pt-24  flex flex-col justify-between  items-center md:mx-12"
    >
      <div className="md:w w-full">
        <motion.h1
          variants={textVariant(0.15)}
          initial="hidden"
          whileInView="show"
          className=" text-5xl text-center  leading-normal font-semibold"
        >
          <span className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-cyan-900 via-fuchsia-500 to-yellow-800 text-7xl font-bold text-transparent bg-clip-text">
            Features
          </span>
          <br /> Never seen before
        </motion.h1>
      
      </div>
      <motion.div
        variants={textVariant(0.4)}
        initial="hidden"
        whileInView="show"
        className="max-w-6xl flex flex-col flex-wrap-reverse sm:flex-row justify-center items-center lg:gap-4 gap-0 mt-6 "
      >
        <FeatureCard
          title="Immersive"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod commodi
        voluptatum culpa facilis numquam eaque nobis ex laborum sequi, ad,
        nemo tempore cum maxime blanditiis ipsum perspiciatis voluptate
        inventore doloremque."
        />
        <FeatureCard
          title="Playful"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod commodi
        voluptatum culpa facilis numquam eaque nobis ex laborum sequi, ad,
        nemo tempore cum maxime blanditiis ipsum perspiciatis voluptate
        inventore doloremque."
        />
        <FeatureCard
          title="Innovative"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod commodi
        voluptatum culpa facilis numquam eaque nobis ex laborum sequi, ad,
        nemo tempore cum maxime blanditiis ipsum perspiciatis voluptate
        inventore doloremque."
        />
        <FeatureCard
          title="Controls"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod commodi
        voluptatum culpa facilis numquam eaque nobis ex laborum sequi, ad,
        nemo tempore cum maxime blanditiis ipsum perspiciatis voluptate
        inventore doloremque."
        />
      </motion.div>
    </div>
  );
};

export default Features;
