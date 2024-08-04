import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const imgVar = {
  animate: {
    scale: 1.3,
    rotate: 10,
  },
  initial: {
    scale: 1,
    rotate: 0,
  },
};

const Card = ({ image }) => {
  const [showBtn, setShowBtn] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const nav = useNavigate();

  return (
    <motion.div
      onHoverStart={() => setShowBtn(true)}
      onHoverEnd={() => setShowBtn(false)}
      className="relative h-[500px] overflow-hidden rounded-md"
    >
      {/* View More Button */}
      {showBtn && (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0.5 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
        >
          {/* Button */}
          <motion.button
            onClick={() => nav("detail")}
            animate={{ y: "-20%" }}
            initial={{ y: 0 }}
            onHoverStart={() => setShowCircle(true)}
            onHoverEnd={() => setShowCircle(false)}
            className="relative bg-white size-20 rounded-full text-center transition-all duration-300 hover:text-white overflow-hidden"
          >
            {/* Main Button Text */}
            <span>
              View <br /> Now
            </span>

            {/* Red Circle appear when hover */}
            <motion.span
              animate={showCircle ? { y: 0 } : { y: "-100%" }}
              transition={{ ease: "circOut" }}
              className="absolute top-0 left-0 size-20 bg-red-600 rounded-full -z-10"
            ></motion.span>
          </motion.button>
        </motion.div>
      )}
      {/* Background Image */}
      <motion.img
        variants={imgVar}
        animate={showBtn ? "animate" : "initial"}
        transition={{ ease: "circInOut" }}
        src={image}
        className="w-full h-full object-cover "
      />
    </motion.div>
  );
};

export default Card;
