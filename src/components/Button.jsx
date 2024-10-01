import React, { useState } from 'react'
import { FaArrowUp } from "react-icons/fa";

const Button = ({name}) => {
  const [hover, sethover] = useState(false)
  return (
    <div>
        <div onMouseEnter={()=> sethover(true)} onMouseLeave={()=> sethover(false)} className={`bg-black text-white gap-8  overflow-hidden flex px-8 py-4 rounded-full  justify-between items-center`}>
                 <div>
                     {name}
                 </div>
                 <div className={`w-8 h-8 ${hover ? "p-[10px] scale-125  transition-all duration-500": "scale-50"} flex items-center justify-center rounded-full cursor-pointer bg-white`}>
                 {hover ? <span className=' text-black'><FaArrowUp /> </span> : ""}
                 </div>
           </div>
    </div>
  )
}

export default Button