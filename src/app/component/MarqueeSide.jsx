import React from 'react'

const MarqueeSide = ({ rotation, position }) => {
    const items = ["FRONTEND DEVELOPER", "REACT DEVELOPER", "FRONTEND DEVELOPER", "REACT DEVELOPER", "FRONTEND DEVELOPER", "REACT DEVELOPER", "FRONTEND DEVELOPER", "REACT DEVELOPER"];

    return (
        <div className={`relative w-full overflow-hidden col-span-2`}>
            <div className={`absolute w-full rotate-[${rotation}deg] ${position}`}>
                <div
                    className="flex animate-marquee flex-row gap-4 backdrop-blur-2xl bg-gradient-to-b from-transparent via-[#ffffff15] to-transparent border-2 border-black py-2 w-full min-w-[200rem]"
                    style={{ animation: 'marquee 50s linear infinite' }}
                >
                    {items.map((text, i) => (
                        <React.Fragment key={i}>
                            <p className="w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px] text-white">
                                {text}
                            </p>
                            <div className="min-w-[4rem] flex items-center">
                                <svg width={36} height={36} viewBox="0 0 36 36" fill="none">
                                    <path d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z" fill="white" fillOpacity="0.8" />
                                </svg>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default MarqueeSide;