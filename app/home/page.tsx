import Hero from "./components/Hero";
import LogoMarquee from "./components/Marquee";
import Overview from "./components/Overview";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LogoMarquee />
      <Stats />
      <Overview />
      <Testimonial />
    </div>
  );
};

export default HomePage;
