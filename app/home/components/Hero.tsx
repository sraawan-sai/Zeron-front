"use client";

import "@/styles/stars.css";

import React, { useEffect, useState } from "react";
import GradientButton from "@/components/Buttons/GradientButton";
import Circle from "@/components/circle";
import Image from "next/image";

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
    <div className="w-full min-h-screen relative -mt-26 overflow-hidden">
      {/* <Image
        src="/images/herobg.png"
        alt=""
        fill={true}
        className="object-cover object-center opacity-50 -z-10"
      /> */}
      <div className="absolute w-full h-full -z-20">
        <section className="wrapper">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </section>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div
          className="relative w-full min-h-[55vh] 2xl:min-h-[70vh] "
          style={{ transform: `scale(${scale})` }}
        >
          <Image
            src="/images/arc.png"
            alt=""
            fill={true}
            className="object-cover object-top -z-10"
          />
        </div>
      </div>
      <div className="absolute -bottom-54 w-full flex items-center justify-center">
        <Circle
          circleText="Cyber Risk Increasing"
          circleTextAmount="$12, 130"
        />
      </div>
      <div className="flex flex-col items-center pt-30 xl:pt-24">
        <div className="flex flex-col items-center text-center mt-4">
          <p
            className={`text-[clamp(2rem,5vw,5rem)] leading-[2rem] md:leading-[5rem]`}
          >
            Navigate the Cyber
          </p>
          <p
            className={`text-[clamp(2rem,5vw,5rem)] leading-[2rem] md:leading-[5rem]`}
          >
            Universe with Precision
          </p>
        </div>
        <div className="mt-4 max-w-[700px] text-center">
          <p className={``}>
            In an ever-expanding digital cosmos, Zeron is your guiding
            star—illuminating risks, automating compliance, and defending your
            organization from the unseen threats orbiting your business.
          </p>
        </div>
        <div className="mt-10 z-1">
          <GradientButton
            text="Request a Demo"
            href="/"
            className="px-5 py-2 text-[1rem] font-medium rounded-md cursor-pointer bg-gradient-to-r from-[#1C76FD] to-[#5721F0]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
