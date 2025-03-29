"use client";

import "@/styles/stars.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GradientButton from "@/components/Buttons/GradientButton";
import Image from "next/image";
import StarsCanvas from "@/components/Layout/Stars";

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
      <motion.div className="absolute scale-150 md:scale-100 -bottom-40 md:-bottom-68 left-0 w-full flex items-center justify-center">
        <Image
          src="/images/products/vendor/DNA.svg"
          alt=""
          width={874}
          height={500}
          className="mix-blend-soft-light"
        />
      </motion.div>
      {/* Background Stars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute w-full h-full -z-20"
      >
        <div className="w-full h-full inset-0 absolute">
          <Image
            src="/images/vendorherobg.png"
            alt=""
            fill={true}
            className="object-cover object-center -z-2"
          />
        </div>
        <section className="relative -z-1">
          <StarsCanvas />
        </section>
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
            Zeron | Vendor Pulse
          </p>
          <p
            className={`font-medium text-[#E4E2DF] text-[1rem] md:text-[1.125rem] leading-[20px] md:leading-[24px]`}
          >
            QPrecision in Third-Party Risk Management
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
            With QBER, cybersecurity is no longer a guessing game. It’s a
            science-backed, context-driven approach to understanding and
            mitigating risks.
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
        <motion.div
          style={{
            transform: `translate(${mousePosition.x * 3}px, ${
              mousePosition.y * 3
            }px)`,
          }}
          className="absolute bottom-20 w-full left-0 flex items-center justify-center mix-blend-soft-light"
        >
          <Image
            src="/images/products/vendor/VendorPulse.svg"
            alt=""
            width={340}
            height={150}
            className="mix-blend-soft-light"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
