import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Service = ({ data }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const {
    name,
    mainImage,
    shortDescription,
    features,
    serviceIcon1,
    serviceIcon2,
    serviceIcon3,
    serviceIcon4,
  } = data || {};

  return (
    <div className="mx-auto p-1 figtree_font overflow-hidden">
      <Link to={`/services/details/${name.replace(/\s+/g, "-").toLowerCase()}`}>
        <div className="relative">
          {/* Service image */}
          <img
            className="w-full lg:h-96 h-80 object-cover rounded-b"
            src={mainImage}
            alt={name}
            data-aos="fade-up"
            data-aos-duration="800"
          />
          <div className="absolute top-0 left-0 bg-gradient-to-t from-black to-transparent h-full w-full opacity-50 rounded-t-lg"></div>
        </div>

        {/* Service details container */}
        <div className="bg-neutral hover:-translate-y-1 transition duration-300 p-6 relative -mt-20 z-10 shadow rounded mx-4">
          <p className="text-xl font-semibold mb-4">{name}</p>
          <p className="text-base mb-4">{shortDescription}</p>

          {/* Service features grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:border-b lg:pb-4 lg:mb-4 mb-0">
            <div className="flex items-center gap-x-4 p-2 lg:border-r">
              <img className="w-[38px]" src={serviceIcon1} alt="Feature 1" />
              <p className="text-base">{features[0]}</p>
            </div>
            <div className="flex items-center gap-x-4 p-2">
              <img className="w-[38px]" src={serviceIcon2} alt="Feature 2" />
              <p className="text-base">{features[1]}</p>
            </div>
          </div>

          {/* service features grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
            <div className="flex items-center gap-x-4 p-2 lg:border-r">
              <img className="w-[38px]" src={serviceIcon3} alt="Feature 3" />
              <p className="text-base">{features[2]}</p>
            </div>
            <div className="flex items-center gap-x-4 p-2">
              <img className="w-[38px]" src={serviceIcon4} alt="Feature 4" />
              <p className="text-base">{features[3]}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Service;
