'use client';

import { motion } from 'framer-motion';

export default function CyberRiskCTA() {
  return (
    <section
      className="relative w-full text-center text-white px-4 sm:px-8 md:px-16 lg:px-32 py-24 bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/faq.png')`, // Replace with your actual path
      }}
    >
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="font-medium text-2xl sm:text-3xl md:text-4xl leading-snug tracking-[-0.5px] max-w-3xl"
        >
          Experience Zeron in Action – Get Your <br />
          Personalized Walkthrough
        </motion.h2>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          <button
            className="h-[44px] px-6 text-white font-medium text-sm rounded-[8px] shadow-xl transition-all duration-300"
            style={{
              background:
                'linear-gradient(90deg, #1C76FD 0%, #5721F0 100%)',
            }}
          >
            Request a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
