"use client";

import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import SearchModel from "./Models/SearchModel";

interface CircleProps {
  circleText?: string;
  circleTextAmount?: string;
}

const Circle = ({
  circleText = "Title",
  circleTextAmount = "Amount",
}: CircleProps) => {
  const [activeSide, setActiveSide] = useState<"top" | "left" | "right" | null>(
    null
  );
  const modalRef = useRef<HTMLDivElement | null>(null);

  const toggleActive = (side: "top" | "left" | "right") => {
    setActiveSide((prev) => (prev === side ? null : side));
  };

  useClickOutside(modalRef as React.RefObject<HTMLElement>, () => {
    setActiveSide(null);
  });

  const modalPositionClasses =
    activeSide === "top"
      ? "-top-44 left-1/2 transform -translate-x-1/2"
      : activeSide === "left"
      ? "-top-44 md:-left-[80%] md:top-[30%] transform md:-translate-y-[30%]"
      : activeSide === "right"
      ? "-top-44 md:-right-[80%] md:top-[30%] transform md:-translate-y-[30%]"
      : "";

  return (
    <div
      className={`${
        activeSide ? "z-2" : ""
      } flex items-center justify-center relative scale-80 md:scale-100`}
    >
      {activeSide && (
        <div
          ref={modalRef}
          className={`${modalPositionClasses} absolute transition-opacity duration-300 opacity-100`}
        >
          {activeSide === "top" && (
            <SearchModel title="Check your Third Party Risk" />
          )}
          {activeSide === "left" && (
            <SearchModel title="Check your Internal Risk" />
          )}
          {activeSide === "right" && (
            <SearchModel title="Check your External Risk" />
          )}
        </div>
      )}
      <svg
        width="478"
        height="478"
        viewBox="0 0 478 478"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M463.807 239C463.807 209.478 457.992 180.245 446.694 152.97C435.397 125.695 418.838 100.913 397.962 80.0377C377.087 59.1624 352.305 42.6033 325.03 31.3057C297.755 20.0081 268.522 14.1933 239 14.1933C209.478 14.1933 180.245 20.0081 152.97 31.3057C125.695 42.6033 100.913 59.1624 80.0377 80.0376C59.1624 100.913 42.6033 125.695 31.3057 152.97C20.0081 180.245 14.1933 209.478 14.1933 239C14.1933 268.522 20.0081 297.755 31.3057 325.03C42.6033 352.305 59.1624 377.087 80.0376 397.962C100.913 418.838 125.695 435.397 152.97 446.694C180.245 457.992 209.478 463.807 239 463.807C268.522 463.807 297.755 457.992 325.03 446.694C352.305 435.397 377.087 418.838 397.962 397.962C418.838 377.087 435.397 352.305 446.694 325.03C457.992 297.755 463.807 268.522 463.807 239L463.807 239Z"
          stroke="url(#paint0_linear_0_1)"
          strokeWidth="13.6134"
          strokeDasharray="1.13 6.38"
          id="outerCircleLine"
          className="animate-spin [transform-origin:center]"
        />
        <foreignObject x="30.7031" y="31.7031" width="416.357" height="416.359">
          <div className="w-full h-full backdrop-blur-[1.5px] [clip-path:url(#bgblur_0_0_1_clip_path)]"></div>
        </foreignObject>
        <g data-figma-bg-blur-radius="3">
          <circle
            cx="238.882"
            cy="239.882"
            r="205.176"
            transform="rotate(-1.78576 238.882 239.882)"
            fill="#4285F4"
            fillOpacity="0.35"
            id="outerCircle"
            className="hover:opacity-70 transition-all duration-300"
          />
          <circle
            cx="238.882"
            cy="239.882"
            r="204.676"
            transform="rotate(-1.78576 238.882 239.882)"
            stroke="url(#paint1_linear_0_1)"
            strokeOpacity="0.8"
          />
        </g>
        <path
          d="M365.364 239C365.364 222.406 362.096 205.974 355.745 190.642C349.395 175.311 340.087 161.381 328.353 149.647C316.619 137.913 302.689 128.605 287.358 122.255C272.026 115.904 255.594 112.636 239 112.636C222.406 112.636 205.974 115.904 190.642 122.255C175.311 128.605 161.381 137.913 149.647 149.647C137.913 161.381 128.605 175.311 122.255 190.642C115.904 205.974 112.636 222.406 112.636 239C112.636 255.594 115.904 272.026 122.255 287.358C128.605 302.689 137.913 316.619 149.647 328.353C161.381 340.087 175.311 349.395 190.642 355.745C205.974 362.096 222.406 365.364 239 365.364C255.594 365.364 272.026 362.096 287.358 355.745C302.689 349.395 316.619 340.087 328.353 328.353C340.087 316.619 349.395 302.689 355.745 287.358C362.096 272.026 365.364 255.594 365.364 239L365.364 239Z"
          stroke="url(#paint2_linear_0_1)"
          strokeWidth="8.72862"
          strokeDasharray="0.72 4.09"
          className="animate-spin [transform-origin:center] duration-2000"
        />
        <foreignObject x="168.471" y="168.471" width="141.059" height="141.058">
          <div className="w-full h-full backdrop-blur-[3.21px] [clip-path:url(#bgblur_1_0_1_clip_path)]"></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="6.41176"
          cx="239"
          cy="239"
          r="95"
          fill="url(#paint3_linear_0_1)"
          id="innerCircle"
          className="hover:opacity-50 transition-all duration-500 relative"
        />
        <foreignObject x="165" y="185" width="150" height="80">
          <div className="peer w-full h-full flex flex-col items-center justify-center text-center text-white font-bold">
            <p className={`tracking-[-1px] font-light text-0.875rem]`}>
              {circleText}
            </p>
            <p
              className={`tracking-[-0.87px] font-bold text-[2rem] leading-[2rem]`}
            >
              {circleTextAmount}
            </p>
          </div>
        </foreignObject>
        <mask id="path-6-inside-1_0_1" fill="white">
          <path d="M137.438 127.026C166.289 102.075 203.659 88.519 242.23 89.013C280.8 89.507 317.792 104.015 345.96 129.697L313.201 163.821C293.757 146.094 268.223 136.079 241.6 135.738C214.976 135.397 189.181 144.754 169.266 161.977L137.438 127.026Z" />
        </mask>
        <path
          d="M137.438 127.026C166.289 102.075 203.659 88.519 242.23 89.013C280.8 89.507 317.792 104.015 345.96 129.697L313.201 163.821C293.757 146.094 268.223 136.079 241.6 135.738C214.976 135.397 189.181 144.754 169.266 161.977L137.438 127.026Z"
          stroke="url(#paint4_linear_0_1)"
          strokeOpacity="0.8"
          strokeWidth="2.17597"
          mask="url(#path-6-inside-1_0_1)"
          id="topSide"
          className="[transform-origin:center] hover:scale-105 transition-all duration-300 fill-white/[0.1] hover:fill-[url(#hoverGradient)] cursor-pointer"
          onClick={() => toggleActive("top")}
        />
        <mask id="path-7-inside-2_0_1" fill="white">
          <path d="M342.846 350.974C313.995 375.925 276.625 389.481 238.054 388.987C199.484 388.493 162.492 373.985 134.324 348.303L167.083 314.179C186.527 331.906 212.061 341.921 238.685 342.262C265.308 342.603 291.104 333.246 311.019 316.023L342.846 350.974Z" />
        </mask>
        <path
          d="M342.846 350.974C313.995 375.925 276.625 389.481 238.054 388.987C199.484 388.493 162.492 373.985 134.324 348.303L167.083 314.179C186.527 331.906 212.061 341.921 238.685 342.262C265.308 342.603 291.104 333.246 311.019 316.023L342.846 350.974Z"
          stroke="url(#paint5_linear_0_1)"
          strokeOpacity="0.8"
          strokeWidth="2.17597"
          mask="url(#path-7-inside-2_0_1)"
          id="bottomSide"
          className="[transform-origin:center] hover:scale-105 transition-all duration-300 fill-white/[0.1] hover:fill-[url(#hoverGradient)] cursor-pointer"
        />
        <mask id="path-8-inside-3_0_1" fill="white">
          <path d="M127.026 341.847C102.075 312.996 88.519 275.626 89.013 237.055C89.507 198.485 104.015 161.493 129.697 133.325L163.821 166.084C146.094 185.528 136.079 211.062 135.738 237.685C135.397 264.309 144.754 290.105 161.977 310.02L127.026 341.847Z" />
        </mask>
        <path
          d="M127.026 341.847C102.075 312.996 88.519 275.626 89.013 237.055C89.507 198.485 104.015 161.493 129.697 133.325L163.821 166.084C146.094 185.528 136.079 211.062 135.738 237.685C135.397 264.309 144.754 290.105 161.977 310.02L127.026 341.847Z"
          stroke="url(#paint6_linear_0_1)"
          strokeOpacity="0.8"
          strokeWidth="2.17597"
          mask="url(#path-8-inside-3_0_1)"
          id="leftSide"
          className="[transform-origin:center] hover:scale-105 transition-all duration-300 fill-white/[0.1] hover:fill-[url(#hoverGradient)] cursor-pointer"
          onClick={() => toggleActive("left")}
        />
        <mask id="path-9-inside-4_0_1" fill="white">
          <path d="M351.974 136.438C376.925 165.289 390.481 202.659 389.987 241.23C389.493 279.8 374.985 316.792 349.303 344.96L315.179 312.201C332.906 292.757 342.921 267.223 343.262 240.6C343.603 213.976 334.246 188.181 317.023 168.266L351.974 136.438Z" />
        </mask>
        <path
          d="M351.974 136.438C376.925 165.289 390.481 202.659 389.987 241.23C389.493 279.8 374.985 316.792 349.303 344.96L315.179 312.201C332.906 292.757 342.921 267.223 343.262 240.6C343.603 213.976 334.246 188.181 317.023 168.266L351.974 136.438Z"
          stroke="url(#paint7_linear_0_1)"
          strokeOpacity="0.8"
          strokeWidth="2.17597"
          mask="url(#path-9-inside-4_0_1)"
          id="rightSide"
          className="[transform-origin:center] hover:scale-105 transition-all duration-300 fill-white/[0.1] hover:fill-[url(#hoverGradient)] cursor-pointer"
          onClick={() => toggleActive("right")}
        />
        <defs>
          <linearGradient
            id="hoverGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#1C76FD" />
            <stop offset="100%" stopColor="#5721F0" />
          </linearGradient>
          <clipPath id="bgblur_0_0_1_clip_path">
            <circle
              transform="translate(-30.7031 -31.7031) rotate(-1.78576 238.882 239.882)"
              cx="238.882"
              cy="239.882"
              r="205.176"
            />
          </clipPath>
          <clipPath id="bgblur_1_0_1_clip_path">
            <circle
              transform="translate(-168.471 -168.471)"
              cx="239"
              cy="239"
              r="64.1176"
            />
          </clipPath>
          <linearGradient
            id="paint0_linear_0_1"
            x1="-4.23049"
            y1="231.114"
            x2="479.354"
            y2="231.114"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1C76FD" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_1"
            x1="430.402"
            y1="148.515"
            x2="-60.9453"
            y2="193.148"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5BB0FF" />
            <stop offset="1" stopColor="#6F58FF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_0_1"
            x1="102.88"
            y1="234.587"
            x2="373.51"
            y2="234.587"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1C76FD" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_0_1"
            x1="167.462"
            y1="236.681"
            x2="309.693"
            y2="236.681"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1C76FD" />
            <stop offset="1" stopColor="#5721F0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_0_1"
            x1="384.704"
            y1="172.684"
            x2="14.1265"
            y2="207.227"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5BB0FF" />
            <stop offset="1" stopColor="#6F58FF" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_0_1"
            x1="95.5802"
            y1="305.316"
            x2="466.158"
            y2="270.773"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5BB0FF" />
            <stop offset="1" stopColor="#6F58FF" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_0_1"
            x1="172.684"
            y1="94.5811"
            x2="207.227"
            y2="465.159"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5BB0FF" />
            <stop offset="1" stopColor="#6F58FF" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_0_1"
            x1="306.316"
            y1="383.704"
            x2="271.773"
            y2="13.1265"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5BB0FF" />
            <stop offset="1" stopColor="#6F58FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Circle;
