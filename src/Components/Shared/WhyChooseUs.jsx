import PlumberModel from "../../assets/Images/Plumber Model.png";

const WhyChooseUs = () => {
  return (
    <div className="mx-4">
      <div className="grid gap-10 md:gap-20 grid-cols-1 md:grid-cols-2 justify-center items-center max-w-screen-xl mx-auto pt-12 md:pt-24">
        <img
          src={PlumberModel}
          alt="Plumber Model"
          className="w-full h-auto mb-5 md:mb-0"
        />
        <div className="text-white flex flex-col items-center md:items-start mt-5 md:mt-0 md:ml-10 gap-y-4">
          <p className="text-primary font-bold text-base">Why Choose Us?</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-secondary text-center md:text-left">
            Our exceptional flair for wowing clients sets us apart from the
            rest.
          </h1>
          <div className="inline-block mt-4">
            <a
              className="group relative block bg-primary rounded overflow-hidden px-5 py-2 focus:outline-none focus:ring"
              href="#"
              style={{ display: "inline-block" }}
            >
              <span className="absolute inset-y-0 left-0 w-[2px] bg-black transition-all group-hover:w-full group-active:bg-primary"></span>
              <span className="relative font-medium text-white transition-colors text-base group-hover:text-white">
                Book an appointment
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
