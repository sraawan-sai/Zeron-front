"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex flex-col"
    >
      <HeaderBar isVisible={isHeaderVisible} />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className={`${
          isHeaderVisible ? "mt-0" : "-mt-21.25 lg:-mt-14"
        } transition-all duration-300`}
      >
        <Navbar />
      </motion.div>
    </motion.div>
  );
}

export default NavbarWrapper;
