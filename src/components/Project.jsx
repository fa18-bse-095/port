import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import { Fadleft, Fadright,iconVarients,Faddown } from '../Utility/Animation'

const Project = () => {
  return (
    <>
        <div className=' border-b border-gray-600 pb-4'>
            <motion.h1
            variants={Faddown(0.2)}
                                initial= "hidden"
                                whileInView={"visible"}
            
            
             className=' uppercase my-20 text-center text-2xl md:text-4xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>projects</motion.h1>
            <div>
                {PROJECTS.map((item, index) =>(
                    <div key={index} className=' mb-8 flex flex-wrap lg:justify-center '>
                    <div className=' w-full lg:w-1/4'>
                        <motion.img
                         variants={Fadright(0.2)}
                                initial= "hidden"
                                whileInView={"visible"}
                        
                         src={item.image} alt={item.title} className=' w-[150px] h-[150px] mb-6 rounded-xl ' />
                    </div>
                    <motion.div
                     variants={Fadleft(0.2)}
                                initial= "hidden"
                                whileInView={"visible"}
                    
                     className=' w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold '>{item.title}</h6>
                        <p className=' mb-4 text-neutral-100'>{item.description}</p>
                        {item.technologies.map((tech,index)=>(
                            <span key={index} className=' mr-2 rounded bg-gray-800 px-2 py-1 text-sm font-medium text-purple-400'>{tech}</span>
                        ))}
                    </motion.div>
                    </div>
                    

                ))}
            </div>
        </div>
    </>
  )
}

export default Project