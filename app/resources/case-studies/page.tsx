import ResourcesSection from "./components/Other";
import SubscribeCTA from "./components/Subscribe";
import Hero from "./components/hero";
import FeaturedResources from "./components/resources";

const  CaseStudiesPage = () => {
  return (
    <div className="">
      <Hero />
      <FeaturedResources/>
      <ResourcesSection/>
      <SubscribeCTA/>

       
    </div>
  );
};

export default CaseStudiesPage;
