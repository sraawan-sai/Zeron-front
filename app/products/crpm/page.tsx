"use client";
import MovingColors from "@/components/Layout/MovingColors";
import CyberRiskProcess from "./components/Cyberrisk";
import CyberRiskFeatures from "./components/Feature";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import CrpmStats from "./components/Stats";
import Testimonial from "./components/Testimonial";
import InternalRisk from "./components/InternalRisk";
import { CRPMFAQ } from "@/public/data/FAQData";
import FAQSection from "@/components/Sections/FAQ";
import ContactForm from "@/components/Sections/ContactForm";
import Resources from "@/components/Sections/Resources";
import LogoMarquee from "@/components/Sections/Marquee";
import Banner from "@/components/Sections/Banner";

const crpm = () => {
  return (
    <div>
      <Hero />
      <MovingColors />
      <LogoMarquee />
      <Overview />
      <InternalRisk />
      <CyberRiskProcess />
      <CyberRiskFeatures />
      <CrpmStats />

      <Testimonial />
      <Resources />
      <Banner
        imageLeft="/icons/feature/f3.svg"
        imageRight="/icons/feature/f3.svg"
      />
      <FAQSection faqs={CRPMFAQ} />
      <ContactForm title="Get in Touch - Strengthen Your Cyber Resilience" />
    </div>
  );
};

export default crpm;
