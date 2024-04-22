import React from "react";
import HeroAutoScroll from "../utils/HeroAutoScroll";

const Home = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="grid grid-cols-2">
        {/* Right Side */}
        <div className="h-screen flex flex-col justify-between">
          <h1 className="text-9xl mt-[250px] self-center">JUST LWINT</h1>
          <div className="flex justify-between items-end px-5">
            <p>Its Just Text here</p>
            <p className="text-center">
              Its Just Text here but longer <br /> than the others and show
              contact
            </p>
            <p>Its Just Text here</p>
          </div>
        </div>
        {/* Left Side */}
        <div className="flex gap-2 bg-black px-3">
          <HeroAutoScroll duration={50} />
          <HeroAutoScroll duration={40} isReverse={true} />
          <HeroAutoScroll duration={30} />
        </div>
      </div>
    </div>
  );
};

export default Home;
