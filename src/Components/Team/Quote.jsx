import quote_icon from "../../assets/Images/quote_icon.png";
import plumber_Model from "../../assets/Images/PlumberModel.png";
const Quote = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      {/* Container for the quote section with responsive layout */}
      <div className="flex flex-col md:flex-row items-center gap-x-16 gap-y-16 bg-neutral px-6 md:px-10 py-16 lg:py-24 mx-4">
        {/* Quote text section */}
        <div>
          <img
            className="w-8 lg:w-auto mb-2"
            src={quote_icon}
            alt="Quote Icon"
          />
          <div>
            <p className="text-base line-height-28 font-medium text-gray">
              Welcome to PlumberX <br /> We're your trusted plumbing experts.
              <br /> Our customer-centered approach and skilled team guarantee
              top-notch service. Explore our site and contact us for your
              plumbing needs.
            </p>
            <div className="text-right mt-8">
              <p className="text-[18px] font-medium line-height-28">
                David Marquiry <br /> Chief Engineer, PlumberX
              </p>
            </div>
          </div>
        </div>

        {/* Plumber model image */}
        <img
          className="lg:w-[35%] md:w-60"
          src={plumber_Model}
          alt="Plumber Model"
        />
      </div>
    </div>
  );
};

export default Quote;
