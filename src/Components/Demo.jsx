import Blogs from "./Blogs/Blogs";
import ContactForm from "./ContactForm";
import HeroSection from "./Home/HeroSection";
import OurApproach from "./Home/OurApproach";
import Breadcrumb from "./Shared/Breadcrumb";
import { FAQ } from "./Shared/FAQ";
import Location from "./Shared/Location";
import WhyChooseUs from "./Shared/WhyChooseUs";
const Demo = () => {
  return (
    <div>
      <Breadcrumb />
      <Blogs />
      <HeroSection />
      <FAQ />
      <ContactForm />
      <OurApproach />
      <WhyChooseUs />
      <Location />
    </div>
  );
};
export default Demo;
