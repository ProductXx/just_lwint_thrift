import React from "react";
import { motion } from "framer-motion";

const selectItemVar = {
  animated: {
    y: "-100%",
  },
  initial: {
    y: 0,
  },
};
const ImageCard = ({ item, selectedId, setSelectedId }) => {
  return (
    <motion.div
      variants={selectItemVar}
      onClick={() => setSelectedId(item.id)}
      className="size-20 overflow-hidden relative"
    >
      {/* <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ ease: "easeInOut" }}
        className="absolute inset-0 top-0 left-0 flex justify-center items-center bg-neutral-400/50"
      >
        <h1 className="px-3 -rotate-45 bg-white  font-bold">SELECTED</h1>
      </motion.div> */}

      <motion.img
        variants={selectItemVar}
        // animate={isAnimated ? "animated" : "initial"}
        src={item.image}
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
};

export default ImageCard;
