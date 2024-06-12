import React from "react";
const FunFacts = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-24">
      <div className="mb-16">
        <p className="text-primary text-base font-bold mb-5">Why Choose Us</p>
        <h2 className="w-[60%] text-5xl font-semibold  tracking-tight text-secondary sm:text-5xl">
          Our exceptional flair for wowing clients sets us apart from the rest.
        </h2>
      </div>
      <div className="flex justify-start gap-x-20">
        <img
          src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/661d15998d1dd65c42a697c1_Standing%20Plumber.webp"
          alt=""
        />
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-x-5">
            <span className="text-primary bg-primary rounded-sm">LL</span>
            <p className="text-base ">24/7 Emergency Callout</p>
          </div>
          <div className="flex gap-x-5">
            <span className="text-primary bg-primary rounded-sm">LL</span>
            <p className="text-base ">24/7 Emergency Callout</p>
          </div>
          <div className="flex gap-x-5">
            <span className="text-primary bg-primary rounded-sm">LL</span>
            <p className="text-base ">24/7 Emergency Callout</p>
          </div>
        </div>
      </div>
      <div className="flex w-[60%] ms-auto justify-center items-center shadow bg-white py-5 -mt-72 relative rounded-md z-10 bg-opacity-20 glass">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mx-auto">
          <div className="px-4 py-8 ">
            <span className="block text-4xl font-bold text-blue-600">
              1.3k+
            </span>
            <span className="block text-lg font-medium text-gray-700">
              Boilers Installed
            </span>
          </div>
          <div className="px-4 py-8 ">
            <span className="block text-4xl font-bold text-blue-600">640+</span>
            <span className="block text-lg font-medium text-gray-700">
              Faucets Fixed
            </span>
          </div>
          <div className="px-4 py-8 ">
            <span className="block text-4xl font-bold text-blue-600">10k</span>
            <span className="block text-lg font-medium text-gray-700">
              Happy Clients
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FunFacts;
