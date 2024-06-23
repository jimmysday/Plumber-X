import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import quote_icon from "../../assets/Images/quote_icon.png";
import plumber_Model from "../../assets/Images/PlumberModel.png";
const Quote = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex flex-col overflow-hidden md:flex-row items-center gap-x-16 gap-y-16 bg-neutral px-6 md:px-10 py-16 lg:py-24 mx-4">
  
        <div data-aos="fade-up">
          <img
            className="w-6 lg:w-8 mb-2 "
            src={quote_icon}
            alt="Quote Icon"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
          <div>
            <p
              className="text-base line-height-28 font-medium text-gray"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Welcome to PlumberX <br /> We're your trusted plumbing experts.
              <br /> Our customer-centered approach and skilled team guarantee
              top-notch service. Explore our site and contact us for your
              plumbing needs.
            </p>
            <div
              className="text-right mt-8"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <p className="text-[18px] font-medium line-height-28">
                David Marquiry <br /> Chief Engineer, PlumberX
              </p>
            </div>
          </div>
        </div>

        {/* Plumber model image */}
        <div className=" transform lg:w-[35%] md:w-60 transition duration-300 hover:scale-105 ">
          <img
            src={plumber_Model}
            alt="Plumber Model"
            data-aos="fade-left"
            data-aos-delay="600"
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
