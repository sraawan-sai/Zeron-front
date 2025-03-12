'use client';
import MovingColors from "@/components/Layout/MovingColors";
import CyberRiskProcess from "./components/Cyberrisk";
import FaqSection from "./components/Faq";
import CyberRiskFeatures from "./components/Feature";
import ContactFormSection from "./components/Form";
import Hero from "./components/Hero";
import CRPMMaruquee from "./components/Marquee";
import Overview from "./components/Overview";
import ResourcesSection from "./components/Resources";
import CrpmStats from "./components/Stats";
import Testimonial from "./components/Testimonial";

const crpm = () => {
  return (
    <div>
      <Hero />
      <MovingColors />
      <CRPMMaruquee />
      <Overview />
      <CyberRiskProcess/>
      <CyberRiskFeatures/>
      <CrpmStats/>


      <Testimonial/>
      <ResourcesSection/>
      <ContactFormSection/>
      <FaqSection/>
    

    </div>
  );
};

export default crpm;
