import Image from "next/image";
import React from "react";

const QberOverview: React.FC = () => {
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
    <section className="relative w-full flex flex-col justify-center items-center bg-[#0A0118] px-6 md:px-24 pt-20 pb-28">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #0A0118 15.79%, rgba(0, 0, 0, 0) 82.87%), url('/images/crpmhero.png')",
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-2xl font-medium tracking-[-1px]"> QBER Overview</p>
        <h2 className="mt-6.5 text-white text-[3rem] leading-[52px] tracking-[-1px] max-w-[950px]">
          QBER | Where Cybersecurity Meets Data-Driven Decisions
        </h2>
        <p className="mt-2 text-[#E4E2DF] text-[1.25rem] font-medium leading-[24px]">
          Know Your Risk | Reduce Uncertainty | Strengthen Security
        </p>
        <p className="mt-4 text-[#E4E2DF]/70 text-[1.125rem] leading-[24px] max-w-[850px]">
          QBER (Quantified Business Exposure to Risks) is Zeron’s advanced Cyber
          Risk Quantification solution. It translates complex security risks
          into clear, measurable financial impact—helping organizations make
          data-driven decisions to safeguard their digital assets.
        </p>

        {/* Cards Row */}
        <div className="flex flex-wrap gap-6 mt-12 w-full items-center justify-center">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-full max-w-[400px] flex flex-col items-center text-center p-8 gap-6 bg-white/10 rounded-lg backdrop-blur-xl shadow-lg"
            >
              <div className="w-24 h-24 flex justify-center items-center rounded-full shadow-md">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={80}
                  height={80}
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
    </section>
  );
};

export default QberOverview;
