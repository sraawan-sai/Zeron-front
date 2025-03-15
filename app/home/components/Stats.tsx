"use client";
import Heading from "@/components/Layout/Heading";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import CustomSection from "@/components/Layout/CustomSection";

const statsData = [
  { title: "$1.8 Billion", subtitle: "Monetary Risk Saved" },
  { title: "$1.8 Billion", subtitle: "Monetary Risk Saved" },
  { title: "$1.8 Billion", subtitle: "Monetary Risk Saved" },
  { title: "$1.8 Billion", subtitle: "Monetary Risk Saved" },
  { title: "$1.8 Billion", subtitle: "Monetary Risk Saved" },
  { title: "$1.8 Billion", subtitle: "Monetary Risk Saved" },
  { title: "$1.8 Billion", subtitle: "Monetary Risk Saved" },
  { title: "$1.8 Billion", subtitle: "Monetary Risk Saved" },
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
    <div className="flex flex-col items-center justify-center py-20">
      <CustomSection className="flex-col px-4 gap-16 items-center justify-center">
        {/* Heading with Fade-Up Animation */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Heading
            title="Single Point of Truth for Cyber Risk Management"
            subtitle="Quantifying Risks | Prioritizing Action | Achieve Resilience"
            subtitleSize="text-[1.25rem] md:text-[1.75rem]"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-[1280px] relative">
          {/* Background Image */}
          <div className="select-none absolute inset-0">
            <Image
              src="/images/stats.jpg"
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

                // Tablet & Desktop (4 Columns)
                "md:border-t",
                index % 4 !== 0 && "md:border-l",
                index < 4 && "md:border-t-0"
              )}
            >
              <p className="group-hover:scale-140 text-center text-[1.125rem] xs:text-[1.5rem] font-medium transition-transform ease-out duration-300">
                {data.title}
              </p>
              <p className="group-hover:scale-130 text-center text-[0.625rem] transition-transform ease-out duration-400">
                {data.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </CustomSection>
    </div>
  );
}

export default Stats;
