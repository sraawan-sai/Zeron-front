"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
  text:React.ReactNode ;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  href?: string;
  type?: "button" | "submit" | "reset";
};

const GradientButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  disabled = false,
  href,
  type = "button",
}) => {
  const ButtonContent = (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative inline-flex items-center justify-center transition-all duration-300 ease-in-out",
        "text-white group active:scale-95 disabled:opacity-50",
        className
      )}
    >
      <div className="myButton group-hover:opacity-100 opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%+5px)] h-[calc(100%+5px)] rounded-[6px] -z-1 transition-all duration-500" />
      <span className="relative">{text}</span>
    </button>
  );

  if (href) {
    return (
      <Link href={href} passHref>
        {ButtonContent}
      </Link>
    );
  }

  return ButtonContent;
};

export default GradientButton;
