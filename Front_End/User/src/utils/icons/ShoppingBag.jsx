import React from "react";
import { motion } from "framer-motion";
const ShoppingBag = ({variant}) => {
  return (
    <motion.svg
      animate="animate"
      initial="initial"
      width="17"
      height="17"
      viewBox="0 0 50 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={variant}
        d="M13 20V12.3383C13 1.91973 14.1246 0.999701 23.8745 1C32.1244 1.00025 33.9998 1.61287 34 11.7263L33.9998 20"
        stroke="black"
        strokeWidth="4"
      />
      <motion.path
        variants={variant}
        d="M3.33333 11.0133H44.2222L46 48H2L3.33333 10"
        stroke="black"
        strokeWidth="4"
      />
    </motion.svg>
  );
};

export default ShoppingBag;
