import Heading from "@/components/Layout/Heading";
import Image from "next/image";

const cardData = [
  {
    title: "Attack Surface",
    icon: "/icons/attack.svg",
    desc: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    title: "Compliance",
    icon: "/icons/compliance.svg",
    desc: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    title: "Defence",
    icon: "/icons/defence.svg",
    desc: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    title: "Vendor Pulse",
    icon: "/icons/pulse.svg",
    desc: "Lorem Ipsum is simply dummy text of the printing",
  },
];

function Overview() {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto gap-16 px-4 py-20">
      <Heading
        title="Securing Your Digital Galaxy with"
        subtitle="Precision and Power"
        description="In a world of evolving cyber threats, Zeron helps you quantify risk, manage third-party security, automate compliance, and strengthen defense—turning complex data into clear, actionable insights."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {cardData.map((data, index) => (
          <div key={index} className="group relative">
            {/* <div className="group-hover:block hidden absolute -bottom-10 -z-10 w-40 h-40 rounded-full bg-[#9747FF]/70 blur-md"></div> */}
            <div className="hover:bg-[#0088FF]/10 group border border-[#292929] hover:border-[#6F58FF] rounded-[8px] flex flex-col items-center justify-between gap-10 py-4 px-6 overflow-hidden relative transition-colors duration-500 hover:shadow-[0_15px_40px_2px_#9747FF66]">
              <div className="group-hover:opacity-0 transition-all duration-300">
                <Image
                  src={data.icon}
                  alt={data.title}
                  width={80}
                  height={80}
                  className="min-h-[80px]"
                />
              </div>
              <div className="group-hover:-translate-y-28 transition-all duration-500">
                <p>{data.title}</p>
              </div>
              <div className="text-center absolute bottom-0 translate-y-4 group-hover:-translate-y-4 transition-all duration-700 opacity-0 group-hover:opacity-100">
                {data.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;
