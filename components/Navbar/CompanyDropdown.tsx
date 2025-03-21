import Link from "next/link";

const CompanyDropdown = () => {
  const productLinks = [
    { label: "About Us", href: "/" },
    { label: "Mission & Vision", href: "/" },
    { label: "Timeline Highlights", href: "/" },
  ];

  const solutionsLinks = [
    { label: "Team & Culture", href: "/" },
    { label: "Careers", href: "/" },
  ];

  const othersLinks = [
    { label: "Investors", href: "/" },
    { label: "Community", href: "/" },
    { label: "Recognition", href: "/" },
    { label: "Customer & Testimonials", href: "/" },
  ];

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Column 1: Product */}
      <div className="border-b border-[#403B60] py-2.5">
        <p className="text-white font-medium">About Zeron</p>
      </div>
      <div className="w-full flex justify-between gap-4">
        <div className="flex flex-col w-full">
          <div className="my-[10px] flex flex-col gap-[10px] text-[0.875rem] text-white/50">
            {productLinks.map((link, index) => (
              <div key={`product-${index}`} className="">
                <Link
                  href={link.href}
                  className="hover:text-white hover:border-b border-white hover:px-2 hover:py-1 transition-all duration-300"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Others */}
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-4 text-[0.875rem] text-white/50 mt-[10px]">
            {othersLinks.map((link, index) => (
              <div key={`others-${index}`} className="">
                <Link
                  href={link.href}
                  className="hover:text-white hover:border-b border-white hover:px-2 hover:py-1 transition-all duration-300"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Solutions */}
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-[10px] text-[0.875rem] text-white/50 mt-[10px]">
            {solutionsLinks.map((link, index) => (
              <div key={`solutions-${index}`} className="">
                <Link
                  href={link.href}
                  className="hover:text-white hover:border-b border-white hover:px-2 hover:py-1 transition-all duration-300"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDropdown;
