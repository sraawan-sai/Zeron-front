"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    
    name: "Ajeesh Achuthan",
    designation: "Co-Founder and CTO of Open",
    image: "/images/testimonial/person1.png",
  },
  {
    content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    name: "Ajeesh Achuthan",
    designation: "CEO of Example Corp",
    image: "/images/testimonial/person1.png",
  },
  {
    content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    name: "Ajeesh Achuthan",
    designation: "CTO of Tech Ltd",
    image: "/images/testimonial/person1.png",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center justify-center gap-10 py-20 px-6 bg-[#0A0118] relative"
    >
      {/* Heading */}
      <div className="text-center space-y-4">
        <h2 className="text-white text-[46px] font-semibold leading-[66px]">
          Real Success, Real Security
        </h2>
        <p className="text-[#6100FF] text-[30px] leading-[33px]">
          How Zeron Transforms Cyber Resilience
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="relative max-w-4xl w-full flex flex-col items-center gap-6 bg-[rgba(25,19,63,0.5)] backdrop-blur-lg rounded-xl p-10 transition-all duration-700">
        {/* Content */}
        <p className="text-white text-center text-[16px] leading-7 min-h-[100px]">
          {testimonials[current].content}
        </p>

        <div className="w-full h-px bg-white/30 my-4" />

        {/* User Info */}
        <div className="flex items-center gap-4">
          <Image
            src={testimonials[current].image}
            alt={testimonials[current].name}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <h4 className="text-lg font-medium bg-gradient-to-r from-[#1C76FD] to-[#5721F0] bg-clip-text text-transparent">
              {testimonials[current].name}
            </h4>
            <p className="text-[#A19EB0] text-sm">{testimonials[current].designation}</p>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 w-8 rounded-full cursor-pointer transition-all ${
              current === idx ? "bg-white" : "bg-white/30"
            }`}
          ></span>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-1/2 w-full flex justify-between px-6">
        <button
          onClick={prevSlide}
          className="transition"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className= " transition"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </motion.div>
  );
}
