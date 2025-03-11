import TestimonialCarousel from '@/components/Carousel/Testimonial';
import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="flex flex-col items-center pt-[150px] w-full bg-[#0A0118]">
      {/* Heading */}
      <div className="flex justify-center items-center px-4 md:px-[253px] pb-[100px] w-full">
        <h2 className="text-white text-[48px] leading-[66px] text-center font-medium tracking-[-1px]">
          Mission-Proven: Cyber Success Stories & Measurable Impact
        </h2>
      </div>
      <TestimonialCarousel />
    </section>
  );
};

export default TestimonialsSection;