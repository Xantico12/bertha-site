import React from "react";
import { motion } from "framer-motion";

import { RxDoubleArrowDown } from "react-icons/rx";

const ScrollIndicator = () => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", delay: 5, duration: 2 }}
      className="animate-bounce text-white text-3xl flex justify-center mt-[-5rem]"
    >
      <RxDoubleArrowDown />
    </motion.h1>
  );
};

export default ScrollIndicator;
