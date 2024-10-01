import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import menu from "../assets/menu_icon.png"
import gsap from 'gsap';

const Navbar = () => {

  useEffect(()=>{
    gsap.from(".hoverlink" , {
      x: "-20%",
      stagger:1,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    })
  },[])
  // Track which link is being hovered
  const [hoveredLink, setHoveredLink] = useState(null);
  const [visible, setvisible] = useState(false)

  // Array of links
  const links = ['Services', 'Our Work', 'About Us', 'Insights', 'Contact Us'];

  return (
    <div className='px-5 md:px-12 fixed  w-full z-40 nav py-3 flex justify-between font-[gilroy] items-center'>
      <div className='flex items-center'> 
        <h1 className='text-4xl cursor-pointer font-bold text-gray-800'>ochi</h1>
      </div>

      <div className='md:flex hidden items-center gap-7'>
        {links.map((link, index) => (
          <Link
            key={index}
            onMouseEnter={() => setHoveredLink(index)} // Set the current link being hovered
            onMouseLeave={() => setHoveredLink(null)}  // Reset hover state on mouse leave
            className={`text-gray-500 ${hoveredLink === index ? '-translate-y-8 inline-block  text-slate-700  duration-100 ease-[0.22, 1, 0.36, 1]' : ''}  hoverlink text-md`}
          >
            {link}
            {hoveredLink === index && (
              <motion.div
                initial={{ width: 0, x: 0 }}
                animate={{ width: '100%' }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
                className='w-full h-[1px] bg-black'
              />
            )}
          </Link>
        ))}
      </div>
      <img onClick={() => setvisible(prev => !prev)} className="w-6 cursor-pointer sm:hidden flex" src={menu} alt="IMGpart1" />

      <div className={`absolute top-0 right-0 bottom-0 flex sm:hidden overflow-hidden bg-white transition-all duration-500 ${visible ? "w-full h-[100vh]" : "w-0"} `}>
          <div className="flex flex-col w-full text-gray-600 ">
              <div onClick={() => setvisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                {/* <img className="w-2 rotate-180" src={assets.dropdown_icon} alt="" /> */}
                <p className="text-lg text-gray-600">Back</p>
              </div>
                <NavLink onClick={() => setvisible(false)}  className={ "border pl-6 py-2 sm:bg-none bg-black sm:text-black text-white"}>Services</NavLink>
                <NavLink onClick={() => setvisible(false)}  className={ "border pl-6 py-2 sm:bg-none bg-black sm:text-black text-white "}>Our Work</NavLink>
                <NavLink onClick={() => setvisible(false)}  className={ "border pl-6 py-2 sm:bg-none bg-black sm:text-black text-white "}>About us</NavLink>
                <NavLink onClick={() => setvisible(false)}  className={ "border pl-6 py-2 sm:bg-none bg-black sm:text-black text-white "}>Insights</NavLink>
                <NavLink onClick={() => setvisible(false)}  className={ "border pl-6 py-2 sm:bg-none bg-black sm:text-black text-white "}>Contact us</NavLink>
            </div>
      </div>
    </div>
  );
};

export default Navbar;
