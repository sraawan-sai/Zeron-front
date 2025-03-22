"use client";

// NEXT imports
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// React Icons
import { FaSearch } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";

//Custom Imports
import GradientButton from "../Buttons/GradientButton";
import CustomSection from "../Layout/CustomSection";
import { navLinks } from "@/public/data/navigationLinks";
import ProductsNavbar from "./ProductNav";
import CompanyDropdown from "./CompanyDropdown";
import ResourcesDropdown from "./ResourcesDropdown";
import PartnersDropdown from "./PartnersDropdown";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [partnersDropdownOpen, setPartnersDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => {
      return !prev;
    });
  };

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen((prev) => !prev);
  };

  const toggleCompanyDropdown = () => {
    setCompanyDropdownOpen((prev) => !prev);
  };

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen((prev) => !prev);
  };

  const togglePartnersDropdown = () => {
    setPartnersDropdownOpen((prev) => !prev);
  };

  return (
    <div
      className={`${
        sidebarOpen ? "" : "backdrop-blur-[6px]"
      } w-full flex items-center justify-center py-3.5 transition-all duration-500 bg-[#040C26]/23 border-b border-[#6100FF]/10 relative`}
    >
      <CustomSection className="md:px-5.5!">
        <div className="w-full grid grid-cols-2 md:grid-cols-3">
          {/* GRID 1: Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/Logo.svg" alt="ZERON" width={120} height={25} />
          </Link>
          {/* GRID 2: NavLinks */}
          <div className="flex items-center justify-end md:justify-center">
            <div className="hidden lg:flex justify-center items-center gap-6">
              {navLinks.map((link, index) => (
                <div
                  key={`${link.href}-${index}`}
                  className="relative whitespace-nowrap"
                >
                  {link.label === "Products" ? (
                    <div
                      onMouseEnter={toggleProductsDropdown}
                      onMouseLeave={toggleProductsDropdown}
                      className="cursor-pointer"
                    >
                      <p className="text-[0.875rem] hover:text-[#6100FF] transition-colors duration-200">
                        {link.label}
                      </p>
                      {/* Dropdown for Products */}
                      <div
                        className={`absolute top-full left-[30%] -translate-x-[30%] 2xl:left-1/2 2xl:-translate-x-1/2 w-[750px] cursor-default transition-opacity duration-300 ${
                          productsDropdownOpen
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <div
                          className={`px-8 py-6 mt-9 relative w-full bg-[#000D38] border-[0.5px] border-[#3B24B2] rounded-[8px] drop-shadow-[0_0_15px_rgba(184,57,149,0.1)] transition-transform duration-500 ${
                            productsDropdownOpen
                              ? "translate-y-0"
                              : "-translate-y-4"
                          }`}
                        >
                          <ProductsNavbar />
                        </div>
                      </div>
                    </div>
                  ) : link.label === "Company" ? (
                    <div
                      onMouseEnter={toggleCompanyDropdown}
                      onMouseLeave={toggleCompanyDropdown}
                      className="cursor-pointer"
                    >
                      <p className="text-[0.875rem] hover:text-[#6100FF] transition-colors duration-200">
                        {link.label}
                      </p>
                      {/* Dropdown for Company */}
                      <div
                        className={`absolute top-full left-[40%] -translate-x-[40%] 2xl:left-1/2 2xl:-translate-x-1/2 w-[750px] cursor-default transition-opacity duration-300 ${
                          companyDropdownOpen
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <div
                          className={`px-8 py-6 mt-9 relative w-full bg-[#000D38] border-[0.5px] border-[#3B24B2] rounded-[8px] drop-shadow-[0_0_15px_rgba(184,57,149,0.1)] transition-transform duration-500 ${
                            companyDropdownOpen
                              ? "translate-y-0"
                              : "-translate-y-4"
                          }`}
                        >
                          <CompanyDropdown />
                        </div>
                      </div>
                    </div>
                  ) : link.label === "Resources" ? (
                    <div
                      onMouseEnter={toggleResourcesDropdown}
                      onMouseLeave={toggleResourcesDropdown}
                      className="cursor-pointer"
                    >
                      <p className="text-[0.875rem] hover:text-[#6100FF] transition-colors duration-200">
                        {link.label}
                      </p>
                      {/* Dropdown for Resources */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-[160px] cursor-default transition-opacity duration-300 ${
                          resourcesDropdownOpen
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <div
                          className={`px-6 py-4 mt-9 relative w-full bg-[#000D38] border-[0.5px] border-[#3B24B2] rounded-[8px] drop-shadow-[0_0_15px_rgba(184,57,149,0.1)] transition-transform duration-500 ${
                            resourcesDropdownOpen
                              ? "translate-y-0"
                              : "-translate-y-4"
                          }`}
                        >
                          <ResourcesDropdown />
                        </div>
                      </div>
                    </div>
                  ) : link.label === "Partners" ? (
                    <div
                      onMouseEnter={togglePartnersDropdown}
                      onMouseLeave={togglePartnersDropdown}
                      className="cursor-pointer"
                    >
                      <p className="text-[0.875rem] hover:text-[#6100FF] transition-colors duration-200">
                        {link.label}
                      </p>
                      {/* Dropdown for Partners */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-[210px] cursor-default transition-opacity duration-300 ${
                          partnersDropdownOpen
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <div
                          className={`px-6 py-4 mt-9 relative w-full bg-[#000D38] border-[0.5px] border-[#3B24B2] rounded-[8px] drop-shadow-[0_0_15px_rgba(184,57,149,0.1)] transition-transform duration-500 ${
                            partnersDropdownOpen
                              ? "translate-y-0"
                              : "-translate-y-4"
                          }`}
                        >
                          <PartnersDropdown />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link href={link.href}>
                      <p className="text-[0.875rem] hover:text-[#6100FF] transition-colors duration-200">
                        {link.label}
                      </p>
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center lg:hidden">
              <IoMenu
                size={24}
                onClick={toggleSidebar}
                className="cursor-pointer"
              />
            </div>
          </div>
          {/* GRID 3: CTA */}
          <div className="hidden md:flex justify-end items-center gap-4">
            <FaSearch size={14} className="cursor-not-allowed" />
            <p className="text-[0.75rem] cursor-pointer">Log in</p>
            <GradientButton
              text="Get a Demo"
              href="/"
              className="px-4.5 py-2.5 text-[0.875rem] font-medium rounded-md cursor-pointer bg-linear-to-r from-[#1C76FD] from-[-7%] to-[#5721F0]"
            />
          </div>
        </div>
      </CustomSection>

      {/* MOBILE NAVBAR */}
      <div
        className={`absolute top-0 left-0 py-6 px-4 md:px-10 w-full h-screen gap-20 bg-[#0A0118]/95 text-white flex flex-col transition-transform duration-500 ${
          sidebarOpen ? "translate-y-0 z-99999" : "translate-y-full"
        }`}
      >
        <div className="grid grid-cols-2">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image src="/Logo.svg" alt="ZERON" width={120} height={25} />
          </Link>
          {/* CLOSE BUTTON */}
          <div className="w-full flex items-center justify-end lg:justify-center">
            <IoClose
              size={24}
              onClick={toggleSidebar}
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* LINKS */}
        <div className="flex flex-grow">
          <ul className="pl-6 space-y-3 text-lg font-medium">
            {navLinks.map((link, index) => (
              <li key={`${link.href}-${index}`}>
                <Link href={link.href} onClick={toggleSidebar}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Footer */}
        <div className="border-t border-white/20 flex gap-1 pt-2">
          <p className="">©2024 Zeron</p>
          <p>|</p>
          <p className="">All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
