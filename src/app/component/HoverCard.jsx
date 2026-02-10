"use client"
import React from 'react'
import Image from 'next/image'
import '../globals.css'
import SVGComponent from './SVGComponent'


const HoverCard = () => {
  return (
    <div className="relative h-[1400px] w-full bg-[#0b0b0f] flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <SVGComponent />
      </div>
      <div className="absolute top-20 opacity-40 hover:opacity-90 cursor-pointer  group flex space-x-5 items-center">
        <div className="mt-8 text-center max-w-96">
          <p className="text-white text-4xl font-medium">Late Night Maggie Party for the boost</p>
        </div>
        <div className="relative w-72 h-72 bg-black rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 rotate-[20deg] group-hover:rotate-[-20deg]">
          <Image
            src="https://www.vice.com/wp-content/uploads/sites/2/2021/09/1632479276472-tasting-the-unbridled-delights-of-the-milkshake-maggi.jpeg"
            alt="Card Image"
            fill
            className="object-cover z-50 shadow-xl  "
          />
        </div>
      </div>

      <div className="absolute top-[600px] left-48 opacity-40 hover:opacity-90 cursor-pointer  group flex space-x-5 items-center">
        <div className="mt-8 text-center max-w-96">
          <p className="text-white text-4xl font-medium">Late Night Maggie Party for the boost</p>
        </div>
        <div className="relative w-72 h-72 bg-black rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 rotate-[20deg] group-hover:rotate-[-20deg]">
          <Image
            src="https://www.vice.com/wp-content/uploads/sites/2/2021/09/1632479276472-tasting-the-unbridled-delights-of-the-milkshake-maggi.jpeg"
            alt="Card Image"
            fill
            className="object-cover z-50 shadow-xl "
          />
        </div>
      </div>

      <div className="absolute top-[1100px] left-[50px]  opacity-40 hover:opacity-90 cursor-pointer  group flex space-x-5 items-center">
        <div className="mt-8 text-center max-w-96">
          <p className="text-white text-4xl font-medium">Late Night Maggie Party for the boost</p>
        </div>
        <div className="relative w-72 h-72 bg-black rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 rotate-[20deg] group-hover:rotate-[-20deg]">
          <Image
            src="https://www.vice.com/wp-content/uploads/sites/2/2021/09/1632479276472-tasting-the-unbridled-delights-of-the-milkshake-maggi.jpeg"
            alt="Card Image"
            fill
            className="object-cover z-50 shadow-xl  "
          />
        </div>
      </div>
    </div>
  )
}

export default HoverCard