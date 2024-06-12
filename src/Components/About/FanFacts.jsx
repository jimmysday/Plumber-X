import React from "react";

const FanFacts = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:gap-20 grid-cols-1 lg:grid-cols-2">
        <div className="px-4">
          <p className="text-base text-primary font-bold mb-4">
            Why Choose Us?
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Our exceptional flair for wowing clients sets us apart from the
            rest.
          </h1>
          <div className="py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center md:border-r md:border-gray-300">
                <p className="text-4xl sm:text-5xl font-bold leading-none text-primary">
                  640+
                </p>
                <p className="text-base mt-4 sm:mt-6 text-gray-800">
                  Faucets Fixed
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl sm:text-5xl font-bold leading-none text-primary">
                  640+
                </p>
                <p className="text-base mt-4 sm:mt-6 text-gray-800">
                  Satisfaction Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          {["Background", "Experience", "Commitment"].map((heading, index) => (
            <div key={index} className="mb-8">
              <h1 className="text-lg sm:text-xl font-semibold mt-5 mb-2">
                {heading}
              </h1>
              <p className="text-base text-gray-800">
                We've been a trusted partner in plumbing services since 2000.
                With a foundation built on expertise and reliability, we have
                proudly served countless households and businesses in Ontario.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FanFacts;
