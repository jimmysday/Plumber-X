import React from "react";
import Hero_Section_Background_with_Color_overlay from "../../assets/Images/Hero_Section_Background_with_Color_overlay.png";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="figtree_font">
      <div
        className="lg:h-screen lg:pb-0 lg:pt-0 md:pb-24 md:pt-32 bg-cover md:bg-center"
        style={{
          backgroundImage: `url(${Hero_Section_Background_with_Color_overlay})`,
        }}
      >
        <div className="max-w-screen-xl mx-auto text-neutral py-20 md:py-0 md:p-8 flex flex-col justify-center h-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 md:mb-12 lg:w-[40%] leading-snug md:line-height-70  text-center md:text-left">
            Quality Plumbers in Your Area?
          </h1>

          <div className="flex flex-col md:flex-row items-center md:items-start  gap-4 md:gap-10 font-normal mb-10 md:mb-14 text-center md:text-left">
            <p className="text-lg block md:hidden md:text-[17px] font-normal">
              Schedule Service Online
            </p>
            <p className="text-lg hidden md:block md:text-[17px] font-normal">
              Schedule Service <br /> Online
            </p>
            {/* Button to book an appointment */}
            <Link
              className="group relative flex items-center justify-center rounded overflow-hidden bg-neutral px-4 py-3 md:px-5 md:py-[10px] focus:outline-none focus:ring"
              to="/contact"
            >
              <span className="absolute inset-y-0 left-0 w-[0px] bg-black transition-all group-hover:w-full group-active:bg-primary"></span>

              <span className="relative text-base font-medium text-primary transition-colors group-hover:text-neutral">
                Book an appointment
              </span>
            </Link>
          </div>
          {/* Contact options */}
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start  text-lg text-center md:text-left">
            <div className="md:mb-0">
              <p className="font-normal block md:hidden">
                Need Help Now? Call Us!
              </p>
              <p className="font-normal hidden md:block">
                Need Help Now? <br /> Call Us!
              </p>
              {/* Phone number link */}
              <a
                href="tel:123-456-789"
                className="text-xl flex items-center gap-2 mt-4 font-semibold justify-center md:justify-start"
              >
                <IoCall /> 123-456-789
              </a>
            </div>
            <div>
              {/* Email contact */}
              <p className="font-normal">
                Need Help Now? <br /> Mail Us!
              </p>
              <p className="mt-4 font-semibold text-xl">plumber@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
