import OnDemandSection from "./components/OnDemandSection";
import UpcomingWebinars from "./components/UpcomingWebinars";
import Hero from "./components/hero";


const VendorPage = () => {
  return (
    <div className="">
        <Hero/>
        <UpcomingWebinars/>
        <OnDemandSection/>
    </div>
  );
};

export default VendorPage;
