import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero_Section_Background_with_Color_overlay from "../../assets/Images/Hero_Section_Background_with_Color_overlay.png";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  useEffect(() => {
    if (window.innerWidth > 768) {
      AOS.init({
        duration: 800,
        once: true,
      });
    }
  }, []);
  return (
    <div className="figtree_font">
      <div
        className="lg:h-screen overflow-hidden lg:pb-0 lg:pt-0 md:pb-24 md:pt-32 bg-cover md:bg-center"
        style={{
          backgroundImage: `url(${Hero_Section_Background_with_Color_overlay})`,
        }}
      >
        <div
          className="max-w-screen-xl mx-auto text-neutral py-20 md:py-0 md:p-8 flex flex-col lg:mt-10 2xl:mt-0 justify-center h-full"
          data-aos="fade-up"
        >
          <h1
            className="text-5xl md:text-7xl lg:text-6xl 2xl:text-7xl font-bold mb-4 md:mb-12 lg:w-[40%] leading-snug md:line-height-70 text-center md:text-left"
            data-aos="fade-right"
          >
            Quality Plumbers in Your Area?
          </h1>

          <div
            className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10 font-normal mb-4 md:mb-4 lg:mb-4 2xl:mb-14 text-center md:text-left"
            data-aos="fade-left"
          >
            <p className="text-lg block md:hidden md:text-[17px] font-normal">
              Schedule Service Online
            </p>
            <p className="text-lg hidden md:block md:text-[17px] font-normal">
              Schedule Service <br /> Online
            </p>
            <Link
              className="group relative flex items-center justify-center rounded overflow-hidden bg-neutral md:my-0 my-2  px-10 py-2.5 md:px-5 md:py-[10px] focus:outline-none focus:ring"
              to="/contact"
              data-aos="zoom-in"
            >
              <span className="absolute inset-y-0 left-0 w-[0px] bg-black transition-all group-hover:w-full group-active:bg-primary"></span>
              <span className="relative text-base  font-medium text-primary transition-colors group-hover:text-neutral">
                Book an appointment
              </span>
            </Link>
          </div>
          <div
            className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start text-lg text-center md:text-left"
            data-aos="fade-up"
          >
            <div className="md:mb-0">
              <p className="font-normal block md:hidden">
                Need Help Now? Call Us!
              </p>
              <p className="font-normal hidden md:block">
                Need Help Now? <br /> Call Us!
              </p>
              <a
                href="tel:(604) 720 3999"
                className="text-xl flex items-center gap-2 mt-4 font-semibold justify-center md:justify-start"
              >
                <IoCall /> (604) 720 3999
              </a>
            </div>
            <div>
              <p className="font-normal">
                Need Help Now? <br /> Mail Us!
              </p>
              <p className="mt-4 font-semibold text-xl">jaminzhang99@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
