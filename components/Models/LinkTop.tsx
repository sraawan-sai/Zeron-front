import Image from "next/image";
import GradientButton from "../Buttons/GradientButton";

const LinkTop = () => {
  return (
    <div
      id="linkTop"
      className="w-full max-w-[400px] flex flex-col gap-4 bg-gradient-to-r from-[#5BB0FF] to-[#6F58FF] rounded-[8px] px-5.5 py-4"
    >
      <div className="flex items-center gap-2">
        <div className="flex">
          <Image src="/icons/shield.svg" alt="" width={48} height={48} />
        </div>
        <p className={`text-[1.375rem]`}>Check your External Risk</p>
      </div>
      <form className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Enter your domain..."
          className="bg-[#1A3265] rounded-[6px] border border-[#6F58FF] px-4 py-2"
        />
        <GradientButton
          text="Search"
          className="px-4 py-2 rounded-[6px] cursor-pointer bg-gradient-to-r from-[#1C76FD] to-[#5721F0]"
        />
      </form>
    </div>
  );
};

export default LinkTop;
