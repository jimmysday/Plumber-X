import Member1 from "../../assets/Images/member-1.png";
import team_member_BG from "../../assets/Images/Team_Member-BG.png";

const OurTeam = () => {
  const teamMembers = [
    { name: "Guy <br> Hawkins", title: "Plumber" },
    { name: "Esther <br> Howard", title: "Plumber" },
    { name: "Darrell <br> Steward", title: "Plumber" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div>
        <h3 className="font-bold text-base text-center text-primary">
          Our Approach
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mt-3 mb-8">
          What to expect from us
        </h1>
        <p className="text-center text-gray-600">
          While certain plumbing issues, such as a minor toilet clog or a
          dripping faucet, can be quickly addressed with simple do-it-yourself
          methods, it's essential to recognize that many plumbing problems are
          complex and require the expertise of a professional plumber.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 my-16 px-4">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <div
              style={{ backgroundImage: `url(${team_member_BG})` }}
              className="relative overflow-hidden rounded shadow transition hover:shadow-lg h-96"
            >
              <img
                alt=""
                src={Member1}
                className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent">
                <div className="absolute bottom-0 p-4 sm:p-6">
                  <h1
                    dangerouslySetInnerHTML={{ __html: member.name }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                  />
                  <p className="mt-2 sm:mt-4 text-base sm:text-lg text-white">
                    {member.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-600">
        Embark on a rewarding journey with us. Join our diverse and passionate
        team, where collaboration sparks creativity, and together, we shape a
        brighter future.
      </p>
      <div className="mt-6 text-center">
        <button className="rounded bg-primary text-base font-semibold text-white px-10 py-2">
          Join our team
        </button>
      </div>
    </div>
  );
};

export default OurTeam;
