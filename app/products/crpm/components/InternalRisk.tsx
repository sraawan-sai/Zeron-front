import CustomSection from "@/components/Layout/CustomSection";
import InternalRiskCircle from "../../../../components/SVG/InternalRiskCircle";
import Image from "next/image";
import Link from "next/link";

const riskItems = [
  {
    icon: "/icons/diamondIcon.png",
    title: "Insider Threat Detection",
    description:
      "Identify anomalous user behavior and prevent internal breaches.",
  },
  {
    icon: "/icons/diamondIcon.png",
    title: "Access Control Management",
    description:
      "Ensure least privilege access and prevent unauthorized activities.",
  },
  {
    icon: "/icons/diamondIcon.png",
    title: "Configuration Risk Monitoring",
    description:
      "Detect and remediate misconfigurations across your security stack.",
  },
];

const InternalRisk = () => {
  return (
    <div className="relative w-full flex min-h-screen">
      <div className="hidden lg:block absolute top-1/2 left-[-600px] transform -translate-y-1/2 -z-1">
        <InternalRiskCircle />
      </div>
      <CustomSection>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[1fr_3fr] py-32">
          <div className=""></div>
          <div className="w-full flex flex-col items-center">
            <p className="font-medium text-[1.5rem] leading-[52px] tracking-[-1px]">
              Internal Risk | Zeron Defence
            </p>
            <p className="mt-8 text-[3rem] leading-[52px] tracking-[-1px] text-center max-w-[600px]">
              Strengthen Your Security from Within
            </p>
            <p className="mt-2 text-[#E4E2DF]/70 text-[1.25rem] leading-[24px] max-w-[1000px] text-center">
              Internal vulnerabilities can be just as damaging as external
              threats. Our internal risk modules help you monitor, assess, and
              mitigate insider threats, misconfigurations, and security gaps
              within your
            </p>
            <div className="mt-11 w-full max-w-[650px] flex flex-col gap-6">
              {riskItems.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-[1.5rem]">{item.title}</p>
                    <p className="text-[#E4E2DF]/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="#" className="underline">
                Know More
              </Link>
            </div>
            <div className="mt-20 flex gap-4">
              <div className="rounded-[8px] border border-[#5721F0] cursor-pointer px-6 py-4">
                <p className="font-medium">Previous</p>
              </div>
              <div className="rounded-[8px] border border-[#5721F0] bg-linear-to-r from-[#1C76FD] to-[#5721F0] cursor-pointer px-6 py-4">
                <p className="font-medium">Next</p>
              </div>
            </div>
          </div>
        </div>
      </CustomSection>
    </div>
  );
};

export default InternalRisk;
