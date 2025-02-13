"use client";

import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  // hoverColor?: string;
}

function Heading({
  title,
  subtitle,
  description,
}: // hoverColor = "#fff",
HeadingProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center gap-4">
      <p className={`text-[2.875rem] leading-[40px] font-medium`}>{title}</p>
      {subtitle && (
        <p
          className={`cursor-default text-[2.625rem] leading-[36px] text-[#6100FF] hover:text-[#fff] transform transition-colors duration-500`}
        >
          {subtitle}
        </p>
      )}
      <div className="max-w-[1000px]">
        {description && (
          <p className="text-[1.125rem] leading-[16px] text-[#A3A3A3]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default Heading;
