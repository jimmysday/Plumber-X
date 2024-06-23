import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Standing_Plumber_model from "../../assets/Images/Standing_Plumber_model.webp";
import dot from "../../assets/Images/Dot.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FunFacts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative">
      <div className="max-w-screen-xl overflow-hidden mx-auto px-4 pb-20 sm:pt-12 sm:pb-24 md:mb-20 lg:mb-36">
        {/* Section title */}
        <div className="mb-16 text-center md:text-left" data-aos="fade-up">
          <p className="text-primary text-base font-bold mb-5 md:text-center lg:text-left">
            Why Choose Us
          </p>
          <h2 className="text-3xl text-secondary figtree_font sm:text-4xl md:text-5xl font-semibold tracking-tight md:text-center lg:text-left lg:w-[70%] line-height-54">
            Our exceptional flair for wowing clients sets us apart from the
            rest.
          </h2>
        </div>

        {/* Main content section */}
        <div
          className="flex flex-col lg:flex-row justify-start items-start gap-10 md:gap-20"
          data-aos="fade-up"
        >
          <div>
            <LazyLoadImage
              effect="blur"
              src={Standing_Plumber_model}
              alt="Standing Plumber"
              className="mb-8 md:mb-0 "
            />
            <LazyLoadImage
              effect="blur"
              className="absolute 2xl:hidden block -z-10  bottom-40 md:bottom-40 lg:-bottom-0 -left-20"
              src={dot}
              alt=""
            />
          </div>

          {/* Fun facts */}

          <div className="flex flex-col gap-y-5">
            <div className="flex gap-x-5 items-center" data-aos="fade-right">
              <span className="text-neutral bg-primary h-6 w-3"></span>
              <p className="text-base">24/7 Emergency Callout</p>
            </div>
            <div className="flex gap-x-5 items-center" data-aos="fade-right">
              <span className="text-neutral bg-primary h-6 w-3"></span>
              <p className="text-base">Expert and Professional Plumbers</p>
            </div>
            <div className="flex gap-x-5 items-center" data-aos="fade-right">
              <span className="text-neutral bg-primary h-6 w-3"></span>
              <p className="text-base">Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>

        {/* Fun facts statistics */}
        <div className="md:-mt-[500px] md:ml-[20%] lg:-mt-96 lg:ml-[30%]">
          <div
            className="flex w-full lg:w-[75%] mx-auto mt-16 md:mt-24 shadow bg-neutral py-5 rounded-md z-10 bg-opacity-70 backdrop-blur-lg"
            data-aos="fade-up"
          >
            <div className="grid grid-cols-3 md:gap-10 text-center px-2 md:px-0 mx-auto">
              <div className="md:px-4 py-4 md:py-8">
                <span className="block text-3xl md:text-4xl font-bold text-primary">
                  1.3k+
                </span>
                <span className="block mt-3 font-medium text-gray-700 text-base">
                  Boilers Installed
                </span>
              </div>
              <div className="md:px-4 py-4 md:py-8">
                <span className="block text-3xl md:text-4xl font-bold text-primary">
                  640+
                </span>
                <span className="block mt-3 font-medium text-gray-700 text-base">
                  Faucets Fixed
                </span>
              </div>
              <div className="md:px-4 py-4 md:py-8">
                <span className="block text-3xl md:text-4xl font-bold text-primary">
                  10k
                </span>
                <span className="block mt-3 font-medium text-gray-700 text-base">
                  Happy Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LazyLoadImage
        effect="blur"
        className="absolute z-10 bottom-10 left-44 hidden 2xl:block "
        src={dot}
        alt=""
      />
    </div>
  );
};

export default FunFacts;
