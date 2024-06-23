/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import testimonial_BG from "../../assets/Images/testimonial_bg.png";
import AOS from "aos";
import "aos/dist/aos.css";
// Client Images
import client_1 from "../../assets/Images/client_1.png";
import client_2 from "../../assets/Images/Client_2.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Testimonials = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(max-width: 768px)": {
        slidesPerView: 1,
      },
      "(min-width: 769px)": {
        slidesPerView: 1,
        centered: true,
      },
    },
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const testimonials = [
    {
      quote:
        "Service was great! The plumber was extremely helpful and courteous. He fixed my issue quickly and was very respectful of my time constraints with another appointment. I appreciate the help!",
      name: "MDavid M.",
      image: client_1,
    },
    {
      quote:
        "Plumber is my go-to for all home maintenance needs. They've fixed my plumbing, cleaned my windows, and even repaired my fence with professionalism and skill. I'm a satisfied customer for life!",
      name: "John D.",
      image: client_2,
    },
    // Add more testimonials as needed
  ];

  return (
    <>
      {/* for pc  */}
      <div
        className="lg:flex overflow-hidden justify-center mx-auto py-12 sm:py-24 bg-cover bg-center "
        style={{ backgroundImage: `url(${testimonial_BG})` }}
      >
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-col lg:flex-row justify-between max-w-screen-xl items-center px-4 sm:px-8"
        >
          <div
            ref={sliderRef}
            className="keen-slider text-base mx-auto rounded-lg overflow-hidden w-full lg:w-1/2"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="keen-slider__slide p-6 sm:p-10">
                <h2 className="text-secondary text-3xl sm:text-5xl font-semibold mb-4 sm:mb-8">
                  Testimonials
                </h2>
                <p className="text-base sm:text-lg mb-2 sm:mb-4 md:pr-20 lg:pr-0">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-[16px] sm:text-[18px]">
                  {testimonial.name}
                </p>
                <div className="flex items-center space-x-4 mt-4 sm:mt-8">
                  <LazyLoadImage
                    effect="blur"
                    className="w-10 h-10 rounded-full"
                    src={testimonial.image}
                    alt={`Profile of ${testimonial.name}`}
                  />
                  <div className="text-gray-500">See more reviews on</div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="flex gap-4">
              <button
                aria-label="Previous slide"
                onClick={() => slider.current?.prev()}
                className="rounded-full border border-black p-3 text-black transition hover:bg-primary hover:text-neutral"
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
                className="rounded-full border border-black p-3 text-black transition hover:bg-primary hover:text-neutral"
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
    </>
  );
};

export default Testimonials;
