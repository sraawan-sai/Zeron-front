'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    title: 'Navigating the Unknown: External Risk Management',
    items: [
      {
        q: 'What is QBER and how does it help with cyber risk quantification?',
        a: 'QBER is a cyber risk quantification framework that translates complex cybersecurity threats into measurable business risks. It helps organizations understand their financial exposure to cyber threats and make data-driven security decisions.'
      },
      {
        q: 'How does QBER assess and quantify cyber risks?',
        a: 'It assesses risk using various metrics including vulnerability scoring, likelihood, potential impact, and then translates these into financial exposure using quantitative models.'
      },
      {
        q: 'Why is cyber risk quantification important for my organization?',
        a: 'It allows business leaders to prioritize investments, justify cybersecurity budgets, and communicate risk in business terms.'
      },
      {
        q: 'Can QBER integrate with existing cybersecurity tools and frameworks?',
        a: 'Yes, QBER can integrate with SIEM, vulnerability scanners, and frameworks like NIST and ISO to enhance contextual risk evaluation.'
      }
    ]
  },
  {
    title: 'Navigating the Unknown: Compliance Risk Management',
    items: [
      {
        q: 'What is QBER and how does it help with cyber risk quantification?',
        a: 'QBER assists organizations in measuring the effectiveness of compliance with regulatory standards and reducing penalties from audit findings.'
      },
      {
        q: 'How does QBER assess and quantify cyber risks?',
        a: 'It maps organizational practices to compliance frameworks and evaluates risk exposure based on gaps.'
      },
      {
        q: 'Why is cyber risk quantification important for my organization?',
        a: 'Helps prioritize compliance efforts and investments in alignment with risk levels.'
      },
      {
        q: 'Can QBER integrate with existing cybersecurity tools and frameworks?',
        a: 'Yes, integration ensures real-time insights into compliance posture.'
      }
    ]
  },
  {
    title: 'Navigating the Unknown: Vendor Risk Management',
    items: [
      {
        q: 'What is QBER and how does it help with cyber risk quantification?',
        a: 'QBER helps assess the risk posed by third-party vendors and suppliers by assigning financial values to their risk contributions.'
      },
      {
        q: 'How does QBER assess and quantify cyber risks?',
        a: 'Evaluates vendor data handling, past incidents, security practices, and impact to the supply chain.'
      },
      {
        q: 'Why is cyber risk quantification important for my organization?',
        a: 'Helps maintain business continuity and trust while managing outsourcing risks effectively.'
      },
      {
        q: 'Can QBER integrate with existing cybersecurity tools and frameworks?',
        a: 'Yes, especially with third-party risk platforms and procurement systems.'
      }
    ]
  }
];

export default function FaqSectionsExtended() {
  const [openItem, setOpenItem] = useState<{ section: number; index: number } | null>({ section: 0, index: 0 });

  return (
    <div className="bg-[#0A0118] text-white">
      {faqData.map((section, sectionIndex) => (
        <motion.section
          key={section.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="py-[100px] px-6 md:px-[150px] flex flex-col items-center gap-[50px]"
        >
          <h2 className="text-[32px] md:text-[48px] leading-[52px] text-center tracking-[-1px]">
            {section.title}
          </h2>

          <div className="w-full max-w-[1140px] flex flex-col gap-6">
            {section.items.map((faq, index) => {
              const isOpen = openItem?.section === sectionIndex && openItem.index === index;
              return (
                <div
                  key={index}
                  className={`border-b ${isOpen ? 'border-white' : 'border-white/15'} pb-6 transition-all duration-300`}
                >
                  <button
                    onClick={() =>
                      setOpenItem(
                        isOpen ? null : { section: sectionIndex, index }
                      )
                    }
                    className="flex justify-between items-center w-full py-5"
                  >
                    <h3
                      className={`text-left text-[22px] font-poppins tracking-[-0.02em] ${
                        isOpen ? 'text-white' : 'text-white/60'
                      }`}
                    >
                      {faq.q}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown
                        size={24}
                        className={isOpen ? 'text-white' : 'text-white/60'}
                      />
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
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.section>
      ))}
    </div>
  );
}