import React from "react";
import { motion } from "framer-motion";
const ShoppingBag = ({ variant }) => {
  return (
    // <motion.svg
    //   animate="animate"
    //   initial="initial"
    //   width="17"
    //   height="17"
    //   viewBox="0 0 50 49"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <motion.path
    //     variants={variant}
    //     d="M3.33333 12.0133H44.2222L46 49H2L3.33333 11"
    //     stroke="black"
    //     strokeWidth="4"
    //   />
    //   <motion.path
    //     variants={variant}
    //     d="M13 20V12.3383C13 1.91973 14.1246 0.999701 23.8745 1C32.1244 1.00025 33.9998 1.61287 34 11.7263L33.9998 20"
    //     stroke="black"
    //     strokeWidth="4"
    //   />
    // </motion.svg>
    <motion.svg
      animate="animate"
      initial="initial"
      width="17"
      height="17"
      viewBox="0 0 48 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={variant}
        d="M3.33333 12.0133H44.2222L46 49H2L3.33333 11"
        stroke="black"
        stroke-width="4"
      />
      <motion.path
        variants={variant}
        d="M13 12V7.56429C13 1.53248 14.1246 0.999827 23.8745 1C32.1244 1.00015 33.9998 1.35482 34 7.20997L33.9998 12"
        stroke="black"
        stroke-width="4"
      />
      <motion.line
        variants={variant}
        x1="13"
        y1="12"
        x2="13"
        y2="19"
        stroke="black"
        stroke-width="4"
      />
      <motion.line
        variants={variant}
        x1="34"
        y1="12"
        x2="34"
        y2="19"
        stroke="black"
        stroke-width="4"
      />
    </motion.svg>
  );
};

export default ShoppingBag;
