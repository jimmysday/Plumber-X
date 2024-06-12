import Hero_Section_Background_with_Color_overlay from "../../assets/Images/Hero_Section_Background_with_Color_overlay.png";
import { IoCall } from "react-icons/io5";
const HeroSection = () => {
  return (
    <div className="-mt-14  ">
      <div
        className=" 2xl:h-screen lg:pt-40  bg-cover bg-center flex items-end pb-20"
        style={{
          backgroundImage: `url(${Hero_Section_Background_with_Color_overlay})`,
        }}
      >
        <div className="  text-white p-8">
          <h1 className="text-7xl font-bold mb-12">
            Quality <br /> Plumbers in <br /> Your Area?
          </h1>
          <div className="flex items-center gap-10 font-normal mb-14">
            <p className="text-[17px] font-normal">
              Schedule Service <br /> Online
            </p>
            <a
              className="group relative flex items-center justify-center rounded  overflow-hidden bg-white  mr-4  px-5 py-[10px]  focus:outline-none focus:ring"
              href="#"
            >
              <span className="absolute inset-y-0 left-0 w-[0px] bg-black transition-all group-hover:w-full group-active:bg-primary"></span>

              <span className="relative text-base font-medium text-primary transition-colors group-hover:text-white">
                Book an apppointment
              </span>
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-20  items-center text-lg">
            <div className="mb-4 md:mb-0">
              <p className="font-normal">
                Need Help Now? <br /> Call Us!
              </p>
              <a
                href=""
                className=" text-xl flex items-center gap-2 mt-4 font-semibold "
              >
                <IoCall /> 123-456-789
              </a>
            </div>
            <div>
              <p className="font-normal">
                Need Help Now? <br /> Mail Us!
              </p>
              <p className="mt-4 font-semibold text-xl">plumber@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
