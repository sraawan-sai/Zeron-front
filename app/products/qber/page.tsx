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

const QBERPage = () => {
  return (
    <div className="">
      <Hero />
      <LogoMarquee />
      <QberOverview />
      <QberStats />
      <QberFeatures />
      <Resources />
      <QberBanner />

      <ContactForm title="Let's Talk QBER – Quantify & Mitigate Your Business Risks" />
      <FAQSection faqs={QBERFAQ} />
    </div>
  );
};

export default QBERPage;
