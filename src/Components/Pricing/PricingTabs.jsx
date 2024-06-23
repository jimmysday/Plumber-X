import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import plumber_and_user from "../../assets/Images/Plumber_and_user.png";
import checkmark from "../../assets/Images/checkmark.png";
import { Link } from "react-router-dom";
import pricingPlans from "../../../public/Pricing.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PricingTabs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleTabSelect = () => {
    setTimeout(() => {
      AOS.refresh();
    }, 50);
  };

  return (
    <div className="max-w-screen-xl overflow-hidden mx-auto px-4 sm:px-6 lg:px-8">
      <Tabs
        className="border-0 bg-neutral pt-6 pb-20 lg:pb-60 px-4 sm:px-10"
        onSelect={handleTabSelect}
      >
        <TabList className="flex flex-row gap-4 justify-between items-center">
          {pricingPlans.plans.map((plan, index) => (
            <Tab
              key={index}
              className="border-0 text-[14px] sm:text-3xl font-semibold cursor-pointer"
              selectedClassName="text-primary"
            >
              {plan.name}
            </Tab>
          ))}
        </TabList>
        <hr className="mt-5" />

        {pricingPlans.plans.map((plan, index) => (
          <TabPanel
            key={index}
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <p className="my-10 rounded-full px-6 font-semibold py-2 text-neutral bg-primary inline-block text-center">
              Price per month
            </p>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
              {plan.price}
            </h1>
            <h4 className="text-xl md:text-2xl font-semibold my-3">
              What’s included
            </h4>
            <p className="text-gray-600 text-base md:text-lg">
              {plan.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <LazyLoadImage
                effect="blur"
                src={plumber_and_user}
                alt="Plumber and User"
                className="mx-auto w-full"
              />
              <div className="flex flex-col justify-between">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-gray-600 text-lg mb-2 md:mb-4"
                  >
                    <LazyLoadImage
                      effect="blur"
                      className="h-5 mr-2"
                      src={checkmark}
                      alt="Checkmark"
                    />
                    {feature}
                  </div>
                ))}
                <Link
                  to="/services"
                  className="bg-primary transition hover:scale-105 hover:shadow-xl text-neutral rounded-lg py-3 w-full text-center mt-6"
                >
                  Get Service
                </Link>
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default PricingTabs;
