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

const attackonsurface = () => {
  return (
    <div>
      <Hero />
      <LogoMarquee />
      <AttackSurfaceOverview />
      <DataChaos />
      <AttackSurfaceFeatures />
      <Testimonial />
      <Resources />
      <ContactForm title="Uncover Hidden Threats with Attack Surface Intelligence" />
      <FAQSection faqs={ASFAQ} />
    </div>
  );
};

export default attackonsurface;
