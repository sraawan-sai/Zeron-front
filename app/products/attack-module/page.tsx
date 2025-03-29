"use client";
import FAQSection from "@/components/Sections/FAQ";
import LogoMarquee from "../../../components/Sections/Marquee";
import DataChaos from "./components/DataChaos";
import AttackSurfaceFeatures from "./components/Feature";
import Hero from "./components/Hero";
import AttackSurfaceOverview from "./components/Overview";
import Testimonial from "./components/Testimonial";
import { ASFAQ } from "@/public/data/FAQData";
import ContactForm from "@/components/Sections/ContactForm";
import Resources from "@/components/Sections/Resources";
import MovingColors from "@/components/Layout/MovingColors";
import Banner from "@/components/Sections/Banner";

const attackonsurface = () => {
  return (
    <div>
      <Hero />
      <MovingColors />
      <LogoMarquee />
      <AttackSurfaceOverview />
      <DataChaos />
      <AttackSurfaceFeatures />
      <Testimonial />
      <Resources />
      <Banner
        imageLeft="/icons/feature/f6.svg"
        imageRight="/icons/feature/f6.svg"
      />
      <ContactForm title="Uncover Hidden Threats with Attack Surface Intelligence" />
      <FAQSection faqs={ASFAQ} />
    </div>
  );
};

export default attackonsurface;
