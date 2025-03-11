'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is Cyber Risk Posture Management (CRPM)?',
    answer:
      "CRPM is a data-driven approach to continuously assess, quantify, and improve an organization's cyber risk posture. It provides real-time insights into vulnerabilities, compliance gaps, and threat exposure.",
  },
  {
    question: 'How does Zeron CRPM quantify cyber risks?',
    answer:
      'Zeron CRPM quantifies cyber risks by analyzing real-time data from various security tools and frameworks. It uses advanced algorithms to assign a monetary value to potential risks, helping organizations prioritize their remediation efforts effectively.',
  },
  {
    question: 'What types of risks does CRPM monitor?',
    answer:
      'CRPM monitors a wide range of risks including vulnerabilities in assets, misconfigurations, compliance violations, emerging threats, and attack surface exposures.',
  },
  {
    question: 'How does CRPM help with compliance management?',
    answer:
      'CRPM maps organizational risks against regulatory frameworks and compliance requirements. It highlights gaps and provides actionable recommendations to ensure continuous compliance with industry standards.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col justify-center items-center py-[100px] gap-[50px] w-full bg-[#0A0118]">
      <div className="flex justify-center items-center px-[10px] text-center">
        <h1 className="text-white text-[42px] md:text-[48px] leading-[52px] letter-spacing-[-1px]">
          Navigating the Unknown: Your Cybersecurity<br></br> Questions, Answered
        </h1>
      </div>

      <div className="flex flex-col items-start gap-[24px] w-full max-w-[1140px] px-[20px] md:px-0">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`flex flex-col items-start py-[20px] gap-[18px] w-full border-b ${
              index === 0 ? 'border-white' : 'border-white/15'
            }`}
          >
            {/* Question */}
            <div
              className="flex justify-between items-center w-full cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2
                className={`text-[20px] md:text-[22px] leading-[130%] ${
                  openIndex === index ? 'text-white' : 'text-white/60'
                } transition-colors duration-300`}
              >
                {faq.question}
              </h2>

              {/* Chevron Icon */}
              <svg
                className={`w-[24px] h-[24px] transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke={openIndex === index ? 'white' : 'rgba(255, 255, 255, 0.6)'}
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>

            {/* Answer with Framer Motion Animation */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="text-[16px] leading-[160%] text-white/60 w-full max-w-[820px] overflow-hidden"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
