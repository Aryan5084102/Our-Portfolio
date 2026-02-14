"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import '../globals.css'
import SVGComponent from './SVGComponent'
import { contentData } from '../constant/journeyData'

const Journey = () => {
  const [activeTab, setActiveTab] = useState(0); 

  const handleTab = (id) => {
    setActiveTab(id);
  };

  const currentItems = contentData[activeTab];

  return (
    <div className='px-4 md:px-8'>
      <div className='flex flex-col space-y-4 md:space-y-5 mt-8 md:mt-10'>
        <div className='text-xl md:text-[28px] font-bold text-[#ba6b3f] mx-auto'>My Journey</div>
        <div className='flex flex-row justify-center items-center gap-2 md:gap-4 flex-wrap'>
          {['Experience', 'Education'].map((tab, index) => {
            return (
              <div 
                onClick={() => handleTab(index)} 
                className={`cursor-pointer transition-all duration-300 px-4 md:px-6 py-2 rounded text-base md:text-xl font-medium ${
                  activeTab === index 
                  ? 'bg-gradient-to-b from-[#3bdf7f] to-[#ba6b3f] text-white scale-105' 
                  : 'bg-gray-800 text-gray-400 hover:text-white'
                }`} 
                key={index}
              >
                {tab}
              </div>
            )
          })}
        </div>
      </div>

      <div className="relative w-full max-w-full md:max-w-none min-h-screen md:min-h-[1400px] bg-[#0b0b0f] flex flex-col justify-start items-center overflow-hidden mt-8 md:mt-10 py-8 md:py-0">
        <div className="absolute inset-0 z-0 opacity-5 overflow-hidden">
          <SVGComponent />
        </div>

        <div className="w-full max-w-[350px] md:max-w-none md:absolute md:top-20 md:left-[600px] opacity-40 md:opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-pointer group flex flex-col md:flex-row space-y-4 md:space-x-5 items-center md:items-start mb-8 md:mb-0 px-2">
          <div className="mt-4 md:mt-8 text-center md:text-right max-w-full md:max-w-96 order-2 md:order-1">
            <p className="text-[#ba6b3f] text-xl md:text-3xl lg:text-4xl font-semibold">{currentItems[0].title}</p>
            <p className="text-white mt-1 md:mt-2 mb-1 md:mb-2 font-medium text-sm md:text-base">{currentItems[0].location}</p>
            <p className="text-[#ba6b3f] font-medium text-sm md:text-base">{currentItems[0].duration}</p>
            <p className="text-sm md:text-lg mt-2">{currentItems[0].desc}</p>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-black rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 rotate-[20deg] group-hover:rotate-[-10deg] border-2 border-[#ba6b3f] order-1 md:order-2">
            <Image
              src={currentItems[0].img}
              alt="Section Image"
              fill
              className="object-cover z-50 shadow-xl"
            />
          </div>
        </div>

        <div className="w-full max-w-[350px] md:max-w-none md:absolute md:top-[550px] md:left-[500px] opacity-40 md:opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-pointer group flex flex-col md:flex-row space-y-4 md:space-x-5 items-center md:items-start mb-8 md:mb-0 px-2">
          <div className="mt-4 md:mt-8 text-center md:text-right max-w-full md:max-w-96 order-2 md:order-1">
            <p className="text-[#ba6b3f] text-xl md:text-3xl lg:text-4xl font-semibold">{currentItems[1].title}</p>
            <p className="text-white mt-1 md:mt-2 mb-1 md:mb-2 font-medium text-sm md:text-base">{currentItems[1].location}</p>
            <p className="text-[#ba6b3f] font-medium text-sm md:text-base">{currentItems[1].duration}</p>
            <p className="text-sm md:text-lg mt-2">{currentItems[1].desc}</p>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-black rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 rotate-[20deg] group-hover:rotate-[-10deg] border-2 border-[#ba6b3f] order-1 md:order-2">
            <Image
              src={currentItems[1].img}
              alt="Section Image"
              fill
              className="object-cover z-50 shadow-xl"
            />
          </div>
        </div>

        <div className="w-full max-w-[350px] md:max-w-none md:absolute md:top-[1000px] md:left-[200px] opacity-40 md:opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-pointer group flex flex-col md:flex-row space-y-4 md:space-x-5 items-center md:items-start px-2">
          <div className="mt-4 md:mt-8 text-center md:text-right max-w-full md:max-w-96 order-2 md:order-1">
            <p className="text-[#ba6b3f] text-xl md:text-3xl lg:text-4xl font-semibold">{currentItems[2].title}</p>
            <p className="text-white mt-1 md:mt-2 mb-1 md:mb-2 font-medium text-sm md:text-base">{currentItems[2].location}</p>
            <p className="text-[#ba6b3f] font-medium text-sm md:text-base">{currentItems[2].duration}</p>
            <p className="text-sm md:text-lg mt-2">{currentItems[2].desc}</p>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-black rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 rotate-[20deg] group-hover:rotate-[-10deg] border-2 border-[#ba6b3f] order-1 md:order-2">
            <Image
              src={currentItems[2].img}
              alt="Section Image"
              fill
              className="object-cover z-50 shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journey