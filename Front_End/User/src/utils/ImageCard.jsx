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
      <motion.img
        variants={selectItemVar}
        src={item.image}
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
};

export default ImageCard;
