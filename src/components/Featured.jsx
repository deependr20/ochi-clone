import React, { useState } from 'react'
import Button from './Button';

const Featured = () => {
  return (
    <div data-scroll data-scroll-speed="-.2" data-scroll-section className='w-full  bg-[#F1F1F1] md:pt-20 pt-12 '>
      <div className='w-full px-12 border-b-[1px]  border-slate-300'>
        <h1 className='md:text-6xl text-4xl mb-8'>Featured projects</h1>
      </div>
      <div className='cards w-full relative  md:py-16 py-12   bg-[#F1F1F1]  flex md:flex-row flex-col gap-5 px-12'>
        <div className='md:w-1/2 w-full'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-5xl font-semibold text-[#CDEA68]'>FYDE</h1>
          </div>
          <div className='flex items-center gap-2 mb-4'>
            <div className='w-3 h-3 rounded-full bg-black'></div>
            <h1>FYDE</h1>
          </div>
          <div className=' overflow-hidden md:h-[70vh] h-[50vh] w-full'>
            <div className='w-full h-full   '>
              <img className='w-full h-full object-cover  rounded-xl' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
          </div>
        </div>
        <div className='md:w-1/2 w-full'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-5xl font-semibold text-[#CDEA68]'>VISE</h1>
          </div>
          <div className='flex items-center gap-2 mb-4'>
            <div className='w-3 h-3 rounded-full bg-black'></div>
            <h1>VISE</h1>
          </div>
          <div className='object-cover  overflow-hidden md:h-[70vh] h-[50vh] w-full'>
            <div className='w-full h-full   '>
              <img className='w-full h-full rounded-xl object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

     <div className='w-full flex items-center justify-center py-12'>
           <Button name="VIEW ALL CASE STUDIES" />
     </div>
    </div>
  )
}

export default Featured