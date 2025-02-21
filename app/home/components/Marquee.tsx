'use client';
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const LogoMarquee = () => {
  const items = [{ title: "Zeron", image: "/Logo.svg" }];

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full flex flex-col items-center gap-3 overflow-hidden py-8"
    >
      <p className="text-[1.5rem]">Trusted by</p>

      <Marquee autoFill={true} speed={30}>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-10 shrink-0 whitespace-nowrap"
          >
            <Image src={item.image} alt={item.title} width={133} height={28} />
          </div>
        ))}
      </Marquee>
    </motion.div>
  );
};

export default LogoMarquee;