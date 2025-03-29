"use client";

import React, { useState } from "react";
import CustomSection from "@/components/Layout/CustomSection";
import InternalRiskCircle from "../../../../components/SVG/InternalRiskCircle";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { riskGroups } from "@/public/data/InternalRIskData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const contentVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

const InternalRisk = () => {
  const [activeRiskIndex, setActiveRiskIndex] = useState(0);

  const handlePrevious = () => {
    setActiveRiskIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setActiveRiskIndex((prevIndex) => prevIndex + 1);
  };

  const displayedRiskIndex =
    ((activeRiskIndex % riskGroups.length) + riskGroups.length) %
    riskGroups.length;
  const activeRisk = riskGroups[displayedRiskIndex];

  const handleSegmentClick = (desired: number) => {
    setActiveRiskIndex((current) => {
      const r = ((current % 4) + 4) % 4;
      const candidate = current - r + desired;
      const diff1 = Math.abs(candidate - current);
      const diff2 = Math.abs(candidate + 4 - current);
      const diff3 = Math.abs(candidate - 4 - current);
      if (diff2 < diff1 && diff2 <= diff3) return candidate + 4;
      if (diff3 < diff1 && diff3 < diff2) return candidate - 4;
      return candidate;
    });
  };

  return (
    <div className="relative w-full flex min-h-screen bg-[url('/images/crpmfeature.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="hidden lg:block absolute top-1/2 left-[-600px] transform -translate-y-1/2">
        <InternalRiskCircle
          activeRiskIndex={activeRiskIndex}
          mainTitle={activeRisk.circleTitle}
          onSegmentClick={handleSegmentClick}
        />
      </div>
      <CustomSection>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[1fr_3fr] py-32">
          <div className=""></div>
          <div className="w-full flex flex-col items-center justify-center">
            <p className="font-medium text-[1.5rem] leading-[52px] tracking-[-1px]">
              Internal Risk | Zeron Defense
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRisk.mainTitle}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentVariants}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col items-center"
              >
                <p className="mt-8 text-[3rem] leading-[52px] tracking-[-1px] text-center max-w-[700px]">
                  {activeRisk.mainTitle}
                </p>
                {/* <p className="mt-2 text-[#E4E2DF]/70 text-[1.25rem] leading-[24px] max-w-[1000px] text-center">
                  {activeRisk.subTitle}
                </p> */}
                <p className="mt-2 text-[#E4E2DF]/70 text-[1.25rem] leading-[24px] max-w-[1000px] text-center">
                  {activeRisk.description}
                </p>
                <motion.div
                  className="mt-11 w-full max-w-[650px] flex flex-col gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {activeRisk.list.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-6"
                      variants={itemVariant}
                    >
                      <div>
                        <Image
                          src={item.icon}
                          alt="img"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="font-semibold text-[1.5rem]">
                          {item.title}
                        </p>
                        <p className="text-[#E4E2DF]/60">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8">
              <Link href="#" className="underline">
                Know More
              </Link>
            </div>
            <div className="mt-20 flex gap-4">
              <div
                onClick={handlePrevious}
                className="rounded-[8px] border border-[#5721F0] hover:bg-linear-to-r from-[#1C76FD] to-[#5721F0] cursor-pointer px-6 py-4 select-none"
              >
                <p className="font-medium">Previous</p>
              </div>
              <div
                onClick={handleNext}
                className="rounded-[8px] border border-[#5721F0] hover:bg-linear-to-r from-[#1C76FD] to-[#5721F0] cursor-pointer px-6 py-4 select-none"
              >
                <p className="font-medium">Next</p>
              </div>
            </div>
          </div>
        </div>
      </CustomSection>
    </div>
  );
};

export default InternalRisk;