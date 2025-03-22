import OnDemandSection from "./components/OnDemandSection";
import SubscribeCTA from "./components/Subscribe";
import UpcomingWebinars from "./components/UpcomingWebinars";
import Hero from "./components/hero";
import CyberSecurityHero from "./components/social";


const VendorPage = () => {
  return (
    <div className="">
        <Hero/>
        <UpcomingWebinars/>
        <OnDemandSection/>
        <CyberSecurityHero/>
        <SubscribeCTA/>
    </div>
  );
};

export default VendorPage;
