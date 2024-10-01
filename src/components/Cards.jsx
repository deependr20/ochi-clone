import React, { useState } from 'react'

const Cards = () => {
    const handleMouseEnter = () => {
        gsap.to(".hover-target", {
            backgroundColor: "blue",
            duration: 0.5, // Duration of the animation
            ease: "power2.out", // Easing for smooth animation
        });
    };

    const handleMouseLeave = () => {
        gsap.to(".hover-target", {
            // Return to original size
            backgroundColor: "#212121",
            duration: 0.5, // Duration of the animation
            ease: "power2.out", // Easing for smooth animation
            duration: 0.5, // Duration of the animation
            ease: "power2.out", // Easing for smooth animation
        });
    };
  return (
    <div  className='md:px-12 px-5 w-full h-[160vh] md:h-[80vh] py-16 bg-[#F1F1F1] flex md:flex-row flex-col  gap-5 justify-between  border-zinc-400'>
         <div className='lg:w-1/2 w-full h-[60vh] bg-[#004D43] rounded-lg  flex justify-center items-center'>
              <h1 className='text-7xl text-[#CDEA68] font-semibold'>ochi</h1>
         </div>
         <div className='lg:w-1/2 w-full flex md:h-[60vh] h-[90vh] md:flex-row flex-col gap-5  justify-between'>
             <div className='lg:w-1/2 w-full  h-[45vh] md:h-full bg-[#212121] rounded-lg  flex justify-center items-center'>
                 <img className='object-cover w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
             </div>
             <div className='lg:w-1/2 w-full  h-[45vh] md:h-full relative bg-[#212121] rounded-lg flex justify-center items-center'>
                 <img className='w-36 object-cover' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                 <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`text-white hover-target bg-[#212121] border   border-slate-400 px-2 py-1 rounded-full absolute bottom-8`}>RATING 5.0 ON CLUTCH</button>
             </div>
         </div>
    </div>
  )
}

export default Cards