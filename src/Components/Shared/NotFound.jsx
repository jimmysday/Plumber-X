import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhyChooseUs from "./WhyChooseUs";
import Location from "./Location";
import Footer from "./Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NotFound = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-screen-xl">
        <div className="bg-primary lg:py-8 sm:h-[400px] h-[300px] -mb-20">
          <div className="text-center md:text-left relative mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <h2 className="text-5xl md:text-7xl font-bold text-neutral inline-block px-4 py-2 rounded-t-md mt-20 figtree_font">
              404 Pages
            </h2>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row items-center gap-x-16 gap-y-16 bg-neutral px-6 md:px-10 py-16 lg:py-24 mx-4"
          data-aos="fade-in"
        >
          <div data-aos="fade-up" data-aos-delay="200">
            <h1 className="bg-primary mb-6 text-neutral font-extrabold text-9xl inline-block pt-16 px-4">
              404
            </h1>
            <p className="text-5xl mb-4 font-extrabold">Page not Found</p>
            <p className="text-base line-height-28 font-medium text-gray">
              Sorry, the page you are looking for could not be found. It may
              have been moved, deleted, or it never existed in the first place.
            </p>
          </div>

          {/* Plumber model image */}
          <LazyLoadImage
            effect="blur"
            className="lg:w-[35%] md:w-60"
            src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555cd3e20c295a71712cc21_WhatsApp%20Image%202023-11-01%20at%2016.30.23_1297d1e5.jpg"
            alt="Plumber Model"
            data-aos="fade-up"
            data-aos-delay="400"
          />
        </div>
        <WhyChooseUs />
      </div>
      <Location />
      <Footer />
    </div>
  );
};

export default NotFound;
