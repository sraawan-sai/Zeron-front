import CustomSection from "@/components/Layout/CustomSection";
import React from "react";

const DefenceOverview: React.FC = () => {
  const cards = [
    {
      title: "Log Management",
      description:
        "Collect, analyze, and centralize security logs for real-time monitoring.",
      icon: "/images/cyberrisk.svg",
    },
    {
      title: "File Integrity Monitoring",
      description:
        "Detect unauthorized changes to critical files and directories.",
      icon: "/images/holisticrisk.svg",
    },
    {
      title: "Vulnerability Management",
      description:
        "Identify, prioritize, and mitigate security vulnerabilities.",
      icon: "/images/proactiverisk.svg",
    },
    {
      title: "Real-Time Monitoring & Alerts",
      description: "Enable instant threat detection with automated alerts.",
      icon: "/images/proactiverisk.svg",
    },
    {
      title: "Endpoint Security Monitoring",
      description:
        "Track endpoint activity and assess risks based on the MITRE ATT&CK framework.",
      icon: "/images/proactiverisk.svg",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[#0A0118] px-6 md:px-24 py-16">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #0A0118 15.79%, rgba(0, 0, 0, 0) 82.87%), url('/images/crpmhero.png')",
        }}
      ></div>

      {/* Content Wrapper */}
      <CustomSection className="items-center justify-center">
        <div className="relative z-10 flex flex-col items-center text-center max-w-7xl">
          <p className="text-2xl font-medium tracking-[-1px]">
            Defense Overview
          </p>
          <h2 className="mt-6.5 text-white text-[3rem] leading-[52px] tracking-[-1px] max-w-[850px]">
            Defending Your Cyber Universe with Intelligent Defense
          </h2>
          <p className="mt-2 text-[#E4E2DF] text-[1.25rem] font-medium leading-[24px]">
            Threat Detection | Proactive Defense | Security Resilience
          </p>
          <p className="mt-4 text-[#E4E2DF]/70 text-[1.125rem] max-w-[820px] leading-[24px]">
            The Zeron Defense Module detects, analyzes, and mitigates cyber
            threats in real-time. By integrating log analysis, file integrity
            monitoring, vulnerability management, and endpoint security, it
            provides a proactive defense strategy to safeguard critical assets.
            <span className="mt-4 block"> </span>
            With continuous monitoring and rapid response, businesses stay ahead
            of evolving threats and strengthen cyber resilience.
          </p>

          {/* Cards Row */}
          <div className="flex flex-wrap gap-6 mt-12 w-full items-center justify-center">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="w-full max-w-[400px] flex flex-col items-center text-center p-8 gap-6 bg-white/10 rounded-lg backdrop-blur-xl shadow-lg"
              >
                <div className="w-24 h-24 flex justify-center items-center rounded-full shadow-md">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-white text-2xl font-semibold">
                  {card.title}
                </h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CustomSection>
    </section>
  );
};

export default DefenceOverview;
