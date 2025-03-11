import React from 'react';

const CyberRiskProcess: React.FC = () => {
  const steps = [
    {
      title: 'Identify & Map',
      description:
        'Continuously discover risks across internal infrastructure, third-party vendors, and compliance frameworks.',
    },
    {
      title: 'Quantify & Prioritize',
      description:
        'Convert cyber risk into financial metrics and rank vulnerabilities based on business impact.',
    },
    {
      title: 'Mitigate & Optimize',
      description:
        'Implement AI-driven recommendations, track compliance, and enhance your cyber resilience.',
    },
  ];

  return (
    <section className="relative flex flex-col justify-center items-center px-[150px] pb-[50px] gap-[100px] w-full h-[724px] bg-[#0A0118] isolate z-10">
      
      {/* Title */}
      <h2 className="text-white text-4xl md:text-5xl font-medium text-center leading-snug z-20 pb-10">
        Transforming Cyber Risk Management into an Exact Science
      </h2>

      {/* Steps Wrapper */}
      <div
        className="relative flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-7xl z-20"
      >
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-8 gap-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg max-w-[350px] min-h-[220px]"
          >
            <h3 className="text-white text-2xl font-semibold leading-snug drop-shadow-md">
              {step.title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed drop-shadow-md">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Background Curve Image */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/images/cyberrisk.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center -20%',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </section>
  );
};

export default CyberRiskProcess;
