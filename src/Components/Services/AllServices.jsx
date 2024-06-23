import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import servicesData from "../../../public/Services.json";
import Service from "./Service";

const AllServices = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="overflow-hidden  pb-16">
      {/* Services */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 max-w-screen-xl mx-auto gap-y-20 gap-x-10 px-4"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {servicesData.map((service) => (
          <Service key={service.id} data={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
