import Image from "next/image";
import React from "react";

const CyberRiskOverview: React.FC = () => {
  const cards = [
    {
      title: "Cyber Risk Quantification",
      description:
        "Identify external assets, misconfigurations, and shadow IT.",
      icon: "/images/cyberrisk.svg",
    },
    {
      title: "Holistic Risk Visibility",
      description: "Assign financial impact scores to vulnerabilities (CVaR).",
      icon: "/images/holisticrisk.svg",
    },
    {
      title: "Proactive Risk Mitigation",
      description: "Detect and mitigate threats before they are exploited.",
      icon: "/images/proactiverisk.svg",
    },
  ];

  return (
    <section className="relative w-full flex flex-col justify-center items-center bg-[#0A0118] px-6 2xl:px-24 py-22.5">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #0A0118 15.79%, rgba(0, 0, 0, 0) 82.87%), url('/images/crpm-overview.png')",
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <p className="text-2xl font-medium tracking-[-1px] mb-4">
          {" "}
          CRPM Overview
        </p>
        <h2 className="text-white text-[3rem] leading-[52px] tracking-[-1px]">
          Master Your Cyber Risk Universe with Precision
        </h2>
        <p className="text-[#E4E2DF] text-[1.125rem] max-w-[1050px] leading-[24px]">
          Lorem Ipsum | Lorem Ipsum | Lorem Ipsum
        </p>
        <p className="text-[#E4E2DF]/70 text-[1.125rem] max-w-[1050px] leading-[24px]">
          Cybersecurity isn’t just about defense—it’s about informed decisions.
          Zeron’s CRPM delivers a 360° view of your risk posture, integrating
          real-time insights, compliance tracking, and AI-driven risk
          quantification to ensure resilience in a constantly shifting digital
          landscape.
        </p>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-full max-w-[370px] flex flex-col items-center text-center px-7 py-19 gap-6 bg-white/10 rounded-lg backdrop-blur-lg shadow-lg"
            >
              <div className="w-24 h-24 flex justify-center items-center rounded-full shadow-md">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={96}
                  height={96}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-white text-[1.5rem] font-semibold leading-[130%]">
                {card.title}
              </h3>
              <p className="text-[#E4E2DF] leading-[26px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberRiskOverview;
