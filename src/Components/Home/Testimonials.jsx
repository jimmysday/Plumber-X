import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import testimonial_BG from "../../assets/Images/testimonial_bg.png";
const Testimonials = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
  });
  return (
    <div
      className=" flex justify-center   mx-auto  py-24 bg-cover bg-center mt-32"
      style={{ backgroundImage: `url(${testimonial_BG})` }}
    >
      <div className="flex justify-between max-w-screen-xl items-center ">
        <div
          ref={sliderRef}
          className="keen-slider text-base  mx-auto  rounded-lg overflow-hidden w-1/2"
        >
          <div className="keen-slider__slide    p-10">
            <p className="text-lg  mb-4">
              <h2 className="text-5xl font-semibold mb-8">Testimonials</h2>
              “Service was great! The plumber was extremely helpful and
              courteous. He fixed my issue quickly and was very respectful of my
              time constraints with another appointment. I appreciate the help!”
            </p>
            <p className="font-semibold text-[18px] ">Mia Cuff, CEO</p>
            <div className="flex justify-between space-x-4 mt-8">
              <img
                className="w-10 h-10 rounded-full"
                src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555a4476c6ccbbd2b8fb3a2_Ellipse%20932.png"
                alt="Profile 1"
              />
              <div className="mt-4 text-gray-500">See more reviews on</div>
            </div>
          </div>
          <div className="keen-slider__slide    p-10">
            <p className="text-lg  mb-4">
              <h2 className="text-5xl font-semibold mb-8">Testimonials</h2>
              “Service was great! The plumber was extremely helpful and
              courteous. He fixed my issue quickly and was very respectful of my
              time constraints with another appointment. I appreciate the help!”
            </p>
            <p className="font-semibold text-[18px] ">Mia Cuff, CEO</p>
            <div className="flex justify-between space-x-4 mt-8">
              <img
                className="w-10 h-10 rounded-full"
                src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555a4476c6ccbbd2b8fb3a2_Ellipse%20932.png"
                alt="Profile 1"
              />
              <div className="mt-4 text-gray-500">See more reviews on</div>
            </div>
          </div>
       
      
         
          {/* Add more slides as needed */}
        </div>
        <div className=" w-1/2">
          <div className="mt-8 flex justify-center gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              onClick={() => slider.current?.prev()}
              className="rounded-full border border-black p-3 text-black transition hover:bg-primary hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              onClick={() => slider.current?.next()}
              className="rounded-full border border-black p-3 text-black transition hover:bg-primary hover:text-white"
            >
              <svg
                className="size-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
