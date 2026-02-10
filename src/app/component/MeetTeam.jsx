"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const MeetTeam = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const teamData = {
        title: "Meet Our Starclinch Squads",
        membersCount: 5,
        role: "Design Dynamos",
        description:
            "The artists behind the visuals. These design superheroes bring ideas to life, painting our projects with creativity and imagination.",
        applyLink: "#",
        members: [
            {
                name: "Member",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            },
            {
                name: "Member 1",
                image:
                    "https://i.pinimg.com/736x/7c/30/2c/7c302cc9df9a62950283fd6d10ec6a3a.jpg",
            },
            {
                name: "Member 2",
                image:
                    "https://i.pinimg.com/736x/d1/02/4d/d1024d3d776d6d80d73a9b5d6d55a3c8.jpg",
            },
            {
                name: "Member 3",
                image:
                    "https://www.vice.com/wp-content/uploads/sites/2/2021/09/1632479276472-tasting-the-unbridled-delights-of-the-milkshake-maggi.jpeg",
            },
            {
                name: "Member 4",
                image:
                    "https://www.vice.com/wp-content/uploads/sites/2/2021/09/1632479276472-tasting-the-unbridled-delights-of-the-milkshake-maggi.jpeg",
            },
        ],
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + teamData.members.length) % teamData.members.length
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.members.length);
    };

    return (
        <div className="relative h-screen w-full flex flex-col items-center mt-4">
            <p className="text-white text-[64px] font-[300] leading-tight  text-center px-24 lg:text-[40px] xl:text-[50px] xxl:text-[64px]">{teamData.title}</p>
            <div className="flex justify-center items-center overflow-hidden">
                <div className="absolute top-52 left-1/2 z-0 opacity-25 transform -translate-x-1/2 w-[85%] h-[1200px]">
                    <div
                        className="w-full h-full border-t border-2 border-blue-200"
                        style={{
                            borderRadius: "50%",
                            clipPath: "ellipse(100% 50% at 50% 0%)",
                            overflow: "hidden",
                        }}
                    ></div>
                </div>

                <div className="absolute top-[100px] flex flex-col items-center text-center">
                    <div className="relative">
                        {teamData.members[currentIndex] && (
                            <div className="w-56 h-56 rounded-3xl overflow-hidden border border-gray-700">
                                <Image
                                    src={teamData.members[currentIndex].image}
                                    alt={teamData.members[currentIndex].name}
                                    width={350}
                                    height={350}
                                    className="object-cover z-10"
                                />
                            </div>
                        )}

                        <div className="absolute top-[190px] -left-[400px] bg-black w-44 h-44 rounded-full overflow-hidden border border-gray-700">
                            <Image
                                src={
                                    teamData.members[
                                        (currentIndex - 1 + teamData.members.length) %
                                            teamData.members.length
                                    ]?.image
                                }
                                alt="Adjacent Member"
                                width={300}
                                height={300}
                                className="object-cover z-50 opacity-30"
                            />
                        </div>

                        <div className="absolute top-[190px] -right-[400px] w-44 h-44 bg-black rounded-full overflow-hidden border border-gray-700">
                            <Image
                                src={
                                    teamData.members[
                                        (currentIndex + 1) % teamData.members.length
                                    ]?.image
                                }
                                alt="Adjacent Member"
                                width={300}
                                height={300}
                                className="object-cover z-50 opacity-30"
                            />
                        </div>

                        <div className="absolute top-[480px] -left-[560px] w-44 h-44 bg-black rounded-full overflow-hidden border border-gray-700">
                            <Image
                                src={
                                    teamData.members[
                                        (currentIndex + 1) % teamData.members.length
                                    ]?.image
                                }
                                alt="Adjacent Member"
                                width={300}
                                height={300}
                                className="object-cover z-50 opacity-30"
                            />
                        </div>

                        <div className="absolute top-[480px] -right-[560px] w-44 h-44 bg-black rounded-full overflow-hidden border border-gray-700">
                            <Image
                                src={
                                    teamData.members[
                                        (currentIndex + 1) % teamData.members.length
                                    ]?.image
                                }
                                alt="Adjacent Member"
                                width={300}
                                height={300}
                                className="object-cover z-50 opacity-30"
                            />
                        </div>

                        <div className="absolute top-1/2 -left-[70px] transform -translate-y-1/2">
                            <button
                                onClick={handlePrev}
                                className="flex justify-center items-center w-10 h-10 rounded-full bg-[#1f1f25] text-gray-300 hover:text-white hover:bg-gray-800"
                            >
                                <FaArrowLeft size={15} />
                            </button>
                        </div>

                        <div className="absolute top-1/2 -right-[70px] transform -translate-y-1/2">
                            <button
                                onClick={handleNext}
                                className="flex justify-center items-center w-10 h-10 rounded-full bg-[#1f1f25] text-gray-300 hover:text-white hover:bg-gray-800"
                            >
                                <FaArrowRight size={15} />
                            </button>
                        </div>
                    </div>

                    <div className="mt-20 bg-gradient-to-b from-[#3bdf7f] to-black text-white px-6 py-2 rounded-full text-xl font-medium">
                        {teamData.membersCount} Members
                    </div>

                    <h2 className="text-white text-4xl font-medium mt-8">{teamData.role}</h2>
                    <p className="text-gray-400 text-xl mt-4 px-4 max-w-xl">
                        {teamData.description}
                    </p>
                    <a
                        href={teamData.applyLink}
                        className="mt-6 text-xl text-[#3bdf7f] hover:text-[#3bdf7f] flex items-center justify-center"
                    >
                        Our design team is growing. Apply Now &nbsp;{" "}
                        <MdOutlineKeyboardDoubleArrowRight className="text-gray-400 text-3xl" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MeetTeam;
