import Image from "next/image";

const InsureUnique = () => {
  return (
    <div className="relative flex flex-col items-center w-full py-20 px-4">
      <h2 className="text-center text-white text-[2.875rem] font-medium leading-[66px] tracking-[-1px] max-w-[920px]">
        Proactive Vendor Risk Management for a Secure Future
      </h2>
      <div className="mt-28 flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-0">
        <div className="flex flex-col gap-16 max-w-[360px] text-center lg:text-left">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col pl-1 gap-2">
              <p className="font-semibold">Proactive Risk Identification</p>
              <p className="font-light text-[#E4E2DF]/75 text-[0.875rem] leading-[18px]">
                Detect vulnerabilities before they impact your business.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col pl-1 gap-2">
              <p className="font-semibold">Automated Compliance Management</p>
              <p className="font-light text-[#E4E2DF]/75 text-[0.875rem] leading-[18px]">
                Reduce regulatory burdens with continuous monitoring.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col pl-1 gap-2">
              <p className="font-semibold">Data-Driven Vendor Insights</p>
              <p className="font-light text-[#E4E2DF]/75 text-[0.875rem] leading-[18px]">
                Gain actionable intelligence to strengthen vendor relationships.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[540px] md:max-w-[400px] xl:max-w-[540px]">
          <Image
            src="/images/products/insure/insureunique.svg"
            alt=""
            width={540}
            height={540}
            className=""
          />
        </div>
        <div className="ml-2 xl:ml-14 flex flex-col gap-16 max-w-[260px]">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col pl-1 gap-2">
              <p className="font-semibold">Proactive Risk Identification</p>
              <p className="font-light text-[#E4E2DF]/75 text-[0.875rem] leading-[18px]">
                Detect vulnerabilities before they impact your business.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col pl-1 gap-2">
              <p className="font-semibold">Automated Compliance Management</p>
              <p className="font-light text-[#E4E2DF]/75 text-[0.875rem] leading-[18px]">
                Reduce regulatory burdens with continuous monitoring.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col pl-1 gap-2">
              <p className="font-semibold">Data-Driven Vendor Insights</p>
              <p className="font-light text-[#E4E2DF]/75 text-[0.875rem] leading-[18px]">
                Gain actionable intelligence to strengthen vendor relationships.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-22 relative flex flex-col items-center w-full py-10 text-center font-semibold">
        {/* Text Labels */}
        <div className="flex justify-between w-full md:max-w-[60%] mb-2">
          <p className="">Lorem Ipsum</p>
          <p className="">Lorem Ipsum</p>
          <p className="">Lorem Ipsum</p>
        </div>

        {/* Line with Circles */}
        <div className="mt-7.5 relative w-full md:max-w-[calc(60%-100px)] flex items-center">
          {/* Left Circle */}
          <div className="w-1 h-1 bg-white/50 rounded-full absolute left-0 top-1/2 -translate-y-1/2"></div>

          {/* Line */}
          <div className="w-full h-[1px] bg-white/50"></div>

          {/* Right Circle */}
          <div className="w-1 h-1 bg-white/50 rounded-full absolute right-0 top-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default InsureUnique;
