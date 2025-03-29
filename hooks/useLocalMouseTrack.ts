"use client";

import { useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

const initialPosition: MousePosition = { x: -1000, y: -1000 };

export const useLocalMouseTrack = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>(initialPosition);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const resetMousePosition = () => {
    setMousePosition(initialPosition);
  };

  return { mousePosition, handleMouseMove, resetMousePosition };
};
