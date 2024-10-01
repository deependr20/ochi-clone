import React from 'react'
import Button from './Button'

const Project = () => {
  return (
    <div className='w-full md:h-screen h-[60vh] px-12 bg-[#CDEA68] flex items-center flex-col justify-center '>
            <h1 className='text-[11vw] leading-none font-semibold'>READY</h1>
            <h1 className='text-[11vw] leading-none font-semibold'>TO START</h1>
            <h1 className='text-[11vw] mb-8 leading-none font-semibold'>THE PROJECT</h1>
            <Button  name="START THE PROJECT"/>
    </div>
  )
}

export default Project