import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

export const ListItem = ({ list }) => {
  return (
    <NavLink to={list.link} className="flex items-center gap-1 cursor-pointer">
      {list.icon}
      <motion.span
        className="w-[55px] overflow-hidden"
        animate="animate"
        initial="initial"
        transition={{ staggerChildren: 0.1 }}
      >
        {list.title.split("").map((char, idx) => (
          <motion.span key={idx} className="inline-block" variants={textVar}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </NavLink>
  );
};

export default ListItem;
