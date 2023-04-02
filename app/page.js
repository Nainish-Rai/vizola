"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Spline from "@splinetool/react-spline";
import Hero from "@/sections/Hero";
import Problem from "@/sections/Problem";
import Solution from "@/sections/Solution";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="text-white w-full snap-mandatory snap-y">
      <Hero/>
      <Problem/>
      <Solution/>
    </main>
  );
}
