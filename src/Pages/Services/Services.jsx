import React from "react";
import AllServices from "../../Components/Services/AllServices";
import WhyChooseUs from "../../Components/Shared/WhyChooseUs";
import Location from "../../Components/Shared/Location";
import { Helmet } from "react-helmet-async";
const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Services</title>
      </Helmet>
      {/* Breadcrumb */}
      <div className="bg-primary lg:py-8 sm:h-[400px] h-[300px] lg:h-[480px]  -mb-20">
        <div className="  text-center md:text-left relative mx-auto px-4 sm:px-6 lg:px-8  max-w-screen-xl">
          <h2 className="text-5xl md:text-7xl  font-bold text-neutral  inline-block px-4 py-2 rounded-t-md mt-20 lg:mt-36 figtree_font">
            Services
          </h2>
        </div>
      </div>
      {/*others components  */}
      <AllServices />
      <WhyChooseUs />
      <Location />
    </div>
  );
};
export default Services;
