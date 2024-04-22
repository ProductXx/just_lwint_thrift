import React from "react";
import { motion } from "framer-motion";

const Heart = ({ variant }) => {
  return (
    <motion.svg
      animate="animate"
      initial="initial"
      width="20"
      height="20"
      viewBox="0 0 38 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={variant}
        d="M19 32.5L6.06365 19.9041C2.72795 16.6562 2.69229 11.3077 5.9844 8.0156L6.40889 7.59111C10.1772 3.82284 16.518 4.78415 19 9.5V9.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <motion.path
        variants={variant}
        d="M19 32.5L31.9363 19.9041C35.2721 16.6562 35.3077 11.3077 32.0156 8.0156L31.5911 7.59111C27.8228 3.82284 21.482 4.78415 19 9.5V9.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default Heart;
