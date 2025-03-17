import React from "react";

const DefenseCards: React.FC = () => {
  const features = [
    {
      icon: "/icons/log-management.svg",
      title: "Log Management",
      description: "Collect, analyze, and centralize security logs for real-time monitoring.",
    },
    {
      icon: "/icons/file-integrity.svg",
      title: "File Integrity Monitoring",
      description: "Detect unauthorized changes to critical files and directories.",
    },
    {
      icon: "/icons/vulnerability.svg",
      title: "Vulnerability Management",
      description: "Identify, prioritize, and mitigate security vulnerabilities.",
    },
    {
      icon: "/icons/vulnerability.svg",
      title: "Real-Time Monitoring & Alerts",
      description: "Enable instant threat detection with automated alerts.",
    },
    {
      icon: "/icons/vulnerability.svg",
      title: "Endpoint Security Monitoring",
      description: "Track endpoint activity and assess risks based on the MITRE ATT&CK framework.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-transparent px-6 md:px-20 py-2 gap-6">
      {/* Background Gradient and Image */}
      <div
        className="absolute bottom-10 left-0 w-full h-[900px] bg-cover bg-no-repeat z-0 brightness-130"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #0A0118 10%, rgba(0, 0, 0, 0) 100%), url('/images/defencebg.png')",
        }}
      ></div>

      {/* First Row (3 Cards) */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full">
        {features.slice(0, 3).map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-8 gap-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg"
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

      {/* Second Row (2 Cards Centered) */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl w-full">
        {features.slice(3, 5).map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-8 gap-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg"
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

export default DefenseCards;
