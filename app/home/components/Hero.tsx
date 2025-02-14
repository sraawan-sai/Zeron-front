import GradientButton from "@/components/Buttons/GradientButton";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full min-h-screen relative -mt-22">
      <Image
        src="/images/herobg.png"
        alt=""
        fill={true}
        className="object-cover object-center -z-10"
      />
      <div className="absolute bottom-0 left-0 w-full">
        <div className="relative w-full min-h-[55vh] 2xl:min-h-[70vh]">
          <Image
            src="/images/arc.png"
            alt=""
            fill={true}
            className="object-cover object-top -z-10"
          />
        </div>
      </div>
      <div className="flex flex-col items-center pt-22">
        <div className="flex flex-col items-center mt-4">
          <p className={`text-[5rem] leading-[5rem]`}>Navigate the Cyber</p>
          <p className={`text-[5rem] leading-[5rem]`}>
            Universe with Precision
          </p>
        </div>
        <div className="mt-4 max-w-[700px] text-center">
          <p>
            In an ever-expanding digital cosmos, Zeron is your guiding
            star—illuminating risks, automating compliance, and defending your
            organization from the unseen threats orbiting your business.
          </p>
        </div>
        <div className="mt-10">
          <GradientButton
            text="Request a Demo"
            href="/"
            className="px-5 py-2 text-[1rem] font-medium rounded-md cursor-pointer bg-gradient-to-r from-[#1C76FD] to-[#5721F0]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
