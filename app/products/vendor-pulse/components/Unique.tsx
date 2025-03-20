import Image from "next/image";

const VendorUnique = () => {
  return (
    <div className="relative flex flex-col items-center w-full py-20 bg-[url('/images/crpmfeature.jpg')] bg-cover bg-center bg-no-repeat px-4">
      <h2 className="text-center text-white text-[2.875rem] font-medium leading-[66px] tracking-[-1px] max-w-[920px]">
        Proactive Vendor Risk Management for a Secure Future
      </h2>
      <div className="mt-28 flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-0">
        <div className="flex flex-col gap-4 max-w-[360px] text-center lg:text-left">
          <p className="text-[1.5rem] font-semibold tracking-[-2%] leading-[130%]">
            Gain real-time insights into vendor security posture.
          </p>
          <p className="text-[#E4E2DF] text-[1.125rem] leading-[26px]">
            Continuously monitor vendor security risks with real-time insights
            for proactive threat mitigation.
          </p>
        </div>
        <div className="w-full max-w-[540px] md:max-w-[400px] xl:max-w-[540px]">
          <Image
            src="/images/products/vendor/vendorcircle.svg"
            alt=""
            width={536}
            height={536}
            className=""
          />
        </div>
        <div className="ml-2 xl:ml-14 flex flex-col gap-16 max-w-[260px]">
          <div className="flex flex-col gap-1">
            <div className="relative w-[90px] h-[1px] bg-linear-to-r from-[#1C76FD] to-[#5721F0]">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-linear-to-r from-[#1C76FD] to-[#5721F0]"></div>
            </div>
            <div className="flex flex-col pl-1 gap-2">
              <p className="font-semibold">Proactive Risk Identification</p>
              <p className="font-light text-[#E4E2DF]/75 text-[0.875rem] leading-[18px]">
                Detect vulnerabilities before they impact your business.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="relative w-[90px] h-[1px] bg-linear-to-r from-[#1C76FD] to-[#5721F0]">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-linear-to-r from-[#1C76FD] to-[#5721F0]"></div>
            </div>
            <div className="flex flex-col pl-1 gap-2">
              <p className="font-semibold">Automated Compliance Management</p>
              <p className="font-light text-[#E4E2DF]/75 text-[0.875rem] leading-[18px]">
                Reduce regulatory burdens with continuous monitoring.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="relative w-[90px] h-[1px] bg-linear-to-r from-[#1C76FD] to-[#5721F0]">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-linear-to-r from-[#1C76FD] to-[#5721F0]"></div>
            </div>
            <div className="flex flex-col pl-1 gap-2">
              <p className="font-semibold">Data-Driven Vendor Insights</p>
              <p className="font-light text-[#E4E2DF]/75 text-[0.875rem] leading-[18px]">
                Gain actionable intelligence to strengthen vendor relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorUnique;
