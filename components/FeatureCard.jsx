"use client";
import React from "react";
import { Tilt } from "react-tilt";

const FeatureCard = ({ title, description }) => {
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <Tilt
      className="w-full lg:w-96 md:w-[40%] m-2 h-fit rounded-xl p-2
     cursor-pointer border hover:shadow-xl backdrop-blur-sm border-white/5 bg-gray-900/10  hover:bg-slate-950/10 hover:shadow-white/10 duration-300"
      options={defaultOptions}
      
    >
      <div className="p-4">
        <div>
          <h2 className=" font-semibold text-4xl bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-cyan-900 via-fuchsia-500 to-yellow-800  text-transparent bg-clip-text w-48 md:text-center lg:text-left ">{title}</h2>
        </div>
        <div className=" text-gray-400 mt-4 leading-relaxed md:text-center lg:text-left text-sm">{description}</div>
      </div>
    </Tilt>
  );
};

export default FeatureCard;
