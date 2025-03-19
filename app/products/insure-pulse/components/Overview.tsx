import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";
import React from "react";

const cards = [
  {
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    icon: "/images/diamond.svg",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    icon: "/images/graph.svg",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    icon: "/images/defense.svg",
  },
];

const InsureOverview: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center bg-[#0A0118] px-6  2xl:px-24 py-16">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #0A0118 15.79%, rgba(0, 0, 0, 0) 82.87%), url('/images/crpmhero.png')",
        }}
      ></div>

      {/* Content Wrapper */}
      <CustomSection className="items-center justify-center">
        <div className="w-full relative z-10 flex flex-col items-center text-center max-w-[1560px] ">
          <p className="text-2xl font-medium tracking-[-1px]">Lorem Overview</p>
          <h2 className="mt-16 text-white text-[3rem] leading-[52px] tracking-[-1px] max-w-[850px]">
            Lorem Ipsum is simply dummy text of the printing.
          </h2>
          <p className="text-[#E4E2DF] text-[1.125rem] leading-[24px] ">
            Know Your Risk | Reduce Uncertainty | Strengthen Security
          </p>
          <p className="mt-6 text-[#E4E2DF]/70 text-[1.125rem] max-w-[820px] leading-[24px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </p>

          {/* Cards Row */}
          <div className="flex flex-wrap gap-6 mt-38 w-full items-center justify-center">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="w-full max-w-[400px] flex flex-col items-center text-center p-8 gap-6 bg-white/10 rounded-lg backdrop-blur-xl"
              >
                <div className="w-24 h-24 flex justify-center items-center rounded-full">
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
      </CustomSection>
    </section>
  );
};

export default InsureOverview;
