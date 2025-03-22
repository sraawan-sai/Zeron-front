import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineArrowForward } from "react-icons/md";

const solutionsData = [
  {
    id: 1,
    title: "By Use case",
    description: "Lorem Ipsum is simply",
    icon: "/images/timeline/solutions.svg",
  },
  {
    id: 2,
    title: "By Industry",
    description: "Lorem Ipsum is simply dummy",
    icon: "/images/timeline/solutions.svg",
  },
  {
    id: 3,
    title: "By Persona",
    description: "Lorem Ipsum is simply dummy",
    icon: "/images/timeline/solutions.svg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SolutionsTab = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-10">
      <motion.div
        className="w-full flex flex-wrap gap-5 items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {solutionsData.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            className="flex flex-col items-center justify-center gap-5 w-full max-w-[410px] rounded-[16px] px-5 py-8.5 border border-white/15"
          >
            <div className="">
              <Image src={item.icon} alt={item.title} width={64} height={64} />
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="font-semibold text-[1.375rem] leading-[130%] tracking-[-2%]">
                {item.title}
              </p>
              <div className="mt-1 flex flex-col gap-1">
                <p className="text-[#E4E2DF] leading-[26px]">
                  {item.description}
                </p>
                <p className="text-[#E4E2DF] leading-[26px]">
                  {item.description}
                </p>
                <p className="text-[#E4E2DF] leading-[26px]">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex items-center gap-1 cursor-pointer group">
        <p className="group-hover:text-[#4285F4] group-hover:underline transition-all duration-300">
          Learn More
        </p>
        <MdOutlineArrowForward />
      </div>
    </div>
  );
};

export default SolutionsTab;
