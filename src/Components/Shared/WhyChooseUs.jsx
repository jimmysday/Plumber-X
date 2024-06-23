import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import PlumberModel from "../../assets/Images/Plumber Model.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="mx-4">
      <div className="md:grid flex overflow-hidden flex-col-reverse gap-10 md:gap-0 grid-cols-1 md:grid-cols-2 justify-center items-center max-w-screen-xl mx-auto pt-12  lg:pt-24">
        <LazyLoadImage
          effect="blur"
          src={PlumberModel}
          alt="Plumber Model"
          className="w-full h-auto md:mb-0 lg:px-20"
          data-aos="fade-up"
        />

        <div
          className="text-neutral flex flex-col items-center md:items-start mt-5 md:mt-0 md:ml-10 gap-y-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-primary font-bold text-base">Why Choose Us?</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary text-center md:text-left lg:line-height-54 figtree_font">
            Our exceptional flair for wowing clients sets us apart from the
            rest.
          </h1>
          <div className="inline-block mt-4">
            <Link
              className="group relative block bg-primary rounded overflow-hidden px-5 py-2 focus:outline-none focus:ring"
              to="/contact"
              style={{ display: "inline-block" }}
            >
              <span className="absolute inset-y-0 left-0 w-[2px] bg-black transition-all group-hover:w-full group-active:bg-primary"></span>
              <span className="relative font-medium text-neutral transition-colors  text-xl group-hover:text-neutral figtree_font">
                Book an appointment
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
