import Image from "next/image";
import { motion } from "framer-motion";
import HalfCircle from "@/components/SVG/HalfCIrcle";

const cardData = [
  {
    title: "Attack Surface",
    icon: "/icons/attack.svg",
    desc: "Lorem Ipsum is simply dummy text of the printing",
    animationClass: "card1",
  },
  {
    title: "Compliance",
    icon: "/icons/compliance.svg",
    desc: "Lorem Ipsum is simply dummy text of the printing",
    animationClass: "card2",
  },
  {
    title: "Defence",
    icon: "/icons/defence.svg",
    desc: "Lorem Ipsum is simply dummy text of the printing",
    animationClass: "card3",
  },
  {
    title: "Vendor Pulse",
    icon: "/icons/pulse.svg",
    desc: "Lorem Ipsum is simply dummy text of the printing",
    animationClass: "card4",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProductTab = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full h-[100px] md:h-[200px] relative flex items-center justify-normal md:justify-center overflow-hidden">
        {/* <div className="absolute -top-[50%]">
            <div className="w-60 h-60 rounded-full border border-white"></div>
          </div> */}
        <HalfCircle />
      </div>
      {/* Cards with Staggered Animation */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cardData.map((data, index) => (
          <motion.div
            key={index}
            variants={fadeUpVariants}
            className="group relative"
          >
            <div className="bg-[#0A0118] hover:bg-[#0A0118] group border border-[#292929] hover:border-[#6F58FF] rounded-[8px] flex flex-col items-center justify-between gap-10 py-4 px-4 xs:px-6 relative transition-colors duration-500 hover:shadow-[0_15px_40px_2px_#9747FF66]">
              <div
                className={`myButton ${data.animationClass} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%+4px)] h-[calc(100%+4px)] rounded-[8px] -z-1`}
              />
              <div className="group-hover:opacity-0 transition-all duration-300">
                <Image
                  src={data.icon}
                  alt={data.title}
                  width={80}
                  height={80}
                  className="min-h-[80px]"
                />
              </div>
              <div className="group-hover:-translate-y-28 transition-all duration-500">
                <p>{data.title}</p>
              </div>
              <div className="text-center absolute bottom-0 translate-y-4 group-hover:-translate-y-4 transition-all duration-700 opacity-0 group-hover:opacity-100">
                {data.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductTab;
