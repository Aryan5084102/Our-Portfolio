import React from 'react';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Image from 'next/image';
import { skilldetail } from '../constant/skillsImage';


const Skills = () => {

    return (
        <div className="p-4 md:p-8 w-full max-w-[1400px] mx-auto">
            <h2 className='text-xl md:text-[28px] font-bold text-[#ba6b3f] mb-6 md:mb-10 text-center'>My Skills</h2>
            
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 lg:gap-10'>
                {skilldetail.map((item, index) => (
                    <div 
                        key={index} 
                        className='group cursor-pointer flex flex-col p-3 md:p-4 gap-2 md:gap-3 backdrop-blur-2xl text-opacity-90 bg-opacity-35 border-opacity-35 border-2 border-white  bg-gray-700  text-sm md:text-xl px-4 md:px-7 py-2  text-white rounded-xl md:rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95'
                    >
                        <div className='flex gap-1 justify-end items-center'>
                            <StarHalfIcon className='text-[#faaf00] text-[14px] md:text-[20px]' />
                            <span className="font-semibold text-xs md:text-sm">{item?.rating}</span>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-2 md:gap-3 pb-1 md:pb-2'>
                            <div className="relative w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full overflow-hidden border-2 border-white/50">
                                <Image
                                    src={item?.icon}
                                    fill
                                    className="object-cover"
                                    alt={item?.text}
                                />
                            </div>
                            <span className='font-bold text-sm md:text-lg tracking-wide text-center'>{item?.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;