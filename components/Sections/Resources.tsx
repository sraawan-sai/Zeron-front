import React from "react";
import { FaArrowRight } from "react-icons/fa";

type ResourcesSectionProps = {
  title?: string;
};

const Resources: React.FC<ResourcesSectionProps> = ({
  title = "Resources to fuel <br /> your attack surface security strategy",
}) => {
  const cards = [1, 2, 3]; // Dummy array to generate 3 cards

  return (
    <section className="flex flex-col justify-center items-center px-4 md:px-16 py-[50px] gap-[50px] w-full bg-[#0A0118]">
      {/* Title */}
      <div className="flex justify-center items-center w-full max-w-[900px]">
        <h2
          className="text-white text-[3rem] leading-[52px] text-center tracking-[-1px]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-[44px_24px] w-full max-w-[1140px]">
        {cards.map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-[28px] w-[364px] h-[358px]"
          >
            <div className="w-[364px] h-[250px] bg-white/10 rounded-[8px]" />
            <div className="flex flex-col gap-[10px] w-full">
              {/* Meta */}
              <div className="flex items-center gap-[8px]">
                <span className="text-[#0F6CBD] text-[10px] uppercase tracking-tight font-medium">
                  News
                </span>
                <div className="w-[4px] h-[4px] bg-white rounded-full" />
                <span className="text-white/60 text-[10px] uppercase tracking-tight font-medium">
                  26 January 2025
                </span>
              </div>
              {/* Title */}
              <h3 className="text-white text-[22px] leading-[130%] letter-spacing-[-0.02em]">
                Lorem Ipsum is simply dummy text of the printing demi text
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination + Link */}
      <div className="flex flex-col items-center gap-[35px] w-[117.61px] h-[63px]">
        <div className="flex items-center gap-[4px]">
          <div className="w-[32px] h-[2px] bg-white rounded" />
          <div className="w-[32px] h-[2px] bg-white/30 rounded" />
          <div className="w-[32px] h-[2px] bg-white/30 rounded" />
        </div>
        <div className="relative flex items-center">
          <a
            href="#"
            className="text-white text-[16px] font-medium flex items-center gap-2"
          >
            Learn more
            <FaArrowRight className="text-white w-[12px] h-[12px]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;
