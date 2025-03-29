'use client';

import { motion } from 'framer-motion';

export default function CyberRiskCTA() {
  return (
    <section
      className="relative w-full bg-cover bg-center text-center text-white px-6 sm:px-12 md:px-24 lg:px-[253px] py-16 brightness-200 "
      style={{
        backgroundImage: `url('/images/whitepapers/subs.jpg')`,
      }}
    >
      {/* Overlay to brighten */}
      <div className="absolute  " />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className=" font-normal text-3xl sm:text-4xl md:text-5xl leading-tight tracking-[-1px] max-w-[893px]"
        >
          Ready to Quantify Your Cyber Risk?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[#E4E2DF] font-poppins text-base sm:text-lg md:text-xl leading-[160%] max-w-[934px]"
        >
          Know Your Risk | Reduce Uncertainty | Strengthen Security — Let QBER empower your security
          strategy with measurable, actionable insights.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button className="h-[48px] px-6 text-white font text-[16px] font-light tracking-[-0.32px] border border-white rounded-[8px]">
            Get Started
          </button>
          <a
  href="/files/whitepaper.pdf" // Replace with actual file path
  download
  className="h-[48px] px-6 text-white font text-[16px] font-medium tracking-[-0.32px] rounded-[8px] flex items-center justify-center brightness-50 hover:brightness-60 transition-all duration-300 shadow-6xl"
  style={{
    background:
      'linear-gradient(90deg, #1C76FD -.79%, #5721F0 105.13%)',
  }}
>
  Download Whitepaper
</a>
        </motion.div>
      </div>
    </section>
  );
}
