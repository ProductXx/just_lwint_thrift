import React, { useEffect, useState } from "react";
import { MotionConfig, motion, AnimatePresence } from "framer-motion";
import ImageCard from "../utils/ImageCard";

const selectImageVar = {
  animated: {
    y: 0,
  },
  initial: {
    y: "100%",
  },
};

const items = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1590999659195-e64a988eaf4f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1604072374690-0e7d7bddd54e?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ImageBox = () => {
  const [selectedId, setSelectedId] = useState(0);
  const [selected, setSelected] = useState({});
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setSelected(items.find((item) => item.id === selectedId));
  }, [selectedId, isAnimated]);

  const handleItemClick = (itemId) => {
    setSelectedId(itemId);
    setIsAnimated(true);
  };

  return (
    <div className="space-y-3">
      <MotionConfig transition={{ ease: "easeInOut" }}>
        <AnimatePresence>
          <div className="size-[500px] border-[3px] border-black rounded overflow-hidden relative">
            <img src={selected.image} className="w-full h-full object-cover" />
          </div>
        </AnimatePresence>
        <div className="flex gap-4 relative">
          {items.map((item) => (
            <ImageCard
              key={item.id}
              item={item}
              selectedId={selectedId}
              setSelectedId={handleItemClick}
            />
          ))}
        </div>
      </MotionConfig>
    </div>
  );
};

export default ImageBox;
