import React from "react";
import FanFacts from "../../Components/About/FanFacts";
import HappyClients from "../../Components/About/HappyClients";
import { FAQ } from "../../Components/Shared/FAQ";
import WhyChooseUs from "../../Components/Shared/WhyChooseUs";
import Location from "../../Components/Shared/Location";
import OurTeam from "../../Components/About/OurTeam";
import BasicInfo from "../../Components/About/BasicInfo";

const About = () => {
  return (
    <div>
      <div className="bg-primary py-8 h-[400px] mb-[240px] ">
        <div className="  text-center md:text-left relative mx-auto px-4 sm:px-6 lg:px-8  max-w-screen-xl">
          <h2 className="text-6xl md:text-7xl  font-bold text-white  inline-block px-4 py-2 rounded-t-md mt-20">
            About Us
          </h2>
          <div className="flex flex-col max-w-screen-lg mx-auto bg-white shadow-md rounded-md overflow-hidden mt-10 md:mt-20">
            <img
              src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c1cada4a7160b405e8bc_Group%20158.png"
              alt="About Us"
              className="w-full h-60 sm:h-72 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
      <FanFacts />
      <HappyClients />
      <OurTeam />
      <BasicInfo />
      <FAQ />
      <WhyChooseUs />
      <Location />
    </div>
  );
};

export default About;
