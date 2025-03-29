'use client';

import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    id: 1,
    question: 'What is QBER and how does it help with cyber risk quantification?',
    answer:
      'QBER is a cyber risk quantification framework that translates complex cybersecurity threats into measurable business risks. It helps organizations understand their financial exposure to cyber threats and make data-driven security decisions.',
  },
  {
    id: 2,
    question: 'How does QBER assess and quantify cyber risks?',
    answer:
      'QBER uses models to assess threats, vulnerabilities, impact, and likelihood to quantify the cyber risk in financial terms, allowing organizations to prioritize security investments.',
  },
  {
    id: 3,
    question: 'Why is cyber risk quantification important for my organization?',
    answer:
      'Cyber risk quantification enables organizations to measure cybersecurity in terms of business impact, helping leaders make informed decisions about risk mitigation and investments.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full bg-[#0A0118] py-[100px] px-6 md:px-[150px] flex flex-col items-center gap-[50px]"
    >
      {/* Title */}
      <div className="text-center w-full max-w-[1140px]">
        <h2 className="text-white text-[32px] md:text-[48px] leading-[52px] tracking-[-1px]">
          Navigating the Unknown: CRPM
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="w-full max-w-[1140px] flex flex-col gap-6">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.id}
              className={`border-b ${
                isOpen ? 'border-white' : 'border-white/15'
              } pb-6 transition-all duration-300`}
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full py-5"
              >
                <h3
                  className={`text-left text-[22px] font-poppins tracking-[-0.02em] ${
                    isOpen ? 'text-white' : 'text-white/60'
                  }`}
                >
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown size={24} className={isOpen ? 'text-white' : 'text-white/60'} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/60 text-[16px] leading-[160%] tracking-[-0.02em] mt-3">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
