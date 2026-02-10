"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { gsap } from "gsap";

const HeroSection = () => {
  const categories = [
    {
      name: "Frontend Developer",
      image:
        "https://i.pinimg.com/736x/7c/30/2c/7c302cc9df9a62950283fd6d10ec6a3a.jpg",
    },
    {
      name: "React Developer",
      image:
        "https://i.pinimg.com/736x/d1/02/4d/d1024d3d776d6d80d73a9b5d6d55a3c8.jpg",
    },
    {
      name: "Comedians",
      image:
        "https://www.sydneyoperahouse.com/sites/default/files/collaborodam_assets/EventName_16x9_Inline.jpg",
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

  const activeCategory = categories[currentIndex];

  return (
    <div onClick={handleNextCategory} className="relative flex flex-col gap-10 justify-center items-center">
      <section>
        <section className="max-w-screen-xl mt-40 text-white space-x-28 flex justify-around items-center">
          <div className="flex justify-center items-center sticky top-36">
            <div
              className="w-[610px] h-[610px] rounded-full bg-gradient-to-br from-[#F16633CC] to-[#FD2D7DCC] relative overflow-hidden border-[10px] border-gradient-to-br ml-28"
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
                className="w-[625px] h-[625px] relative border-[6px] border-[#D17E17] rounded-full border-t-transparent border-l-transparent border-r-transparent border-b-4"
                style={{ transform: "rotate(-45deg) translateX(-4px)" }}
              ></div>

              <div
                className="w-4 h-4 border-t-[4px] absolute left-[330px] -bottom-2 border-l-[4px] border-[#D17E17] transform -rotate-45 -mt-[6px]"
              ></div>
            </div>

            <span
              ref={textRef}
              className="absolute z-50 top-60 text-[75px] -left-20 cursor-pointer"
              onClick={handleNextCategory}
            >
              {activeCategory.name}
            </span>
          </div>
          <div className="top-40">
            <p className="max-w-60 text-wrap text-white text-5xl leading-[60px]">
              <span className="text-[#6c6c71]">Choose from</span> 100+ Categories
            </p>
            <Link
              className="flex items-center gap-4 mt-4"
              href="/browse"
              previewlistener="true"
            >
              <p className="bg-gradient-to-r from-[#ba708d] via-[#FF8DB9] to-[#F86E42] inline-block text-transparent bg-clip-text text-2xl leading-[105px]">
                Explore all categories{" "}
                <TrendingFlatIcon className="text-3xl text-[#ba708d] ml-3" />
              </p>
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HeroSection;
