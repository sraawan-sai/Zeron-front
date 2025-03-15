import Image from "next/image";
import React from "react";

const QberFeatures = () => {
  const features = [
    {
      title: "Universal Asset Discovery",
      description:
        "Continuously scan domains, IPs, and cloud assets to uncover your full attack surface.",
      image: "/images/crpmf2.svg",
    },
    {
      title: "Intelligent Risk Prioritization",
      description:
        "AI-driven insights rank threats by severity, exploitability, and financial impact.",
      image: "/images/crpmf4.png",
    },
    {
      title: "Real-Time Threat Intelligence",
      description:
        "Get real-time alerts on newly exposed vulnerabilities and risks.",
      image: "/images/crpmf3.svg",
    },
    {
      title: "Attack Path Mapping",
      description:
        "Visualize asset connections to identify weak points and attack vectors.",
      image: "/images/crpmf5.png",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-[#0A0118] px-6 md:px-20 py-24 gap-20">
      {/* Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0A0118] via-[#0A0118] to-transparent pointer-events-none" /> */}
      <div className="absolute bottom-0 w-full">
        <Image
          src="/images/bottombg.png"
          alt=""
          width={1560}
          height={500}
          className="object-cover object-top max-h-[500px] opacity-80"
        />
      </div>

      {/* Heading */}
      <h2 className="text-white text-center text-[3rem] tracking-[-1px] leading-[52px] z-10">
        Precision-Driven Cyber Risk Quantification
      </h2>

      {/* Features */}
      <div className="grid grid-cols-2 gap-x-10 z-10 max-w-7xl w-full">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="h-full flex flex-col items-center justify-center text-center px-3 py-21 gap-4"
          >
            <div className="flex flex-col items-center gap-8">
              <Image
                src={feature.image}
                alt={feature.title}
                width={100}
                height={80}
                className="w-full max-w-[100px] h-full max-h-[80px] object-contain object-center"
              />
              <h3 className="text-white text-xl md:text-2xl font-semibold tracking-[-2%] leading-[130%]">
                {feature.title}
              </h3>
            </div>
            <div className="flex-grow max-w-[290px]">
              <p className="text-gray-400 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QberFeatures;
