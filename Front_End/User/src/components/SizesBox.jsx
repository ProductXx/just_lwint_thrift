import React, { useState } from "react";
import { motion } from "framer-motion";

const SizesBox = () => {
  const [selectedId, setSelectedId] = useState(0);

  const items = [
    { id: 0, size: "sm" },
    { id: 1, size: "md" },
    { id: 2, size: "lg" },
    { id: 3, size: "xl" },
    { id: 4, size: "2xl" },
    { id: 5, size: "3xl" },
  ];

  // Calculate the left position of the red indicator bar
  const indicatorLeft = selectedId * 40;

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">SIZES</h1>
      <div className="relative">
        <div className="flex  relative cursor-pointer select-none divide-x-2 ">
          {items.map((item) => (
            <motion.div
              key={item.id}
              className="w-10 text-center overflow-hidden relative hover:text-red-500"
              onClick={() => {
                setSelectedId(item.id);
              }}
            >
              {/* Selected front bold text */}
              <motion.span
                animate={
                  item.id == selectedId ? { x: 0 } : { x: "-100%", opacity: 0 }
                }
                transition={{ ease: "circInOut", duration: 0.5 }}
                className="absolute font-bold text-white"
              >
                {item.size}
              </motion.span>
              {/* Main text */}
              <motion.span
                animate={
                  item.id == selectedId ? { opacity: 0 } : { opacity: 1 }
                }
              >
                {item.size}
              </motion.span>
              {/* Selected Back text */}
              <motion.span
                animate={
                  item.id == selectedId
                    ? { x: -8, opacity: 0.2 }
                    : { x: "100%", opacity: 0, rotateZ: -45 }
                }
                transition={{ ease: "circInOut", duration: 0.5 }}
                className="absolute text-xs text-white"
              >
                {item.size}
              </motion.span>
            </motion.div>
          ))}
        </div>
        {/* Red Container */}
        <span
          className={`absolute top-1/2 -translate-y-1/2 bg-red-500 w-[40px] h-[24px] -z-10 transition-all duration-300`}
          style={{ left: `${indicatorLeft}px` }}
        ></span>
      </div>
    </div>
  );
};

export default SizesBox;
