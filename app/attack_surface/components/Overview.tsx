import React from 'react';

const AttackSurfaceOverview = () => {
  return (
    <section className="relative w-full bg-[#0A0118] py-16 px-4 md:px-32 text-white flex flex-col items-center gap-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-center bg-cover opacity-500 z-0" style={{ backgroundImage: 'url(/images/overview.png)' }}></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl text-center gap-6">
        <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight">
          Unveiling the Hidden Layers of Your Digital Universe
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
          Every asset you own, every third-party integration, and every cloud deployment expands your attack surface.
          Zeron continuously scans, analyzes, and prioritizes risks, turning scattered data points into structured, actionable intelligence.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full">
        {/* Card 1 */}
        <div className="flex flex-col items-center p-8 gap-6 bg-white/10 rounded-lg backdrop-blur-xl shadow-xl">
          <img src="/images/diamond.svg" alt="Continuous Discovery" className="h-20 w-20 object-contain" />
          <h3 className="text-2xl font-semibold">Continuous Discovery</h3>
          <p className="text-center text-gray-300">
            Identify external assets, misconfigurations, and shadow IT.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center p-8 gap-6 bg-white/10 rounded-lg backdrop-blur-xl shadow-xl">
          <img src="/images/graph.svg" alt="Risk Quantification" className="h-20 w-20 object-contain" />
          <h3 className="text-2xl font-semibold">Risk Quantification</h3>
          <p className="text-center text-gray-300">
            Assign financial impact scores to vulnerabilities (CVaR).
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center p-8 gap-6 bg-white/10 rounded-lg backdrop-blur-xl shadow-xl">
          <img src="/images/defense.svg" alt="Real-Time Defense" className="h-20 w-20 object-contain" />
          <h3 className="text-2xl font-semibold">Real-Time Defense</h3>
          <p className="text-center text-gray-300">
            Detect and mitigate threats before they are exploited.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AttackSurfaceOverview;
