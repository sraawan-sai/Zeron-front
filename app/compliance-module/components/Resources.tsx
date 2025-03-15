import React from 'react';

const ResourcesSection = () => {
  const cards = [1, 2, 3]; // Dummy array to generate 3 cards

  return (
    <section className="flex flex-col justify-center items-center px-4 md:px-16 py-[50px] gap-[50px] w-full bg-[#0A0118]">
      {/* Title */}
      <div className="flex justify-center items-center p-[10px] w-full max-w-[821px]">
        <h2 className="text-white text-[3rem] leading-[52px] text-center letter-spacing-[-1px]">
          Resources to fuel <br /> your attack surface security strategy
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-[44px_24px] w-full max-w-[1140px]">
        {cards.map((_, idx) => (
          <div key={idx} className="flex flex-col gap-[28px] w-[364px] h-[358px]">
            <div className="w-[364px] h-[250px] bg-white/10 rounded-[8px]" />
            <div className="flex flex-col gap-[10px] w-full">
              {/* Meta */}
              <div className="flex items-center gap-[8px]">
                <span className="text-[#0F6CBD] text-[10px] uppercase tracking-tight font-medium">News</span>
                <div className="w-[4px] h-[4px] bg-white rounded-full" />
                <span className="text-white/60 text-[10px] uppercase tracking-tight font-medium">26 January 2025</span>
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
          <a href="#" className="text-white text-[16px] font-medium">Learn more</a>
          <svg className="ml-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 3L10 6L7 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
