"use client"
import React, { useState } from 'react'
import Image from "next/image";
import '../globals.css'

const Shows = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            imageSrc: "https://i.pinimg.com/736x/d1/02/4d/d1024d3d776d6d80d73a9b5d6d55a3c8.jpg",
            thead: "Nora Fatehi",
            text: "for an event hosted by XYZ permormed at pune.",
            date: "14 March 2023"
        },
        {
            imageSrc: "https://i0.wp.com/deadant.co/wp-content/uploads/2024/04/Kapil-Sharma-Show.png?fit=1366%2C768&ssl=1",
            thead: "Kapil Sharma",
            text: "for an event hosted by XYZ permormed at pune.",
            date: "14 March 2023"
        },
        {
            imageSrc: "https://blackhattalent.com/wp-content/uploads/2023/04/Khan.png",
            thead: "Zakir Khan ",
            text: "for an event hosted at pune for Meesho.",
            date: "14 March 2023"
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="undefined   mx-auto grid grid-cols-12 relative my-8 ">
            <div className="relative w-full overflow-hidden col-span-2">
                <div className="absolute left-0 top-[7%] w-full rotate-[-40deg]">
                    <div
                        className=" flex animate-marquee flex-row gap-4 backdrop-blur-2xl bg-gradient-to-b from-transparent via-[#ffffff05] to-transparent border-2 border-black py-2 w-full min-w-[200rem]"
                        style={{ transform: "translateX(-1148.88px)", animation: 'marquee 60s linear infinite', }}
                    >
                        <p className="w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px] text-white">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                        <p className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                        <p className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                        <p className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                        <p className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                        <p className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                        <p className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                        <p className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                        <p className="w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px] text-white">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between gap-14 col-span-1 md:col-span-8 relative overflow-hidden lg:px-5 xl:px-5 xxlpx-0">
                <div className="text-2xl font-semibold flex flex-row justify-between items-start w-full px-4 md:px-0">
                    <h2 className="main_heading text-white text-[64px] font-[300] leading-tight text-center px-24 lg:text-[40px] xl:text-[50px] xxl:text-[64px]">
                        Recent shows made star-studded via StarClinch
                    </h2>
                </div>
                <div className="whitespace-no-wrap mt-3 sm:mt-0">
                    <div className="max-w-screen-lg xl:px-20 relative">
                        <div className="flex items-center justify-center space-x-5 relative overflow-hidden">
                            <div className="rounded-t-full rounded-b-3xl bg-gradient-to-br from-orange-600 to-pink-800 p-3 lg:min-w-[28rem] lg:h-[500px]  overflow-hidden">
                                <div className="relative overflow-hidden w-full h-full rounded-t-full rounded-b-3xl aspect-[16/9]">
                                    <Image
                                        src={slides[currentIndex].imageSrc}
                                        alt={`Slide ${currentIndex + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className='divide-opacity-50 opacity-70'
                                    />
                                </div>
                            </div>
                            <div className="min-w-80  flex flex-col justify-content items-center">
                                <p className="text-[#6c6c71] w-full  px-4 xxl:px-4 xl:pr-10 items-center text-start h-full lg:text-[40px]  ">
                                    <span className="text-white font-semibold">{slides[currentIndex].thead}</span>
                                    &nbsp;
                                    {slides[currentIndex].text}
                                    &nbsp;&nbsp;
                                </p>
                            </div>
                        </div>
                        <button
                            className="text-white z-20 absolute top-[55%] -left-5 cursor-pointer h-20 w-20"
                            onClick={handlePrevious}
                        >
                            <svg
                                width={77}
                                height={77}
                                viewBox="0 0 77 77"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g filter="url(#filter0_bi_3474_812)">
                                    <circle
                                        cx={38}
                                        cy={38}
                                        r={38}
                                        transform="matrix(-1 0 0 1 76.791 0.443359)"
                                        fill="white"
                                        fillOpacity="0.1"
                                    />
                                    <circle
                                        cx={38}
                                        cy={38}
                                        r="37.6846"
                                        transform="matrix(-1 0 0 1 76.791 0.443359)"
                                        stroke="url(#paint0_linear_3474_812)"
                                        strokeWidth="0.630745"
                                    />
                                </g>
                                <path
                                    d="M21.6136 35.834L47.1637 25.4674C47.7535 25.2281 48.3132 25.8688 47.9969 26.4211L41.7464 37.3347C41.6357 37.5279 41.6283 37.7636 41.7267 37.9634L47.9969 50.7028C48.2884 51.2952 47.6378 51.9075 47.0642 51.5807L21.5339 37.0368C21.0478 36.7599 21.0952 36.0444 21.6136 35.834Z"
                                    fill="#DBDEE9"
                                />
                            </svg>
                        </button>
                        <button
                            className="text-white z-20 absolute top-[55%] -right-5 cursor-pointer h-20 w-20"
                            onClick={handleNext}
                        >
                            <svg
                                width={77}
                                height={77}
                                viewBox="0 0 77 77"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g filter="url(#filter0_bi_3474_816)">
                                    <circle
                                        cx="38.0115"
                                        cy="38.4434"
                                        r={38}
                                        fill="white"
                                        fillOpacity="0.1"
                                    />
                                    <circle
                                        cx="38.0115"
                                        cy="38.4434"
                                        r="37.6846"
                                        stroke="url(#paint0_linear_3474_816)"
                                        strokeWidth="0.630745"
                                    />
                                </g>
                                <path
                                    d="M55.1888 35.834L29.6387 25.4674C29.049 25.2281 28.4893 25.8688 28.8056 26.4211L35.0561 37.3347C35.1668 37.5279 35.1742 37.7636 35.0758 37.9634L28.8056 50.7028C28.5141 51.2952 29.1646 51.9075 29.7383 51.5807L55.2686 37.0368C55.7547 36.7599 55.7073 36.0444 55.1888 35.834Z"
                                    fill="#DBDEE9"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative w-full overflow-hidden col-span-2">
                <div className="rotate-[-40deg] w-full absolute right-0 bottom-[7%]">
                    <div
                        className=" flex animate-marquee flex-row gap-4 bg-gradient-to-b from-transparent via-[#FFFFFF20] to-transparent border-2 border-black py-2 w-full min-w-[200rem]"
                        style={{ transform: "translateX(-1148.88px)", animation: 'marquee 60s linear infinite' }}
                    >
                        <p className="w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px] text-white">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                        <p className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                        <p className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                        <p className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                        <p className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                        <p className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                        <p className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                        <p className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                        <p className="w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px] text-white">
                            HEADLIGHTS OF TODAY
                        </p>
                        <div className="min-w-[4rem]">
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shows