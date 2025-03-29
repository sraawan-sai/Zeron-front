import Hero from "./components/Hero";
import LogoMarquee from "../../components/Sections/Marquee";
import Overview from "./components/Overview";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";
import Insights from "./components/Insights";
import Empower from "./components/Empower";
import Blog from "./components/Blog";
import FooterAnimatedSection from "./components/FooterAnimated";
import MovingColors from "@/components/Layout/MovingColors";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <MovingColors />
      <LogoMarquee />
      <Stats />
      <Overview />
      <Insights />
      <Empower />
      <Testimonial />
      <Blog />
      <FooterAnimatedSection />
      <MovingColors upsideDown={true} />
    </div>
  );
};

export default HomePage;
