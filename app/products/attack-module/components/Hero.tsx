"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GradientButton from "@/components/Buttons/GradientButton";
import StarsCanvas from "@/components/Layout/Stars";
import Galaxy from "@/components/SVG/Galaxy";
const Hero = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const maxScroll = 500;
      const maxExtraScale = 0.5;
      const newScale = 1 + Math.min(scrollY / maxScroll, maxExtraScale);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Background Stars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute w-full h-full -z-20"
      >
        <section className="relative">
          <StarsCanvas />
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: scale }}
        transition={{
          opacity: { duration: 1, ease: "easeOut" },
          y: { duration: 1, ease: "easeOut" },
          scale: { duration: 0 },
        }}
        className="absolute -bottom-[610px] w-full flex items-center justify-center"
      >
        <Galaxy />
      </motion.div>
      {/* Main Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center pt-20 xs:pt-30 md:pt-20 px-4 lg:px-0"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center text-center mt-4"
        >
          <p className="text-[2rem] xs:text-[2.375rem] md:text-[3rem] lg:text-[5rem] leading-[2.5rem] md:leading-[3.5rem] lg:leading-[5rem] tracking-[-2px] pt-20">
            Zeron | Attack Surface
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-[750px] text-center"
        >
          <p
            className={`text-[1rem] md:text-[1.125rem] leading-[20px] md:leading-[24px]`}
          >
            Uncover your external attack surface and gain actionable insights to
            strengthen your security posture.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mt-10 z-1"
        >
          <GradientButton
            text="Request a Demo"
            href="/"
            className="px-5 py-2 text-[1rem] font-medium rounded-md cursor-pointer bg-linear-to-r from-[#1C76FD] to-[#5721F0]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
