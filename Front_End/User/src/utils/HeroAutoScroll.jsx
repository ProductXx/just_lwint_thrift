import React, { useEffect, useState } from "react";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import img7 from "../assets/img/img7.png";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
import Card from "./Card";

const images = [img1, img2, img3, img4, img5, img6, img7];

const HeroAutoScroll = ({ isReverse, duration }) => {
  let [ref, { height }] = useMeasure(); // get container height
  const yTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -height / 2 - 8;
    const direction = [0, finalPosition];

    controls = animate(
      yTranslation,
      isReverse ? direction.reverse() : direction,
      {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      }
    );

    return () => controls?.stop();
  }, [yTranslation, height]);

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex flex-col gap-3"
        ref={ref}
        style={{ y: yTranslation }}
      >
        {[...images, ...images].map((item, idx) => (
          <Card image={item} key={idx} />
        ))}
      </motion.div>
    </div>
  );
};

export default HeroAutoScroll;
