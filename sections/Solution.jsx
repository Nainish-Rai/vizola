import React from 'react'
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

const Solution = () => {
  return (
    <div id='solution' className=" snap-center mt-12 h-screen flex flex-col lg:flex-row justify-between  items-center md:mx-12">
      <div className="md:w-2/3 w-full">
        <motion.h1
          variants={textVariant(0.15)}
          initial="hidden"
          whileInView="show"
          className=" text-5xl text-center lg:text-left leading-normal font-semibold"
        >
          <span className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-green-600 via-pink-300 to-indigo-700 text-7xl font-bold text-transparent bg-clip-text">
            Solutions
          </span>
          <br /> We came up with
        </motion.h1>
        <motion.p
          variants={textVariant(0.22)}
          initial="hidden"
          whileInView="show"
          className=" mt-5 lg:mr-24 text-center text-gray-200  lg:text-left"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod commodi
          voluptatum culpa facilis numquam eaque nobis ex laborum sequi, ad,
          nemo tempore cum maxime blanditiis ipsum perspiciatis voluptate
          inventore doloremque.
        </motion.p>
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        variants={textVariant(0.4)}
        initial="hidden"
        whileInView="show"
        className="w-full hidden md:block mt-2 md:mt-0 lg:w-1/3 aspect-square select-none"
      >
        <Spline scene="https://prod.spline.design/HYFQyM-HZH4bFlgs/scene.splinecode" />
      </motion.div>
    </div>
  )
}

export default Solution