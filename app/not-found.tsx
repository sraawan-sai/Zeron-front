"use client";

import GradientButton from "@/components/Buttons/GradientButton";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <Image
        src="/images/arcnew.png"
        alt="404 background"
        fill
        priority
        className="object-cover object-top -z-10 pt-[40%] sm:pt-[10%] md:pt-[20%] lg:pt-[17%]"
      />

      <p className="text-[5rem] sm:text-[6.25rem] leading-[100px] tracking-[-2%] z-10">404</p>

      <div className="flex flex-col text-center z-10">
        <p className="bg-gradient-to-r from-[#1C76FD] to-[#5721F0] bg-clip-text text-[2rem] sm:text-[2.5rem] text-transparent tracking-[-2%] leading-[44px] md:leading-[60px]">
          Oops, Page Not Found
        </p>
        <div className="max-w-[800px] mb-8 px-4">
          <p className="text-[#E4E2DF] text-[1rem] sm:text-[1.125rem] leading-[24px]">
            Lost in cyberspace? This page has drifted beyond our galaxy. Let’s
            navigate you back to safety.
          </p>
        </div>
        <GradientButton
          text="Back to Homepage"
          href="/"
          className="px-4.5 py-2.5 text-[0.875rem] font-medium rounded-md cursor-pointer bg-gradient-to-r from-[#1C76FD] from-[-7%] to-[#5721F0]"
        />
      </div>
    </div>
  );
}
