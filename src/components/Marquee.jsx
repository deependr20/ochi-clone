import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2"  className="w-full  md:h-[60vh] sm:h-[60vh] h-[45vh] pt-20  bg-[#004D43] rounded-t-xl overflow-hidden">
      <div className="border-y flex   whitespace-nowrap border-gray-400">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: 'linear' , duration: 8, repeat: Infinity }}
          className="md:text-[18vw] text-[20vw] pr-28  md:py-2 py-6  text-gray-100 font-bold leading-none uppercase"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: 'linear', duration: 8, repeat: Infinity }}
          className="md:text-[18vw] text-[20vw] pr-28 md:py-2 py-6 text-gray-100 font-bold leading-none uppercase"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
