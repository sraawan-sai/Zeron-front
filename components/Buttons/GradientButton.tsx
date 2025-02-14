"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  href?: string;
};

const GradientButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  disabled = false,
  href,
}) => {
  const ButtonContent = (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative inline-flex items-center justify-center transition-all duration-300 ease-in-out",
        "text-white hover:opacity-80 active:scale-95 disabled:opacity-50",
        className
      )}
    >
      {text}
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
