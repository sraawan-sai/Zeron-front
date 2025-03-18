import Link from "next/link";

const ProductsNavbar = () => {
  // Define the links for each column
  const productLinks = [
    { label: "CRPM", href: "/products/crpm" },
    { label: "QBER MODEL", href: "/products/qber" },
    { label: "Attack Module", href: "/products/attack-module" },
    { label: "Compliance Module", href: "/products/compliance-module" },
    { label: "Defence Module", href: "/products/defense-module" },
  ];

  const vendorLinks = [
    { label: "Vendor Pulse", href: "/" },
    { label: "Cyber Insure Pulse", href: "/" },
  ];

  const solutionsLinks = [
    { label: "By Use case", href: "/" },
    { label: "By Industry", href: "/" },
    { label: "By Persona", href: "/" },
  ];

  const othersLinks = [
    { label: "ZIN", href: "/" },
    { label: "Integration", href: "/" },
    { label: "Deployment", href: "/" },
    { label: "Strategic Service", href: "/" },
    { label: "Managed Service", href: "/" },
    { label: "Support", href: "/" },
  ];

  return (
    <div className="w-full flex justify-between gap-4">
      {/* Column 1: Product */}
      <div className="flex flex-col w-full">
        <div className="border-b border-[#403B60] py-[10px]">
          <p className="text-white font-medium">Product</p>
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
        <div className="mt-[10px] flex flex-col gap-[10px] border-t border-[#403B60] text-[0.875rem] text-white/50 py-[10px]">
          {vendorLinks.map((link, index) => (
            <Link
              key={`vendor-${index}`}
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
          <p className="text-white font-medium">Solutions</p>
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
          <p className="text-white font-medium">Others</p>
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

export default ProductsNavbar;
