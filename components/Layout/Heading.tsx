"use client";

import React from "react";

interface HeadingProps {
  title: string;
  titleCN?: string;
  subtitle?: string;
  subtitleSize?: string;
  description?: string;
  // hoverColor?: string;
  descWidth?: string;
  subWidth?: string;
}

function Heading({
  title,
  titleCN,
  subtitle,
  subtitleSize = "text-[1.625rem] md:text-[2.625rem]",
  description,
  descWidth = "max-w-[950px]",
  subWidth = "max-w-[1000px]",
}: // hoverColor = "#fff",
HeadingProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center gap-4">
      <p
        className={`${titleCN} text-[1.75rem] xs:text-[2rem] md:text-[2.875rem] leading-[34px] xs:leading-[40px] md:leading-[50px] font-medium tracking-[-1px]`}
      >
        {title}
      </p>
      {subtitle && (
        <div
          className={`flex flex-col xs:flex-row items-center gap-3 xs:gap-1 md:gap-2 ${subtitleSize} ${subWidth} leading-[32px] md:leading-[46px]`}
        >
          {subtitle.split("|").map((text, index, arr) => (
            <React.Fragment key={index}>
              <span className="cursor-default text-[#6100FF] hover:text-[#fff] transition-colors duration-300">
                {text.trim()}
              </span>
              {index < arr.length - 1 && (
                <span className="hidden xs:block text-[#6100FF]">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
      <div className={`${descWidth}`}>
        {description && (
          <p className="text-[1rem] md:text-[1.125rem] text-[#A3A3A3] tracking-[-1px]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default Heading;
