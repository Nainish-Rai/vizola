import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" z-50 w-full p-5 fixed top-0 flex items-center justify-between lg:max-w-7xl lg:mx-auto">
      <div className="text-white text-2xl bg-black/5 backdrop-blur-sm rounded-full p-2 px-4">
        Vizola
      </div>
      <div className="hidden sm:flex justify-between space-x-6 bg-black/5 p-2 px-5 rounded-full backdrop-blur-sm">
      <a className=" hover:text-gray-500 duration-200" href="#home">Home</a>
        <a className=" hover:text-gray-500 duration-200" href="#problem">Problem</a>
        <a className=" hover:text-gray-500 duration-200" href="#solution">Our Solution</a>
        <a className=" hover:text-gray-500 duration-200" href="#features">Features</a>
       
    
      </div>
      <a href="#cta" className=" hover:scale-110 duration-200 cursor-pointer hidden shadow-md bg-gradient-to-r from-sky-400 to-cyan-300 sm:flex justify-center items-center p-2 px-4 rounded-full text-black font-semibold mr-4 lg:mr-0">
        Get Demo
      </a>
      <div className="sm:hidden block">Menu</div>
    </nav>
  );
};

export default Navbar;
