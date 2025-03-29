"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

const EmpowerAnimation = () => {
  return (
    <div className="relative w-full h-full">
      <DotLottieReact
        src="/animation/zinai.json"
        autoplay
        loop
        className="w-full h-full"
      />

      {/* Left Image with 10px outward gap */}
      <div className="absolute bottom-0 left-0 translate-x-[-20px]">
        <Image
          src="/images/SemiLeft.svg"
          alt=""
          width={280}
          height={350}
          className="w-full h-full max-w-[150px] max-h-[300px] md:max-w-full md:max-h-full"
        />
      </div>

      {/* Right Image with 10px outward gap */}
      <div className="absolute bottom-0 right-0 translate-x-[20px]">
        <Image
          src="/images/SemiLeft.svg"
          alt=""
          width={280}
          height={350}
          className="transform scale-x-[-1] w-full h-full max-w-[150px] max-h-[300px] md:max-w-full md:max-h-full"
        />
      </div>
    </div>
  );
};

export default EmpowerAnimation;
