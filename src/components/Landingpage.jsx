import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import ochi from "../assets/ochi.png";

const Landingpage = () => {
  const [hover, sethover] = useState(false);

  return (
    <motion.div
      data-scroll
      data-scroll-speed="-.6"
      className="w-full md:h-screen h-[80vh]  pt-1">
      <div className="md:mt-40 mt-28 px-5 md:px-12">
        <div className="w-fit">
          <h1 className="lg:text-[8vw]  md:text-[10vw] sm:text-[10vw] text-[10vw] leading-[.9] md:leading-[.85] uppercase tracking-[-.5vw] font-bold">
            We create
          </h1>
        </div>
        <div className="flex w-fit">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "9vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className=" md:h-[7.3vw] lg:h-[6vw]  h-[7.4vw]  mt-[.2vw] ml-[.5vw]   rounded-sm w-[9vw] ">
            <img
              className="w-full h-full object-cover rounded-md"
              src={ochi}
              alt=""
            />
          </motion.div>
          <h1 className=" lg:text-[8vw]  md:text-[10vw] sm:text-[10vw] text-[10vw]  leading-[.9] md:leading-[.85] uppercase tracking-[-.5vw] font-bold">
            eye opening
          </h1>
        </div>
        <div className="w-fit md:mb-32 mb-20">
          <h1 className="lg:text-[8vw]  md:text-[10vw] sm:text-[10vw] text-[10vw] leading-[.9] md:leading-[.85] uppercase tracking-[-.5vw] font-bold">
            Presentation
          </h1>
        </div>
      </div>
      <div className="border-t-[1px] pt-5 gap-y-5 border-gray-400 flex md:flex-row  flex-col justify-between md:items-center items-start px-5 md:px-12">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <div
          onMouseEnter={() => sethover(true)}
          onMouseLeave={() => sethover(false)}
          className="flex  items-center gap-2 md:pb-0 pb-8">
          <button
            className={`${
              hover ? "bg-black text-white duration-300 transition-all  " : ""
            }  border-2 border-gray-400 px-4 py-1 rounded-full`}>
            START THE PROJECT
          </button>
          <div
            className={`px-2 ${
              hover
                ? "bg-black text-white duration-200 rotate-45 transition-all"
                : ""
            } py-2 border-2 border-gray-400 rounded-full`}>
            <FaArrowUp />
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Landingpage;
