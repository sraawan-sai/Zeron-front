import ComplianceFeatures from "./components/Feature";
import Hero from "./components/Hero";
import LogoMarquee from "../../../components/Sections/Marquee";
import ComplianceOverview from "./components/Overview";
import { ComplianceFAQ } from "@/public/data/FAQData";
import FAQSection from "@/components/Sections/FAQ";
import ContactForm from "@/components/Sections/ContactForm";
import Resources from "@/components/Sections/Resources";
import ComplianceStack from "./components/Stack";
import Stats from "./components/Stats";

const CompliancePage = () => {
  return (
    <div className="">
      <Hero />
      <LogoMarquee />
      <ComplianceOverview />
      <ComplianceStack />
      <ComplianceFeatures />
      <Stats />
      <Resources />
      <ContactForm title="Let's Talk Compliance – Protect Your Data and Ensure Regulatory Compliance" />
      <FAQSection faqs={ComplianceFAQ} />
    </div>
  );
};

export default CompliancePage;
