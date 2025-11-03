import React from 'react'
import {RiHtml5Fill, RiCss3Fill,RiJavascriptFill, RiTailwindCssFill, RiReactjsLine,RiNodejsLine } from "react-icons/ri";
import { SiExpress,SiMongodb } from "react-icons/si";
import { motion } from 'framer-motion'
import { Fadleft, Fadright,iconVarients,Faddown } from '../Utility/Animation'


const Technologies = () => {
    return (
        <>
            <div className=' pb-24 top text-center justify-center text-2xl  font-bold md:text-4xl'>
                <motion.h1
                variants={Faddown(0.2)}
                    initial= "hidden"
                    whileInView={"visible"}
                
                
                 className='my-20 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent p-2 '>Technologies</motion.h1>
                <div className=' flex flex-wrap items-center justify-center gap-6 my-10 w-auto  '>
                    <motion.div
                    variants={iconVarients(1.5)}
                    initial= "initial"
                    animate="animate"
                     className=' rounded-2xl border-4 border-amber-400 p-4'>
                        <RiHtml5Fill className=' text-7xl text-orange-500 bg-white ' />
                        <h1 className=' text-sm text-white'>HTML:5</h1>
                        
                        
                    </motion.div>
                    
                    <motion.div
                     variants={iconVarients(2)}
                    initial= "initial"
                    animate="animate"
                    
                     className=' rounded-2xl border-4 border-amber-400 p-4'>
                        <RiCss3Fill className=' text-7xl text-white bg-blue-600' />
                        <h1 className=' text-sm text-white'>CSS</h1>
                    </motion.div>
                    <motion.div
                     variants={iconVarients(1.5)}
                    initial= "initial"
                    animate="animate"
                    
                    
                     className=' rounded-2xl border-4 border-amber-400 p-4 w-auto'>
                        <RiJavascriptFill className=' text-7xl text-black bg-yellow-500' />
                        <h1 className=' text-sm text-white'>JAVASCRIPT</h1>
                        
                    </motion.div>
                    <motion.div
                     variants={iconVarients(2.5)}
                    initial= "initial"
                    animate="animate"
                    
                     className=' rounded-2xl border-4 border-amber-400 p-4'>
                        <RiTailwindCssFill className=' text-7xl text-cyan-400 bg-white' />
                        <h1 className=' text-sm text-white'>TAILWIND</h1>
                    </motion.div>
                    <motion.div
                     variants={iconVarients(2)}
                    initial= "initial"
                    animate="animate"
                     className=' rounded-2xl border-4 border-amber-400 p-4'>
                        <RiReactjsLine className=' text-7xl text-cyan-400 bg-black' />
                        <h1 className=' text-sm text-white'>REACTJS</h1>
                    </motion.div>
                    <motion.div
                     variants={iconVarients(1)}
                    initial= "initial"
                    animate="animate"
                     className=' rounded-2xl border-4 border-amber-400 p-4'>
                        <RiNodejsLine className=' text-7xl text-green-500 bg-white' />
                        <h1 className=' text-sm text-white'>NODEJS</h1>
                    </motion.div>
                    <motion.div
                     variants={iconVarients(3)}
                    initial= "initial"
                    animate="animate"
                     className=' rounded-2xl border-4 border-amber-400 p-4'>
                        <SiExpress className=' text-7xl text-cyan-400' />
                        <h1 className=' text-sm text-white'>EXPRESSJS</h1>
                    </motion.div>
                    <motion.div
                     variants={iconVarients(2.5)}
                    initial= "initial"
                    animate="animate"
                    
                     className=' rounded-2xl border-4 border-amber-400 p-4'>
                        <SiMongodb className=' text-7xl text-green-900 bg-white' />
                        <h1 className=' text-sm text-white'>MONGODB</h1>
                    </motion.div>

                </div>
            </div>
        </>
    )
}

export default Technologies