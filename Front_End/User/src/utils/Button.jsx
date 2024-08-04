import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

const mainText = {
  animate: {
    opacity: 0,
  },
  initial: {
    opacity: 1,
  },
};

const secText = {
  animate: {
    x: 11,
    opacity: 1,
  },
  initial: {
    x: "100%",
    opacity: 0,
  },
};

const redBox = {
  animate: {
    x: 0,
    opacity: 1,
  },
  initial: {
    x: "100%",
    opacity: 0,
  },
};
const box1 = {
  animate: {
    x: "-100%",
    opacity: 0,
  },
  initial: {
    x: 0,
    opacity: 1,
  },
};
const Button = ({ text, color }) => {
  const [startAnimate, setStartAnimate] = useState(false);

  return (
    <MotionConfig transition={{ ease: "circInOut", duration: 0.5 }}>
      <motion.button
        onHoverStart={() => setStartAnimate(true)}
        onHoverEnd={() => setStartAnimate(false)}
        className={`px-3 py-1 text-center border relative overflow-hidden `}
      >
        <motion.div
          variants={box1}
          animate={startAnimate ? "animate" : "initial"}
          className="w-full h-full absolute bg-red-600 top-0 left-0 -z-10"
        ></motion.div>
        <motion.span
          variants={mainText}
          animate={startAnimate ? "animate" : "initial"}
          className="text-white"
        >
          {text}
        </motion.span>
        <motion.span
          variants={secText}
          animate={startAnimate ? "animate" : "initial"}
          className="absolute  left-0 text-black"
        >
          {text}
        </motion.span>
        <motion.div
          variants={redBox}
          animate={startAnimate ? "animate" : "initial"}
          className="w-full h-full absolute bg-white top-0 left-0 -z-10"
        ></motion.div>
      </motion.button>
    </MotionConfig>
  );
};

export default Button;
