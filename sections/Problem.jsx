import React from "react";
import Spline from "@splinetool/react-spline";

const Problem = () => {
  return (
    <div className="mt-24 flex flex-row-reverse justify-between  items-center mx-12">
        <div className="w-2/3">

      <h1 className=" text-5xl text-right leading-normal font-semibold">
        <span className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-green-600 via-pink-300 to-indigo-700 text-7xl font-bold text-transparent bg-clip-text">Problems</span>
        <br /> We are Solving
      </h1>
      <p className=" mt-5 ml-24  text-right">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod commodi voluptatum culpa facilis numquam eaque nobis ex laborum sequi, ad, nemo tempore cum maxime blanditiis ipsum perspiciatis voluptate inventore doloremque.</p>
        </div>
      <div className=" w-1/3 aspect-square select-none">
      <Spline scene="https://prod.spline.design/lIOVKOhBnCcy4wo9/scene.splinecode" />
      </div>
    </div>
  );
};

export default Problem;
