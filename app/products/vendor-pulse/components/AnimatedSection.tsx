import Image from "next/image";

const AnimatedSection = () => {
  return (
    <div className="py-10 relative w-full flex items-center justify-between">
      <div className="w-full">
        <Image
          src="/images/products/vendor/VendorLines.svg"
          alt="VendorPulse"
          width={900}
          height={200}
        />
      </div>
      <div className="min-w-fit relative items-center justify-center">
        <Image
          src="/images/products/vendor/VendorPulse.svg"
          alt="VendorPulse"
          width={195}
          height={90}
        />
      </div>
      <div className="w-full">
        <Image
          src="/images/products/vendor/VendorLines.svg"
          alt="VendorPulse"
          width={900}
          height={200}
          className="rotate-180"
        />
      </div>
    </div>
  );
};

export default AnimatedSection;
