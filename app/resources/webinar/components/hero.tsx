"use client";

import React from "react";
import GradientButton from "@/components/Buttons/GradientButton";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      className="relative w-[1440px] h-[614px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/webinar/webinarbg.png')" }} // Replace with your image
    >
      {/* Left Text Block */}
      <div className="absolute w-[608px] h-[325px] left-[111px] top-[calc(52%-162.5px+50px)] flex flex-col justify-center items-start gap-[6px] p-0">
        {/* Tagline & Date */}
        <div className="flex items-center gap-[9.2px] w-[291px] h-[17px]">
  <span className="text-[#4285F4] font-poppins font-medium text-[13.8px] leading-[120%] tracking-[-0.03em] capitalize">
    Upcoming
  </span>

  <span className="w-[4.6px] h-[4.6px] rounded-full bg-white" />

  <span className="text-white font-poppins font-medium text-[13.8px] leading-[120%] tracking-[-0.03em] capitalize">
    04 PM IST
  </span>

  <span className="w-[4.6px] h-[4.6px] rounded-full bg-white" />

  <span className="text-white font-poppins font-medium text-[13.8px] leading-[120%] tracking-[-0.03em] capitalize">
    26 January 2026
  </span>
</div>


        {/* H1 */}
        <h1
  className="text-white font-[500] text-[46px] leading-[66px] tracking-[-0.0625rem] font-poppins align-middle"
>
  Lorem Ipsum is simply<br /> dummy text <span className="text-white">.</span>
</h1>


        {/* Paragraph */}
        <p className="text-[#C1C1C1] text-[18px] leading-[26px] font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting<br />
          industry. Lorem Ipsum has been the industry's standard dummy<br />
          text ever since the 1500s
        </p>

        {/* Button */}
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
  className="mt-10 z-10"
>
<GradientButton
  text={
    <span className="flex items-center gap-[10px]">
      <span className="text-white  text-[16px] leading-[px] font-medium tracking-[-0.32px]">
        Register
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="transform rotate-0"
      >
        <path
          d="M5 12H19M12 5L19 12L12 19"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  }
  href="/"
  className="w-[144px] h-[56px] px-[24px]  rounded-[8px] bg-gradient-to-r from-[#1C76FD] to-[#5721F0]"
/>

</motion.div>

      </div>

      {/* Right Image */}
      <div className="absolute right-[40px] top-[50%] -translate-y-1/2">
        <img
          src="/images/webinar/webinarhero.png"
          alt="Visual"
          className="h-[550px] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
