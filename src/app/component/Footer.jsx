import Link from 'next/link';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { footerData } from '../constant/footerData';

const Footer = () => {
   
    return (
        <div className="h-[70vh] md:min-h-screen flex justify-center items-center relative">
            <div className='w-full z-0 overflow-auto flex'>
                <div className='absolute top-1/2 left-0 w-[200px] h-[200px] md:w-[450px] md:h-[450px] opacity-70 rounded-full bg-gradient-to-l from-[#3bdf7f] via-[#ba6b3f] to-gray-800'></div>
                <div className='absolute top-16 right-0 w-[200px] h-[200px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-r from-[#ba6b3f] opacity-65  to-[#3bdf7f] '></div>
            </div>
            <div className=" border z-50 border-opacity-20 bg-opacity-20 overflow-hidden backdrop-blur-xl shadow-2xl border-l-0  border-white flex flex-col justify-center items-center  rounded-full px-8 py-16 w-[90%] md:w-[80%] h-[500px] absolute">
                <div className="text-center">
                    <h1 className="text-[40px] md:text-[80px] text-white font-medium">
                        10+ Projects done
                    </h1>
                    <p className="text-gray-300 mt-4 max-w-xl mx-auto text-lg ">
                        If you are looking for top 1% Frontend Developer, who take care more scalable, modern looking , smooth user experience then reach out to me.
                    </p>
                    <Link href={'https://www.linkedin.com/in/aryan5084102/'} target='_blank' className="bg-gradient-to-r w-fit flex items-center space-x-2 mx-auto from-[#ba6b3f] to-[#3bdf7f] text-white mt-[12px] py-2 px-3 md:mt-10 md:py-3 md:px-8 rounded-full text-[14px] md:text-lg hover:scale-105 transition-transform">
                        <div>Let's Connect</div>
                        <IoIosArrowRoundForward className='text-[20px] md:text-2xl' />
                    </Link>
                </div>

                <div className="relative">
                    {footerData.map((item, index) =>(
                        <div key={index} className={`${item?.class}`}>{item?.text}</div>
                    ))}                   
                </div>
            </div>
        </div>
    )
}

export default Footer