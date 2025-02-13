"use client";

import { FaArrowRight } from "react-icons/fa6";

interface HeaderBarProps {
  isVisible: boolean;
}

function HeaderBar({ isVisible }: HeaderBarProps) {
  return (
    <div
      className={`w-full bg-gradient-to-r from-[#1C76FD] from-[70%] to-[#5721F0] text-white text-center py-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="px-2 grid grid-cols-1 lg:grid-cols-3 items-center gap-2">
        <div className="hidden lg:block"></div>
        <div className="text-center">
          <p>Navigate the Cyber Universe with Precision</p>
        </div>
        <div className="flex justify-end items-center gap-2 pr-4">
          <p className={`text-[0.875rem]`}>Breach? Get Help Now</p>
          <div className="">
            <FaArrowRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
