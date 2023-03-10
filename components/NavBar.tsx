"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <motion.div
      initial={{ translateY: -10, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.2 }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-[#151515] border-[#121212] border-b-2"
    >
      <div className="m-auto flex justify-between items-center text-white font-medium px-[20rem]">
        <Link className="group" href="/#hero">
          <h1 className="text-3xl font-bold">Bertha</h1>
          <div className="w-0 transition-all group-hover:w-full ease-in-out h-1 bg-green-700"></div>
        </Link>
        <ul className="flex text-xl">
          <li className="p-6 group">
            <Link href="/map">Where are we?</Link>
            <div className="w-0 transition-all group-hover:w-full ease-in-out h-1 bg-green-700"></div>
          </li>
          <li className="p-6 group">
            <Link href="/gallery">Gallery</Link>
            <div className="w-0 transition-all group-hover:w-full ease-in-out h-1 bg-green-700"></div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default NavBar;
