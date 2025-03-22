import Link from "next/link";

const ResourcesDropdown = () => {
  const resourceLinks = [
    { label: "Podcast", href: "/resources/podcast" },
    { label: "Webinars", href: "/resources/webinar" },
    { label: "Brochures", href: "/resources/podcast" },
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
    </div>
  );
};

export default ResourcesDropdown;
