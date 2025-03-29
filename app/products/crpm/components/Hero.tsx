"use client";

import "@/styles/stars.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GradientButton from "@/components/Buttons/GradientButton";
import Image from "next/image";
import StarsCanvas from "@/components/Layout/Stars";
import CRPMCircle from "@/components/SVG/CRPMCircle";
const Hero = () => {
  const [, setScale] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 100;
      const y = (e.clientY - window.innerHeight / 2) / 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
        <div className="w-full h-full inset-0 absolute">
          <Image
            src="/images/crpmhero.png"
            alt=""
            fill={true}
            className="object-cover object-center -z-2"
          />
        </div>
        <section className="relative -z-1">
          <StarsCanvas />
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 1 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute -bottom-58 xs:-bottom-48 lg:-bottom-40 2xl:-bottom-32 w-full flex items-center justify-center"
      >
        <div className="relative">
          <div
            className="hidden md:block absolute top-[30%] -left-48 -z-1 w-full max-w-[400px] h-[270px]"
            style={{
              transform: `translate(${mousePosition.x * 5}px, ${
                -mousePosition.y * 5
              }px)`,
            }}
          >
            <Image
              src="/images/DNA.png"
              alt=""
              fill={true}
              className="object-cover object-center"
            />{" "}
          </div>
          <div
            className="hidden md:block absolute top-[40%] -right-20 -z-1 w-full max-w-[300px] h-[190px] rotate-4"
            style={{
              transform: `translate(${mousePosition.x * 3}px, ${
                mousePosition.y * 3
              }px)`,
            }}
          >
            <Image
              src="/images/DNA.png"
              alt=""
              fill={true}
              className="object-cover object-center"
            />{" "}
          </div>
          <CRPMCircle />
        </div>
      </motion.div>
      {/* Main Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center pt-10 xs:pt-30 md:pt-16 lg:pt-10 px-4 lg:px-0"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-2 items-center text-center mt-4"
        >
          <p className="text-[2rem] xs:text-[2.375rem] lg:text-[3rem] leading-[2.5rem] lg:leading-[3.5rem] tracking-[-2px] pt-20">
            Zeron | Cyber Risk Posture Management
          </p>
          <p
            className={`font-medium text-[#E4E2DF] text-[1rem] md:text-[1.125rem] leading-[20px] md:leading-[24px]`}
          >
            From Complexity to Clarity—Understand, Quantify & Mitigate Cyber
            Risks
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-[850px] text-center"
        >
          <p
            className={`text-[#E4E2DF]/70 text-[1rem] md:text-[1.125rem] leading-[20px] md:leading-[24px]`}
          >
            Cyber threats are ever-evolving, but your response shouldn’t be
            reactive. Zeron’s CRPM gives you a real-time, quantified view of
            your risk posture, enabling data-driven decisions and proactive
            defense.
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
