import React from "react";
import bgWithShadow from "../../assets/Images/bg-with-Shadow.png";

const OurApproach = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgWithShadow})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#FFFFFF", // Add a fallback background color
      }}
      className="py-20 md:py-28 relative z-50"
    >
      <div className="max-w-screen-xl mx-auto text-center px-4">
        <h2 className="text-base text-primary mb-4 font-semibold">
          OUR APPROACH
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          What to Expect From Us
        </h1>
        <p className="text-[#676767] max-w-screen-md mx-auto text-base mb-10 md:mb-20">
          While certain plumbing issues, such as a minor toilet clog or a
          dripping faucet, can be quickly addressed with simple do-it-yourself
          methods, it's essential to recognize that many plumbing problems are
          complex and require the expertise of a professional plumber.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-4">
            <img
              className="mx-auto mb-8"
              src="https://assets-global.website-files.com/65019f359eefd3a7c84654d1/65028e4fb16745671e5c5cb8_Group%20141.png"
              alt="Plumbing Specialists"
            />
            <h3 className="text-xl font-semibold mb-2">Plumbing Specialists</h3>
            <p className="text-secondary text-base">
              Our team will work intelligently to come up with the optimal
              solution and then execute it perfectly.
            </p>
          </div>
          <div className="text-center p-4">
            <img
              className="mx-auto mb-8"
              src="https://assets-global.website-files.com/65019f359eefd3a7c84654d1/65028f8c244c7cd5f3339f78_Group%20140.png"
              alt="Approachable Presence"
            />
            <h3 className="text-xl font-semibold mb-2">
              Approachable Presence
            </h3>
            <p className="text-secondary text-base">
              We'll always take the time to explain what you can do to keep your
              plumbing system as well as possible.
            </p>
          </div>
          <div className="text-center p-4">
            <img
              className="mx-auto mb-8"
              src="https://assets-global.website-files.com/65019f359eefd3a7c84654d1/65028fa5ad0e7c8b64bfef5a_Group%20142.png"
              alt="Industry Leaders"
            />
            <h3 className="text-xl font-semibold mb-2">Industry Leaders</h3>
            <p className="text-secondary text-base">
              Our team stays ahead of the crowd by consistently integrating the
              latest advancements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
