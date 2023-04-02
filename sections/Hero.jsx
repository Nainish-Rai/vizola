import React from "react";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mx-12">
      <h1 className=" text-5xl text-center leading-normal font-semibold">
        Transforming Classrooms <br /> into Interesting Place with <br />{" "}
        <span className=" bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-cyan-900 via-fuchsia-500 to-yellow-800 text-9xl font-bold text-transparent bg-clip-text">Vizola</span>
      </h1>
      <div className=" w-1/3 aspect-square select-none">
        <Spline scene="https://prod.spline.design/j-rajp45Ds5skwbh/scene.splinecode" />
      </div>
    </div>
  );
};

export default Hero;
