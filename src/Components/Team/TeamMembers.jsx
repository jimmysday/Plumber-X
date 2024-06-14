import Member1 from "../../assets/Images/member-1.png";
import team_member_BG from "../../assets/Images/Team_Member-BG.png";

// TeamMembers component definition
const TeamMembers = () => {
  // Array of team member data
  const teamMembers = [
    { name: "Guy <br> Hawkins", title: "Plumber" },
    { name: "Esther <br> Howard", title: "Plumber" },
    { name: "Darrell <br> Steward", title: "Plumber" },
    { name: "Guy <br> Hawkins", title: "Plumber", team: "Plum" },
    { name: "Esther <br> Howard", title: "Plumber", team: "229 x 86" },
    { name: "Darrell <br> Steward", title: "Plumber", team: "Plumber" },
  ];

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="grid bg-neutral px-4 lg:px-10 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 pt-24 pb-10 md:mx-0 lg:mx-4">
        {/* Mapping through teamMembers array*/}
        {teamMembers.map((member, index) => (
          <div key={index}>
            <div
              style={{ backgroundImage: `url(${team_member_BG})` }}
              className="relative overflow-hidden bg-cover rounded-sm shadow transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg h-[475px]"
            >
              <img
                alt=""
                src={Member1}
                className="absolute inset-0 mt-20 mx-auto bg-center transition-all duration-500 transform hover:scale-110"
              />

              <div className="h-[475px] relative bg-gradient-to-t from-primary/60 to-transparent transition-opacity duration-500 ease-in-out hover:from-primary/80">
                <div className="p-4 sm:p-6 absolute bottom-0">
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
