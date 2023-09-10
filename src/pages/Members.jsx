import React from "react";
import TeamMember from "../components/tteamsmember";

const Members = () => {
  const teamMembers = [
    {
      name: "Luna Turner",
      role: "Founder",
      imageSrc: "../assets/images/img_1.jpg",
      social: {
        twitter: "https://twitter.com/luna_turner",
        linkedin: "https://www.linkedin.com/in/luna_turner",
        github: "https://github.com/luna_turner",
        email: "mailto:luna@example.com",
      },
    },

    {
      name: "Luna Turner",
      role: "Founder",
      imageSrc: "profile-img-1.png",
      social: {
        twitter: "https://twitter.com/luna_turner",
        linkedin: "https://www.linkedin.com/in/luna_turner",
        github: "https://github.com/luna_turner",
        email: "mailto:luna@example.com",
      },
    },

    {
      name: "Luna Turner",
      role: "Founder",
      imageSrc: "profile-img-1.png",
      social: {
        twitter: "https://twitter.com/luna_turner",
        linkedin: "https://www.linkedin.com/in/luna_turner",
        github: "https://github.com/luna_turner",
        email: "mailto:luna@example.com",
      },
    },

    {
      name: "Luna Turner",
      role: "Founder",
      imageSrc: "profile-img-1.png",
      social: {
        twitter: "https://twitter.com/luna_turner",
        linkedin: "https://www.linkedin.com/in/luna_turner",
        github: "https://github.com/luna_turner",
        email: "mailto:luna@example.com",
      },
    },
    {
      name: "Luna Turner",
      role: "Founder",
      imageSrc: "profile-img-1.png",
      social: {
        twitter: "https://twitter.com/luna_turner",
        linkedin: "https://www.linkedin.com/in/luna_turner",
        github: "https://github.com/luna_turner",
        email: "mailto:luna@example.com",
      },
    },
    {
      name: "Luna Turner",
      role: "Founder",
      imageSrc: "profile-img-1.png",
      social: {
        twitter: "https://twitter.com/luna_turner",
        linkedin: "https://www.linkedin.com/in/luna_turner",
        github: "https://github.com/luna_turner",
        email: "mailto:luna@example.com",
      },
    },
    // ...other team members
  ];

  return (
    <div className="bg-[#020617]">
      <div className="py-8 px-4">
        <div className="flex flex-col items-center mb-8">
          <h1 className="lg:text-5xl  md:text-3xl text-3xl font-bold text-white">
            Developer Team
          </h1>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              social={member.social}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
