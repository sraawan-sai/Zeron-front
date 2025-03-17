import React from 'react';

const DefenseOverview = () => {
  return (
    <div className="flex flex-col items-center w-full bg-transparent px-4 py-16">
      
      {/* Outer container with gaps and responsive width */}
      <div className="flex flex-col items-center gap-6 max-w-5xl w-full">

        {/* Small Top Heading */}
        <h3 className="font-medium text-lg md:text-2xl leading-tight tracking-tight text-white text-center">
          Defence Overview
        </h3>

        {/* Main Heading */}
        <h1 className="font-normal text-3xl md:text-5xl leading-snug md:leading-tight tracking-tight text-white text-center max-w-4xl">
          Defending Your Cyber Universe with <br /> Intelligent Defense
        </h1>

        {/* Subheading */}
        <p className="font-medium text-base md:text-lg leading-relaxed text-[#E4E2DF] text-center max-w-[70%]">
          Threat Detection | Proactive Defense | Security Resilience
        </p>

        {/* Description */}
        <p className="font-normal text-sm md:text-base leading-relaxed text-[#E4E2DF]/70 text-center max-w-3xl">
          The Zeron Defense Module detects, analyzes, and mitigates cyber threats in real-time. By integrating log analysis, file integrity monitoring, vulnerability management, and endpoint security, it provides a proactive defense strategy to safeguard critical assets.
          <br /><br />
          With continuous monitoring and rapid response, businesses stay ahead of evolving threats and strengthen cyber resilience.
        </p>

      </div>
      
    </div>
  );
};

export default DefenseOverview;
