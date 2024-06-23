/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import bgWithShadow from "../../assets/Images/bg-with-Shadow.png";
import plumbingSpecialistsIcon from "../../assets/Images/plumbing_specialists_icon.png";
import approachablePresenceIcon from "../../assets/Images/approachable_presence_icon.png";
import industryLeadersIcon from "../../assets/Images/industry_leaders_icon.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const OurApproach = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  // Array of approach sections
  const approachSections = [
    {
      imageSrc: plumbingSpecialistsIcon,
      alt: "Plumbing Specialists",
      title: "Plumbing Specialists",
      description:
        "Our team will work intelligently to come up with the optimal solution and then execute it perfectly.",
    },
    {
      imageSrc: approachablePresenceIcon,
      alt: "Approachable Presence",
      title: "Approachable Presence",
      description:
        "We'll always take the time to explain what you can do to keep your plumbing system as well as possible.",
    },
    {
      imageSrc: industryLeadersIcon,
      alt: "Industry Leaders",
      title: "Industry Leaders",
      description:
        "Our team stays ahead of the crowd by consistently integrating the latest advancements.",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${bgWithShadow})`,
        backgroundColor: "#FFFFFF",
      }}
      className="py-20 md:py-28 overflow-hidden relative z-50 bg-top bg-no-repeat w-full md:bg-contain bg-cover"
    >
      <div className="max-w-screen-xl mx-auto text-center px-4">
        <h2
          className="text-base text-primary mb-4 font-semibold"
          data-aos="fade-down"
        >
          OUR APPROACH
        </h2>
        <h1
          className="text-3xl text-secondary figtree_font font-bold mb-4 sm:text-4xl md:text-5xl"
          data-aos="fade-down"
        >
          What to Expect From Us
        </h1>
        <p
          className="text-[#676767] figtree_font max-w-screen-md mx-auto text-base mb-10 md:mb-20"
          data-aos="fade-up"
        >
          While certain plumbing issues, such as a minor toilet clog or a
          dripping faucet, can be quickly addressed with simple do-it-yourself
          methods, it's essential to recognize that many plumbing problems are
          complex and require the expertise of a professional plumber.
        </p>
        <div
          className="grid grid-cols-1 figtree_font md:grid-cols-3 md:gap-3 lg:gap-8 gap-8"
          data-aos="fade-up"
        >
          {/* Mapping over approachSections array */}
          {approachSections.map((section, index) => (
            <div key={index} className="text-center p-4" data-aos="zoom-in">
              <LazyLoadImage
                effect="blur"
                className="mx-auto mb-8"
                src={section.imageSrc}
                alt={section.alt}
              />
              <h3 className="text-xl font-semibold mb-2 text-secondary">
                {section.title}
              </h3>
              <p className="text-secondary text-base">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
