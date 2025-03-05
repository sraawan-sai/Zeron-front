"use client";

import { useEffect, useRef } from "react";

const StarsBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create a single star with its wrapper for individual parallax.
    function createStar() {
      const wrapper = document.createElement("div");
      wrapper.classList.add("star-wrapper");
      if (container) {
        container.appendChild(wrapper);
      }

      const star = document.createElement("div");
      star.classList.add("star");
      wrapper.appendChild(star);

      // Random horizontal starting position within the viewport
      star.style.left = Math.random() * window.innerWidth + "px";

      //if the star should be blurred (30% chance)
      const isBlurred = Math.random() < 0.3;
      let size;
      if (isBlurred) {
        size = Math.random() * 1 + 0.5; // size between 0.5px and 1.5px
        star.style.filter = "blur(1px)";
      } else {
        size = Math.random() * 4 + 1; // size between 1px and 5px
      }
      star.style.width = size + "px";
      star.style.height = size + "px";

      // Set a random horizontal offset for variation in falling angle
      const xOffset = Math.random() * 100 - 50;
      star.style.setProperty("--x-offset", xOffset + "px");

      // Slow falling
      const fallDuration = Math.random() * 10 + 30;
      star.style.animationDuration = fallDuration + "s";
      // Set a random negative animation delay so that stars are at various stages of their fall
      star.style.animationDelay = `-${Math.random() * fallDuration}s`;

      // Random depth for parallax (between 0.2 and 0.8)
      const depth = Math.random() * 0.6 + 0.2;
      wrapper.style.setProperty("--depth", depth.toString());

      // Remove the star wrapper after its animation completes
      setTimeout(() => {
        if (wrapper.parentNode) {
          wrapper.parentNode.removeChild(wrapper);
        }
      }, fallDuration * 1000);
    }

    // Pre-populate the screen with stars
    for (let i = 0; i < 50; i++) {
      createStar();
    }
    const intervalId = setInterval(createStar, 200);

    // Mousemove event listener for the parallax effect.
    const handleMouseMove = (e: MouseEvent) => {
      const offsetX = (e.clientX - window.innerWidth / 2) * 0.05;
      const offsetY = (e.clientY - window.innerHeight / 2) * 0.05;
      container.querySelectorAll(".star-wrapper").forEach((wrapper) => {
        const depth = parseFloat(
          getComputedStyle(wrapper).getPropertyValue("--depth")
        );
        (wrapper as HTMLElement).style.transform = `translate(${
          offsetX * depth
        }px, ${offsetY * depth}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={containerRef} className="star-container" />;
};

export default StarsBackground;
