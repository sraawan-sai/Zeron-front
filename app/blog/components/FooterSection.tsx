import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const BlogFooterSection = () => {
  return (
    <div className="relative w-full min-h-[600px] flex flex-col items-center justify-center gap-16 py-12">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/bg50.png"
          alt=""
          fill={true}
          className="object-top object-cover opacity-50 -z-1"
        />
      </div>
      <div className="w-full px-4 md:px-25">
        <div className="backdrop-blur-[10px] bg-[#19133F]/50 w-full px-2 md:px-0 py-25 flex flex-col items-center justify-center text-center rounded-[16px]">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="w-full max-w-[700px]">
              <p className="text-[3rem] tracking-[-2%] leading-[130%]">
                Get the Latest Cyber Insights Delivered
              </p>
            </div>
            <div className="max-w-[680px]">
              <p className="text-[1.125rem] leading-[22px] text-white/60">
                At a ipsum bibendum non massa. Tristique tristique odio sed eget
                eget mauris non et. Aliquam erat neque ornare sed facilisis.
              </p>
            </div>
          </div>
          <div className="w-full mt-16 ">
            <form className="w-full">
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2">
                <input
                  type="email"
                  placeholder="Business Email*"
                  className="w-full max-w-[400px] bg-[#E8E7EC]/25 focus:outline-none px-4 py-2 rounded-[6px]"
                  required
                />
                <button
                  type="submit"
                  className="px-3 gap-2 rounded-[6px] bg-[#003CF5] text-white flex items-center justify-center h-[40px] cursor-pointer"
                >
                  <p>Subscribe</p>
                  <FaArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFooterSection;
