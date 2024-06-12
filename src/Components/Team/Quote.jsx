import plumber_Model from "../../assets/Images/PlumberModel.png";
const Quote = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-x-32 gap-y-16  bg-white max-w-screen-xl mx-auto px-10 py-24  ">
        <div className="lg:w-[65%]">
          <p className="text-base font-medium text-[#00000099]">
            Welcome to PlumberX <br /> We're your trusted plumbing experts.
            <br /> Our customer-centered approach and skilled team guarantee
            top-notch service. Explore our site and contact us for your plumbing
            needs.
          </p>
          <div className="text-right mt-8">
            <p className="text-[18px] font-medium">
              David Marquiry <br /> Chief Engineer, PlumberX
            </p>
          </div>
        </div>
        <img className="lg:w-[35%]" src={plumber_Model} alt="plumber_Model" />
      </div>
    </div>
  );
};
export default Quote;
