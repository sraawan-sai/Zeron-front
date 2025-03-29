import CustomSection from "@/components/Layout/CustomSection";

const DefenseBanner = () => {
  return (
    <div className="relative w-full flex items-center justify-center bg-[url('/images/bg1.png')] bg-cover bg-bottom bg-no-repeat py-25 px-4 md:px-20 overflow-clip">
      <div className="absolute -bottom-10 -left-40 bg-[url('/images/stripes.png')] bg-cover bg-center bg-no-repeat h-[300px] w-full max-w-[400px] opacity-80 -rotate-10 mix-blend-color-dodge" />
      <div className="absolute -top-10 -right-10 bg-[url('/images/stripes.png')] bg-cover bg-center bg-no-repeat h-[200px] w-[200px] opacity-80 -rotate-90 mix-blend-color-dodge" />
      <CustomSection className="flex-col items-center justify-center text-center gap-12.5">
        <p className="text-[3rem] leading-[52px] tracking-[-1px] max-w-[900px]">
          Experience Zeron in Action – Get Your Personalized Walkthrough
        </p>
        <div className="flex gap-4">
          <div className="bg-linear-to-r from-[#1C76FD] to-[#5721F0] rounded-[8px] px-4 py-3">
            Request a Demo
          </div>
        </div>
      </CustomSection>
    </div>
  );
};

export default DefenseBanner;
