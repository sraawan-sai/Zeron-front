import DefenceFeatures from "./components/Feature";
import DefenceOverview from "./components/Overview";
import Hero from "./components/Hero";
import LogoMarquee from "../home/components/Marquee";
import ResourcesSection from "./components/Resources";
import ContactForm from "./components/Form";
import FAQSection from "./components/Faq";

const DefencePage = () => {
  return (
    <div className="">
      <Hero />
      <LogoMarquee />
      <DefenceOverview />
      <DefenceFeatures />
      <ResourcesSection />
      <ContactForm />
      <FAQSection />
    </div>
  );
};

export default DefencePage;
