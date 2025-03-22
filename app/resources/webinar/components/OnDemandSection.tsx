'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { createPortal } from 'react-dom';

const onDemandData = [
  {
    id: 1,
    date: '26 January 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    image: '/images/webinar/1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 2,
    date: '26 January 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    image: '/images/webinar/2.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=tgbNymZ7vqY',
  },
  {
    id: 3,
    date: '26 January 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    image: '/images/ondemand3.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
  {
    id: 4,
    date: '26 January 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    image: '/images/ondemand4.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
  },
];

const OnDemandSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#0A0118] py-[100px] px-4 flex justify-center">
      <div className="max-w-[1140px] w-full flex flex-col items-center gap-[70px]">
        {/* Header Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-white text-[32px] leading-[42px] font-normal font-poppins tracking-[-0.02em]">
            On-Demand
          </h2>
          <div className="flex items-center justify-between w-full md:w-[351px] h-[42px] px-4 bg-[rgba(0,136,255,0.1)] border border-[rgba(232,231,236,0.25)] rounded-md">
            <div className="flex items-center gap-[6px] w-full">
              <svg className="w-[16px] h-[16px] text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-white placeholder-white/70 text-sm focus:outline-none w-full"
              />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
          {onDemandData.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-col p-[16px] gap-[28px] border border-white/35 rounded-[16px]"
            >
              {/* Image */}
              <div className="relative w-full h-[250px] rounded-[8px] overflow-hidden">
                <Image
                  src={item.image}
                  alt="On-Demand Thumbnail"
                  fill
                  className="object-cover rounded-[8px]"
                />
              </div>

              {/* Content */}
              <div className="w-full flex flex-col gap-[10px]">
                {/* Meta */}
                <div className="flex items-center gap-[12px]">
                  <span className="text-[#0F6CBD] font-inter text-[15px] font-medium leading-[120%] tracking-[-0.03em] uppercase">
                    On-Demand
                  </span>
                  <div className="w-[6px] h-[6px] bg-white rounded-full" />
                  <span className="text-white/60 font-inter text-[15px] font-medium leading-[120%] tracking-[-0.03em] uppercase">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-poppins text-[26px] md:text-[32px] leading-[130%] tracking-[-0.02em] font-normal">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 font-inter text-[16px] md:text-[18px] leading-[160%] tracking-[-0.02em] text-justify">
                  {item.excerpt}
                </p>

                {/* Gradient Border Button */}
                <button
                  onClick={() => setActiveVideo(item.videoUrl)}
                  className="relative flex items-center justify-center px-6 h-[56px] w-fit rounded-[12px] bg-transparent text-white font-light text-[20px] tracking-[-0.32px] group"
                >
                  <span className="absolute inset-0 rounded-[12px] p-[2px] bg-[linear-gradient(90deg,#1C76FD_0%,#5721F0_100%)]"></span>
                  <span className="relative bg-[#0A0118] w-full h-full rounded-[10px] flex items-center justify-center gap-2">
                    Watch Now
                    <span className="text-xl transform rotate-90">→</span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <button className="relative mt-10 px-6 py-3 text-white text-[16px] font-light rounded-md overflow-hidden group z-10">
  <span className="absolute inset-0 rounded-2px p-[1px] bg-gradient-to-r from-[#1C76FD] via-[#5721F0] to-[#1C76FD] animate-gradient-border z-[-1]"></span>
  <span className="relative bg-[#0A0118] rounded-md w-full h-full flex items-center justify-center">
    Load More
  </span>
</button>

      </div>

      {/* Centered Video Modal */}
      {activeVideo && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-3xl p-4">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              <ReactPlayer url={activeVideo} controls width="100%" height="100%" className="rounded-md overflow-hidden" />
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default OnDemandSection;
