import Image from "next/image";
import React from "react";

const AttackSurfaceFeatures = () => {
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
    {
      title: "Exposure & CVE Detection",
      description:
        "Detect misconfigurations, CVEs, and unprotected assets automatically.",
      image: "/images/crpmf6.png",
    },
    {
      title: "Seamless Integrations",
      description:
        "Connect with SIEM, SOAR, and security tools for unified risk management.",
      image: "/images/crpmf1.svg",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-[#0A0118] px-6 md:px-20 py-24 gap-20">
      {/* Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0A0118] via-[#0A0118] to-transparent pointer-events-none" /> */}
      <div
        className="absolute bottom-0 w-full h-full inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #0A0118 15.79%, rgba(0, 0, 0, 0) 82.87%), url('/images/bottombg.png')",
        }}
      >
        {/* <Image
          src="/images/bottombg.png"
          alt=""
          fill={true}
          className="object-cover object-center max-h-[400px]"
        /> */}
      </div>

      {/* Heading */}
      <h2 className="text-white text-center text-[3rem] tracking-[-1px] leading-[52px] z-10">
        Navigate Your Attack Surface with <br /> Precision
      </h2>

      {/* Features */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="max-w-[380px] flex flex-col items-center text-center px-2 py-8 gap-6  backdrop-blur-xl rounded-2xl shadow-lg"
          >
            {/* Icon */}
            <div className="w-20 h-20 flex justify-center items-center">
              <Image
                src={feature.image}
                alt={feature.title}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Title */}
            <h3 className="text-white text-xl md:text-2xl font-semibold leading-[130%] tracking-[-2%]">
              {feature.title}
            </h3>
            {/* Description */}
            <p className="text-[#E4E2DF]/60 text-[1.125rem] leading-[26px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttackSurfaceFeatures;
