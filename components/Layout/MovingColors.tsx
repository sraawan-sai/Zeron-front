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
      className="animate-gradient bg-[length:300%] w-full h-[100px] bg-linear-to-r/oklch from-[#0033FF] via-[#6ED4FF] to-[#745AFF] brightness-160 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetMousePosition();
      }}
    >
      <div
        className="z-999 absolute w-40 h-40 rounded-full blur-2xl transition-opacity duration-700 ease-in-out"
        style={{
          background: "linear-gradient(90deg, #4d94ff -5.79%, #8355f3 105.13%)",
          opacity: isHovered ? 1 : 0,
          transform: `translate(${mousePosition.x - halfDot}px, ${
            mousePosition.y - halfDot
          }px)`,
        }}
      ></div>
      {upsideDown ? (
        <div className="absolute top-0 left-0 w-full h-[50px] bg-gradient-to-b from-[#0A0118] to-transparent" />
      ) : (
        <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-[#0A0118] to-transparent" />
      )}
    </div>
  );
};

export default MovingColors;
