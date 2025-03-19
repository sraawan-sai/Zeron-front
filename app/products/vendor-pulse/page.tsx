import LogoMarquee from "@/components/Sections/Marquee";
import Hero from "./components/Hero";
import VendorOverview from "./components/Overview";
import VendorUnique from "./components/Unique";
import VendorFeatures from "./components/Feature";
import Stats from "./components/Stats";
import Resources from "@/components/Sections/Resources";
import VendorBanner from "./components/Banner";
import FAQSection from "@/components/Sections/FAQ";
import ContactForm from "@/components/Sections/ContactForm";
import { VendorFAQ } from "@/public/data/FAQData";
import AnimatedSection from "./components/AnimatedSection";

const VendorPage = () => {
  return (
    <div className="">
      <Hero />
      <LogoMarquee />
      <AnimatedSection />
      <VendorOverview />
      <VendorUnique />
      <VendorFeatures />
      <Stats />
      <Resources />
      <VendorBanner />
      <ContactForm title="Let's Talk Vendor Pulse – Simplify Vendor Risk Management" />
      <FAQSection faqs={VendorFAQ} />
    </div>
  );
};

export default VendorPage;
