import Image from "next/image";
import React from "react";

const AttackSurfaceFeatures = () => {
  const features = [
    {
      title: " Advanced Log Management",
      description:
        "Collect and analyze logs from OS, applications, and network devices to detect anomalies.",
      image: "/images/crpmf2.svg",
    },
    {
      title: "Intelligent File Integrity Monitoring",
      description:
        "Track unauthorized file changes and access attempts in real-time.",
      image: "/images/crpmf4.png",
    },
    {
      title: " Automated Vulnerability Detection",
      description:
        " Conduct security scans, assess risk severity, and provide remediation steps.",
      image: "/images/crpmf3.svg",
    },
    {
      title: "Instant Threat Alerts",
      description:
        "Generate real-time notifications via Slack, Email, and Platform Dashboards.",
      image: "/images/crpmf5.png",
    },
    {
      title: "Endpoint Security Insights",
      description:
        "Detect OS-specific vulnerabilities and enhance CIS-CAT compliance scores.",
      image: "/images/crpmf6.png",
    },
    {
      title: "MITRE ATT&CK Mapping",
      description:
        "Align endpoint monitoring with the MITRE framework for advanced threat detection.",
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
      ></div>

      {/* Heading */}
      <h2 className="text-white text-center text-[3rem] tracking-[-1px] leading-[52px] z-10">
        Comprehensive Security. Continuous Protection.
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 z-10 max-w-7xl w-full">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="h-full flex flex-col items-center justify-center text-center px-3 py-21 gap-4"
          >
            <div className="flex flex-col items-center gap-8">
              <div className="w-20 h-20 relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={100}
                  height={80}
                  className="w-full max-w-[100px] h-full max-h-[80px] object-contain object-center"
                />
              </div>
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

export default AttackSurfaceFeatures;
