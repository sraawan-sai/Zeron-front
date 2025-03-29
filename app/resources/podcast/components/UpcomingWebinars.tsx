'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const webinarData = [
  {
    id: 1,
    date: '26 January 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/images/lineargradientbg.png',
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
    <section className="w-full bg-[#0A0118] py-[100px] px-4 sm:px-6 md:px-10 lg:px-[100px] flex justify-center">
      <div className="w-full max-w-[1140px] flex flex-col items-center gap-[50px]">
        {/* Header */}
        <div className="w-full flex justify-between items-center">
          <h2 className="text-white text-[26px] sm:text-[28px] md:text-[32px] leading-[1.3] font-normal font-poppins tracking-[-0.02em]">
            Upcoming Webinars
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[24px] gap-y-[44px] w-full justify-items-center">
          {webinarData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="w-full max-w-[364px] h-auto flex flex-col px-4 py-6 gap-[28px] border border-white/[0.35] rounded-[12px]"
            >
              {/* Image */}
              <div className="relative w-full h-[250px] rounded-[8px] overflow-hidden">
                <Image
                  src={item.image}
                  alt="Webinar"
                  fill
                  className="object-cover rounded-[8px]"
                />
              </div>

              {/* Content */}
              <div className="w-full flex flex-col gap-[10px]">
                {/* Meta */}
                <div className="flex items-center gap-[8px] h-[12px]">
                  <span className="text-[#0F6CBD]  text-[10px] font-medium leading-[120%] tracking-[-0.03em] uppercase">
                    News
                  </span>
                  <div className="w-[4px] h-[4px] bg-white rounded-full" />
                  <span className="text-white/60  text-[10px] font-medium leading-[120%] tracking-[-0.03em] uppercase">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-poppins text-[18px] sm:text-[20px] md:text-[22px] leading-[130%] tracking-[-0.02em] font-normal">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/60  text-[16px] sm:text-[17px] md:text-[18px] leading-[160%] tracking-[-0.02em] text-justify">
                  {item.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingWebinars;
