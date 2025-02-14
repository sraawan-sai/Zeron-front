import TestimonialCarousel from "@/components/Carousel/Testimonial";
import Heading from "@/components/Layout/Heading";

function Testimonial() {
  return (
    <div className="flex flex-col gap-16 py-20">
      <div className="flex items-center justify-center container mx-auto px-4">
        <Heading
          title="Real Success, Real Security"
          subtitle="How Zeron Transforms Cyber Resilience"
          subtitleSize="text-[1.875rem]"
        />
      </div>
      <TestimonialCarousel />
    </div>
  );
}

export default Testimonial;
