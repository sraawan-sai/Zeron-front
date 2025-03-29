"use client";

import { FaArrowRight } from "react-icons/fa6";

interface HeaderBarProps {
  isVisible: boolean;
}

function HeaderBar({ isVisible }: HeaderBarProps) {
  return (
    <div
      className={`w-full bg-linear-to-r from-[#1C76FD] to-[#5721F0] text-white text-center py-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="px-2 grid grid-cols-1 lg:grid-cols-3 items-center font-medium gap-2">
        <div className="hidden lg:block"></div>
        <div className="text-center">
          <p className="md:whitespace-nowrap">
            Navigate the Cyber Universe with Precision
          </p>
        </div>
        <div className="flex justify-end items-center gap-2 pr-2 md:pr-5.5">
          <div className="group flex gap-2 hover:underline transition-all duration-300 cursor-pointer">
            <p className={`text-[0.875rem]`}>Breach? Get Help Now</p>
            <div className="group-hover:-rotate-45 group-hover:scale-110 transition-all duration-500">
              <FaArrowRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
