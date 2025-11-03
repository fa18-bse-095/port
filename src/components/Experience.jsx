import React from 'react';
import { motion } from 'framer-motion';
import { Fadleft, Fadright, iconVarients, Faddown, Fadup } from '../Utility/Animation'
// Import the EXPERIENCES data
import  {EXPERIENCES}from '../constants';


const Experience = () => {
    return (
        <>
            <div className=' border-b border-gray-500 pb-4 mt-16'>
                <motion.h1
                    variants={Fadup(0.2)}
                    initial="hidden"
                    whileInView={"visible"}

                    className=' text-center justify-center text-4xl mt-10 p-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Experience</motion.h1>
                <div className=' mt-24'>
                    {EXPERIENCES.map((experience, index) => (
                        <div key={index} className=' mb-8 flex flex-wrap lg:justify-center'>
                            <div className=' w-full lg:w-1/4'>
                                <motion.p
                                    variants={Fadright(0.2)}
                                    initial="hidden"
                                    whileInView={"visible"}

                                    className=' mb-2 text-xl text-gray-100'>{experience.year}</motion.p>
                            </div>
                            <div className=' w-full max-w-xl lg:w-3/4'>
                                <motion.h6
                                variants={Fadleft(0.2)}
                                                    initial= "hidden"
                                                    whileInView={"visible"}
                                 className=' mb-2 font-semibold'>{experience.role} --{''}
                                    <span className=' text-sm text-purple-100'>{experience.company}</span>
                                </motion.h6>
                                <motion.p
                                variants={Fadleft(0.2)}
                                                    initial= "hidden"
                                                    whileInView={"visible"}
                                >{experience.description}</motion.p>
                                <motion.h1
                                variants={Fadleft(0.2)}
                                                    initial= "hidden"
                                                    whileInView={"visible"}>{experience.technologies}</motion.h1>
                            </div>
                        </div>
                    )
                    )}

                </div>

            </div>
        </>
    );
};

export default Experience;