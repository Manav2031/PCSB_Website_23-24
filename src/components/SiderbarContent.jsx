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
        image: "TeamsImg/Advait_Naik.png", // Provide the image URL
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
        image: "TeamsImg/Samyak_Jain_Vice Chairperson.jpeg", // Provide the image URL
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
        image: "TeamsImg/Soham_Badjate_Vice_Chairperson.jpg", // Provide the image URL
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
        image: "TeamsImg/Atharva_Kinikar_ChiefTechnicalHead.jpeg", // Provide the image URL
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
        image: "TeamsImg/Aryan_Agrawal_ChiefTechnicalHead.jpeg", // Provide the image URL
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
        image: "TeamsImg/Mansi_Gundre_CheifTechnicalHead.jpg", // Provide the image URL
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
        image: "TeamsImg/Shivakumar_Ranade_Web_Head.jpg", // Provide the image URL
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
        image: "", // Provide the image URL
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
        image: "TeamsImg/Abhishek_Jadhav_Web_Head.jpg", // Provide the image URL
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
        image: "TeamsImg/Gaurav_Somani_WebHead.png", // Provide the image URL
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
        image: "TeamsImg/Aman_Mugut_App_Head.jpeg", // Provide the image URL
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
        image: "", // Provide the image URL
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
        image: "TeamsImg/Vedant_Kulkarni-App_Head.jpeg", // Provide the image URL
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
        image: "TeamsImg/chinmay_choudhary_app_head.jpg", // Provide the image URL
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
        image: "TeamsImg/Atharva_Nagmoti_MLHead.jpeg", // Provide the image URL
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
        image: "TeamsImg/Aditya_Gitte_ML_Head.jpg", // Provide the image URL
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
        image: "TeamsImg/Sahil_Kothari_BlockchainHead.jpg", // Provide the image URL
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
        image: "", // Provide the image URL
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
        image: "TeamsImg/Anurag_Patil_Data_Head.jpeg", // Provide the image URL
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
        image: "TeamsImg/Isha_Patil_Data_Head.jpeg", // Provide the image URL
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
        image: "TeamsImg/Rishi.jpg", // Provide the image URL
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
        image: "TeamsImg/Dhiraj_Thorat_Treasurer.jpg", // Provide the image URL
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
        image: "TeamsImg/Vaibhav_Mahajan_Sponsorship_Head.jpeg", // Provide the image URL
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
        image: "TeamsImg/Piyush_Bora_JointSecretary.jpg", // Provide the image URL
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
        image: "TeamsImg/Nimish_Sanghavi_Joint _Secretary.jpg", // Provide the image URL
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
        image: "TeamsImg/Nehal_Baviskar_Design_Head.PNG", // Provide the image URL
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
        image: "TeamsImg/Sakshi_Rathi_anchoring_design.jpeg", // Provide the image URL
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
        image: "TeamsImg/Ameya_Dhake_Video_Editing_Head.PNG", // Provide the image URL
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
        image: "TeamsImg/Yash_Kulkarni_JointSecretary.JPG", // Provide the image URL
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
        image: "TeamsImg/Sakshi_Naik_JointSecretary.jpg", // Provide the image URL
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
        image: "TeamsImg/Advait_Naik.png", // Provide the image URL
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
        image: "TeamsImg/Abhishek_Soundalgekar_Event_Coordinator.jpg", // Provide the image URL
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
        image: "", // Provide the image URL
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
        image: "TeamsImg/Mohak.jpg", // Provide the image URL
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
        image: "TeamsImg/Sakshi_Rathi_anchoring_design.jpeg", // Provide the image URL
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
        image: "TeamsImg/Mahavir.jpeg", // Provide the image URL
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
        image: "TeamsImg/Namit_Surana_JS.JPG", // Provide the image URL
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
        image: "TeamsImg/Joshi_Venkatesh_PRO.JPG", // Provide the image URL
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
        image: "TeamsImg/Reva_Dalal_Marketing and Publicity Director .JPEG", // Provide the image URL
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
        image: "TeamsImg/Aryan_Vora_Marketing_Publicity_Head.jpg", // Provide the image URL
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
        image: "TeamsImg/Shreyal_Nagle_Marketing_Head.jpg", // Provide the image URL
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
        image: "TeamsImg/Tanisha_Pareek_Director_of_Coding_Circle.jpg", // Provide the image URL
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
        image: "TeamsImg/Rishikesh_Suryavanshi_Secretary_Coding_Circle.jpeg", // Provide the image URL
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
        image: "TeamsImg/Vaishnavi_Raut-co-ordinator of coding club head.jpeg", // Provide the image URL
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
        image: "TeamsImg/Shivam_Dhonde_Coding_Circle_Coordinator.jpg", // Provide the image URL
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
