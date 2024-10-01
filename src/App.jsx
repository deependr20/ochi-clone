import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Approach from './components/Approach'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Reviews from './components/Reviews'
import Cards from './components/Cards'
import Project from './components/Project'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
const scroll = new LocomotiveScroll();
  return (
    <div className='bg-[#F1F1F1] w-full h-screen'>
        <Navbar />
        <Landingpage />
        <Marquee />
        <About />
        <Approach />
        <Eyes />
        <Featured />
        <Reviews />
        <Cards />
        <Project />
        <Footer />
    </div>
  )
}

export default App