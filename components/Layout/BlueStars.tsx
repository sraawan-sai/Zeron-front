"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  speed: number;
};

const BlueStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const createStar = (canvasWidth: number): Star => {
    const x = Math.random() * canvasWidth;
    const y = -10;
    const size = 5;
    const speed = Math.random() * 60 + 30;
    return { x, y, size, speed };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const stars = starsRef.current;
    // Pre-populate with some stars.
    for (let i = 0; i < 30; i++) {
      stars.push(createStar(canvas.width));
    }
    // Add new stars periodically.
    const starInterval = setInterval(() => {
      stars.push(createStar(canvas.width));
      // Limit total number of stars.
      if (stars.length > 100) {
        stars.shift();
      }
    }, 300);

    let lastTime = performance.now();

    const animate = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i];
        star.y += star.speed * dt;

        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size
        );
        gradient.addColorStop(0, "#1C76FD");
        // gradient.addColorStop(1, "#5721F0");

        ctx.fillStyle = gradient;
        ctx.shadowBlur = 5;
        ctx.shadowColor = "#5721F0";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Remove stars that have fallen off the bottom.
        if (star.y - star.size > canvas.height) {
          stars.splice(i, 1);
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      clearInterval(starInterval);
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="blue-stars-canvas"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -20,
      }}
    />
  );
};

export default BlueStars;
