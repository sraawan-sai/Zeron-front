"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaXTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa6";
import CustomSection from "../Layout/CustomSection";

const companyLinks = [
  { label: "About Zeron", href: "/" },
  { label: "Events", href: "/" },
  { label: "Partners", href: "/" },
  { label: "Careers", href: "/" },
  { label: "Investor Relations", href: "/" },
];

const newToZeronLinks = [
  { label: "About the Platform", href: "/" },
  { label: "Explore Platforms", href: "/" },
  { label: "Explore Services", href: "/" },
  { label: "Why Choose Zeron?", href: "/" },
  { label: "Strategic Cyber Investment", href: "/" },
];

const resourcesLinks = [
  { label: "Blog", href: "/" },
  { label: "FAQ", href: "/" },
  { label: "Resources", href: "/" },
  { label: "Communities", href: "/" },
  { label: "Zeron Certifications", href: "/" },
  { label: "Report a Vulnerability", href: "/" },
  { label: "Tech Documents", href: "/" },
];

const socialLinks = [
  { label: "Twitter", href: "https://www.twitter.com/", icon: FaXTwitter },
  { label: "Facebook", href: "https://www.facebook.com/", icon: FaFacebook },
  { label: "Linkedin", href: "https://www.linkedin.com/", icon: FaLinkedin },
  { label: "Youtube", href: "https://www.youtube.com/", icon: FaYoutube },
];

// ✅ Reusable animated link component
const AnimatedLink = ({ href, label }: { href: string; label: string }) => (
  <motion.div
    whileHover={{ x: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="relative"
  >
    <Link href={href}>
      <p className="hover:text-white transition-colors duration-200 relative">
        {label}
        <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-white transition-all duration-300 hover:w-full" />
      </p>
    </Link>
  </motion.div>
);

function Footer() {
  return (
    <div className="border-t border-[#DFE1EF40]/30 w-full flex flex-col pt-10 gap-6">
      <CustomSection className="flex-col">
        <div className="grid grid-cols-1 xl:grid-cols-[1.25fr_4fr] gap-10 xl:gap-0">
          {/* Logo Section */}
          <div className="flex flex-col gap-7">
            <div className="w-full max-w-[240px]">
              <Image
                src="/Logo.svg"
                alt="ZERON"
                width={240}
                height={50}
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-12">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link href={link.href}>{<link.icon size={24} />}</Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
            {/* Company */}
            <div className="flex flex-col gap-4">
              <p className="font-medium text-[1.25rem]">Company</p>
              <div className="flex flex-col gap-2 text-[1rem] text-[#ffffff]/50">
                {companyLinks.map((link) => (
                  <AnimatedLink key={link.label} {...link} />
                ))}
              </div>
            </div>

            {/* New to Zeron */}
            <div className="flex flex-col gap-4">
              <p className="font-medium text-[1.25rem]">New to Zeron?</p>
              <div className="flex flex-col gap-2 text-[1rem] text-[#ffffff]/50">
                {newToZeronLinks.map((link) => (
                  <AnimatedLink key={link.label} {...link} />
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <p className="font-medium text-[1.25rem]">Resources</p>
              <div className="flex flex-col gap-2 text-[1rem] text-[#ffffff]/50">
                {resourcesLinks.map((link) => (
                  <AnimatedLink key={link.label} {...link} />
                ))}
              </div>
            </div>

            {/* Headquarters */}
            <div className="flex flex-col gap-5">
              <p className="font-medium text-[1.25rem]">Headquarters</p>
              <div className="flex flex-col gap-2 text-[1rem] text-[#ffffff]/50">
                <p className="leading-[18px]">
                  409, ATL Corporate Park, Saki Vihar Rd, Saki Vihar,
                  Chandivali, Mumbai
                </p>
                <p>+91 8927726336</p>
                <p>sales@zeron.one</p>
              </div>
            </div>
          </div>
        </div>
      </CustomSection>

      {/* Bottom Section */}
      <div className="border-t border-[#ffffff]/25 flex">
        <CustomSection className="flex-col md:flex-row px-4">
          <div className="w-full md:border-r border-[#ffffff]/25 py-20 flex flex-col gap-6">
            <div className="w-full max-w-[540px] flex flex-col gap-8 items-center justify-center">
              <div className="flex gap-8">
                {["ISMS", "AICPA", "STAR", "START"].map((icon, idx) => (
                  <Image
                    key={idx}
                    src={`/icons/${icon}.svg`}
                    alt={icon}
                    width={74}
                    height={74}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-6 text-sm">
                  {[
                    "All Rights Reserved",
                    "Privacy",
                    "Trust Centre",
                    "Media Guidelines",
                    "Legal",
                  ].map((item, idx) => (
                    <Link key={idx} href="/">
                      {item}
                    </Link>
                  ))}
                </div>
                <p className="text-[0.75rem] text-white text-center font-light tracking-[-0.18px]">
                  ©2025 Zeron.one, All Rights Reserved. Teamcognito Solutions
                  Pvt Ltd. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="w-full md:py-20 pb-10 md:pb-0">
            <div className="flex flex-col gap-3 pl-0 md:pl-20 lg:pl-28 xl:32 2xl:pl-40">
              <p>Sign Up For Our Newsletter</p>
              <form className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    placeholder="Business Email*"
                    className="w-full max-w-[400px] bg-[#E8E7EC]/25 focus:outline-none px-4 py-2 rounded-[6px]"
                    required
                  />
                  <button
                    type="submit"
                    className="px-3 rounded-[6px] bg-[#003CF5] text-white flex items-center justify-center h-[40px] cursor-pointer"
                  >
                    <FaArrowRight size={18} />
                  </button>
                </div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-[5px] cursor-pointer"
                    required
                  />
                  <div className="max-w-[500px] text-[#7A7A7A]">
                    <p>
                      I understand and agree that my personal data will be
                      processed according to the{" "}
                      <Link href="/" className="text-[#0F6CBD]">
                        Privacy Policy
                      </Link>{" "}
                      *
                    </p>
                  </div>
                </label>
              </form>
            </div>
          </div>
        </CustomSection>
      </div>
    </div>
  );
}

export default Footer;
