import LogoMarquee from "@/components/Sections/Marquee";
import Hero from "./components/Hero";
import QberOverview from "./components/Overview";
import QberStats from "./components/Stats";
import QberBanner from "./components/Banner";
import QberFeatures from "./components/Feature";
import ContactForm from "@/components/Sections/ContactForm";
import FAQSection from "@/components/Sections/FAQ";
import { QBERFAQ } from "@/public/data/FAQData";
import Resources from "@/components/Sections/Resources";
import Timeline from "./components/Timeline";
import MovingColors from "@/components/Layout/MovingColors";

const QBERPage = () => {
  return (
    <div className="">
      <Hero />
      <MovingColors />
      <LogoMarquee />
      <QberOverview />
      <QberStats />
      <Timeline />
      <QberFeatures />
      <Resources />
      <QberBanner />

      <ContactForm title="Let's Talk QBER – Quantify & Mitigate Your Business Risks" />
      <FAQSection faqs={QBERFAQ} />
    </div>
  );
};

export default QBERPage;
