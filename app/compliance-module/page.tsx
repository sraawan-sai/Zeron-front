import ComplianceFeatures from "./components/Feature";
import Hero from "./components/Hero";
import LogoMarquee from "../home/components/Marquee";
import ComplianceOverview from "./components/Overview";
import ResourcesSection from "./components/Resources";
import ContactForm from "./components/Form";
import FAQSection from "./components/Faq";

const CompliancePage = () => {
  return (
    <div className="">
      <Hero />
      <LogoMarquee />
      <ComplianceOverview />
      <ComplianceFeatures />
      <ResourcesSection />
      <ContactForm />
      <FAQSection />
    </div>
  );
};

export default CompliancePage;
