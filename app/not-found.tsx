"use client";

import GradientButton from "@/components/Buttons/GradientButton";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 relative">
      <Image
        src="/images/bg50.png"
        alt=""
        fill={true}
        className="object-top object-cover -z-1"
      />
      <p className="text-[6.25rem] leading-[100px] tracking-[-2%]">404</p>
      <div className="flex flex-col text-center">
        <p className="bg-linear-to-r from-[#1C76FD] to-[#5721F0] bg-clip-text text-[2.5rem] text-transparent tracking-[-2%] leading-[44px] md:leading-[60px]">
          Oops, Page Not Found
        </p>
        <div className="max-w-[800px] mb-8">
          <p className="text-[#E4E2DF] text-[1.125rem] leading-[24px]">
            Lost in cyberspace? This page has drifted beyond our galaxy. Let’s
            navigate you back to safety.
          </p>
        </div>
        <GradientButton
          text="Back to Homepage"
          href="/"
          className="px-4.5 py-2.5 text-[0.875rem] font-medium rounded-md cursor-pointer bg-linear-to-r from-[#1C76FD] from-[-7%] to-[#5721F0]"
        />
      </div>
    </div>
  );
}
