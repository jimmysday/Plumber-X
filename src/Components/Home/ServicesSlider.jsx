import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";

const ServicesSlider = () => {
  // Array of slides
  const slides = [
    {
      imageUrl:
        "https://assets-global.website-files.com/6555a58bd247940a6073a360/664aef03a622385b5ef8c9b6_Industrial_Maintenance_Activity-p-500.png",
      title: "Floor Heating",
      link: "/team",
      features: [
        {
          imageUrl:
            "https://assets-global.website-files.com/6555a58bd247940a6073a360/664b10f7f9c574ef5221bc3e_Water_Purity_Image.png",
          text: "Luxurious Comfort",
        },
        {
          imageUrl:
            "https://assets-global.website-files.com/6555a58bd247940a6073a360/664b0c8735ea8799c90f9de2_Regular_Maintenance.png",
          text: "Regulatory Compliance",
        },
      ],
    },
    {
      imageUrl:
        "https://assets-global.website-files.com/6555a58bd247940a6073a360/664aef03a622385b5ef8c9b6_Industrial_Maintenance_Activity-p-500.png",
      title: "Floor Heating",
      link: "/team",
      features: [
        {
          imageUrl:
            "https://assets-global.website-files.com/6555a58bd247940a6073a360/664b10f7f9c574ef5221bc3e_Water_Purity_Image.png",
          text: "Luxurious Comfort",
        },
        {
          imageUrl:
            "https://assets-global.website-files.com/6555a58bd247940a6073a360/664b0c8735ea8799c90f9de2_Regular_Maintenance.png",
          text: "Regulatory Compliance",
        },
      ],
    },
    {
      imageUrl:
        "https://assets-global.website-files.com/6555a58bd247940a6073a360/664aef03a622385b5ef8c9b6_Industrial_Maintenance_Activity-p-500.png",
      title: "Floor Heating",
      link: "/team",
      features: [
        {
          imageUrl:
            "https://assets-global.website-files.com/6555a58bd247940a6073a360/664b10f7f9c574ef5221bc3e_Water_Purity_Image.png",
          text: "Luxurious Comfort",
        },
        {
          imageUrl:
            "https://assets-global.website-files.com/6555a58bd247940a6073a360/664b0c8735ea8799c90f9de2_Regular_Maintenance.png",
          text: "Regulatory Compliance",
        },
      ],
    },
    {
      imageUrl:
        "https://assets-global.website-files.com/6555a58bd247940a6073a360/664aef03a622385b5ef8c9b6_Industrial_Maintenance_Activity-p-500.png",
      title: "Floor Heating",
      link: "/team",
      features: [
        {
          imageUrl:
            "https://assets-global.website-files.com/6555a58bd247940a6073a360/664b10f7f9c574ef5221bc3e_Water_Purity_Image.png",
          text: "Luxurious Comfort",
        },
        {
          imageUrl:
            "https://assets-global.website-files.com/6555a58bd247940a6073a360/664b0c8735ea8799c90f9de2_Regular_Maintenance.png",
          text: "Regulatory Compliance",
        },
      ],
    },
    {
      imageUrl:
        "https://assets-global.website-files.com/6555a58bd247940a6073a360/664aef03a622385b5ef8c9b6_Industrial_Maintenance_Activity-p-500.png",
      title: "Floor Heating",
      link: "/team",
      features: [
        {
          imageUrl:
            "https://assets-global.website-files.com/6555a58bd247940a6073a360/664b10f7f9c574ef5221bc3e_Water_Purity_Image.png",
          text: "Luxurious Comfort",
        },
        {
          imageUrl:
            "https://assets-global.website-files.com/6555a58bd247940a6073a360/664b0c8735ea8799c90f9de2_Regular_Maintenance.png",
          text: "Regulatory Compliance",
        },
      ],
    },
    // Add more slides as needed
  ];

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 1.25,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          origin: "auto",
          perView: 2.5,
          spacing: 32,
        },
      },
    },
  });

  return (
    <div>
      <section className="py-24 px-4 overflow-hidden">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 gap-y-6 lg:gap-y-0 lg:grid-cols-2 items-end">
            <div>
              <p className="text-primary text-base font-bold mb-3 md:mb-5">
                Our Services
              </p>
              <h2 className="max-w-xl text-secondary text-3xl figtree_font sm:text-4xl md:text-5xl font-semibold tracking-tight">
                From Leaking Faucet to Gushing Pipes
              </h2>
            </div>
            <p>
              While certain plumbing issues, such as a minor toilet clog, can be
              quickly addressed with do-it-yourself methods, most plumbing
              problems require the assistance of a professional.
            </p>
          </div>
          <div className="max-w-7xl items-end justify-end mt-10 sm:flex sm:pe-6 lg:pe-8">
            <div className="mt-8 flex gap-4 lg:mt-0">
              {/* Button to navigate to previous slide */}
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
              {/* Button to navigate to next slide */}
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
          <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            {/* Keen Slider container */}
            <div ref={sliderRef} className="keen-slider">
              {/* Map over slides array to render each slide */}
              {slides.map((slide, index) => (
                <div key={index} className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between shadow-sm">
                    <div>
                      <img className="w-full" src={slide.imageUrl} alt="" />
                      <div className="bg-neutral mx-3 sm:mx-5 -mt-20 z-10 relative p-6 sm:p-10 shadow rounded">
                        <div className="flex justify-between">
                          <p className="text-secondary text-xl font-semibold">
                            {slide.title}
                          </p>
                          <Link
                            to={slide.link}
                            className="hover:text-primary hover:underline"
                          >
                            View All
                          </Link>
                        </div>
                        {/* Map over features array within each slide */}
                        {slide.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex gap-x-5 mt-8">
                            <img
                              className="w-[30px]"
                              src={feature.imageUrl}
                              alt=""
                            />
                            <p>{feature.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSlider;
