"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import '../globals.css'
import SVGComponent from './SVGComponent'

const Journey = () => {
  const [activeTab, setActiveTab] = useState(0); 

  const handleTab = (id) => {
    setActiveTab(id);
  };

  const contentData = {
    0: [ 
      {
        title: "Freelance Frontend Developer",
        location: "Noida",
        duration: "(July, 2025 - Current)",
        desc: "Architecting betting website for both client and admin. Currently, working on Jewellery Management Systems with real-time Gold/Silver tracking.",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Frontend Developer at Techxsherpa LLP",
        location: "Noida",
        duration: "(Jan, 2025 - April, 2025)",
        desc: "Worked on dashboard for business and features also convert legacy code to React.js.",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Frontend Developer(Internship) at ConsultIT Technologies Pvt Ltd",
        location: "Greater Noida",
        duration: "(Oct, 2023 - March, 2024)",
        desc: "Worked on dashboard for payment and landing pages.",
        img: "https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    1: [
      {
        title: "Bachelor of Technology(B. Tech) with Computer Science",
        desc: "Dr. Ram Manohar Lohia Awadh University, Faizabad (2020 - 2024).",
        img: ""
      },
      {
        title: "Intermediate - PCM",
        desc: "Oxford Public School (2018 - 2020). Focused on Physics, Chemishtry, Mathematics.",
        img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "High School ",
        desc: "Chrishturaja School(2018). Focused on Physics, Chemishtry, Mathematics. ",
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
      }
    ]
  };

  const currentItems = contentData[activeTab];

  return (
    <div className=''>
      <div className='flex flex-col space-y-5 mt-10'>
        <div className='text-[28px] font-bold text-[#ba6b3f] mx-auto'>My Journey</div>
        <div className='flex flex-row justify-center items-center gap-4'>
          {['Experience', 'Education'].map((tab, index) => {
            return (
              <div 
                onClick={() => handleTab(index)} 
                className={`cursor-pointer transition-all duration-300 px-6 py-2 rounded text-xl font-medium ${
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

      <div className="relative h-[1400px] w-full bg-[#0b0b0f] flex justify-center items-center overflow-hidden mt-10">
        <div className="absolute inset-0 z-0 opacity-5">
          <SVGComponent />
        </div>

        <div className="absolute top-20 opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-pointer group flex space-x-5 items-center">
          <div className="mt-8 text-right max-w-96">
            <p className="text-white text-4xl font-medium">{currentItems[0].title}</p>
            <p className="text-[#ba6b3f] text-lg mt-2">{currentItems[0].desc}</p>
          </div>
          <div className="relative w-72 h-72 bg-black rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 rotate-[20deg] group-hover:rotate-[-10deg] border-2 border-[#ba6b3f]">
            <Image
              src={currentItems[0].img}
              alt="Section Image"
              fill
              className="object-cover z-50 shadow-xl"
            />
          </div>
        </div>

        <div className="absolute top-[550px] left-48 opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-pointer group flex space-x-5 items-center">
          <div className="mt-8 text-right max-w-96">
            <p className="text-white text-4xl font-medium">{currentItems[1].title}</p>
            <p className="text-[#ba6b3f] text-lg mt-2">{currentItems[1].desc}</p>
          </div>
          <div className="relative w-72 h-72 bg-black rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 rotate-[20deg] group-hover:rotate-[-10deg] border-2 border-[#ba6b3f]">
            <Image
              src={currentItems[1].img}
              alt="Section Image"
              fill
              className="object-cover z-50 shadow-xl"
            />
          </div>
        </div>

        <div className="absolute top-[1000px] left-[100px] opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-pointer group flex space-x-5 items-center">
          <div className="mt-8 text-right max-w-96">
            <p className="text-white text-4xl font-medium">{currentItems[2].title}</p>
            <p className="text-[#ba6b3f] text-lg mt-2">{currentItems[2].desc}</p>
          </div>
          <div className="relative w-72 h-72 bg-black rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 rotate-[20deg] group-hover:rotate-[-10deg] border-2 border-[#ba6b3f]">
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