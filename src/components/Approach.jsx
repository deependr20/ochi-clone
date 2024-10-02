import React, { useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
import { gsap } from 'gsap'
const Approach = () => {
    const [arrow, setarrow] = useState(false)
    const handleMouseEnter = () => {
        setarrow(true)
        gsap.to(".hover-target", {
            padding: "13.5px",
            border : "1px solid",
            scale:1.8,
            duration: 0.5, 
            ease: "power2.out",
            backgroundColor: "black",
            color:"white"
        });
    };

    const handleMouseLeave = () => {
        setarrow(false)
        gsap.to(".hover-target", {
            scale: .3, 
            duration: 0.5, 
            ease: "power2.out", 
            backgroundColor: "white"
        })
    };
    return (
        <div data-scroll-section data-scroll data-scroll-speed="-.5" className='w-full h-[100vh] px-12 pt-5 gap-y-5 flex md:flex-row md:justify-between justify-start flex-col bg-[#CDEA68]'>
            <div className='md:w-[50%] w-full '>
                <h1 className='text-5xl'>Our approach:</h1>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={` ${arrow ? "bg-white text-zinc-700 font-semibold":"bg-black"} w-fit flex items-center gap-4 px-6 py-4 mt-3 rounded-full text-white`}>
                    <button>READ MORE</button>
                    <div >
                        <div  className={`hover-target  text-black w-2 h-2 flex   justify-center items-center cursor-pointer  rounded-full bg-white`}>
                            {arrow ? <span className='rotate-45'><FaArrowUp /> </span> : ""}
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-[50%] w-full'>
                <img className='object-cover rounded-md w-full h-[70%] md:h-[90%] ' src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg' alt='approach' />
            </div>
        </div>
    )
}

export default Approach