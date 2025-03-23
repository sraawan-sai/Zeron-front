import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";
import React from "react";

const CyberRiskFeatures: React.FC = () => {
  const features = [
    {
      title: "Seamless Integration",
      description:
        "Connect with existing security tools to unify risk management efforts.",
      icon: "/images/crpmf1.svg",
    },
    {
      title: "Extensive Attack Surface Mapping",
      description:
        "Identify both internal and external vulnerabilities in real-time.",
      icon: "/images/crpmf2.svg",
    },
    {
      title: "Robust Risk Register",
      description:
        "Maintain a centralized risk repository with real-time tracking and updates.",
      icon: "/images/crpmf3.svg",
    },
    {
      title: "Automated Compliance Mapping",
      description:
        "Align security controls with global regulatory frameworks effortlessly.",
      icon: "/images/crpmf4.png",
    },
    {
      title: "Granular Risk Quantification",
      description:
        "Quantifies cyber risks across governance, technology, and people, measuring threats like ransomware and phishing.",
      icon: "/images/crpmf5.png",
    },
    {
      title: "AI-Powered Assistance",
      description:
        "Optimizes security posture with tailored recommendations and detailed reports for smarter decision-making.",
      icon: "/images/crpmf6.png",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[#0A0118] px-6 md:px-20 py-24 gap-16">
      {/* Background Gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-[500px] bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #0A0118 0%, rgba(0, 0, 0, 0) 100%), url('/images/crpmfeature.jpg')",
        }}
      ></div>
      <CustomSection className="flex-col items-center justify-center gap-22.5">
        {/* Title Section */}
        <h2 className="relative z-10 text-white text-[3rem] text-center leading-[52px] tracking-[-1px] max-w-5xl">
          Navigate Cyber Risks with Data-Driven Precision
        </h2>

        {/* Feature Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="max-w-[380px] flex flex-col items-center text-center px-2 py-8 gap-6  backdrop-blur-xl rounded-2xl shadow-lg"
            >
              {/* Icon */}
              <div className="w-20 h-20 flex justify-center items-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Title */}
              <h3 className="text-white text-2xl font-semibold leading-[130%] tracking-[-2%]">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-[#E4E2DF]/60 text-[1.125rem] leading-[26px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </CustomSection>
    </section>
  );
};

export default CyberRiskFeatures;
