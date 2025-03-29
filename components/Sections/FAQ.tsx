"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

type FAQ = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqs: FAQ[];
};

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col justify-center items-center px-4 pt-16 pb-20 gap-[50px] w-full bg-[#0A0118]">
      <div className="flex justify-center items-center p-[10px] gap-[10px] w-full max-w-[1140px]">
        <h1 className="text-white text-[48px] leading-[52px] text-center letter-spacing-[-1px]">
          Navigating the Unknown: Your Cybersecurity Questions, Answered
        </h1>
      </div>
      <div className="flex flex-col items-start gap-[24px] w-full max-w-[1140px]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`flex flex-col items-start p-[20px_0] gap-[18px] w-full border-b ${
              openIndex === index ? "border-white" : "border-white/15"
            }`}
          >
            {/* Question Section */}
            <div
              className="flex justify-between items-center w-full gap-[78px] cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2
                className={`text-[1.375rem] leading-[130%] transition-colors ${
                  openIndex === index ? "text-white" : "text-white/60"
                }`}
              >
                {faq.question}
              </h2>
              <FaChevronDown
                className={`w-[24px] h-[24px] transition-transform duration-500 ${
                  openIndex === index
                    ? "rotate-180 text-white"
                    : "text-white/60"
                }`}
              />
            </div>

            {/* Animated Answer Section */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="leading-[160%] text-white/60 w-full max-w-[820px] mt-2">
                {faq.answer}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
