import LogoMarquee from "./components/Marquee";
import Overview from "./components/Overview";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";

const HomePage = () => {
  return (
    <div>
      <LogoMarquee />
      <Stats />
      <Overview />
      <Testimonial />
    </div>
  );
};

export default HomePage;
