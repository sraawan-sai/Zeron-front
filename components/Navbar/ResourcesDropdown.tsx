import Link from "next/link";

const ResourcesDropdown = () => {
  const resourceLinks = [
    { label: "Podcast", href: "/" },
    { label: "Webinars", href: "/" },
    { label: "Brochures", href: "/" },
    { label: "White Paper", href: "/" },
    { label: "Research Paper", href: "/" },
    { label: "Case Studies", href: "/" },
    { label: "FAQ", href: "/" },
  ];

  return (
    <div className="w-full flex justify-between gap-4">
      <div className="flex flex-col w-full">
        <div className="my-[10px] flex flex-col gap-[10px] text-[0.875rem] text-white/50">
          {resourceLinks.map((link, index) => (
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

export default ResourcesDropdown;
