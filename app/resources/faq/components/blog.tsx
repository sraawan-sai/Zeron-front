'use client';

import { motion } from 'framer-motion';

const resources = [
  {
    id: 1,
    image: '/images/case-studies/case.jpg',
    tag: 'NEWS',
    date: '26 JANUARY 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
  },
  {
    id: 2,
    image: '/images/case-studies/case.jpg',
    tag: 'NEWS',
    date: '26 JANUARY 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
  },
  {
    id: 3,
    image: '/images/case-studies/case.jpg',
    tag: 'NEWS',
    date: '26 JANUARY 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
  },
];

export default function ResourcesSection() {
  return (
    <section className="w-full bg-[#0A0118] py-16 px-4 md:px-10 lg:px-20 flex flex-col items-center gap-12 overflow-hidden">
      {/* Heading with animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[900px] text-center px-2"
      >
        <h2 className="text-white text-3xl md:text-[48px] leading-[52px] font-normal tracking-[-1px]">
          Resources to fuel <br className="hidden md:block" /> your attack surface security strategy
        </h2>
      </motion.div>

      {/* Cards with staggered fade-up animation */}
      <div className="w-full max-w-[1140px] flex flex-wrap justify-center gap-x-6 gap-y-11">
        {resources.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full sm:w-[364px] h-[402px] flex flex-col p-6 gap-7 border border-white/35 rounded-xl"
          >
            <div
              className="w-full h-[250px] rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="flex flex-col gap-3">
              {/* Tag + Date */}
              <div className="flex items-center gap-2">
                <span className="text-[#0F6CBD] text-[10px] font-medium uppercase tracking-[-0.03em]">
                  {item.tag}
                </span>
                <div className="w-[4px] h-[4px] bg-white rounded-full" />
                <span className="text-white/60 text-[10px] font-medium uppercase tracking-[-0.03em]">
                  {item.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white text-[22px] font-poppins font-normal leading-[130%] tracking-[-0.02em]">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Learn More Link with animation */}
      <motion.a
        href="#"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="group relative flex items-center gap-2 text-white text-[16px] font-medium"
      >
        <span className="underline-offset-2 group-hover:underline">Learn more</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.a>
    </section>
  );
}
