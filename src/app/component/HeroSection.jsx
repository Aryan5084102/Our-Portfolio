"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { gsap } from "gsap";
import img from '../../../public/img/my-image.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';


const HeroSection = () => {
  const categories = [
    {
      name: "Frontend Developer",
      image:  img,  
    },
    {
      name: "React Developer",
      image:  img,  
    },
    {
      name: "Freelancer",
      image:  img,  
    },
  ];

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
    <div  className=" flex justify-around items-center">
          <div className="flex justify-center items-center sticky top-36">
            <div
              className="w-[610px] h-[610px] rounded-full bg-gradient-to-br from-[#F16633CC] to-[#ba6b3f] relative overflow-hidden border-[10px] border-gradient-to-br ml-28"
              style={{
                borderColor: "rgba(241, 102, 51, 0.8) rgba(253, 45, 125, 0.8)",
                clipPath: "circle(50% at 50% 50%)",
              }}
            >
              <Image
                ref={imageRef}
                src={activeCategory.image}
                width={600}
                height={600}
                alt={`${activeCategory.name} image`}
                className="absolute top-0 left-1/2 -translate-x-1/2 object-cover z-50 w-full h-full rounded-full"
              />
            </div>

            <div className="absolute bottom-[-30px] left-[435px] transform -translate-x-[50%] flex flex-col items-center">
              <div
                className="w-[625px] h-[625px] relative border-[6px] border-[#ba6b3f] rounded-full border-t-transparent border-l-transparent border-r-transparent border-b-4"
                style={{ transform: "rotate(-45deg) translateX(-4px)" }}
              ></div>

              <div
                className="w-4 h-4 border-t-[4px] absolute left-[330px] -bottom-2 border-l-[4px] border-[#ba6b3f] transform -rotate-45 -mt-[6px]"
              ></div>
            </div>
            
            <div 
              ref={textRef}
              className="absolute z-50  top-60 -left-20 flex flex-col "
            >
              <span className="highlight text-[35px] ml-4">
                I'm a
              </span>
              <span
                className=" text-[40px]"
              >
                {activeCategory.name}
              </span>

            </div>
          </div>
          <div className="top-40">
            <p className="max-w-96 text-wrap text-white text-xl leading-[35px]">
              <div className="text-[25px] text-center mb-6">Our Focus</div>
              <span>
                Building more <span className="highlight">Scalable, robust and smooth user Interface</span> like FinTech and dashboard solutions specializing in <span className="highlight">React.js and Next.js </span>. With expertise in <span className="highlight">TypeScript, GraphQL, and Tanstack Query</span>. I focus on delivering <span className="highlight">high-performance, responsive applications</span> tailored to streamline business operations and drive growth.
              </span>
            </p>

            <Link
              className="flex items-center gap-4 mt-4"
              href="mailto:aryanverma5084102@gmail.com" 
              previewlistener="true"
            >
              <p className="bg-gradient-to-r from-[#3bdf7f] via-[#ba6b3f] to-[#F86E42] inline-block text-transparent bg-clip-text text-2xl leading-[60px]">
                Connect with me{" "}
              </p>
            </Link>

            <div className="flex items-center gap-6 mt-2">
              <Link href="https://www.linkedin.com/in/aryan5084102/" target="_blank" className="text-white hover:text-[#ba6b3f] transition-colors">
                <LinkedInIcon className="text-4xl" />
              </Link>
              
              <Link href="https://github.com/Aryan5084102" target="_blank" className="text-white hover:text-[#ba6b3f] transition-colors">
                <GitHubIcon className="text-4xl" />
              </Link>

              <Link href="https://x.com/aryan5084102" target="_blank" className="text-white hover:text-[#ba6b3f] transition-colors">
                <XIcon className="text-2xl" />
              </Link>
            </div>
          </div>
    </div>
  );
};

export default HeroSection;