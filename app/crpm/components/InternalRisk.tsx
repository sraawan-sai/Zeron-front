import CustomSection from "@/components/Layout/CustomSection";
import InternalRiskCircle from "./Circle";

const InternalRisk = () => {
  return (
    <div className="relative w-full flex min-h-screen">
      <div className="hidden md:block absolute top-1/2 left-[-600px] transform -translate-y-1/2 -z-1">
        <InternalRiskCircle />
      </div>
      <CustomSection>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-[1fr_3fr] py-32">
          <div className=""></div>
          <div className="w-full flex flex-col items-center">
            <p className="font-medium text-[1.5rem] leading-[52px] tracking-[-1px]">
              Internal Risk | Zeron Defence
            </p>
            <p className="mt-8 text-[3rem] leading-[52px] tracking-[-1px] text-center max-w-[600px]">
              Strengthen Your Security from Within
            </p>
            <p className="mt-2 text-[#E4E2DF]/70 text-[1.25rem] leading-[24px] max-w-[1000px]">
              Internal vulnerabilities can be just as damaging as external
              threats. Our internal risk modules help you monitor, assess, and
              mitigate insider threats, misconfigurations, and security gaps
              within your
            </p>
            <div className="mt-11 w-full flex flex-col items-center  gap-6">
              <div className="flex items-center gap-4">
                <div className="">icon</div>
                <div className="flex flex-col">
                  <p className="font-semibold text-[1.5rem]">
                    Insider Threat Detection
                  </p>
                  <p className="text-[#E4E2DF]/60 ">
                    Identify anomalous user behavior and prevent internal
                    breaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomSection>
    </div>
  );
};

export default InternalRisk;
