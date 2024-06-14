import React from "react";

const FunFacts = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-24 md:mb-52">
      {/* Section title */}
      <div className="mb-16 text-center md:text-left">
        <p className="text-primary text-base font-bold mb-5 md:text-center lg:text-left">
          Why Choose Us
        </p>
        <h2 className="text-3xl text-secondary figtree_font sm:text-4xl md:text-5xl font-semibold tracking-tight md:text-center lg:text-left lg:w-[70%]">
          Our exceptional flair for wowing clients sets us apart from the rest.
        </h2>
      </div>

      {/* Main content section */}
      <div className="flex flex-col lg:flex-row justify-start items-start gap-10 md:gap-20">
        <img
          src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/661d15998d1dd65c42a697c1_Standing%20Plumber.webp"
          alt="Standing Plumber"
          className="mb-8 md:mb-0"
        />

        {/* Fun facts */}
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-x-5 items-center">
            <span className="text-neutral bg-primary h-6 w-3"></span>
            <p className="text-base">24/7 Emergency Callout</p>
          </div>
          <div className="flex gap-x-5 items-center">
            <span className="text-neutral bg-primary h-6 w-3"></span>
            <p className="text-base">Expert and Professional Plumbers</p>
          </div>
          <div className="flex gap-x-5 items-center">
            <span className="text-neutral bg-primary h-6 w-3"></span>
            <p className="text-base">Satisfaction Guaranteed</p>
          </div>
        </div>
      </div>

      {/* Fun facts statistics */}
      <div className="md:-mt-[500px] md:ml-[20%] lg:-mt-96 lg:ml-[30%]">
        <div className="flex w-full lg:w-[75%] mx-auto mt-16 md:mt-24 shadow bg-neutral py-5 rounded-md z-10 bg-opacity-70 backdrop-blur-lg">
          <div className="grid grid-cols-3 md:gap-10 text-center px-2 md:px-0 mx-auto">
            <div className="md:px-4 py-4 md:py-8">
              <span className="block text-3xl md:text-4xl font-bold text-primary">
                1.3k+
              </span>
              <span className="block mt-3 font-medium text-gray-700 text-base">
                Boilers Installed
              </span>
            </div>
            <div className="md:px-4 py-4 md:py-8">
              <span className="block text-3xl md:text-4xl font-bold text-primary">
                640+
              </span>
              <span className="block mt-3 font-medium text-gray-700 text-base">
                Faucets Fixed
              </span>
            </div>
            <div className="md:px-4 py-4 md:py-8">
              <span className="block text-3xl md:text-4xl font-bold text-primary">
                10k
              </span>
              <span className="block mt-3 font-medium text-gray-700 text-base">
                Happy Clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
