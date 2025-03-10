'use client';
import FaqSection from "./components/Faq";
import AttackSurfaceFeatures from "./components/Feature";
import ContactFormSection from "./components/Form";
import Hero from "./components/Hero";
import LogoMarquee from "./components/Marquee";
import AttackSurfaceOverview from "./components/Overview";
import ResourcesSection from "./components/Resources";
import Testimonial from "./components/Testimonial";


const attackonsurface = () => {
  return (
    <div>
      <Hero />
      <LogoMarquee />
      <AttackSurfaceOverview />
      <AttackSurfaceFeatures/>
      <Testimonial/>
      <ResourcesSection/>
      <ContactFormSection/>
      <FaqSection/>
    

    </div>
  );
};

export default attackonsurface;
