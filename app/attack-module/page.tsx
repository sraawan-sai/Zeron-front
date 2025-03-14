"use client";
import LogoMarquee from "../home/components/Marquee";
import DataChaos from "./components/DataChaos";
import FaqSection from "./components/Faq";
import AttackSurfaceFeatures from "./components/Feature";
import ContactFormSection from "./components/Form";
import Hero from "./components/Hero";
import AttackSurfaceOverview from "./components/Overview";
import ResourcesSection from "./components/Resources";
import Testimonial from "./components/Testimonial";

const attackonsurface = () => {
  return (
    <div>
      <Hero />
      <LogoMarquee />
      <AttackSurfaceOverview />
      <DataChaos />
      <AttackSurfaceFeatures />
      <Testimonial />
      <ResourcesSection />
      <ContactFormSection />
      <FaqSection />
    </div>
  );
};

export default attackonsurface;
