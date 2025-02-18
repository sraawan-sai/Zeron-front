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
      className="flex flex-col gap-4 bg-gradient-to-r from-[#5BB0FF] to-[#6F58FF] rounded-[8px] px-5.5 pt-4 pb-6 relative"
    >
      <div className="flex items-center gap-2">
        <div className="flex">
          <Image src="/icons/shield.svg" alt="" width={48} height={48} />
        </div>
        <p className={`text-[1.375rem]`}>{title}</p>
      </div>
      <form className="flex items-center gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your domain..."
          className="bg-[#1A3265] rounded-[6px] border border-[#6F58FF] px-4 py-2"
          value={domain}
          onChange={handleChange}
        />
        <GradientButton
          text="Search"
          type="submit"
          className="px-4 py-2 rounded-[6px] cursor-pointer bg-gradient-to-r from-[#1C76FD] to-[#5721F0]"
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
