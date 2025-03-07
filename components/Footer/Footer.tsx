"use client";

import Image from "next/image";
import Link from "next/link";
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

function Footer() {
  return (
    <div className="w-full flex flex-col pt-10 gap-6">
      <CustomSection className="flex-col px-4">
        <div className="grid grid-cols-1 md:grid-cols-[1.75fr_1fr_1fr_1fr_1fr] gap-10 md:gap-0">
          {/* Logo Section */}
          <div className="flex flex-col gap-7 max-w-[240px]">
            <div>
              <Image
                src="/Logo.svg"
                alt="ZERON"
                width={240}
                height={50}
                className="w-full h-full"
              />
            </div>
            <div className="flex items-center gap-3.75">
              <Image src="/icons/ISMS.svg" alt="ISMS" width={50} height={50} />
              <Image src="/icons/AICPA.svg" alt="AICPA" width={50} height={50} />
              <Image src="/icons/STAR.svg" alt="STAR" width={50} height={50} />
              <Image src="/icons/START.svg" alt="START" width={50} height={50} />
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <p className="font-medium text-[1.25rem]">Company</p>
            <div className="flex flex-col gap-2 text-[1rem] text-[#ffffff]/50">
              {companyLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  <p className="hover:text-white transition-colors duration-200">
                    {link.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* New to Zeron Links */}
          <div className="flex flex-col gap-4">
            <p className="font-medium text-[1.25rem]">New to Zeron?</p>
            <div className="flex flex-col gap-2 text-[1rem] text-[#ffffff]/50">
              {newToZeronLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  <p className="hover:text-white transition-colors duration-200">
                    {link.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-4">
            <p className="font-medium text-[1.25rem]">Resources</p>
            <div className="flex flex-col gap-2 text-[1rem] text-[#ffffff]/50">
              {resourcesLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  <p className="hover:text-white transition-colors duration-200">
                    {link.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Headquarters Section */}
          <div className="flex flex-col gap-5">
            <p className="font-medium text-[1.25rem]">Headquarters</p>
            <div className="flex flex-col gap-2 text-[1rem] text-[#ffffff]/50">
              <p className={`leading-[18px]`}>
                409, ATL Corporate Park, Saki Vihar Rd, Saki Vihar, Chandivali, Mumbai
              </p>
              <p>+91 8927726336</p>
              <p>sales@zeron.one</p>
            </div>
          </div>
        </div>
      </CustomSection>
      <div className="border-t border-[#ffffff]/25 flex">
        <CustomSection className="flex-col md:flex-row px-4">
          <div className="w-full md:border-r border-[#ffffff]/25 py-20 flex flex-col gap-6">
            <div className="flex gap-10">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href}>
                  {<link.icon size={24} />}
                </Link>
              ))}
            </div>
            <div className="flex flex-col text-[0.875rem]">
              <p>©2025 Zeron.one, All Rights Reserved.</p>
              <p>Teamcognito Solutions Pvt Ltd. All Rights Reserved.</p>
            </div>
            <div className="flex  gap-6 text-[#ffffff]/50 text-sm py-4 ">
        <Link href="/" className="hover:text-white transition-colors duration-200">All Rights Reserved</Link>
        <Link href="/" className="hover:text-white transition-colors duration-200">Privacy</Link>
        <Link href="/" className="hover:text-white transition-colors duration-200">Trust Centre</Link>
        <Link href="/" className="hover:text-white transition-colors duration-200">Media Guidelines</Link>
        <Link href="/" className="hover:text-white transition-colors duration-200">Legal</Link>
      </div>
          </div>
          <div className="w-full py-20">
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

                {/* Checkbox Section */}
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" className="mt-[5px] cursor-pointer" required />
                  <div className="max-w-[500px] text-[#7A7A7A]">
                    <p>
                      I understand and agree that my personal data will be collected and processed according to the{" "}
                      <Link href="/" className=" text-[#0F6CBD]">Privacy Policy</Link> *
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
