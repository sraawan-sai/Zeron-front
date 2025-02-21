'use client';
import EmpowerAnimation from "@/components/Animation/Empower";
import Heading from "@/components/Layout/Heading";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Empower = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto gap-16 px-4 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <Heading
          title="Empowering Decisions With Zin Ai"
          subtitle="Quantifying Cyber Risks Across Your Digital Galaxy"
          description="Navigate the data cosmos, uncover financial risks, and turn insight into action."
          descWidth="max-w-[720px]"
        />
      </motion.div>
      
      <motion.div
        className="w-full max-w-[500px] h-[400px] md:h-[500px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <EmpowerAnimation />
      </motion.div>
    </div>
  );
};

export default Empower;
