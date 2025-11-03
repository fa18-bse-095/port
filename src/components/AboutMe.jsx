import React from 'react'
import jo from '../assets/pro.webp'
import { motion } from 'framer-motion'
import { Fadleft, Fadright, Fadup } from '../Utility/Animation'



const AboutMe = () => {
    return (
        <>
            <div className=' pb-4 '>
                <motion.h1
                    variants={Fadup(0)}
                    initial="hidden"
                    whileInView={"visible"}

                    className=' my-10 text-center text-2xl font-bold md:text-4xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>About Me

                </motion.h1>

            </div>
            {/* <div className=' grid grid-cols-1 md:grid-cols-2 '>
            <div className='flex flex-col justify-center py-10 md:py-0 relative z-10  '>
                <div className='text-center md:text-left space-y-6 lg:max-w-[90%] mt-0 ml-10 max-h-[100vh]'>
                    <img src={jo} alt="" className=' ml-10' />
                </div>
            </div>
            <div className=' flex flex-col justify-center py-10 md:py-0 relative z-10   '>
                <div className='  text-center md:text-left space-y-6 lg:max-w-[90%] mt-0 ml-10 max-h-[100vh]'>
                    hello my name is khan and i am not
                </div>
            </div>
        </div> */}

            <div className=' grid lg:grid-cols-2 sm:grid-cols-1 min-h-[450px] relative'>
                <div className=' flex flex-col justify-center py-10 md:py-0 relative z-10 '>
                    <div className=' text-center md:text-left space-y-6 lg:max-w-[90%] mt-0 md:ml-10 ml-0 max-h-[100vh]'>
                        <div>
                            <motion.img
                                variants={Fadright(0.2)}
                                initial="hidden"
                                whileInView={"visible"}
                                src={jo} alt="" className=' rounded-4xl  lg:ml-28 h-80 ml-10' />
                        </div>



                    </div>

                </div>
                <div className=' flex flex-col  py-10 md:py-0 relative z-10 '>
                    <div className=' text-center md:text-left space-y-6 lg:max-w-[90%] mt-0 ml-10 max-h-[100vh]max-w-2xl mx-auto shadow-lg rounded-lg p-6'>
                        
                        <motion.p
                            variants={Fadleft(0.3)}
                            initial='hidden'
                            whileInView={"visible"}
                            className='my-16 leading-relaxed '
                        >“I am a Software Engineering graduate from COMSATS University with over two years of professional experience as a MERN Stack Web Developer at MX Tech, Swat. I specialize in building responsive, user-friendly, and high-performance web applications using React.js, Node.js, Express, and MongoDB. With a strong foundation in modern web technologies and a passion for continuous learning, I aim to deliver innovative solutions that create real impact.”</motion.p>


                    </div>


                </div>




            </div>
        </>
    )
}

export default AboutMe