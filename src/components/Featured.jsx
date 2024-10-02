import React, { useEffect, useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import gsap from "gsap";

const Featured = () => {
  const [hover, sethover] = useState(false);
  const [hover2, sethover2] = useState(false);

  return (
    <div
      data-scroll
      data-scroll-speed="-.2"
      className="w-full  bg-[#F1F1F1] md:pt-20 pt-12 ">
      <div className="w-full px-12 border-b-[1px]  border-slate-300">
        <h1 className="md:text-6xl text-4xl mb-8">Featured projects</h1>
      </div>
      <div className="cards w-full relative  md:py-16 py-12   bg-[#F1F1F1]  flex md:flex-row flex-col gap-5 px-12">
        <motion.div className="md:w-1/2 first w-full">
          <div className="absolute z-10 flex  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {"FYDE".split("").map((item, index) => (
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={hover ? { y: 0, opacity: 1 } : { y: "100%" }}
                transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.08 }}
                className={`text-8xl relative z-40  font-semibold second text-[#CDEA68]`}
                key={index}>
                {item}
              </motion.h1>
            ))}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <h1>FYDE</h1>
          </div>
          <motion.div
            onMouseEnter={() => sethover(true)}
            onMouseLeave={() => sethover(false)}
            animate={hover ? {scale:.95} : { scale:1}} 
            transition={{ ease: [0.25, 1, 0.5, 1],duration:.4 }}
            className=" overflow-hidden md:h-[70vh] h-[50vh] w-full">
            <div className="w-full h-full   ">
              <img
                className="w-full h-full object-cover  rounded-xl"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="md:w-1/2 w-full">
          <div className="absolute z-10  flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {"VICE".split("").map((item, index) => (
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={
                  hover2 ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }
                }
                transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.08 }}
                className={`text-8xl relative z-20  font-semibold second text-[#CDEA68]`}
                key={index}>
                {item}
              </motion.h1>
            ))}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <h1>VISE</h1>
          </div>
          <motion.div
            animate={hover2 ? {scale:.95} : { scale:1}} 
            transition={{ ease: [0.25, 1, 0.5, 1],duration:.4 }}
            onMouseEnter={() => sethover2(true)}
            onMouseLeave={() => sethover2(false)}
            className="object-cover overflow-hidden md:h-[70vh] h-[50vh] w-full">
            <div className="w-full h-full   ">
              <img
                className="w-full h-full rounded-xl object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center py-12">
        <Button name="VIEW ALL CASE STUDIES" />
      </div>
    </div>
  );
};

export default Featured;
