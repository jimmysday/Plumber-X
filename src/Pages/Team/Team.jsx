
import Quote from "../../Components/Team/Quote";
import TeamMembers from "../../Components/Team/TeamMembers";
import WhyChooseUs from "../../Components/Shared/WhyChooseUs";
import Location from "../../Components/Shared/Location";

const Team = () => {
  return (
    <div>
      {/* Breadcrumb  */}
      <div className="bg-primary lg:py-8  sm:h-[400px] h-[300px] -mb-20">
        <div className="  text-center md:text-left relative mx-auto px-4 sm:px-6 lg:px-8  max-w-screen-xl">
          <h2 className="text-5xl md:text-7xl  font-bold text-neutral  inline-block px-4 py-2 rounded-t-md mt-20 figtree_font">
            Our Team
          </h2>
        </div>
      </div>
      {/* others components  */}
      <Quote />
      <TeamMembers />
      <WhyChooseUs />
      <Location />
    </div>
  );
};
export default Team;
