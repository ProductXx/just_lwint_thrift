import React from "react";
import ShoppingBag from "../utils/icons/ShoppingBag";
import Heart from "../utils/icons/Heart";
import ListItem from "../utils/ListItem";
import { useNavigate } from "react-router-dom";

const svgVar = {
  animate: {
    pathLength: 1,
    transition: { duration: 1.5 },
  },
  initial: {
    pathLength: 0,
  },
};

export const ListItems = [
  {
    id: 1,
    icon: <ShoppingBag variant={svgVar} />,
    title: "Shop Now",
    link: "shop",
  },
  {
    id: 2,
    icon: <Heart variant={svgVar} />,
    title: "WishList",
    link: "wishlist",
  },
];

const Navbar = () => {
  const nav = useNavigate();
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full flex justify-between items-center px-5 py-3 bg-white z-50">
      {/* Logo */}
      <h1 onClick={() => nav("/")} className="text-2xl cursor-pointer">
        Just Lwint
      </h1>
      {/* Navigation */}
      <div className="flex space-x-4">
        {ListItems.map((list) => (
          <ListItem key={list.id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
