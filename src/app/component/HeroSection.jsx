"use client";
import { useState, useEffect, useRef } from "react";
import { connectionDetail } from "../constant/connectionDetail";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import CustomTooltip from "./CustomTooltip";
import { categories } from "../constant/herosection";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const handleNextCategory = () => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        rotate: -90,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
          gsap.fromTo(
            textRef.current,
            { rotate: 90, y: 50, opacity: 0 },
            { rotate: 0, y: 0, opacity: 1, duration: 0.5 }
          );
        },
      });
    }

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -200,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          gsap.fromTo(
            imageRef.current,
            { y: 800, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 }
          );
        },
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextCategory();
    }, 3000); 
    return () => clearInterval(interval);
  }, [currentIndex]);

  const activeCategory = categories[currentIndex];

  return (
    <div className="flex flex-col md:flex-row justify-around items-center min-h-[80vh] md:h-[90vh] bg-[#0a0a0a] text-white px-4 md:px-8 py-12 md:py-0">
      <div className="flex justify-center items-center relative mt-14 order-1 md:order-1 mb-8 md:mb-0">
        <div
          className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] rounded-full bg-gradient-to-br from-[#F16633CC] to-[#ba6b3f] relative overflow-hidden border-[8px] md:border-[12px] lg:border-[15px] border-[#ba6b3f]/30"
          style={{ clipPath: "circle(50% at 50% 50%)" }}
        >
          <Image
            ref={imageRef}
            src={activeCategory.image}
            width={600}
            height={600}
            alt={`${activeCategory.name} image`}
            className="absolute top-0 left-1/2 -translate-x-1/2 object-cover z-10 w-full h-full"
          />
        </div>

        <div ref={textRef} className="absolute z-50 top-20 md:top-28 lg:top-40 -left-0 md:-left-8 lg:-left-16 flex flex-col pointer-events-none text-center md:text-left">
          <span className="text-[#ba6b3f] text-left text-xl md:text-2xl lg:text-[35px] font-bold">I'm a</span>
          <span className="text-white text-2xl md:text-3xl lg:text-[45px] font-extrabold drop-shadow-lg">
            {activeCategory.name}
          </span>
        </div>
      </div>

      <div className="max-w-xl w-full order-2 md:order-2 text-center md:text-left">
        <div className="text-lg md:text-[22px] lg:text-[28px] font-bold text-[#ba6b3f] mb-4">My Focus</div>
        <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed md:leading-[38px] opacity-90">
          Building <span className="text-[#ba6b3f] font-semibold">Scalable, robust and smooth user Interfaces</span> like FinTech and dashboard solutions. Specializing in <span className="text-[#ba6b3f] font-semibold">React.js and Next.js</span>, I leverage <span className="italic">TypeScript, GraphQL, and Tanstack Query</span> to deliver high-performance, responsive applications.
        </p>

        <Link
          href="mailto:aryanverma5084102@gmail.com"
          className="flex items-center justify-center md:justify-start gap-4 mt-6 md:mt-8 group"
        >
          <span className="bg-gradient-to-r from-[#3bdf7f] via-[#ba6b3f] to-[#F86E42] inline-block text-transparent bg-clip-text text-lg md:text-xl lg:text-2xl font-bold transition-all duration-300 group-hover:tracking-wider">
            Connect with me
          </span>
        </Link>

        <div className="flex items-center justify-center md:justify-start gap-5 md:gap-8 mt-8 md:mt-10">
          {connectionDetail.map((item, index) => {
            return (
              <CustomTooltip key={index} text={item?.text}>
                <Link href={item?.href} target="_blank">
                  {item?.icon}
                </Link>
              </CustomTooltip>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;