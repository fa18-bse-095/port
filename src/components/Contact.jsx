import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import * as khan from '../Utility/Animation'

const Contact = () => {
  return (
    <>
        <div className='border-b border-gray-700 pb-20 '>
            <motion.h1
             variants={khan.Fadup(0)}
                               initial= "hidden"
                               whileInView={"visible"}
            
             className=' text-center p-3 text-2xl md:text-4xl font-bold  capitalize my-10 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent '>Get in touch</motion.h1>
           <motion.div
           variants={khan.Fadup(0.5)}
                               initial= "hidden"
                               whileInView={"visible"}


            className=' text-center tracking-tighter'>
           <p
          
           
           
            className='my-4 '>{CONTACT.address}</p>
           <h2>{CONTACT.email}</h2>
           <h1>{CONTACT.phoneNo}</h1>

           </motion.div> 
        </div>
    </>
  )
}

export default Contact