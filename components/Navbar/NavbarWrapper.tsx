"use client";

import { useState, useEffect } from "react";
import HeaderBar from "@/components/Navbar/Header/Header";
import Navbar from "@/components/Navbar/Navbar";

function NavbarWrapper() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <HeaderBar isVisible={isHeaderVisible} />
      <div
        className={`${
          isHeaderVisible ? "mt-0" : "-mt-22 md:-mt-14"
        } transition-all duration-300`}
      >
        <Navbar />
      </div>
    </div>
  );
}

export default NavbarWrapper;
