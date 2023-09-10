import React, { useState } from "react";
import "./SidebarContent.css";
import TeamMemberCard from "./TeamMemberCard"; // Import the TeamMemberCard component
import Typewriter from "typewriter-effect";
import DropdownCard from "./DropdownCard";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SidebarContent = () => {
  const [activeButton, setActiveButton] = useState("Coordinators");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [activeDropdownOption, setActiveDropdownOption] = useState("CTH");
  const handleButtonClick = (dataType) => {
    setActiveButton(dataType);
    setIsDropdownVisible(dataType === "Technical");
  };
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const dropdownOptions = [
    { label: "CTH", value: "CTH" },
    { label: "Web", value: "Web" },
    { label: "App", value: "App" },
    { label: "Machine Learning", value: "Machine Learning" },
    { label: "Blockchain", value: "Blockchain" },
    { label: "Data", value: "Data" },
  ];
  const handleDropdownOptionClick = (optionValue) => {
    setActiveButton(optionValue);
    setIsDropdownVisible(true);
    setActiveDropdownOption(optionValue);
  };
  // Define your button data and team member data
  const buttonsData = [
    "Coordinators",
    "Chair",
    "Technical",
    "Finance",
    "Design",
    "Event & Content",
    "Marketing",
    "Coding Circle",
  ];
  const teamMemberData = {
    Coordinators: [
      {
        name: "Prof. Kaustubh Sakhare",
        role: "Guide",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },
        ],
      },
      {
        name: "Dr. Girish Potdar",
        role: "Branch Coordinator",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },
        ],
      },
      {
        name: "Prof. Ashwini Bundele",
        role: "Guide",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },
        ],
      },
    ],
    Chair: [
      {
        name: "Samyak Jain",
        role: "Chairperson",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Soham Badjate",
        role: "Vice Chairperson",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    Technical: [],
    CTH: [
      {
        name: "Atharva Kinikar",
        role: "Chief Technical Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Aryan Agarwal",
        role: "Chief Technical Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Mansi Gundre",
        role: "Chief Technical Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    Web: [
      {
        name: "Shivakumar Ranade",
        role: "Web Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Raj Shende",
        role: "Web Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Abhishek Jadhav",
        role: "Web Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Gaurav Somani",
        role: "Web Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    App: [
      {
        name: "Aman Mugut",
        role: "App Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Anand Bhalerao",
        role: "App Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Vedant Kulkarni",
        role: "App Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Chinmay Chaudhary",
        role: "App Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    "Machine Learning": [
      {
        name: "Atharva Nagmoti",
        role: "Machine Learning Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Aditya Gitte",
        role: "Machine Learning Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    Blockchain: [
      {
        name: "Sahil Kothari",
        role: "Blockchain Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Anurag Singh",
        role: "Blockchain Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    Data: [
      {
        name: "Anurag Patil",
        role: "Data Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Isha Patil",
        role: "Data Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    Finance: [
      {
        name: "Rushikesh Tajne",
        role: "Joint Secretary (Finance)",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Dhiraj Thorat",
        role: "Treasurer",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Vaibhav Mahajan",
        role: "Sponsorship Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    Design: [
      {
        name: "Piyush Bora",
        role: "Joint Secretary (Design)",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Nimish Sanghavi",
        role: "Joint Secretary (Design)",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Nehal Baviskar",
        role: "Design Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Sakshi Rathi",
        role: "Deisgn Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Ameya Dhake",
        role: "Video Editing Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    "Event & Content": [
      {
        name: "Yash Kulkarni",
        role: "Joint Secretary (Event)",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Sakshi Naik",
        role: "Joint Secretary (Content)",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Advait Naik",
        role: "Event Coordinator",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Abhishek Soundalgekar",
        role: "Event Coordinator",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Atharv Dhup",
        role: "Event Coordinator",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Mohak Shah",
        role: "Anchoring & Content Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Sakshi Rathi",
        role: "Anchoring & Content Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    Marketing: [
      {
        name: "Mahavir Navlakha",
        role: "Joint Secretary (Marketing)",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Namit Surana",
        role: "Joint Secretary (Marketing)",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Venkatesh Joshi",
        role: "PRO",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Reva Dalal",
        role: "Publicity Director",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Aryan Vora",
        role: "Marketing Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Shreyal Nagle",
        role: "Marketing Head",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    "Coding Circle": [
      {
        name: "Tanisha Pareek",
        role: "Coding Circle Director",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Rishikesh Suryawanshi",
        role: "Coding Circle Secretary",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Vaishnavi Raut",
        role: "Coding Circle Coordinator",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Shivam Dhonde",
        role: "Coding Circle Coordinator",
        image: "logo512.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
  };
  const dropdownDataMapping = {
    CTH: teamMemberData.CTH,
    Web: teamMemberData.Web,
    App: teamMemberData.App,
    "Machine Learning": teamMemberData["Machine Learning"],
    Blockchain: teamMemberData.Blockchain,
    Data: teamMemberData.Data,
  };
  return (
    <div
      className={`responsive-container ${
        isSidebarVisible ? "  show-sidebar" : ""
      }`}
    >
      <button
        className={`toggle-button ${isSidebarVisible ? "active" : ""}`}
        onClick={handleSidebarToggle}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="text" style={{ color: "white" }}>
        <Typewriter
          options={{ strings: ["MEET OUR TEAM"], autoStart: true, loop: true }}
        />
      </div>
      <div className="container">
        <div className="sidebar">
          {buttonsData.map((dataType) => (
            <div>
              <button
                key={dataType}
                className={`sidebar-button ${
                  activeButton === dataType ? "active" : ""
                }`}
                onClick={() => handleButtonClick(dataType)}
              >
                <span className="button-content">
                  <div className="divide"></div>
                  {dataType}
                </span>
              </button>
              {dataType === "Technical" && isDropdownVisible && (
                <div className="dropdown">
                  {dropdownOptions.map((option) => (
                    <button
                      key={option.value}
                      className={`dropdown-option ${
                        activeDropdownOption === option.value ? "active" : ""
                      }`}
                      onClick={() => handleDropdownOptionClick(option.value)}
                    >
                      <div className="button-content">{option.label}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="content  ">
          {teamMemberData[activeButton].map((member, index) => (
            <div className="p-6">
              {" "}
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                socialLinks={member.socialLinks}
              />
            </div>
          ))}
          {activeButton === "Technical" &&
            dropdownDataMapping[activeDropdownOption].map((member, index) => (
              <DropdownCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                socialLinks={member.socialLinks}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default SidebarContent;
