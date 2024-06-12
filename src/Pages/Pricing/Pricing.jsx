import HappyClients from "../../Components/Pricing/HappyClients";
import PricingTabs from "../../Components/Pricing/PricingTabs";
import Location from "../../Components/Shared/Location";
import WhyChooseUs from "../../Components/Shared/WhyChooseUs";

const Pricing = () => {
  return (
    <div>
      <div className="bg-primary lg:py-8 sm:h-[400px] h-[350px] -mb-20">
        <div className="  text-center md:text-left relative mx-auto px-4 sm:px-6 lg:px-8  max-w-screen-xl">
          <h2 className="text-6xl md:text-7xl  font-bold text-white  inline-block px-4 py-2 rounded-t-md mt-20">
            Pricing
          </h2>
        </div>
      </div>
      <PricingTabs />
      <HappyClients />
      <WhyChooseUs />
      <Location />
    </div>
  );
};
export default Pricing;
