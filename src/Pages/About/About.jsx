import FanFacts from "../../Components/About/FanFacts";
import HappyClients from "../../Components/About/HappyClients";
import { FAQ } from "../../Components/Shared/FAQ";
import WhyChooseUs from "../../Components/Shared/WhyChooseUs";
import Location from "../../Components/Shared/Location";
import OurTeam from "../../Components/About/OurTeam";
import BasicInfo from "../../Components/About/BasicInfo";
import about_us_banner from "../../assets/Images/about_us_banner.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      {/* Breadcrumb  */}
      <div className="bg-primary py-8 h-[400px] lg:mb-[300px] mb-[150px] md:mb-[310px] ">
        <div className="  text-center md:text-left relative mx-auto px-4 sm:px-6 lg:px-8  max-w-screen-xl">
          <h2 className="text-5xl md:text-7xl font-bold text-neutral inline-block px-4 py-2 rounded-t-md mt-20 figtree_font">
            About Us
          </h2>
          <div className="flex flex-col max-w-screen-lg mx-auto bg-neutral shadow-md rounded-md overflow-hidden mt-24 md:mt-20">
            <LazyLoadImage
              effect="blur"
              src={about_us_banner}
              alt="About Us Banner"
              className="w-full h-60 sm:h-72 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
      {/* others components  */}
      <FanFacts />
      <HappyClients />
      <BasicInfo />
      <OurTeam />
      <FAQ />
      <WhyChooseUs />
      <Location />
    </div>
  );
};

export default About;
