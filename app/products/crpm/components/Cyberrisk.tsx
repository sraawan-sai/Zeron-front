import Image from "next/image";
import React from "react";

const CyberRiskProcess: React.FC = () => {
  const steps = [
    {
      title: "Identify & Map",
      description:
        "Continuously discover risks across internal infrastructure, third-party vendors, and compliance frameworks.",
    },
    {
      title: "Quantify & Prioritize",
      description:
        "Convert cyber risk into financial metrics and rank vulnerabilities based on business impact.",
    },
    {
      title: "Mitigate & Optimize",
      description:
        "Implement AI-driven recommendations, track compliance, and enhance your cyber resilience.",
    },
  ];

  return (
    <section className="relative flex flex-col justify-center items-center px-4 lg:px-25 pt-22.5 lg:pb-37.5 w-full bg-[#0A0118] isolate z-10">
      {/* Title */}
      <h2 className="text-white text-4xl md:text-[3rem] text-center leading-[52px] tracking-[-1px] z-20 pb-10">
        Transforming Cyber Risk <br /> Management into an Exact Science
      </h2>

      {/* Steps Wrapper */}
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-8 w-full pt-20 lg:pb-34 z-20">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center px-4 py-8 gap-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg w-full max-w-[400px] min-h-[220px]"
          >
            <h3 className="text-white text-xl lg:text-2xl font-semibold leading-snug drop-shadow-md">
              {step.title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed drop-shadow-md">
              {step.description}
            </p>
          </div>
        ))}
        {/* Background Curve Image */}
        <div className="absolute inset-0 w-full h-full -z-1">
          <div className="relative w-full h-full">
            <Image
              src="/images/cyberrisk.png"
              alt=""
              fill={true}
              className="w-full object-cover object-center lg:object-[50%_35%] -z-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberRiskProcess;
