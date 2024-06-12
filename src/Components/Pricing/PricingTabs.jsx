import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import pluber_and_user from "../../assets/Images/Plumber_and_user.png";
import checkmark from "../../assets/Images/checkmark.png";

const PricingTabs = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <Tabs className="border-0 bg-white pt-10 pb-20 md:pb-60 px-6 sm:px-10">
        <TabList className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-between items-center">
          <Tab className="border-0 text-2xl sm:text-3xl font-semibold text-[#00000099]">
            Condo Plan
          </Tab>
          <Tab className="border-0 text-2xl sm:text-3xl font-semibold text-[#00000099]">
            Residential Plan
          </Tab>
          <Tab className="border-0 text-2xl sm:text-3xl font-semibold text-[#00000099]">
            House Plan
          </Tab>
        </TabList>
        <hr className="mt-6" />
        <TabPanel className="text-center">
          <p className="my-10 rounded-[86px] px-[30px] font-semibold py-[10px] text-white bg-primary inline-block  text-center">
            Price per month
          </p>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
            $ 50.00 USD
          </h1>
          <h4 className="text-xl md:text-2xl font-semibold my-3">
            What’s included
          </h4>
          <p className="text-[#00000099] text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Suspendisse varius enim in eros elementum.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 mt-16">
            <img
              src={pluber_and_user}
              alt="pluber_and_user"
              className="mx-auto"
            />
            <div className="flex flex-col justify-between">
              <div>
                <div className="grid gap-y-2">
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  {/* Repeat other items */}
                </div>
              </div>
              <button className="bg-primary text-white rounded-xl py-3 w-full mt-6">
                Get Service
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="text-center">
          <p className="my-10 rounded-[86px] px-[30px] font-semibold py-[10px] text-white bg-primary inline-block  text-center">
            Price per month
          </p>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
            $ 50.00 USD
          </h1>
          <h4 className="text-xl md:text-2xl font-semibold my-3">
            What’s included
          </h4>
          <p className="text-[#00000099] text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Suspendisse varius enim in eros elementum.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 mt-16">
            <img
              src={pluber_and_user}
              alt="pluber_and_user"
              className="mx-auto"
            />
            <div className="flex flex-col justify-between">
              <div>
                <div className="grid gap-y-2">
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  {/* Repeat other items */}
                </div>
              </div>
              <button className="bg-primary text-white rounded-xl py-3 w-full mt-6">
                Get Service
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="text-center">
          <p className="my-10 rounded-[86px] px-[30px] font-semibold py-[10px] text-white bg-primary inline-block  text-center">
            Price per month
          </p>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
            $ 50.00 USD
          </h1>
          <h4 className="text-xl md:text-2xl font-semibold my-3">
            What’s included
          </h4>
          <p className="text-[#00000099] text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Suspendisse varius enim in eros elementum.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 mt-16">
            <img
              src={pluber_and_user}
              alt="pluber_and_user"
              className="mx-auto"
            />
            <div className="flex flex-col justify-between">
              <div>
                <div className="grid gap-y-2">
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  <div className="flex items-center text-[#00000099] text-lg mb-4">
                    <img className="h-5 mr-2" src={checkmark} alt="checkmark" />
                    Leak Repair
                  </div>
                  {/* Repeat other items */}
                </div>
              </div>
              <button className="bg-primary text-white rounded-xl py-3 w-full mt-6">
                Get Service
              </button>
            </div>
          </div>
        </TabPanel>
        {/* Repeat for other TabPanels */}
      </Tabs>
    </div>
  );
};

export default PricingTabs;
