import LatestBlogs from "../../Components/Blogs/LatestBlogs";
import FunFacts from "../../Components/Home/FunFacts";
import HeroSection from "../../Components/Home/HeroSection";
import OurApproach from "../../Components/Home/OurApproach";
import ServicesSlider from "../../Components/Home/ServicesSlider";
import Testimonials from "../../Components/Home/Testimonials";
import Location from "../../Components/Shared/Location";
import WhyChooseUs from "../../Components/Shared/WhyChooseUs";
const Home = () => {
  return (
    <div>
      {/* components  */}
      <HeroSection />
      <OurApproach />
      <ServicesSlider />
      <FunFacts />
      <Testimonials />
      <LatestBlogs />
      <WhyChooseUs />
      <Location />
    </div>
  );
};
export default Home;
