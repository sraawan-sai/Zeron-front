import Link from "next/link";

const CompanyDropdown = () => {
  const productLinks = [
    { label: "Vision", href: "/" },
    { label: "Mission", href: "/" },
    { label: "Core Values", href: "/" },
    { label: "Timeline Highlights", href: "/" },
  ];

  const solutionsLinks = [
    { label: "Team & Culture", href: "/" },
    { label: "Careers", href: "/" },
    { label: "By Persona", href: "/" },
  ];

  const othersLinks = [
    { label: "Investors", href: "/" },
    { label: "Community", href: "/" },
    { label: "Recognition", href: "/" },
    { label: "Customer & Testimonials", href: "/" },
  ];

  return (
    <div className="w-full flex justify-between gap-4">
      {/* Column 1: Product */}
      <div className="flex flex-col w-full">
        <div className="border-b border-[#403B60] py-[10px]">
          <p className="text-white font-medium">About Zeron</p>
        </div>
        <div className="my-[10px] flex flex-col gap-[10px] text-[0.875rem] text-white/50">
          {productLinks.map((link, index) => (
            <Link
              key={`product-${index}`}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Column 2: Solutions */}
      <div className="flex flex-col w-full">
        <div className="border-b border-[#403B60] py-[10px]">
          <p className="text-white font-medium">Internal</p>
        </div>
        <div className="flex flex-col gap-[10px] text-[0.875rem] text-white/50 mt-[10px]">
          {solutionsLinks.map((link, index) => (
            <Link
              key={`solutions-${index}`}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Column 3: Others */}
      <div className="flex flex-col w-full">
        <div className="border-b border-[#403B60] py-[10px]">
          <p className="text-white font-medium">External</p>
        </div>
        <div className="flex flex-col gap-[10px] text-[0.875rem] text-white/50 mt-[10px]">
          {othersLinks.map((link, index) => (
            <Link
              key={`others-${index}`}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyDropdown;
