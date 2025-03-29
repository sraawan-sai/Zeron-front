"use client"; // Required for Next.js 13+ (if using App Router)

import { motion } from "framer-motion";
import TestimonialCarousel from "@/components/Carousel/Testimonial";
import Heading from "@/components/Layout/Heading";

function Testimonial() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Start completely invisible and lower
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is visible
      className="flex flex-col gap-16 py-20"
    >
      <div className="flex items-center justify-center container mx-auto px-4">
        <Heading
          title="Real Success, Real Security"
          subtitle="How Zeron Transforms Cyber Resilience"
          subtitleSize="text-[1.875rem]"
        />
      </div>
      <TestimonialCarousel />
    </motion.div>
  );
}

export default Testimonial;