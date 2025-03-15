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

      {/* Title Section */}
      <h2 className="relative z-10 text-white text-[3rem] text-center leading-[52px] tracking-[-1px] max-w-5xl">
        Navigate Cyber Risks with Data-Driven Precision
      </h2>

      {/* Feature Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-8 gap-6  backdrop-blur-xl rounded-2xl shadow-lg"
          >
            {/* Icon */}
            <div className="w-20 h-20 flex justify-center items-center">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Title */}
            <h3 className="text-white text-2xl font-semibold leading-snug">
              {feature.title}
            </h3>
            {/* Description */}
            <p className="text-gray-300 text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CyberRiskFeatures;
