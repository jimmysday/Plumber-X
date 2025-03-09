import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Location = () => {
  useEffect(() => {
    AOS.init({
      once: true, 
      offset: 50, 
      duration: 800, 
      easing: "ease-in-out", 
    });
  }, []);

  return (
    <div>
      <section className="text-secondary body-font relative figtree_font">
        {/* Map container with iframe for embedding Google Maps */}
        <div className="relative inset-0 bg-gray-300" data-aos="fade-in">
          <iframe
            className="w-full h-[50vh] md:h-[30vh] lg:h-[500px]"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.90977281457!2d-79.54286449631303!3d43.71837095801751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1719070839063!5m2!1sen!2sbd"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.7)" }}
          ></iframe>

          {/* Information cards displayed on larger screens */}
          <div className="hidden lg:grid max-w-screen-lg px-4 md:grid-cols-3 gap-8 mx-auto justify-center absolute left-0 right-0 top-40 transform translate-y-full">
            {/* Head Office Info Card */}
            <div
              className="bg-neutral bg-opacity-90 px-10 py-8 rounded shadow-lg text-center w-[288px]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="text-primary">
                <LazyLoadImage
                  effect="blur"
                  className="mx-auto"
                  src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/664ad80943df10ce5148ad6c_Office%20Icon.png"
                  alt="Office Icon"
                />
              </div>
              <h2 className="text-lg font-base font-semibold text-gray-900 my-3">
                Head Office
              </h2>
              <p className="text-gray-700 text-base line-height-22">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </p>
            </div>

            {/* Phone Numbers Info Card */}
            <div
              className="bg-neutral bg-opacity-90 px-10 py-8 rounded shadow-lg text-center w-[288px]"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="text-primary mb-2">
                <LazyLoadImage
                  effect="blur"
                  className="mx-auto"
                  src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/664ad80954a19f8ef87c9325_Call%20Iocn.png"
                  alt="Call Icon"
                />
              </div>
              <h2 className="text-lg font-base font-semibold text-gray-900 my-3">
                Phone Numbers
              </h2>
              <p className="text-gray-700 text-base">(604) 720 3999</p>
              <p className="text-gray-700 text-base">jaminzhang99@gmail.com</p>
            </div>

            {/* Working Time Info Card */}
            <div
              className="bg-neutral bg-opacity-90 px-10 py-8 rounded shadow-lg text-center w-[288px]"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="text-primary mb-2">
                <LazyLoadImage
                  effect="blur"
                  className="mx-auto"
                  src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/664ad80914892609d0a65274_Timer%20Icon.png"
                  alt="Timer Icon"
                />
              </div>
              <h2 className="text-lg font-base font-semibold text-gray-900 my-3">
                Working Time
              </h2>
              <p className="text-gray-700 text-base">24/7 Hour Service</p>
              <p className="text-gray-700 text-base">365 Days</p>
            </div>
          </div>
        </div>

        {/* Information cards displayed on smaller screens */}
        <div className="lg:hidden max-w-screen-lg px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 mx-auto justify-center">
          {/* Head Office Info Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-neutral bg-opacity-90 px-6 py-6 md:rounded lg:shadow-lg text-center"
          >
            <div className="text-primary">
              <LazyLoadImage
                effect="blur"
                className="mx-auto"
                src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/664ad80943df10ce5148ad6c_Office%20Icon.png"
                alt="Office Icon"
              />
            </div>
            <h2 className="text-lg font-base font-semibold text-gray-900 my-3">
              Head Office
            </h2>
            <p className="text-gray-700 text-base">
              2972 Westheimer Rd. Santa <br /> Ana, Illinois 85486
            </p>
          </div>

          {/* Phone Numbers Info Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="bg-neutral bg-opacity-90 px-6 py-6 md:rounded lg:shadow-lg text-center"
          >
            <div className="text-primary mb-2">
              <LazyLoadImage
                effect="blur"
                className="mx-auto"
                src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/664ad80954a19f8ef87c9325_Call%20Iocn.png"
                alt="Call Icon"
              />
            </div>
            <h2 className="text-lg font-base font-semibold text-gray-900 my-3">
              Phone Numbers
            </h2>
            <p className="text-gray-700 text-base">(604) 720 3999</p>
            <p className="text-gray-700 text-base">jaminzhang99@gmail.com</p>
          </div>

          {/* Working Time Info Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-neutral bg-opacity-90 px-6 py-6 md:rounded lg:shadow-lg text-center"
          >
            <div className="text-primary mb-2">
              <LazyLoadImage
                effect="blur"
                className="mx-auto"
                src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/664ad80914892609d0a65274_Timer%20Icon.png"
                alt="Timer Icon"
              />
            </div>
            <h2 className="text-lg font-base font-semibold text-gray-900 my-3">
              Working Time
            </h2>
            <p className="text-gray-700 text-base">24/7 Hour Service</p>
            <p className="text-gray-700 text-base">365 Days</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
