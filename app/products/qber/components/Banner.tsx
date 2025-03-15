import CustomSection from "@/components/Layout/CustomSection";

const QberBanner = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[url('/images/foot.png')] bg-cover bg-center bg-no-repeat py-25 px-4 md:px-20">
      <CustomSection className="flex-col items-center justify-center text-center gap-12.5">
        <p className="text-[3rem] leading-[52px] tracking-[-1px]">
          Ready to Quantify Your Cyber Risk?
        </p>
        <p className="text-[1.375rem] text-[#E4E2DF] max-w-[900px]">
          Know Your Risk | Reduce Uncertainty | Strengthen SecurityLet QBER
          empower your security strategy with measurable, actionable insights.
        </p>
        <div className="flex gap-4">
          <div className="border border-[#5721F0] rounded-[8px] px-4 py-3">
            Get Started
          </div>
          <div className="bg-linear-to-r from-[#1C76FD] to-[#5721F0] rounded-[8px] px-4 py-3">
            Download Whitepaper
          </div>
        </div>
      </CustomSection>
    </div>
  );
};

export default QberBanner;
