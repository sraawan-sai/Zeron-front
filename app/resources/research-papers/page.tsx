import CyberRiskCTA from "./components/CyberRiskCTA";
import SubscribeCTA from "./components/Subscribe";
import Hero from "./components/hero";
import FeaturedResources from "./components/resources";

const WhitepapersPage = () => {
  return (
    <div className="">
        <Hero />
        <FeaturedResources/>
        <CyberRiskCTA/>
        <SubscribeCTA/>
       
    </div>
  );
};

export default WhitepapersPage;
