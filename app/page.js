import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="text-white mt-24">
      <h1 className=" text-5xl text-center leading-normal">
        Transforming Classrooms <br/> into Interesting Place with  <br/> <span className=" text-teal-400 text-7xl font-semibold">Vizola</span>
      </h1>
    </main>
  );
}
