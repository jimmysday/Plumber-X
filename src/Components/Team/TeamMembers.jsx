import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import team_member_BG from "../../assets/Images/Team_Member-BG.png";
import teamMembers from "../../../public/TeamMembers.json";
const TeamMembers = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
    // Refresh AOS when the component updates
    AOS.refresh();
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="grid bg-neutral overflow-hidden px-4 lg:px-10 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 pt-24 pb-10 md:mx-0 lg:mx-4">
        {/* Mapping through teamMembers array*/}
        {teamMembers.map((member, index) => (
          <div key={index}>
            <div
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="relative overflow-hidden bg-cover rounded-sm shadow transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl h-[475px] group"
            >
              {/* Background blur effect */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:blur-sm "
                style={{ backgroundImage: `url(${team_member_BG})` }}
              ></div>

              <img
                alt=""
                src={member.image}
                className="relative z-10 mt-20 mx-auto transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-3 "
              />

              <div className="absolute inset-0 z-20">
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-primary/100 to-transparent p-4 sm:p-6">
                  {/* Team member's name with HTML rendering for line breaks */}
                  <h1
                    dangerouslySetInnerHTML={{ __html: member.name }}
                    className="text-[45px] font-semibold leading-tight text-neutral figtree_font"
                  />

                  <p className="mt-3 text-xl text-neutral leading-tight figtree_font">
                    {member.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
