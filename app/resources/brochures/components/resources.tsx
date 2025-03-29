'use client';
import { useState } from "react";
import { motion } from "framer-motion";

const resources = [
  {
    id: 1,
    image: "/images/brochures/1.jpg",
    category: "PRODUCT",
    title: "Lorem Ipsum is simply dummy text of the printing demi text",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    videoUrl: "https://example.com/video1",
    pdfUrl: "/pdfs/pdf.pdf"
  },
  {
    id: 2,
    image: "/images/brochures/2.jpg",
    category: "SERVICE",
    title: "Lorem Ipsum is simply dummy text of the printing demi text",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    videoUrl: "https://example.com/video2",
    pdfUrl: "/pdfs/pdf.pdf"
  },
  {
    id: 3,
    image: "/images/brochures/3.jpg",
    category: "COMPLIANCE",
    title: "Lorem Ipsum is simply dummy text of the printing demi text",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    videoUrl: "https://example.com/video3",
    pdfUrl: "/pdfs/pdf.pdf"
  },
  {
    id: 4,
    image: "/images/brochures/4.jpg",
    category: "EXTERNAL RISK",
    title: "Lorem Ipsum is simply dummy text of the printing demi text",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    videoUrl: "https://example.com/video4",
    pdfUrl: "/pdfs/pdf.pdf"
  },
];

export default function FeaturedResources() {
  const [] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#0A0118] py-24 px-4 md:px-10 lg:px-36">
      <div className="max-w-[1140px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-16"
        >
          <h2 className="text-white text-3xl sm:text-4xl font-normal leading-[130%] tracking-tight font-poppins">
            Featured Resources
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col border border-white/30 rounded-2xl p-6 gap-7"
            >
              <div
                className="w-full h-[300px] sm:h-[400px] md:h-[586px] rounded-lg bg-cover bg-center relative"
                style={{ backgroundImage: `url(${resource.image})` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-[28px] sm:text-[56px] md:text-[76px] leading-[120%] text-center font-semibold uppercase tracking-[-0.03em] mix-blend-soft-light">
                    Informed Decision Making
                  </h3>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-[12px]">
                  <span className="text-[#0F6CBD] text-[14px] sm:text-[15px] font-medium uppercase tracking-[-0.03em]">
                    DATA SHEET
                  </span>
                  <div className="w-[6px] h-[6px] bg-white rounded-full" />
                  <span className="text-white/60 text-[14px] sm:text-[15px] font-medium uppercase tracking-[-0.03em]">
                    {resource.category}
                  </span>
                </div>
                <h4 className="text-white font-poppins font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-[130%] tracking-[-0.02em] break-words">
  {resource.title}
</h4>

<p className="text-white/60 font-normal text-[16px] md:text-[18px] leading-[160%] tracking-[-0.02em] text-justify break-words">
  {resource.description}
</p>

              </div>
              <div className="pb-10 sm:pb-[10%]">
                <a
                  href={resource.pdfUrl}
                  download
                  className="group relative w-[165px] h-[56px] px-[24px] py-[16px] text-white text-[16px] font-light 
                    flex items-center justify-between gap-[28px] rounded-lg bg-black overflow-hidden"
                >
                  <span className="relative z-10 tracking-[-0.02em]">Download</span>
                  <svg
                    className="relative z-10 w-[24px] h-[24px]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 15V16.2C21 17.88 21 18.72 20.673 19.362C20.3854 19.926 19.926 20.3854 19.362 20.673C18.72 21 17.88 21 16.2 21H7.8C6.12 21 5.28 21 4.638 20.673C4.07401 20.3854 3.6146 19.926 3.327 19.362C3 18.72 3 17.88 3 16.2V15M15 10L12 13.5M12 13.5L9 10M12 13.5V3"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
      </div>
    </section>
  );
}
