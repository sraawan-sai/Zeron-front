import Image from "next/image";
import React from "react";

const DefenseModel: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-[#0A0118] overflow-hidden py-16 px-4 md:px-10 lg:px-20">
      {/* Background Image & Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 z-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #0A0118 70%, rgba(0,0,0,0) 100%), url('/images/crpmfeature.jpg')",
        }}
      ></div>

      {/* Heading */}
      <h2 className="text-center text-white text-2xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight z-10 max-w-4xl">
        Shielding Your Digital Ecosystem with <br />
        <span className="font-semibold">Real-Time Intelligence</span>
      </h2>

      {/* Main Diagram Container */}
      <div className="relative w-full mt-12 z-10 px-[5%]">
        {/* Center Image Full Width with 5% gap left and right */}
        <div className="min-h-screen w-full relative">
          <Image
            src="/images/ecosystem.png"
            alt="Defense Model"
            fill={true}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DefenseModel;
