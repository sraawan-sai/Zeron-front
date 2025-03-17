import DefenceFeatures from "./components/Feature";
import DefenceOverview from "./components/Overview";
import Hero from "./components/Hero";
import LogoMarquee from "../../../components/Sections/Marquee";
import Resources from "@/components/Sections/Resources";
import ContactForm from "@/components/Sections/ContactForm";
import { DefenseFAQ } from "@/public/data/FAQData";
import FAQSection from "@/components/Sections/FAQ";
import MovingColors from "@/components/Layout/MovingColors";
import DefenceCards from "./components/DefenceCards";
import DefenseModel from "./components/Ecosystem";
import DefenseBanner from "./components/Banner";

const DefencePage = () => {
  return (
    <div className="">
      <Hero />
      <MovingColors />
      <LogoMarquee />
      <DefenceOverview />
      <DefenceCards/>
      <DefenseModel/>
      <DefenceFeatures />
      <Resources />
      <DefenseBanner/>
      <ContactForm title="Let's Talk Defense – Protect Your Digital Assets" />
      <FAQSection faqs={DefenseFAQ} />
    </div>
  );
};

export default DefencePage;
