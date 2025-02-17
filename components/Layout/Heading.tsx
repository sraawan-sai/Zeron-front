"use client";

import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  subtitleSize?: string;
  description?: string;
  // hoverColor?: string;
  descWidth?: string;
  subWidth?: string;
}

function Heading({
  title,
  subtitle,
  subtitleSize = "text-[2.625rem]",
  description,
  descWidth = "max-w-[950px]",
  subWidth = "max-w-[1000px]",
}: // hoverColor = "#fff",
HeadingProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center gap-4">
      <p className={`text-[2.875rem] leading-[40px] font-medium`}>{title}</p>
      {subtitle && (
        <div
          className={`flex flex-col md:flex-row items-center gap-2 ${subtitleSize} ${subWidth} leading-[46px]`}
        >
          {subtitle.split("|").map((text, index, arr) => (
            <React.Fragment key={index}>
              <span className="cursor-default text-[#6100FF] hover:text-[#fff] transition-colors duration-300">
                {text.trim()}
              </span>
              {index < arr.length - 1 && (
                <span className="hidden md:block text-[#6100FF]">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
      <div className={`${descWidth}`}>
        {description && (
          <p className="text-[1.125rem]  text-[#A3A3A3]">{description}</p>
        )}
      </div>
    </div>
  );
}

export default Heading;
