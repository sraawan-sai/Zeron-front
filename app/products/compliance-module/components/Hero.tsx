"use client";

import "@/styles/stars.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GradientButton from "@/components/Buttons/GradientButton";
import Image from "next/image";
import StarsCanvas from "@/components/Layout/Stars";

const Hero = () => {
  const [, setScale] = useState(1);

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
    <div className="w-full min-h-screen relative overflow-hidden pb-12">
      {/* Background Stars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute w-full h-full -z-20"
      >
        <div
          className="w-full h-full inset-0 absolute"
          style={{
            background:
              "linear-gradient(to bottom, #050038 0%, rgba(5, 0, 56, 0.34) 13%, rgba(5, 0, 56, 0.77) 52%, #000000 100%)",
          }}
        >
          {/* <Image
            src="/images/crpmhero.png"
            alt=""
            fill={true}
            className="object-cover object-center -z-2"
          /> */}
        </div>
        <section className="relative -z-1">
          <StarsCanvas />
        </section>
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0, y: 50, scale: 1 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute -bottom-1/2 left-0 w-full h-full flex items-center justify-center"
      >
        BOTTOM STUFF``
      </motion.div> */}
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
            Zeron | Compliance
          </p>
          <p
            className={`font-medium text-[#E4E2DF] text-[1rem] md:text-[1.125rem] leading-[20px] md:leading-[24px]`}
          >
            Lorem Ipsum is simply dummy text.
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
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
        <motion.div className="relative w-full flex items-center justify-between pt-10 2xl:mt-40">
          <div className="w-full flex justify-end">
            <Image
              src="/images/CircleRings.svg"
              alt="Left"
              width={400}
              height={320}
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="relative bg-white/10 backdrop-blur-[12px] py-12 px-5 rounded-[8px]">
              <Image src="/Logo.svg" alt="ZERON" width={290} height={150} />
            </div>
          </div>
          <div className="w-full flex">
            <Image
              src="/images/CircleRings.svg"
              alt="Left"
              width={400}
              height={320}
              className="rotate-180"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center -z-1">
            <Image
              src="/images/DNA.png"
              alt=""
              width={500}
              height={300}
              className="object-center object-contain -z-1"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
