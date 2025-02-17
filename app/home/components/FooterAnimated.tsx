import GradientButton from "@/components/Buttons/GradientButton";

const FooterAnimatedSection = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto gap-16 px-4 py-12">
      <div className="w-full flex items-center justify-center h-[440px] md:h-[360px] rounded-[16px] overflow-hidden relative">
        <div className="absolute inset-0 w-full h-full">
          <video
            src="/video/wave.mp4"
            autoPlay={true}
            loop
            muted
            className="w-full h-full -z-10 object-cover object-center"
          />
        </div>
        <div className="backdrop-blur-[10px] w-full mx-4 px-2 lg:px-8 my-8 py-8 flex flex-col items-center justify-center text-center max-w-[820px] rounded-[16px]">
          <div className="flex flex-col items-center justify-center  gap-3">
            <p className={`text-[2.625rem] tracking-[-1px] leading-[42px]`}>
              It&apos;s Okay to Not Have All the Answers
            </p>
            <div className="max-w-[680px]">
              <p className={`text-[1.125rem] leading-[22px]`}>
                Cyber threats are complex, but finding solutions doesn’t have to
                be. Let Zeron guide you with data-driven insights and real-time
                risk quantification.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <GradientButton
              text="Request a Demo"
              className="bg-[#003CF5] px-4.5 py-2.5 text-[0.875rem] font-medium rounded-[6px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAnimatedSection;
