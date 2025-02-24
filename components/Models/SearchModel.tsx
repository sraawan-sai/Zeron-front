"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import GradientButton from "../Buttons/GradientButton";

interface SearchModelProps {
  title: string;
}

const SearchModel = ({ title }: SearchModelProps) => {
  const [domain, setDomain] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!domain.trim()) {
      setError("*Cannot be empty");
      return;
    }
    setError("");
    alert(`Form submitted with domain: ${domain}`);
    console.log("Form submitted with domain:", domain);
    setDomain("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDomain(value);
    if (value.trim() === "") {
      setError("*Cannot be empty");
    } else {
      setError("");
    }
  };

  return (
    <div
      id="linkTop"
      className="backdrop-blur-[8px] w-full max-w-[400px] flex flex-col gap-4 bg-[#4285F4]/23 border border-[#6F58FF]/80 rounded-[8px] px-5.5 pt-4 pb-6 relative"
    >
      <div className="flex items-center gap-2">
        <div className="flex">
          <Image
            src="/icons/shield.svg"
            alt=""
            width={48}
            height={48}
            className="min-w-12 min-h-12"
          />
        </div>
        <p className={`text-[1.375rem] whitespace-nowrap`}>{title}</p>
      </div>
      <form className="flex items-center gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your domain..."
          className="w-full  bg-[#1A3265] rounded-[6px] border border-[#6F58FF] px-4 py-2 h-[40px] focus:outline-none"
          value={domain}
          onChange={handleChange}
        />
        <GradientButton
          text="Search"
          type="submit"
          className="px-4 py-2 rounded-[6px] cursor-pointer bg-linear-to-r from-[#5721F0] to-[#1C76FD] h-[40px]"
        />
      </form>
      <div
        className={`${
          error ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        } absolute bottom-0 px-2 mb-1.5 transition-all duration-300 overflow-hidden`}
      >
        <p className="text-[0.5rem] text-red-500 font-medium">{error}</p>
      </div>
    </div>
  );
};

export default SearchModel;
