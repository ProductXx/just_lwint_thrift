import React from "react";
import { motion } from "framer-motion";

const Heart = ({ variant }) => {
  return (
    <motion.svg
      animate="animate"
      initial="initial"
      width="25"
      height="25"
      viewBox="0 0 38 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={variant}
        d="M20 32.5L6.54666 19.9108C2.97519 16.5687 2.90348 10.9258 6.38886 7.49405V7.49405C10.3013 3.64181 16.7718 4.38867 19.7037 9.03092L20 9.5"
        stroke="black"
        stroke-width="3"
        stroke-linecap="round"
      />
      <motion.path
        variants={variant}
        d="M20 32.5L32.9363 19.9041C36.2721 16.6562 36.3077 11.3077 33.0156 8.0156L32.5911 7.59111C28.8228 3.82284 22.482 4.78415 20 9.5V9.5"
        stroke="black"
        stroke-width="3"
        stroke-linecap="round"
      />
    </motion.svg>
  );
};

export default Heart;
