"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import CustomSection from "@/components/Layout/CustomSection";
import { useRef } from "react";

const QberBanner = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animate the strokeDashoffset to create the tracing effect
  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="relative w-full flex items-center justify-center bg-[url('/images/foot.png')] bg-cover bg-center bg-no-repeat py-25 px-4 md:px-20">
      
      {/* Static Gray Background Beam */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-500 opacity-50" />

      <CustomSection className="flex-col items-center justify-center text-center gap-12.5">
        <p className="text-[3rem] leading-[52px] tracking-[-1px]">
          Ready to Quantify Your Cyber Risk?
        </p>
        <p className="text-[1.375rem] text-[#E4E2DF] max-w-[900px]">
          Know Your Risk | Reduce Uncertainty | Strengthen Security
          Let QBER empower your security strategy with measurable, actionable insights.
        </p>
        <div className="flex gap-4">
          <div className="border border-[#5721F0] rounded-[8px] px-4 py-3">
            Get Started
          </div>
          <div className="bg-gradient-to-r from-[#1C76FD] to-[#5721F0] rounded-[8px] px-4 py-3">
            Download Whitepaper
          </div>
        </div>
      </CustomSection>

      {/* Tracing Beam (Blue, Glowing) */}
      <svg className="absolute left-1/2 top-0 w-[2px] h-full" viewBox="0 0 2 100%">
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="100%"
          stroke="#1C76FD" // Bright Blue Tracing Line
          strokeWidth="2"
          strokeDasharray="100%"
          strokeDashoffset={strokeDashoffset}
          style={{
            filter: "drop-shadow(0px 0px 8px rgba(28, 118, 253, 1))", // Glowing effect
            opacity: 1,
          }}
        />
      </svg>

    </div>
  );
};

export default QberBanner;
