import Link from "next/link";

const PartnersDropdown = () => {
  const partnersLinks = [
    { label: "MSPP", href: "/" },
    { label: "Technology Alliances", href: "/" },
    { label: "Cyber Risk Consultant", href: "/" },
    { label: "SI", href: "/" },
    { label: "Marketplace", href: "/" },
  ];

  return (
    <div className="w-full flex justify-between gap-4">
      <div className="flex flex-col w-full">
        <div className="my-[10px] flex flex-col gap-[10px] text-[0.875rem] text-white/50">
          {partnersLinks.map((link, index) => (
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
    </div>
  );
};

export default PartnersDropdown;
