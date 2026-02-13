import Link from 'next/link';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
    return (
        <div className=" min-h-screen flex justify-center items-center relative">
            <div className='w-full z-0 overflow-auto flex'>
                <div className='absolute top-1/2 left-0 w-[450px] h-[450px] opacity-70 rounded-full bg-gradient-to-l from-[#3bdf7f] via-[#ba6b3f] to-gray-800'></div>
                <div className='absolute top-16 right-0 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#ba6b3f] opacity-65  to-[#3bdf7f] '></div>
            </div>
            <div className=" border z-50 border-opacity-20 bg-opacity-20 overflow-hidden backdrop-blur-xl shadow-2xl border-l-0  border-white flex flex-col justify-center items-center  rounded-full px-8 py-16 w-[80%] h-[500px] absolute">
                <div className="text-center">
                    <h1 className="text-[80px] text-white font-medium">
                        10+ Projects done
                    </h1>
                    <p className="text-gray-300 mt-4 max-w-xl mx-auto text-lg ">
                        If you are looking for top 1% Frontend Developer, who take care more scalable, modern looking , smooth user experience then reach out to me.
                    </p>
                    <Link href={'https://www.linkedin.com/in/aryan5084102/'} target='_blank' className="bg-gradient-to-r w-fit flex items-center space-x-2 mx-auto from-[#ba6b3f] to-[#3bdf7f] text-white mt-10 py-3 px-8 rounded-full text-lg hover:scale-105 transition-transform">
                        <div>Let's Connect</div>
                        <IoIosArrowRoundForward className='text-2xl' />
                    </Link>
                </div>

                <div className="relative">
                    <div className="absolute -top-[200px] -left-[400px] backdrop-blur-xl text-opacity-90 bg-opacity-35 border-opacity-35 border-2 border-white  -rotate-12 bg-gray-700 text-white rounded-full text-xl px-7 py-2 shadow-lg">
                        Fun
                    </div>
                    <div className="absolute -top-[270px] -right-[400px] backdrop-blur-xl text-opacity-90 bg-opacity-35 border-opacity-35 border-2 border-white rotate-12 bg-gray-700 text-white rounded-full text-xl px-7 py-2 shadow-lg">
                        Inclusive
                    </div>
                    <div className="absolute top-[65px] -left-[310px] rotate-12 backdrop-blur-2xl bg-gray-700 text-white bg-opacity-35 border-opacity-15 border-2 border-white opacity-65 rounded-full text-base px-7 py-2 shadow-lg">
                        Focused
                    </div>
                    <div className="absolute top-[60px] -left-[220px] -rotate-12 backdrop-blur-2xl bg-gray-700 text-white bg-opacity-35 border-opacity-15 border-2 border-white rounded-full opacity-65 text-base px-7 py-2 shadow-lg">
                        Collaborative
                    </div>
                    <div className="absolute top-[65px] -left-[100px] rotate-12 bg-gray-700 backdrop-blur-2xl  text-white bg-opacity-35 border-opacity-15 border-2 border-white opacity-65 rounded-full text-base px-7 py-2 shadow-lg">
                        United
                    </div>
                    <div className="absolute top-[63px] -left-[10px] -rotate-12 bg-gray-700 backdrop-blur-2xl  text-white bg-opacity-35 border-opacity-15 border-2 border-white rounded-full opacity-65 text-base px-7 py-2 shadow-lg">
                        Vibrant
                    </div>
                    <div className="absolute top-[65px] left-[80px] rotate-12 bg-gray-700 backdrop-blur-2xl  text-white bg-opacity-35 border-opacity-15 border-2 border-white opacity-65 rounded-full text-base px-7 py-2 shadow-lg">
                        Dynamic
                    </div>
                    <div className="absolute top-[65px] left-[190px] -rotate-12 bg-gray-700 backdrop-blur-2xl text-white bg-opacity-35 border-opacity-15 border-2 border-white rounded-full opacity-65 text-base px-7 py-2 shadow-lg">
                        Motivated
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer