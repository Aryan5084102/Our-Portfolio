"use client"
import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { slides } from '../constant/projectsDetail';
import '../globals.css'
import MarqueeSide from './MarqueeSide';



const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentSlide = slides[currentIndex];

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
    const handlePrevious = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="mx-auto grid grid-cols-12 relative my-8 min-h-[500px]">
            
            <MarqueeSide rotation={-40} position="top-[7%] left-0" />

            <div className="flex flex-col justify-between gap-14 col-span-8 relative overflow-hidden lg:px-5">
                <div className='text-[28px] font-bold text-[#ba6b3f] mx-auto'>Recent Projects</div>

                <div className="max-w-screen-xl xl:px-20 relative">
                    <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-10 relative overflow-hidden">
                        
                        <div className="p-3 lg:min-w-[32rem] lg:h-[350px] w-full">
                            <div className="relative overflow-hidden w-full h-full aspect-[16/9] rounded-xl">
                                <Image
                                    src={currentSlide.imageSrc}
                                    alt={currentSlide.thead}
                                    fill
                                    className='object-cover'
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-[500px] flex flex-col justify-center gap-5 items-center lg:items-start">
                            <p className="text-white px-4 text-center lg:text-start lg:text-[24px]">
                                <span className="text-[#ba6b3f] font-semibold">{currentSlide.thead}</span>
                                {" "}{currentSlide.text}
                            </p>
                            
                            <div className='flex justify-center lg:justify-start items-center gap-5 mt-5'>
                                {currentSlide.codeLink && (
                                    <Link className='bg-gradient-to-b from-[#3bdf7f] to-[#ba6b3f] hover:scale-110 text-[14px] px-6 py-3 rounded-full transition-transform' href={currentSlide.codeLink} target='_blank'>
                                        GitHub Link
                                    </Link>
                                )}
                                {currentSlide.liveLink && (
                                    <Link className='bg-gradient-to-b from-[#3bdf7f] to-[#ba6b3f] text-[14px] hover:scale-110 px-6 py-3 rounded-full transition-transform' href={currentSlide.liveLink} target='_blank'>
                                        Deploy Link
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {[
                        { icon: "M21.6 35.8L47.1 25.4C47.7 25.2 48.3 25.8 47.9 26.4L41.7 37.3... (shortened path)", action: handlePrevious, pos: "-left-5" },
                        { icon: "M55.1 35.8L29.6 25.4C29.0 25.2 28.4 25.8 28.8 26.4L35.0 37.3... (shortened path)", action: handleNext, pos: "-right-5" }
                    ].map((btn, i) => (
                        <button key={i} className={`text-white z-20 absolute top-[50%] ${btn.pos} cursor-pointer h-16 w-16 opacity-70 hover:opacity-100 transition-opacity`} onClick={btn.action}>
                            <svg width="100%" height="100%" viewBox="0 0 77 77" fill="none">
                                <circle cx="38" cy="38" r="38" fill="white" fillOpacity="0.1" />
                                <path d={i === 0 ? "M21.6136 35.834L47.1637 25.4674C47.7535 25.2281 48.3132 25.8688 47.9969 26.4211L41.7464 37.3347C41.6357 37.5279 41.6283 37.7636 41.7267 37.9634L47.9969 50.7028C48.2884 51.2952 47.6378 51.9075 47.0642 51.5807L21.5339 37.0368C21.0478 36.7599 21.0952 36.0444 21.6136 35.834Z" : "M55.1888 35.834L29.6387 25.4674C29.049 25.2281 28.4893 25.8688 28.8056 26.4211L35.0561 37.3347C35.1668 37.5279 35.1742 37.7636 35.0758 37.9634L28.8056 50.7028C28.5141 51.2952 29.1646 51.9075 29.7383 51.5807L55.2686 37.0368C55.7547 36.7599 55.7073 36.0444 55.1888 35.834Z"} fill="#DBDEE9" />
                            </svg>
                        </button>
                    ))}
                </div>
            </div>

            <MarqueeSide rotation={-40} position="bottom-[7%] right-0" />
        </div>
    )
}

export default Projects