import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full p-5 fixed top-0 flex items-center justify-between max-w-7xl mx-auto">
      <div className="text-white text-2xl">Vizola</div>
      <div className="flex justify-between space-x-6 backdrop-blur-sm">
          <Link href="">Problem</Link>
          <Link href="">Our Solution</Link>
          <Link href="">Features</Link>
          <Link href="">About</Link>
      </div>
      <div className="bg-gradient-to-r from-sky-400 to-cyan-300 flex justify-center items-center p-2 px-4 rounded-full text-black font-semibold">
        Get Demo
      </div>
    </nav>
  );
};

export default Navbar;
