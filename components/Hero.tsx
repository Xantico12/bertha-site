"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import Scene from "./Scene";
import { motion } from "framer-motion";

export default function HomePage() {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };
  return (
    <motion.div
      id="hero"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      className="mx-auto px-72 flex flex-row  width-full bg-gradient-to-b from-[#222222] to-[#080808]"
    >
      <div className="flex flex-col basis-full flex-1 justify-center px-48">
        <motion.h1
          variants={itemVariants}
          className="text-7xl text-white font-bold ml-[-4px] pb-5"
        >
          Follow our <span className="italic">trip</span>
          <span className="text-9xl text-green-700">.</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-left text-gray-400 font-medium pb-12 text-xl"
        >
          Are you a parent who is worried sick, or just a curious friend
          wondering what we are up to? Then this is the right place for you! See
          our current location, our latest pictures and more.
        </motion.p>
      </div>
      <motion.div
        variants={itemVariants}
        className="h-[100vh] w-[100vw] pt-36 flex flex-col basis-full flex-1 justify-center text-center"
      >
        {" "}
        <Scene />
      </motion.div>
    </motion.div>
  );
}
