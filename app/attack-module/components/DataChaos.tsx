import Image from "next/image";

const dataSections = [
  {
    title: "Identify Assets",
    description:
      "Uncover every externally visible asset—domains, IPs, cloud instances, and more—before attackers do.",
    imageSrc: "/images/chaos1.svg",
  },
  {
    title: "Discover vulnerabilities",
    description:
      "Identify CVEs, uncover security gaps, and automate exposure discovery across your external attack surface.",
    imageSrc: "/images/chaos1.svg",
  },
  {
    title: "Map exposures",
    description:
      "Map asset relationships, uncover exposure points, and gain a unified view of your attack surface.",
    imageSrc: "/images/chaos1.svg",
  },
];

const DataChaos = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto py-20">
      <div className="w-full max-w-[650px]">
        <h2 className="text-white text-center text-[3rem] leading-[130%]">
          Transforming Data Chaos into Cosmic Clarity
        </h2>
      </div>
      <div className="px-4 mt-25 w-full flex flex-col gap-6 items-center justify-center relative">
        {dataSections.map((section, index) => (
          <div key={index} className="sticky top-24 w-full">
            <div className="px-4 py-6 relative w-full max-w-[1248px] min-h-[430px] flex flex-col gap-5 md:gap-0 md:flex-row items-center md:justify-between">
              <div className="absolute inset-0">
                <Image
                  src="/images/lineargradientbg.png"
                  alt=""
                  fill
                  className="object-cover object-center -z-1"
                />
              </div>
              <div className="w-full flex items-center justify-center">
                <div className="flex flex-col items-center w-full text-center gap-2">
                  <p className="text-[2rem] font-semibold">{section.title}</p>
                  <div className="max-w-[250px]">
                    <p className="text-[1.125rem] leading-[26px]">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full relative">
                <div className="w-full">
                  <Image
                    src={section.imageSrc}
                    alt={section.title}
                    width={460}
                    height={300}
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataChaos;
