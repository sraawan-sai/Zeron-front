import LogoMarquee from "../home/components/Marquee";
import Hero from "./components/Hero";
import QberOverview from "./components/Overview";
import QberStats from "./components/Stats";
import Resources from "./components/Resources";
import FAQSection from "./components/Faq";
import ContactForm from "./components/Form";
import QberBanner from "./components/Banner";
import QberFeatures from "./components/Feature";

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
      <FAQSection />
      <ContactForm />
    </div>
  );
};

export default QBERPage;
