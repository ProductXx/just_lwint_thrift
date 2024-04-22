import React from "react";
import ImageBox from "../components/ImageBox";
import SizesBox from "../components/SizesBox";
import ColorBox from "../components/ColorBox";

const Detail = () => {
  return (
    <div className="flex justify-center items-center h-screen mt-5">
      {/* Image */}
      <div className="w-1/2 flex items-center justify-center gap-4">
        <ImageBox />
      </div>
      
      <div className="w-1/2 flex flex-col items-start gap-4">
        {/* Show item is sold out or in stock */}
        <div className="flex gap-2">
          <h1 className=" px-3 py-1 bg-red-600 text-white skew-x-6">
            SOLD OUT
          </h1>
          <h1 className=" px-3 py-1 bg-green-600 text-white skew-x-6">
            IN STOCK
          </h1>
        </div>
        {/* Item Name */}
        <h1 className="font-bold text-5xl">Barsolar T Shirt</h1>
        {/* Subtitle */}
        <p>branded collection</p>
        {/* Description */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          vel eos illo quis. Fugit harum incidunt recusandae totam, veniam
          temporibus odit excepturi aut magni nesciunt quas necessitatibus,
          placeat perspiciatis dolor?
        </p>
        {/* Choice section */}
        <div className="flex flex-col gap-5">
          <SizesBox />
          <ColorBox />
        </div>
      </div>
    </div>
  );
};

export default Detail;
