import React from "react";
import bgWithShadow from "../../assets/Images/bg-with-Shadow.png";

const OurApproach = () => {
  // Array of approach sections
  const approachSections = [
    {
      imageSrc:
        "https://assets-global.website-files.com/65019f359eefd3a7c84654d1/65028e4fb16745671e5c5cb8_Group%20141.png",
      alt: "Plumbing Specialists",
      title: "Plumbing Specialists",
      description:
        "Our team will work intelligently to come up with the optimal solution and then execute it perfectly.",
    },
    {
      imageSrc:
        "https://assets-global.website-files.com/65019f359eefd3a7c84654d1/65028f8c244c7cd5f3339f78_Group%20140.png",
      alt: "Approachable Presence",
      title: "Approachable Presence",
      description:
        "We'll always take the time to explain what you can do to keep your plumbing system as well as possible.",
    },
    {
      imageSrc:
        "https://assets-global.website-files.com/65019f359eefd3a7c84654d1/65028fa5ad0e7c8b64bfef5a_Group%20142.png",
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
      className="py-20 md:py-28 relative z-50 bg-top bg-no-repeat w-full md:bg-contain bg-cover"
    >
      <div className="max-w-screen-xl mx-auto text-center px-4">
        <h2 className="text-base text-primary mb-4 font-semibold">
          OUR APPROACH
        </h2>
        <h1 className="text-4xl text-secondary figtree_font font-bold mb-4 sm:text-4xl md:text-5xl">
          What to Expect From Us
        </h1>
        <p className="text-[#676767] figtree_font max-w-screen-md mx-auto text-base mb-10 md:mb-20">
          While certain plumbing issues, such as a minor toilet clog or a
          dripping faucet, can be quickly addressed with simple do-it-yourself
          methods, it's essential to recognize that many plumbing problems are
          complex and require the expertise of a professional plumber.
        </p>
        <div className="grid grid-cols-1 figtree_font md:grid-cols-3 md:gap-3 lg:gap-8 gap-8">
          {/* Mapping over approachSections array */}
          {approachSections.map((section, index) => (
            <div key={index} className="text-center p-4">
              <img
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
