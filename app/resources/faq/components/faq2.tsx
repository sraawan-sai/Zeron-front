'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
      'It assesses risk using various metrics including vulnerability scoring, likelihood, potential impact, and then translates these into financial exposure using quantitative models.',
  },
  {
    id: 3,
    question: 'Why is cyber risk quantification important for my organization?',
    answer:
      'It allows business leaders to prioritize investments, justify cybersecurity budgets, and communicate risk in business terms.',
  },
  {
    id: 4,
    question: 'Can QBER integrate with existing cybersecurity tools and frameworks?',
    answer:
      'Yes, QBER can integrate with SIEM, vulnerability scanners, and frameworks like NIST and ISO to enhance contextual risk evaluation.',
  },
];

export default function FaqSectionTwo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full bg-[#0A0118] py-[100px] px-6 md:px-[150px] flex flex-col items-center gap-[50px]"
    >
      {/* Heading */}
      <div className="text-center max-w-[1140px]">
        <h2 className="text-white text-[32px] md:text-[48px] leading-[52px] tracking-[-1px]">
          Navigating the Unknown: Internal Risk Management
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
                onClick={() => setOpenIndex(isOpen ? null : index)}
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
                  <ChevronDown size={24} className={isOpen ? 'text-white' : 'text-white/60'} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
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
