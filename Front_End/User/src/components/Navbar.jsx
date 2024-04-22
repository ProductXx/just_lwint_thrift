import { motion } from "framer-motion";
import React from "react";
import ShoppingBag from "../utils/icons/ShoppingBag";
import Heart from "../utils/icons/Heart";

const svgVar = {
  animate: {
    pathLength: 1,
    transition: { duration: 1.5 },
  },
  initial: {
    pathLength: 0,
  },
};

const textVar = {
  animate: {
    x: 0,
    opacity: 1,
  },
  initial: {
    x: "-50%",
    opacity: 0,
  },
};

export const ListItems = [
  {
    id: 1,
    icon: <ShoppingBag variant={svgVar} />,
    title: "Shop Now",
  },
  {
    id: 2,
    icon: <Heart variant={svgVar} />,
    title: "WishList",
  },
];

export const ListItem = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:text-red-600">
      {icon}
      <motion.span
        className="w-[55px] overflow-hidden"
        animate="animate"
        initial="initial"
        transition={{ staggerChildren: 0.1 }}
      >
        {title.split("").map((char, idx) => (
          <motion.span key={idx} className="inline-block" variants={textVar}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full flex justify-between items-center px-5 py-3 bg-white z-50">
      {/* Logo */}
      <h1 className="text-2xl">Just Lwint</h1>
      {/* Navigation */}
      <div className="flex space-x-4">
        {ListItems.map((list) => (
          <ListItem key={list.id} icon={list.icon} title={list.title} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
