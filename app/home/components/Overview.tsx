"use client";

import { useState } from "react";
import Heading from "@/components/Layout/Heading";
import { motion, AnimatePresence } from "framer-motion";
import ProductTab from "./ProductTab";
import ServiceTab from "./ServiceTab";
import SolutionsTab from "./SolutionsTab";
import CustomSection from "@/components/Layout/CustomSection";

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const tabContentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.4, ease: "easeIn" } },
};

function Overview() {
  const [activeTab, setActiveTab] = useState("Solutions");

  const renderTabContent = () => {
    if (activeTab === "Solutions") {
      return (
        <motion.div
          key="solutions"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full flex items-center justify-center"
        >
          <ProductTab />
        </motion.div>
      );
    }
    if (activeTab === "Services") {
      return (
        <motion.div
          key="services"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full"
        >
          <ServiceTab />
        </motion.div>
      );
    }
    if (activeTab === "Solution") {
      return (
        <motion.div
          key="solution"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full"
        >
          <SolutionsTab />
        </motion.div>
      );
    }
  };

  const tabs = ["Solutions", "Services", "Solution"];

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-20">
      <CustomSection className="flex-col items-center justify-center gap-10 md:gap-16">
        {/* Animated Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Heading
            title="Securing Your Digital Galaxy with"
            subtitle="Precision and Power"
            description="In a world of evolving cyber threats, Zeron helps you quantify risk, manage third-party security, automate compliance, and strengthen defense—turning complex data into clear, actionable insights."
            descWidth="max-w-[850px]"
          />
        </motion.div>

        {/* Tab Navigation */}
        <div className="w-full">
          <div className="flex items-center gap-2 md:gap-6 justify-center">
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer px-2 py-2 ${
                  activeTab === tab
                    ? "border-b-[3px] border-[#4285F4] text-[#4285F4] font-medium"
                    : "font-light"
                }`}
              >
                <p className="text-[1rem] md:text-[1.5rem] leading-[17.5px]">
                  {tab}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Content with AnimatePresence */}
        <AnimatePresence mode="wait">{renderTabContent()}</AnimatePresence>
      </CustomSection>
    </div>
  );
}

export default Overview;
