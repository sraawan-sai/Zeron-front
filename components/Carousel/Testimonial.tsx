import { EmblaOptionsType } from "embla-carousel";
import Carousel from "./Carousel";
import { TestimonialData } from "@/public/data/testimonialData";

const TestimonialCarousel = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <>
      <Carousel testimonials={TestimonialData} options={OPTIONS} />
    </>
  );
};

export default TestimonialCarousel;
