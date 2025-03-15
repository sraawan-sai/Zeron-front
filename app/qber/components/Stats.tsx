import CustomSection from "@/components/Layout/CustomSection";

const QberStats = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[url('/images/bg1.png')] bg-cover bg-center bg-no-repeat py-25 px-20">
      <CustomSection className="px-20 flex-col md:flex-row items-center justify-center">
        <div className="max-w-[460px] group hover:bg-gradient-to-r from-[#1C76FD] to-[#5721F0] transition-colors duration-500 w-full border border-[#5721F0] py-16 flex flex-col items-center justify-center gap-4">
          <p className="font-medium text-[1.375rem] leading-[22.8px]">4.1M+</p>
          <p className="text-[0.75rem] leading-[11.4px] text-[#E8E7EC]">
            Signals Processed
          </p>
        </div>
        <div className="max-w-[460px] group hover:bg-gradient-to-r from-[#1C76FD] to-[#5721F0] transition-colors duration-500 w-full border border-[#5721F0] py-16 flex flex-col items-center justify-center gap-4">
          <p className="font-medium text-[1.375rem] leading-[22.8px]">$1.2B</p>
          <p className="text-[0.75rem] leading-[11.4px] text-[#E8E7EC]">
            Worth of cyber risk analysed
          </p>
        </div>
      </CustomSection>
    </div>
  );
};

export default QberStats;
