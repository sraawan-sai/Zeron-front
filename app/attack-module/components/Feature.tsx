import React from 'react';

const AttackSurfaceFeatures = () => {
  const features = [
    {
      title: 'Universal Asset Discovery',
      description: 'Continuously scan domains, IPs, and cloud assets to uncover your full attack surface.',
    },
    {
      title: 'Intelligent Risk Prioritization',
      description: 'AI-driven insights rank threats by severity, exploitability, and financial impact.',
    },
    {
      title: 'Real-Time Threat Intelligence',
      description: 'Get real-time alerts on newly exposed vulnerabilities and risks.',
    },
    {
      title: 'Attack Path Mapping',
      description: 'Visualize asset connections to identify weak points and attack vectors.',
    },
    {
      title: 'Exposure & CVE Detection',
      description: 'Detect misconfigurations, CVEs, and unprotected assets automatically.',
    },
    {
      title: 'Seamless Integrations',
      description: 'Connect with SIEM, SOAR, and security tools for unified risk management.',
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-[#0A0118] px-6 md:px-20 py-24 gap-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0118] via-[#0A0118] to-transparent pointer-events-none" />

      {/* Heading */}
      <h2 className="text-white text-center text-3xl md:text-5xl font-medium leading-tight z-10">
        Navigate Your Attack Surface with <br /> Precision
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 z-10 max-w-7xl w-full">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center text-center px-6">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-400 text-base leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttackSurfaceFeatures;
