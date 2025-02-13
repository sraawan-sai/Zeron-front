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

const companyLinks = [
  { label: "Our Customers", href: "/" },
  { label: "Platform", href: "/" },
  { label: "About", href: "/" },
  { label: "Partners", href: "/" },
  { label: "Support", href: "/" },
  { label: "Careers", href: "/" },
  { label: "Legal & Compliance", href: "/" },
  { label: "Security & Compliance", href: "/" },
  { label: "Contact Us", href: "/" },
];

const resourcesLinks = [
  { label: "Blog", href: "/" },
  { label: "Lab", href: "/" },
  { label: "Product Tour", href: "/" },
  { label: "Press", href: "/" },
  { label: "News", href: "/" },
  { label: "FAQ", href: "/" },
  { label: "Resource", href: "/" },
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
      <div className="w-full container mx-auto px-2 md:px-4 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-[1.75fr_1fr_1fr_1fr] gap-10 md:gap-0">
          {/* Logo Section */}
          <div>
            <Image src="/Logo.svg" alt="ZERON" width={240} height={50} />
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
                409, ATL Corporate Park, Saki Vihar Rd, Saki Vihar, Chandivali,
                Mumbai
              </p>
              <p>+91 8927726336</p>
              <p>sales@zeron.one</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#ffffff]/25 flex">
        <div className="container mx-auto flex flex-col md:flex-row px-2 md:px-4">
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
          </div>
          <div className="w-full py-20">
            <div className="flex flex-col gap-3 md:pl-40">
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
                    className="px-3 rounded-[6px] bg-[#003CF5] text-white flex items-center justify-center h-[40px]"
                  >
                    <FaArrowRight size={18} />
                  </button>
                </div>

                {/* Checkbox Section */}
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-[5px] cursor-pointer"
                    required
                  />
                  <div className="max-w-[500px] text-[#7A7A7A]">
                    <p>
                      I understand and agree that my personal data will be
                      collected and processed according to the{" "}
                      <Link href="/" className=" text-[#0F6CBD]">
                        Privacy Policy
                      </Link>
                      *
                    </p>
                  </div>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
