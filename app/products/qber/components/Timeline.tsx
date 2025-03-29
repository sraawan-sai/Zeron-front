"use client";

import "@/styles/stars.css";

// import BlueStars from "@/components/Layout/BlueStars";
import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Industry",
    description: "Sector-specific risk exposure and regulatory requirements",
    icon: "/images/timeline/industry.svg",
  },
  {
    title: "Market Cap",
    description: "Financial impact based on organizational scale",
    icon: "/images/timeline/market.svg",
  },
  {
    title: "Solutions",
    description: "Security frameworks and technologies in place",
    icon: "/images/timeline/solutions.svg",
  },
  {
    title: "Line of Business",
    description: "Core operations and business continuity risks",
    icon: "/images/timeline/lob.svg",
  },
  {
    title: "Locations",
    description: "Geographic risk variations and compliance needs",
    icon: "/images/timeline/locations.svg",
  },
  {
    title: "Regulations",
    description: "Industry compliance mandates and legal exposure",
    icon: "/images/timeline/regulations.svg",
  },
  {
    title: "",
    description: "",
    icon: "/images/Worm.png",
    isFinal: true,
  },
];

const cards = [
  {
    title: "Prioritize cybersecurity investments",
    description: "Focus resources where they matter most to minimize risk.",
    icon: "/images/cyberrisk.svg",
  },
  {
    title: "Align security strategy with business objectives",
    description: "Strengthen resilience while driving business growth.",
    icon: "/images/holisticrisk.svg",
  },
  {
    title: " Reduce uncertainty with data-backed decision-making",
    description: "Gain clarity with quantifiable risk insights.",
    icon: "/images/proactiverisk.svg",
  },
];

const Timeline = () => {
  const [isInView, setIsInView] = useState(false);
  const finalElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // When the element is in view, trigger the animation
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    if (finalElementRef.current) {
      observer.observe(finalElementRef.current);
    }

    return () => {
      if (finalElementRef.current) {
        observer.unobserve(finalElementRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center py-20">
      <CustomSection className="flex-col md:items-center">
        <p className="text-[3rem] leading-[66px] tracking-[-1px] font-medium max-w-[950px] text-center">
          Mapping the Cyber Universe to Quantify Risk with Precision
        </p>

        {/* Timeline Grid */}
        <div className="mt-16 grid grid-cols-[3px_1fr] md:grid-cols-[1fr_3px_1fr] relative pl-6">
          {timelineData.map((item, index) => (
            <React.Fragment key={index}>
              {item.isFinal ? (
                <motion.div
                  ref={finalElementRef}
                  className="col-span-2 md:col-span-3 flex justify-center items-center relative h-[400px]"
                >
                  <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-[#5BB0FF] h-[250px]"></div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale: isInView ? 1 : 0,
                      transition: { duration: 1, ease: "easeOut" },
                    }}
                    className="h-full flex justify-center items-center"
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={800}
                      height={700}
                      priority
                      className="w-full max-w-[700px] h-full object-fill md:object-cover object-center"
                    />
                  </motion.div>
                </motion.div>
              ) : (
                <>
                  {/* Left Column - Alternating Text */}
                  {index % 2 !== 0 ? (
                    <div className="hidden md:flex pb-12 px-10 text-right flex-col gap-1">
                      <p className="font-semibold leading-[130%] tracking-[-2%]">
                        {item.title}
                      </p>
                      <p className="text-[#E4E2DF]/75 text-[0.875rem] leading-[18px]">
                        {item.description}
                      </p>
                    </div>
                  ) : (
                    <div className="hidden md:block pb-12 px-10"></div>
                  )}

                  {/* Center Column - Icons */}
                  <div className="relative bg-[#5BB0FF]">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <div className="relative flex w-16 h-16">
                        <Image
                          src={item.icon}
                          alt=""
                          width={32}
                          height={32}
                          priority={index === 0}
                          className="w-16 h-16"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Alternating Text */}
                  <div className="pb-12 px-10 flex flex-col gap-1 md:hidden">
                    <p className="font-semibold leading-[130%] tracking-[-2%]">
                      {item.title}
                    </p>
                    <p className="text-[#E4E2DF]/75 text-[0.875rem] leading-[18px]">
                      {item.description}
                    </p>
                  </div>

                  {index % 2 === 0 ? (
                    <div className="hidden md:flex pb-12 px-10 flex-col">
                      <p className="font-semibold leading-[130%] tracking-[-2%]">
                        {item.title}
                      </p>
                      <p className="text-[#E4E2DF]/75 text-[0.875rem] leading-[18px]">
                        {item.description}
                      </p>
                    </div>
                  ) : (
                    <div className="hidden md:block pb-12 px-10"></div>
                  )}
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="w-full flex items-center justify-center pt-25 pb-30 relative overflow-clip">
          <div className="absolute w-[100vw] min-h-screen top-0 clip-trap  bg-gradient-to-t from-[#0A0118] to-[#0A0118]/40 -z-1" />
          <div className="absolute w-[100vw] min-h-screen top-0 clip-trap -z-2">
            <section className="relative">
              {/* <BlueStars /> */}
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
            </section>
          </div>
          <div className="absolute bottom-0 w-full">
            <Image
              src="/images/bottombg.png"
              alt=""
              width={2560}
              height={400}
              className="object-cover object-center max-h-[400px] w-full opacity-70"
            />
          </div>
          <CustomSection className="items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="w-full max-w-[420px] flex flex-col items-center text-center px-4 py-8.5 gap-6 bg-white/10 rounded-lg backdrop-blur-xl shadow-lg"
                >
                  <div className="w-24 h-24 flex justify-center items-center rounded-full shadow-md">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <h3 className="text-white text-2xl font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-gray-200 text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </CustomSection>
        </div>
      </CustomSection>
    </div>
  );
};

export default Timeline;
