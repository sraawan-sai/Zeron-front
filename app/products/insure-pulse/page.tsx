import LogoMarquee from "@/components/Sections/Marquee";
import Hero from "./components/Hero";
import InsureOverview from "./components/Overview";
import InsureUnique from "./components/Unique";
import InsureFeatures from "./components/Feature";
import Stats from "./components/Stats";
import Resources from "@/components/Sections/Resources";
import InsureBanner from "./components/Banner";
import ContactForm from "@/components/Sections/ContactForm";
import FAQSection from "@/components/Sections/FAQ";
import { InsureFAQ } from "@/public/data/FAQData";
import MovingColors from "@/components/Layout/MovingColors";

const InsurePulsePage = () => {
  return (
    <div className="">
      <Hero />
      <MovingColors />
      <LogoMarquee />
      <InsureOverview />
      <InsureUnique />
      <InsureFeatures />
      <Stats />
      <Resources />
      <InsureBanner />
      <ContactForm title="Get in touch with us" />
      <FAQSection faqs={InsureFAQ} />
    </div>
  );
};

export default InsurePulsePage;
