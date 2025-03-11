import React from 'react';

const CyberRiskOverview: React.FC = () => {
  const cards = [
    {
      title: 'Cyber Risk Quantification',
      description: 'Identify external assets, misconfigurations, and shadow IT.',
      icon: '/images/cyberrisk.svg', // Replace with your actual icon path
    },
    {
      title: 'Holistic Risk Visibility',
      description: 'Assign financial impact scores to vulnerabilities (CVaR).',
      icon: '/images/holisticrisk.svg', // Replace with your actual icon path
    },
    {
      title: 'Proactive Risk Mitigation',
      description: 'Detect and mitigate threats before they are exploited.',
      icon: '/images/proactiverisk.svg', // Replace with your actual icon path
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[#0A0118] px-6 md:px-24 py-16">
      
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #0A0118 15.79%, rgba(0, 0, 0, 0) 82.87%), url('/images/crpm-overview.png')",
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-6xl">
        <p className='text-2xl font-medium'> CRPM Overview</p>
        <h2 className="text-white text-4xl md:text-5xl font-medium leading-tight">
          Master Your Cyber Risk Universe with Precision
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
          Cybersecurity isn’t just about defense—it’s about informed decisions. Zeron’s CRPM delivers a 360° view of your risk posture, integrating real-time insights, compliance tracking, and AI-driven risk quantification to ensure resilience in a constantly shifting digital landscape.
        </p>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-8 gap-6 bg-white/10 rounded-lg backdrop-blur-xl shadow-lg"
            >
              <div className="w-24 h-24 flex justify-center items-center rounded-full shadow-md">
                <img src={card.icon} alt={card.title} className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-white text-2xl font-semibold">{card.title}</h3>
              <p className="text-gray-200 text-base leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberRiskOverview;
