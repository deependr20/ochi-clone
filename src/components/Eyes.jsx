import React, { useEffect, useState } from 'react';

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
      window.addEventListener("mousemove", (e)=> {
          const mouseX = e.clientX;
          const mouseY = e.clientY;
          const deltaX = mouseX - window.innerWidth / 2; // x axis from center
          const deltaY = mouseY - window.innerHeight / 2; // y axis from center
    
          // Calculate angle in degrees and adjust it for proper rotation
          let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
          setRotate(angle-180)

      })
    
  }, [])

  return (
    <div data-scroll data-scroll-speed="-.5" className=" w-full h-screen overflow-hidden">
      <div className="w-full relative h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* First Eye */}
          <div className="bg-white  md:w-[20vw] w-[25vw] h-[25vw] md:h-[20vw] flex items-center justify-center rounded-full">
            <div className="bg-black flex items-center rounded-full justify-center h-[60%] w-[60%]">
              <div
                className="line h-8 w-full justify-start  items-center flex"
                style={{ transform: `rotate(${rotate}deg)` }} // Rotate based on mouse position
              >
                <div className="bg-white rounded-full h-4 w-4 md:h-7 md:w-7"></div>
              </div>
            </div>
          </div>
          {/* Second Eye */}
          <div className="bg-white md:w-[20vw] w-[25vw] h-[25vw] md:h-[20vw] flex items-center justify-center rounded-full">
            <div className="bg-black flex items-center rounded-full justify-center h-[60%] w-[60%]">
              <div
                className="line h-8 w-full justify-start items-center flex"
                style={{ transform: `rotate(${rotate}deg)` }} // Rotate based on mouse position
              >
                <div className="bg-white rounded-full h-4 w-4 md:h-7 md:w-7"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
