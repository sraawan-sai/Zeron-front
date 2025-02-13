import Heading from "@/components/Layout/Heading";
import Image from "next/image";
import clsx from "clsx";

const statsData = [
  { title: "$1.8 Billion", subtitle: "Monetary Risk Saved" },
  { title: "$1.8 Billion", subtitle: "Monetary Risk Saved" },
  { title: "$1.8 Billion", subtitle: "Monetary Risk Saved" },
  { title: "$1.8 Billion", subtitle: "Monetary Risk Saved" },
  { title: "$1.8 Billion", subtitle: "Monetary Risk Saved" },
  { title: "$1.8 Billion", subtitle: "Monetary Risk Saved" },
  { title: "$1.8 Billion", subtitle: "Monetary Risk Saved" },
  { title: "$1.8 Billion", subtitle: "Monetary Risk Saved" },
];

function Stats() {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto gap-16 px-4 py-10">
      <Heading
        title="Single Point of Truth for Cyber Risk Management"
        subtitle="Quantifying Risks | Prioritizing Action | Achieve Resilience"
        subtitleSize="text-[1.75rem]"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 w-full relative">
        {/* Background Image */}
        <div className="select-none absolute inset-0">
          <Image
            src="/images/bg1.png"
            alt="bg"
            fill
            className="object-cover object-center -z-10"
          />
        </div>

        {/* Grid Items */}
        {statsData.map((data, index) => (
          <div
            key={index}
            className={clsx(
              "z-10 hover:bg-gradient-to-r from-[#1C76FD] to-[#5721F0] transition-colors duration-500 min-h-50 flex flex-col items-center justify-center p-6 border-[#1C76FD]/70",

              // Default (Mobile: 2 Columns)
              index % 2 !== 0 && "border-l",
              index >= 2 && "border-t",

              // Tablet & Desktop (4 Columns)
              "md:border-t",
              index % 4 !== 0 && "md:border-l",
              index < 4 && "md:border-t-0"
            )}
          >
            <p className="text-center text-[1.5rem] font-medium">
              {data.title}
            </p>
            <p className="text-center text-[0.625rem]">{data.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
