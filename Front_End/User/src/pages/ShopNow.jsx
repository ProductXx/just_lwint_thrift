import React from "react";
import ShopCard from "../utils/ShopCard";

const ShopNow = () => {
  return (
    <div className="py-20 px-10">
      {/* Header Part */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-bold text-3xl">Men's Tshirt</h1>
        <div className="bg-red-500 text-white px-5 py-1">
          <span>Filter</span>
        </div>
      </div>
      {/* Main */}
      <div className="grid grid-cols-12 gap-5">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </div>
  );
};

export default ShopNow;
