import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is Attack Surface Management?',
    answer: 'Attack Surface Management (ASM) is a continuous process of identifying, analyzing, and monitoring an organization\'s digital assets to uncover vulnerabilities and reduce potential attack vectors.',
  },
  {
    question: 'What is External Attack Surface Management?',
    answer: 'External Attack Surface Management focuses on discovering and managing assets exposed to the internet, such as domains, IP addresses, and cloud services.',
  },
  {
    question: 'How does Zeron Attack Surface Management work?',
    answer: 'Zeron continuously scans public and private digital footprints to identify assets, analyze vulnerabilities, and detect misconfigurations.',
  },
  {
    question: 'How does Zeron Attack Surface Management provide ROI?',
    answer: 'Zeron reduces the cost of breaches by preventing attacks before they happen and lowers manual effort with automation.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col justify-center items-center p-4 md:p-[150px] gap-[50px] w-full bg-[#0A0118]">
      <div className="flex justify-center items-center p-[10px] gap-[10px] w-full max-w-[1140px]">
        <h1 className="text-white text-[48px] leading-[52px] text-center letter-spacing-[-1px]">
          Navigating the Unknown: Your Cybersecurity Questions, Answered
        </h1>
      </div>
      <div className="flex flex-col items-start gap-[24px] w-full max-w-[1140px]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`flex flex-col items-start p-[20px_0] gap-[18px] w-full border-b ${index === 0 ? 'border-white' : 'border-white/15'}`}
          >
            <div
              className="flex justify-between items-center w-full gap-[78px] cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className={`text-[22px] leading-[130%] ${openIndex === index ? 'text-white' : 'text-white/60'}`}>{faq.question}</h2>
              <svg
                className={`w-[24px] h-[24px] transform ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke={openIndex === index ? 'white' : 'rgba(255, 255, 255, 0.6)'}
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            {openIndex === index && (
              <p className="text-[16px] leading-[160%] text-white/60 w-full max-w-[820px]">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
