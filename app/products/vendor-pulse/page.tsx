import LogoMarquee from "@/components/Sections/Marquee";
import Hero from "./components/Hero";
import VendorOverview from "./components/Overview";
import VendorUnique from "./components/Unique";
import VendorFeatures from "./components/Feature";
import Stats from "./components/Stats";
import Resources from "@/components/Sections/Resources";
import FAQSection from "@/components/Sections/FAQ";
import ContactForm from "@/components/Sections/ContactForm";
import { VendorFAQ } from "@/public/data/FAQData";
import AnimatedSection from "./components/AnimatedSection";
import Stack from "./components/Stack";
import Banner from "@/components/Sections/Banner";

const VendorPage = () => {
  return (
    <div className="">
      <Hero />
      <LogoMarquee />
      <AnimatedSection />
      <VendorOverview />
      <VendorUnique />
      <Stack />
      <VendorFeatures />
      <Stats />
      <Resources />
      <Banner
        imageLeft="/images/stripes.png"
        imageRight="/images/stripes.png"
      />
      <ContactForm title="Let's Talk Vendor Pulse – Simplify Vendor Risk Management" />
      <FAQSection faqs={VendorFAQ} />
    </div>
  );
};

export default VendorPage;
