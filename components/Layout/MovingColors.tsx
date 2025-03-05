"use client";

import { useState } from "react";

interface MovingColorsProps {
  upsideDown?: boolean;
}

const MovingColors: React.FC<MovingColorsProps> = ({ upsideDown = false }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="animate-gradient bg-[length:300%] w-full h-[100px] bg-linear-to-r/oklch from-[#206FFC] via-[#45AFC9] to-[#5327F1] brightness-160 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2) 80px, transparent 160px)`
            : "transparent",
        }}
      />

      {/* Gradient overlay for upsideDown prop */}
      {upsideDown ? (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0A0118] to-transparent" />
      ) : (
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#0A0118] to-transparent" />
      )}
    </div>
  );
};

export default MovingColors;