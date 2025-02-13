"use client";

import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const navLinks = [
  { label: "Products", href: "/" },
  { label: "Resources", href: "/" },
  { label: "Company", href: "/" },
  { label: "Partners", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Pricing", href: "/" },
];

function Navbar() {
  return (
    <div className="w-full py-4 transition-all duration-300 bg-[#040C26]/90 border-b border-[#6100FF]/10">
      <div className="w-full container mx-auto px-2 md:px-4">
        <div className="grid grid-cols-2 md:grid-cols-3">
          <div className="">
            <Image src="/Logo.svg" alt="ZERON" width={120} height={25} />
          </div>
          <div className="hidden md:flex justify-center items-center gap-6">
            {navLinks.map((link, index) => (
              <Link key={`${link.href}-${index}`} href={link.href}>
                <p className="hover:text-[#6100FF] transition-colors duration-200">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex justify-end items-center gap-6">
            <FaSearch size={16} />
            <p>Log in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
