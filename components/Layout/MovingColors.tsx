"use client";

import { useState } from "react";
import { useLocalMouseTrack } from "@/hooks/useLocalMouseTrack";

interface MovingColorsProps {
  upsideDown?: boolean;
}

const MovingColors: React.FC<MovingColorsProps> = ({ upsideDown = false }) => {
  const { mousePosition, handleMouseMove, resetMousePosition } =
    useLocalMouseTrack();
  const [isHovered, setIsHovered] = useState(false);
  const dotSize = 160;
  const halfDot = dotSize / 2;

  return (
    <div
      className="blur-[1px] animate-gradient bg-[length:300%] w-full h-[150px] bg-linear-to-r/shorter from-[#206FFC] via-[#45AFC9] to-[#5327F1] relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetMousePosition();
      }}
    >
      <div
        className="z-999 absolute w-40 h-40 rounded-full bg-[#0A0118]/60 blur-xl transition-opacity duration-700 ease-in-out"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: `translate(${mousePosition.x - halfDot}px, ${
            mousePosition.y - halfDot
          }px)`,
        }}
      ></div>
      {upsideDown ? (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0A0118] to-[#0A0118]/40" />
      ) : (
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#0A0118] to-[#0A0118]/40" />
      )}
    </div>
  );
};

export default MovingColors;
