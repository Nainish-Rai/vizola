import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { slideIn } from "@/utils/motion";

const CTA = () => {
  return (
    <div className="w-full flex justify-center p-2 " id="cta">
      <motion.div
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 snap-center my-24 mt-64 lg:h-64 rounded-3xl flex flex-col lg:flex-row justify-between  items-center w-full md:w-[80%] p-8 "
      >
        <div className="flex flex-col gap-8 justify-start">
          <motion.h1
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            className=" text-gray-950 font-bold text-5xl"
          >
            Experience Demo
          </motion.h1>
          <motion.p
            variants={textVariant(0.25)}
            initial="hidden"
            whileInView="show"
            className="text-gray-950 font-medium max-w-4xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eum
            dolores similique aliquid! Exercitationem, vero nemo id voluptatem
            deleniti aperiam molestiae sint ab mollitia eius. Pariatur animi a
            quibusdam alias?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Maiores, provident? Nulla velit, repellendus repudiandae eos
            nisi odio quam qua
          </motion.p>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="lg:mt-28 mt-12 left-0"
        >
          <button className="bg-black rounded-full  text-lg p-4 px-8 mr-40 lg:mr-0 md:mr-[450px]">
            Call Now
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CTA;
