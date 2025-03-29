'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/images/case-studies/case.jpg',
    tag: 'CASE STUDY',
    link: '/case-studies/first',
  },
  {
    id: 2,
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/images/case-studies/case.jpg',
    tag: 'CASE STUDY',
    link: '/case-studies/second',
  },
  {
    id: 3,
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/images/case-studies/case.jpg',
    tag: 'CASE STUDY',
    link: '/case-studies/third',
  },
  {
    id: 4,
    title: 'Fourth Study Title',
    description: 'Additional case study description here.',
    image: '/images/case-studies/case.jpg',
    tag: 'CASE STUDY',
    link: '/case-studies/fourth',
  },
  {
    id: 5,
    title: 'Fifth Study Title',
    description: 'More dummy data for testing load more functionality.',
    image: '/images/case-studies/case.jpg',
    tag: 'CASE STUDY',
    link: '/case-studies/fifth',
  },
  {
    id: 6,
    title: 'Sixth Study Title',
    description: 'Another case study to demonstrate the load more button.',
    image: '/images/case-studies/case.jpg',
    tag: 'CASE STUDY',
    link: '/case-studies/sixth',
  },
];

export default function CaseStudies() {
  const [visibleItems, setVisibleItems] = useState(3);

  return (
    <section className="w-full bg-[#0A0118] py-24 px-4 md:px-10 lg:px-36 flex flex-col items-center gap-10 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-[1140px] flex justify-between items-center mb-12"
      >
        <h2 className="text-white text-3xl md:text-4xl font-normal tracking-[-0.02em] leading-[130%]">
          Case Studies
        </h2>
        <div className="opacity-0 w-[351px] h-[42px] bg-[#0088FF1A] border border-white/25 rounded-md" />
      </motion.div>

      {/* Cards */}
      <div className="w-full max-w-[1140px] flex flex-wrap gap-x-6 gap-y-11 justify-start items-stretch">
        {caseStudies.slice(0, visibleItems).map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full sm:w-[364px] flex flex-col p-6 gap-7 border border-white/35 rounded-xl min-h-[637px]"
          >
            <div
              className="w-full h-[250px] rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${study.image})` }}
            />
            <div className="flex flex-col gap-3 flex-grow">
              <span className="text-[#0F6CBD] text-[10px] font-medium tracking-[-0.03em] uppercase">
                {study.tag}
              </span>
              <h3 className="text-white font-poppins text-[22px] font-normal leading-[130%] tracking-[-0.02em]">
                {study.title}
              </h3>
              <p className="text-white/60 text-[18px] leading-[160%] text-justify tracking-[-0.02em]">
                {study.description}
              </p>
              <div className="flex-grow" />
              <a
                href={study.link}
                className="group relative inline-flex items-center justify-between w-[165px] h-[56px] px-6 py-4 text-white text-[16px] font-light rounded-lg bg-black overflow-hidden mt-4"
              >
                <span className="relative z-10 tracking-[-0.02em]">Learn more</span>
                <svg
                  className="relative z-10 w-[20px] h-[20px] stroke-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
                <span
                  className="absolute inset-0 rounded-lg p-[1px] transition-transform duration-500 ease-out group-hover:scale-110"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, #1C76FD 0%, #4738F4 43%, #5721F0 65%, #5721F0 93%)',
                  }}
                />
                <span className="absolute inset-0 m-[1px] bg-black rounded-lg pointer-events-none" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleItems < caseStudies.length && (
        <motion.button
          onClick={() => setVisibleItems((prev) => prev + 3)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group relative w-[127px] h-[48px] px-6 py-4 text-white text-sm 
            flex items-center justify-center gap-[10px] rounded-lg bg-black overflow-hidden"
        >
          <span className="relative z-10">Load More</span>
          <span
            className="absolute inset-0 rounded-lg p-[1px] transition-transform duration-500 ease-out group-hover:scale-110"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #1C76FD 0%, #4738F4 43%, #5721F0 65%, #5721F0 93%)',
            }}
          />
          <span className="absolute inset-0 m-[1px] bg-black rounded-lg pointer-events-none" />
        </motion.button>
      )}
    </section>
  );
}
