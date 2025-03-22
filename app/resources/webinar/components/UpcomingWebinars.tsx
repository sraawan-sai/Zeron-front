'use client';

import React from 'react';
import Image from 'next/image';

const webinarData = [
  {
    id: 1,
    date: '26 January 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/images/lineargradientbg.png', // Replace with actual path
  },
  {
    id: 2,
    date: '26 January 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/images/lineargradientbg.png',
  },
  {
    id: 3,
    date: '26 January 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/images/lineargradientbg.png',
  },
];

const UpcomingWebinars = () => {
  return (
    <section className="w-full bg-[#0A0118] py-[100px] px-[10px] flex justify-center">
      <div className="w-[1140px] flex flex-col items-center gap-[50px]">
        {/* Header */}
        <div className="w-full flex justify-between items-center">
          <h2 className="text-white text-[32px] leading-[42px] font-normal font-poppins tracking-[-0.02em]">
            Upcoming Webinars
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap gap-x-[24px] gap-y-[44px]">
          {webinarData.map((item) => (
            <div
              key={item.id}
              className="w-[364px] h-[557px] flex flex-col p-[22px_16px] gap-[28px] border border-white/[0.35] rounded-[12px]"
            >
              {/* Image */}
              <div className="relative w-[332px] h-[250px] rounded-[8px] overflow-hidden">
                <Image
                  src={item.image}
                  alt="Webinar"
                  fill
                  className="object-cover rounded-[8px]"
                />
              </div>

              {/* Content */}
              <div className="w-[332px] h-[235px] flex flex-col gap-[10px]">
                {/* Meta */}
                <div className="flex items-center gap-[8px] h-[12px]">
                  <span className="text-[#0F6CBD] font-inter text-[10px] font-medium leading-[120%] tracking-[-0.03em] uppercase">
                    News
                  </span>
                  <div className="w-[4px] h-[4px] bg-white rounded-full" />
                  <span className="text-white/60 font-inter text-[10px] font-medium leading-[120%] tracking-[-0.03em] uppercase">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-poppins text-[22px] leading-[130%] tracking-[-0.02em] font-normal">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 font-inter text-[18px] leading-[160%] tracking-[-0.02em] text-justify">
                  {item.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingWebinars;
