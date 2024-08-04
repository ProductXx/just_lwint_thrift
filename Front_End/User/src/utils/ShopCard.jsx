import React from "react";
import Button from "./Button";

const ShopCard = () => {
  return (
    <div className="col-span-3 relative h-[500px] shadow group transition-shadow delay-75 hover:shadow-lg">
      {/* Border Top left and bottom right animation */}
      <div className="border-t-[3px] border-l-[3px] border-black/30 absolute top-0 size-8 group-hover:border-black group-hover:size-full transition-all duration-500 ease-in-out "></div>
      <div className="border-b-[3px] border-r-[3px] border-black/30 absolute bottom-0  right-0 size-8 group-hover:border-black group-hover:size-full transition-all duration-500 ease-in-out "></div>

      {/* Brand Name */}
      <div className="px-3 py-2 text-center">
        <h1 className="font-bold text-2xl">Escort</h1>
      </div>

      {/* Image */}
      <div className="w-full h-[60%]">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1590999659195-e64a988eaf4f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      {/* In stock or Sold out and Desc */}
      <div className="p-3 flex flex-col items-start gap-3">
        <h1 className="px-3 bg-green-600 text-white">IN STOCK</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          accusantium nam deleniti
        </p>
        <div className="space-x-3">
          <Button text={'View More'} color={'#DC2626'}/>
          <button className="px-3 py-1 bg-yellow-600 text-white">
            Add WishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
