import Image from "next/image";
import React from "react";

const QberFeatures = () => {
  const features = [
    {
      title: " Industry-Specific Risk Intelligence",
      description:
        "Every industry faces unique cyber threats. QBER tailors risk quantification based on sector-specific vulnerabilities, ensuring precise and relevant insights.",
      image: "/images/crpmf2.svg",
    },
    {
      title: "Business-Centric Cyber Risk Modeling",
      description:
        "From supply chains to internal processes, QBER factors in business operations, locations, and regulations, providing a holistic risk view tailored to your organization.",
      image: "/images/crpmf4.png",
    },
    {
      title: "Data-Driven Cybersecurity Decisions",
      description:
        "Eliminate guesswork with QBER’s quantification engine, which transforms complex cyber threats into clear, data-backed risk scores for informed decision-making.",
      image: "/images/crpmf3.svg",
    },
    {
      title: "Risk Prioritization for Maximum Resilience",
      description:
        "Not all risks are equal. QBER categorizes threats by severity—critical, high, medium, and low—so you can focus on mitigating the most impactful vulnerabilities first.",
      image: "/images/crpmf5.png",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-[#0A0118] px-6 md:px-20 py-24 gap-20">
      {/* Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0A0118] via-[#0A0118] to-transparent pointer-events-none" /> */}
      <div className="absolute bottom-0 w-full h-[500px]">
        <Image
          src="/images/bottombg.png"
          alt=""
          fill={true}
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
              <h3 className="text-white text-[1.5rem] font-semibold tracking-[-2%] leading-[130%]">
                {feature.title}
              </h3>
            </div>
            <div className="flex-grow max-w-[480px]">
              <p className="text-[#E4E2DF]/60 text-[1.125rem] leading-[26px]">
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
