"use client"

import { useState } from 'react';
import Image from 'next/image';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PhotoVideoSlider() {
  const [activeTab, setActiveTab] = useState('photos');
  const [currentPage, setCurrentPage] = useState(1);

  const photos = [
    { id: 1, src: 'https://i.pinimg.com/736x/03/03/12/03031277782373f8b3e1b2a148e76e85.jpg', alt: 'Photo 1' },
    { id: 2, src: 'https://i.pinimg.com/736x/7c/30/2c/7c302cc9df9a62950283fd6d10ec6a3a.jpg', alt: 'Photo 2' },
    { id: 3, src: 'https://i.pinimg.com/736x/03/03/12/03031277782373f8b3e1b2a148e76e85.jpg', alt: 'Photo 3' },
    { id: 4, src: 'https://i.pinimg.com/736x/7c/30/2c/7c302cc9df9a62950283fd6d10ec6a3a.jpg', alt: 'Photo 4' },
    { id: 5, src: 'https://img.mensxp.com/media/content/2017/Sep/manish-paul-walks-into-the-airport-with-a-disney-hulk-suitcase1400-1505306335.jpg', alt: 'Photo 5' },
    { id: 6, src: 'https://www.sydneyoperahouse.com/sites/default/files/collaborodam_assets/EventName_16x9_Inline.jpg', alt: 'Photo 6' },
    { id: 7, src: 'https://img.mensxp.com/media/content/2017/Sep/manish-paul-walks-into-the-airport-with-a-disney-hulk-suitcase1400-1505306335.jpg', alt: 'Photo 7' },
    { id: 8, src: 'https://www.sydneyoperahouse.com/sites/default/files/collaborodam_assets/EventName_16x9_Inline.jpg', alt: 'Photo 8' },
  ];

  const videos = [
    { id: 1, src: 'https://i.pinimg.com/736x/7c/30/2c/7c302cc9df9a62950283fd6d10ec6a3a.jpg', alt: 'Video 1' },
    { id: 2, src: 'https://i.pinimg.com/736x/7c/30/2c/7c302cc9df9a62950283fd6d10ec6a3a.jpg', alt: 'Video 2' },
    { id: 3, src: 'https://i.pinimg.com/736x/7c/30/2c/7c302cc9df9a62950283fd6d10ec6a3a.jpg', alt: 'Video 3' },
  ];

  const itemsPerPage = 8;
  const totalPages = Math.ceil(photos.length / itemsPerPage);

  const paginatedPhotos = photos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };


  return (
    <div className="relative bg-black min-h-screen text-white">
      <div
        className="absolute top-0 left-0 w-full h-[1400px] border-t border-2 border-blue-200"
        style={{
          borderRadius: "50%",
          clipPath: "ellipse(100% 50% at 50% 0%)",
          overflow: "hidden",
        }}
      ></div>

      {/* Tabs */}
      <div className="relative z-10 flex justify-center pt-20 space-x-8">
        <button
          className={`px-10 py-3 rounded-full bg-opacity-60 backdrop-blur-lg text-xl font-thin shadow-lg ${activeTab === "photos" ? "bg-white text-black" : "bg-gray-700 text-white"
            }`}
          onClick={() => setActiveTab("photos")}
        >
          Photos
        </button>
        <button
          className={`px-10 py-3 rounded-full bg-opacity-60 backdrop-blur-lg text-xl font-thin shadow-lg ${activeTab === "videos" ? "bg-white text-black" : " bg-gray-700 text-white"
            }`}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative z-10 mt-20 px-6">
          <div className="grid grid-cols-4 grid-rows-2 gap-5">
            {activeTab === "photos" &&
              paginatedPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className={`flex justify-center items-center ${photo.id === 1 || photo.id === 3
                      ? "w-[200px] h-[200px] rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-none"
                      : "w-[200px] h-[200px] rounded-lg"
                    } bg-gray-800 overflow-hidden`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={200}
                    height={200}
                    className="object-cover shadow-2xl"
                  />
                </div>
              ))}
          </div>
          {activeTab === "photos" && (
            <div className='flex justify-center mt-3 ml-10'>
            <Stack spacing={2} className="mt-5 ">
              <Pagination
                count={totalPages}
                color="primary"
                page={currentPage}
                onChange={handlePageChange}
              />
            </Stack>
            </div>
          )}
          <div className="grid grid-cols-3 grid-rows-1 gap-x-5 gap-10">
            {activeTab === "videos" &&
              videos.map((video) => (
                <div
                  key={video.id}
                  className="flex gap-10 items-center w-[250px] h-[300px] rounded-lg bg-gray-800"
                >
                  <Image
                    src={video.src}
                    alt={video.alt}
                    width={300}
                    height={400}
                    className="object-cover"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
