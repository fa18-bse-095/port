import React from 'react'
import ko from "../assets/mine.jpg"
import { motion } from 'framer-motion'
import { Fadleft, Fadright } from '../Utility/Animation'
import { HERO_CONTENT } from '../constants';
import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
        <>
            <div className=' grid lg:grid-cols-2 sm:grid-cols-1 min-h-[450px] relative z-10'>
                <div className=' flex flex-col justify-center py-10 md:py-0 relative  '>
                    <div className=' text-center md:text-left space-y-6 lg:max-w-[90%] mt-0 ml-10 max-h-[100vh]'>
                        <motion.h1
                        variants={Fadright(0.1 )}
                        initial="hidden"
                        whileInView={"visible"} 
                        
                         className='  uppercase font-bold text-white  text-2xl lg:text-4xl'>Hello i'm yasin ahmad!</motion.h1>
                        <motion.span
      variants={Fadright(0.3)}
      initial="hidden"
      whileInView="visible"
      className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
    >
      <ReactTyped
        strings={[
          "MERN Stack Developer",
          "Frontend Specialist",
          "React and Tailwind Lover",
        ]}
        // typeSpeed={60}
        // backSpeed={10}
        // backDelay={1500}
        // loop
        // showCursor ={false}
        typeSpeed={80}
          backSpeed={10}
          loop={true}
          showCursor ={false}
      />
    </motion.span>
  
                        <motion.p
                        variants={Fadright(0.4)}
                        initial='hidden'
                        whileInView={"visible"}
                        > { HERO_CONTENT }</motion.p>
                        

                    </div>
                    

                </div>
                
                <div className=' flex flex-col justify-center py-10 md:py-0 relative z-10 '>
                <div className=' text-center md:text-left space-y-6 lg:max-w-[90%] mt-[-10px] md:ml-10 ml-0 max-h-[100vh]'>
                <div >
                    <motion.img
                    variants={Fadleft(0.5)}
                    initial="hidden"
                    whileInView={"visible"}
                     src={ko} alt="" className=' rounded-r-4xl h-96 lg:ml-28 ml-10 mix-blend-screen mt-0' />
                </div>
                


                </div>

                </div>
            </div>
        </>
    )
}

export default Hero