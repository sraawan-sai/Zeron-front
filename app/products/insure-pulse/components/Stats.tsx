"use client";
import Heading from "@/components/Layout/Heading";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import CustomSection from "@/components/Layout/CustomSection";

const statsData = [
  { title: "200+", subtitle: "Infosec Solution Integration" },
  { title: "260+", subtitle: "Risk Frameworks" },
  { title: "50+", subtitle: "Regulatory Frameworks" },
  { title: "1.3K+", subtitle: "Security Controls" },
  { title: "6M+", subtitle: "Security Feeds per Hour" },
  { title: "1K+", subtitle: "Risk Scenarios" },
];

// Framer Motion Animations
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

function Stats() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-46 relative">
      <CustomSection className="flex-col px-4 gap-16 items-center justify-center">
        {/* Heading with Fade-Up Animation */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Heading
            title="Lorem Ipsum is simply dummy text of the printing."
            titleCN="max-w-[900px]"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 w-full max-w-[1280px] relative">
          {/* Background Image */}
          <div className="select-none absolute inset-0">
            <Image
              src="/images/bg1.png"
              alt="bg"
              fill
              className="object-cover object-center -z-10"
            />
          </div>

          {/* Grid Items with Animation */}
          {statsData.map((data, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={clsx(
                "z-10 group hover:bg-gradient-to-r from-[#1C76FD] to-[#5721F0] transition-colors duration-500 min-h-50 flex flex-col items-center justify-center p-4 xs:p-6 border-[#1C76FD]/70",

                // Default (Mobile: 2 Columns)
                index % 2 !== 0 && "border-l",
                index >= 2 && "border-t",

                // Tablet & Desktop (3 Columns)
                "md:border-t",
                index % 3 !== 0 && "md:border-l",
                index < 3 && "md:border-t-0"
              )}
            >
              <p className="group-hover:scale-140 text-center text-[1.5rem] xs:text-[2rem] font-semibold transition-transform ease-out duration-300">
                {data.title}
              </p>
              <p className="group-hover:scale-130 text-center text-[0.875rem] transition-transform ease-out duration-400">
                {data.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </CustomSection>
      <div className="relative w-full min-h-[190px] 2xl:min-h-[300px]">
        <Image
          src="/images/arcnew.png"
          alt=""
          fill={true}
          className="object-cover object-top -z-10"
        />
      </div>
    </div>
  );
}

export default Stats;
