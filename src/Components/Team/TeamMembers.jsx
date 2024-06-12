import Member1 from "../../assets/Images/member-1.png";
import team_member_BG from "../../assets/Images/Team_Member-BG.png";
const TeamMembers = () => {
  const teamMembers = [
    { name: "Guy <br> Hawkins", title: "Plumber" },
    { name: "Esther <br> Howard", title: "Plumber" },
    { name: "Darrell <br> Steward", title: "Plumber" },
    { name: "Guy <br> Hawkins", title: "Plumber", team: "Plum" },
    { name: "Esther <br> Howard", title: "Plumber", team: "229 x 86" },
    { name: "Darrell <br> Steward", title: "Plumber", team: "Plumber" },
  ];
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto gap-x-8 gap-y-16 py-24 px-4">
      {teamMembers.map((member) => (
        <div key={member.name}>
          <div
            style={{ backgroundImage: `url(${team_member_BG})` }}
            className="relative overflow-hidden bg-cover  rounded shadow transition hover:shadow-lg h-[475px]   "
          >
            <img
              alt=""
              src={Member1}
              className="absolute  bg-center pt-20   f transition-all duration-500"
            />

            <div className="h-[475px] relative bg-gradient-to-t from-primary to-transparent   ">
              <div className="p-4 sm:p-6 absolute bottom-0">
                <h1
                  dangerouslySetInnerHTML={{ __html: member.name }}
                  className="text-5xl font-bold text-white"
                />

                <p className="mt-6 text-xl text-white">{member.title}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TeamMembers;
