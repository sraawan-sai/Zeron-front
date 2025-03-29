import Image from "next/image";
import React from "react";

const ComplianceFeatures = () => {
  const features = [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      image: "/images/crpmf2.svg",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      image: "/images/crpmf4.png",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      image: "/images/crpmf3.svg",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      image: "/images/crpmf5.png",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      image: "/images/crpmf6.png",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      image: "/images/crpmf1.svg",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-[#0A0118] px-6 md:px-20 py-24 gap-20">
      <div
        className="absolute bottom-0 w-full h-full inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #0A0118 15.79%, rgba(0, 0, 0, 0) 82.87%), url('/images/bottombg.png')",
        }}
      ></div>

      {/* Heading */}
      <h2 className="text-white text-center text-[3rem] tracking-[-1px] leading-[52px] z-10 max-w-[950px]">
        Lorem Ipsum is simply dummy text of the printing.
      </h2>

      {/* Features */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="max-w-[380px] flex flex-col items-center text-center px-2 py-8 gap-6  backdrop-blur-xl rounded-2xl shadow-lg"
          >
            {/* Icon */}
            <div className="w-20 h-20 flex justify-center items-center">
              <Image
                src={feature.image}
                alt={feature.title}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Title */}
            <h3 className="text-white text-xl md:text-2xl font-semibold leading-[130%] tracking-[-2%]">
              {feature.title}
            </h3>
            {/* Description */}
            <p className="text-[#E4E2DF]/60 text-[1.125rem] leading-[26px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplianceFeatures;
