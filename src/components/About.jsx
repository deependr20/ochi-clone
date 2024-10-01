import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div  className='bg-[#CDEA68] w-full  border-b-[1px] border-gray-600 text-gray-700   h-[120vh] '>
            <div className=' md:py-[5.5rem] py-8 px-12'>
                <h1 className='md:text-[4vw] text-3xl  font-medium text-gray-800 md:leading-none tracking-normal '>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            </div>
            <div className='border-t-[.1px] w-full pt-7 gap-y-4  h-[80vh] flex lg:flex-row flex-col  px-12 border-gray-500'>
                <div className='lg:w-[55%] '>
                    <p>What you can expect:</p>
                </div>
                <div className='lg:w-[25%] sm:w-[60%] w-[100%] flex flex-col gap-8'>
                    <p>
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                    </p>
                    <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                </div>
                <div className='lg:w-[20%] md:w-[60%] w-[100%] lg:text-center text-start flex flex-col  '>
                    <h1 className=''>S:</h1>
                    <Link>Instagram</Link>
                    <Link>Behance</Link>
                    <Link>Facebook</Link>
                    <Link>Linkedin</Link>
                </div>
            </div>
        </div>
    )
}

export default About