import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import pluber_and_user from "../../assets/Images/Plumber_and_user.png";
import checkmark from "../../assets/Images/checkmark.png";
import { Link } from "react-router-dom";
const plans = [
  {
    name: "Condo Plan",
    price: "$ 50.00 USD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.",
    features: [
      "Leak Repair",
      "Leak Repair",
      "Leak Repair",
      "Leak Repair",
      "Leak Repair",
      "Leak Repair",
      "Leak Repair",
    ],
  },
  {
    name: "Residential Plan",
    price: "$ 50.00 USD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.",
    features: [
      "Leak Repair",
      "Leak Repair",
      "Leak Repair",
      "Leak Repair",
      "Leak Repair",
      "Leak Repair",
      "Leak Repair",
    ],
  },
  {
    name: "House Plan",
    price: "$ 50.00 USD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.",
    features: [
      "Leak Repair",
      "Leak Repair",
      "Leak Repair",
      "Leak Repair",
      "Leak Repair",
      "Leak Repair",
      "Leak Repair",
    ],
  },
];

const PricingTabs = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 figtree_font">
      {/* Tabs container */}
      <Tabs className="border-0 bg-neutral pt-6 pb-20 lg:pb-60 px-4 sm:px-10">
        {/* Tab list */}
        <TabList className="flex flex-row gap-4 justify-between items-center">
          {plans.map((plan, index) => (
            <Tab
              key={index}
              className="border-0 text-[14px] sm:text-3xl font-semibold cursor-pointer"
              selectedClassName="text-primary" // Active tab color
            >
              {plan.name}
            </Tab>
          ))}
        </TabList>
        <hr className="mt-5" />

        {/* Tab panels */}
        {plans.map((plan, index) => (
          <TabPanel key={index} className="text-center">
            <p className="my-10 rounded-[86px] px-[30px] font-semibold py-1 md:py-[10px] text-neutral bg-primary inline-block text-center">
              Price per month
            </p>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
              {plan.price}
            </h1>
            <h4 className="text-xl md:text-2xl font-semibold my-3">
              What’s included
            </h4>
            <p className="text-gray text-base md:text-lg">{plan.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <img
                src={pluber_and_user}
                alt="pluber_and_user"
                className="mx-auto w-full"
              />
              <div className="flex flex-col justify-between">
                <div>
                  {/* Features list */}
                  {plan.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray text-lg mb-2 md:mb-4"
                    >
                      <img
                        className="h-5 mr-2 text-base md:text-lg"
                        src={checkmark}
                        alt="checkmark"
                      />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  to="/services"
                  className="bg-primary text-neutral rounded-xl py-2 md:py-3 w-full mt-6"
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
