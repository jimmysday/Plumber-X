import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Member1 from "../../assets/Images/member-1.png";
import team_member_BG from "../../assets/Images/Team_Member-BG.png";

import teamMembers from "../../../public/TeamMembers.json";
import { Link } from "react-router-dom";
const TeamMembers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl py-24">
      <div className=" text-center px-4">
        <h2
          className="text-base text-primary mb-4 font-semibold"
          data-aos="fade-down"
        >
          OUR APPROACH
        </h2>
        <h1
          className="text-3xl text-secondary figtree_font font-bold mb-4 sm:text-4xl md:text-5xl"
          data-aos="fade-down"
        >
          What to Expect From Us
        </h1>
        <p
          className="text-[#676767] figtree_font max-w-screen-md mx-auto text-base mb-10 md:mb-16"
          data-aos="fade-up"
        >
          While certain plumbing issues, such as a minor toilet clog or a
          dripping faucet, can be quickly addressed with simple do-it-yourself
          methods, it's essential to recognize that many plumbing problems are
          complex and require the expertise of a professional plumber.
        </p>
      </div>
      <div className="grid overflow-hidden px-4 lg:px-10 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8  mb-10 md:mb-16 md:mx-0 lg:mx-4">
        {/* Mapping array */}
        {teamMembers.slice(0, 3).map((member, index) => (
          <div key={index} data-aos="fade-up">
            <div
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="relative overflow-hidden bg-cover rounded-sm shadow transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl h-[475px] group"
            >
              {/* Background blur effect */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:blur-sm"
                style={{ backgroundImage: `url(${team_member_BG})` }}
              ></div>

              <img
                alt=""
                src={member.image}
                className="relative z-10 mt-20 mx-auto transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-3"
              />

              <div className="absolute inset-0 z-20 bg-gradient-to-t from-primary/60 to-transparent">
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
      <p
        className="text-[#676767] text-center  figtree_font max-w-screen-md mx-auto text-base"
        data-aos="fade-up"
      >
        Embark on a rewarding journey with us. Join our diverse and passionate
        team, where collaboration sparks creativity, and together, we shape a
        brighter future.
      </p>
      <div data-aos="fade-up" className="flex items-center justify-center mt-8">
        <Link
          to="/team"
          className="text-neutral bg-primary border-0 py-[10px] px-[80px] focus:outline-none text-[15px] transition hover:scale-105 hover:shadow-xl font-semibold rounded text-lg"
        >
          Join our team
        </Link>
      </div>
    </div>
  );
};

export default TeamMembers;
