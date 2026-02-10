import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const TeamSection = () => {
    return (
        <div className=" min-h-screen flex justify-center items-center relative">
            <div className='w-full z-0 overflow-auto flex'>
                <div className='absolute top-1/2 left-0 w-[450px] h-[450px] opacity-70 rounded-full bg-gradient-to-l from-orange-500 via-black to-gray-800'></div>
                <div className='absolute top-16 right-0 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-pink-400 opacity-65  to-gray-800 '></div>
            </div>
            <div className=" border z-50 border-opacity-20 bg-opacity-20 overflow-hidden backdrop-blur-xl shadow-2xl border-l-0  border-white flex flex-col justify-center items-center  rounded-full px-8 py-16 w-[80%] h-[500px] absolute">
                <span className="absolute top-20 left-20 -rotate-12 text-pink-400 font-medium text-2xl">
                    we are the team of
                </span>
                <div className="relative transform -translate-x-[50%]  ">
                    <div
                        className="w-[70px] h-[70px] absolute -top-[40px] -left-[355px]  border-[2px] border-pink-400 rounded-full border-t-transparent border-l-transparent border-r-transparent  border-b-2 "
                        style={{ transform: "rotate(-110deg) translateX(-4px)" }}
                    ></div>
                    <div
                        className="w-2 h-2 border-t-[2px] absolute top-[12px] -left-[291px]   border-l-[2px] border-pink-400 transform  -rotate-90 -mt-[6px]"
                    ></div>
                </div>

                <div className="text-center">
                    <h1 className="text-[80px] text-white font-medium">
                        20+ Talented Folks
                    </h1>
                    <p className="text-gray-300 mt-4 max-w-xl mx-auto text-lg ">
                        From passion-driven dedication to impactful contribution, we do it
                        all here. We are growing and will be excited to hear from you!
                    </p>
                    <button className="bg-gradient-to-r flex items-center space-x-2 mx-auto from-pink-500 to-orange-400 text-white mt-10 py-3 px-8 rounded-full text-lg hover:scale-105 transition-transform">
                        <div>Join our team </div>
                        <IoIosArrowRoundForward className='text-2xl' />
                    </button>
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

export default TeamSection