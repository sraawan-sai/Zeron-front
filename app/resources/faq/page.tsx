import ResourcesSection from "../case-studies/components/Other";
import FaqSectionsExtended from "./components/extended";
import FaqSection from "./components/faq1";
import FaqSectionTwo from "./components/faq2";
import Hero from "./components/hero";

const  FAQPage = () => {
  return (
    <div className="">
      <Hero/>
      <FaqSection/>
      <FaqSectionTwo/>
      <FaqSectionsExtended/>
      <ResourcesSection/>

       
    </div>
  );
};

export default FAQPage;
