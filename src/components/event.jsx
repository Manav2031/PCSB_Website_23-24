// import Engineer_Day from "../assets/images/event/Engineer_Day.jpg";
// import sudo from "../assets/images/event/sudo.jpeg";
// import investiture from "../assets/images/event/investiture.jpeg";
// import orientation from "../assets/images/event/orientation.jpeg";
// import interview from "../assets/images/event/interview.jpeg";
// import gs from "../assets/images/event/gs.jpeg";
// import newyear from "../assets/images/event/newyear.jpeg";
// import carnival from "../assets/images/event/carnival.png";
// import snap from "../assets/images/event/snap.jpeg";
// import wids from "../assets/images/event/wids.jpeg";
// import women from "../assets/images/event/women.jpg";

// import React, { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/swiper-bundle.css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import {
//   Autoplay,
//   Navigation,
//   EffectCoverflow,
//   Pagination,
// } from "swiper/modules";

// export default function Event() {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   // Set the appropriate number of slides per view based on device
//   const slidesPerView = isMobile ? 1 : 3;

//   const handleResize = () => {
//     const newIsMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
//     if (newIsMobile !== isMobile) {
//       setIsMobile(newIsMobile);
//     }
//   };

//   // Add event listener for window resize
//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [isMobile]);

//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         effect={"coverflow"}
//         grabCursor={true}
//         slidesPerView={slidesPerView}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
//         loop={true}
//         className="mySwiper"
//       >
//         <SwiperSlide className="custom-slide">
//           <img
//             className="rounded-t-lg d-block w-100"
//             src={Engineer_Day}
//             alt=""
//           />
//           <div className="p-5">
//             <h1 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">
//               Engineer's Day 2020
//             </h1>
//             <p className="mb-3 text-xl  font-normal text-white dark:text-white-400">
//               The main aim of the event was to make all the students of the
//               college aware about the Ongoing innovations and projects .Students
//               from third and fourth year along with a teacher guardian are
//               working in many different domains and in several innovative
//               projects. PICT CSI awarded these remarkable projects with a
//               virtual Engineers Ring as a token of appreciation.
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               15 September, 2020
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               Attendees 100+
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="custom-slide">
//           <img className="rounded-t-lg d-block w-100" src={sudo} alt="" />
//           <div className="p-5">
//             <h1 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">
//               Sudocode Edition-1 2020
//             </h1>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               The main aim of the event was to conduct a competitive coding
//               competition among students from different colleges which would
//               test the logic, coding and analytical thinking of the students in
//               that time.Participating in such real time competitions would give
//               exposure to all participants and would ignite the passion to keep
//               learning new concepts which would definitely help them in the
//               future.
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               27 September, 2020
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               Registrations 500+
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="custom-slide">
//           <img
//             className="rounded-t-lg d-block w-100"
//             src={investiture}
//             alt=""
//           />
//           <div className="p-5">
//             <h1 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">
//               PCSB Investiture Ceremony (2020-21)
//             </h1>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               The event started by Welcome note by Student Representatives Vinay
//               Nair and Veronica Robert, followed by Introduction to PCSB by Dr.
//               Kavita Sultanpure Ma’am, Introduction to the Activities and Events
//               conducted in the current academic year, Video on past and present
//               events of PCSB, Declaration of various Posts, Speech by Principal
//               Ma’am, Vote of thanks by Prof. Ashwini Jewalikar Ma’am and Prof.
//               Kaustubh Sakhare Sir and concluded by the Vice Presidents Satyajit
//               Roy and Sonal Rao.
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               10 November, 2020
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               Registrations 175+
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="custom-slide">
//           <img
//             className="rounded-t-lg d-block w-100"
//             src={orientation}
//             alt=""
//           />
//           <div className="p-5">
//             <h1 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">
//               CSI Orientation Ceremony (2020-21)
//             </h1>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               The main aim of the event was to have a brief introduction about
//               CSI, its PICT student branch, its structure and all the
//               past-current and future activities. Dr. Kavita Sultanpure ma’am
//               addressed the event with a welcome note. For giving a gist about
//               PCSB, a video was shown. The information about Computer Society of
//               India (CSI) along with its PICT Student Branch (PCSB) was shared.
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               10 November, 2020
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               Registrations 120+
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="custom-slide">
//           <img className="rounded-t-lg d-block w-100" src={interview} alt="" />
//           <div className="p-5">
//             <h1 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">
//               Diwali Interview Sessions
//             </h1>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               PICT CSI Student branch had taken the initiative to conduct
//               interviews with organizations that have been contributing
//               something worthwhile to society and the environment. The
//               interviews were taken with Mr. Ashok Deshmane, founder of Snehwan,
//               which is a non-profit organization working for the betterment of
//               the downtrodden and orphan category of children, Mr. Shubham
//               Ghule, working as the leader of operations in Nelda Foundations,
//               which is a non-profit organization and Zeel Patel, who is the
//               president of GirlUp Athena, which is a non-profit organization,
//               with the motive to empower girls, and to give them the confidence
//               and support that every girl needs today.
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               3 to 15 November, 2020
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="custom-slide">
//           <img className="rounded-t-lg d-block w-100" src={gs} alt="" />
//           <div className="p-5">
//             <h1 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">
//               Girscript
//             </h1>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               Initially, the entire club was divided into seven teams consisting
//               of eight members each. Everyone used their personal contacts to
//               get registrations and in order to fill up more participants, the
//               people who had participated in the previous events of the club
//               were also contacted. Every alternate day the scoreboard was
//               released to keep the teams active and encourage them to work.
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               20 November to 1 December, 2020
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               Registrations 65+
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="custom-slide">
//           <img className="rounded-t-lg d-block w-100" src={newyear} alt="" />
//           <div className="p-5">
//             <h1 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">
//               PCSB's New Year Dhamaka
//             </h1>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               The aim of this event was to make the interaction between the new
//               members of the club. PCSB Event team had organized a fun event for
//               the team members. Various fun events like Memezard of Oz, Capture,
//               Technofy Minds and Never Have I Ever were conducted. The winners
//               were announced along with the Vote of Thanks.
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               27 December, 2020
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               Attendees 75+
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="custom-slide">
//           <img className="rounded-t-lg d-block w-100" src={carnival} alt="" />
//           <div className="p-5">
//             <h1 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">
//               PCSB's FE Carnival
//             </h1>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               PCSB took the initiative to organize an event to increase the
//               interaction and bonding between the newly joined First Year
//               Engineering Students. It consisted of a few fun activities and SIG
//               sessions which were both fun and good learning experience. It
//               consisted of events like TechnoFrenzy, which had sub events like
//               Quizzards of GA, Cup O'Kode and Technofy Minds, followed by Panel
//               Interview, Official PCSB Orientation and Technical SIG Training.
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               4 to 9 February, 2021
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               Attendees 75+
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="custom-slide">
//           <img className="rounded-t-lg d-block w-100" src={snap} alt="" />
//           <div className="p-5">
//             <h1 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">
//               PCSB's Snap Hunt
//             </h1>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               The aim of the event was to increase the bonding between FE’s in a
//               virtual environment. Also, the event was organized by the FE’s, so
//               they are getting hands on experience as well. Participants were
//               divided into groups of 8-10 randomly using MS Teams breakout
//               rooms. Various Technical and Non Technical questions were given,
//               and the participants had to find things or do the task and upload
//               picture/video of themselves with it.
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               27 February, 2021
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               Attendees 120+
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="custom-slide">
//           <img className="rounded-t-lg d-block w-100" src={wids} alt="" />
//           <div className="p-5">
//             <h1 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">
//               WIDS Pune Conference
//             </h1>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               A 24 hour virtual conference was held by Women in Data
//               Science(WiDS),Pune on March 8, on occasion of Women’s Day, in
//               collaboration with Stanford University-ICME Department. The PCSB
//               team participated as volunteers. Prominent women personalities in
//               data science from all over the world were invited to speak. We got
//               an opportunity to listen to global influencers, thought leaders
//               and experts selected by WiDS Pune and Stanford University’s WiDS
//               team.
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               8 March, 2021
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               Volunteers 54+
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="custom-slide">
//           <img className="rounded-t-lg d-block w-100" src={women} alt="" />
//           <div className="p-5">
//             <h1 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">
//               Women’s Day 2021
//             </h1>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               Women’s Day was celebrated in PICT by PCSB, in collaboration with
//               PICT Art Circle, to honor the women around the world who’ve not
//               only made a significant change in our lives but also impacted
//               people around the world. The honorable and esteemed guest speaker
//               for the event was Leena Patel, who is the founder and CEO of One
//               Soul Army, India’s first autonomous global entrepreneurial system.
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               8 March, 2021
//             </p>
//             <p className="mb-3 text-2xl font-normal text-white dark:text-white-400">
//               Attendees 120+
//             </p>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

import Engineer_Day from "../assets/images/event/Engineer_Day.jpg";
import sudo from "../assets/images/event/sudo.jpeg";
import investiture from "../assets/images/event/investiture.jpeg";
import orientation from "../assets/images/event/orientation.jpeg";
import interview from "../assets/images/event/interview.jpeg";
import gs from "../assets/images/event/gs.jpeg";
import newyear from "../assets/images/event/newyear.jpeg";
import carnival from "../assets/images/event/carnival.png";
import snap from "../assets/images/event/snap.jpeg";
import wids from "../assets/images/event/wids.jpeg";
import women from "../assets/images/event/women.jpg";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  Navigation,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";

export default function Event() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // Set the appropriate number of slides per view based on device
  const slidesPerView = isMobile ? 1 : 3;

  const handleResize = () => {
    const newIsMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
    if (newIsMobile !== isMobile) {
      setIsMobile(newIsMobile);
    }
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide className="custom-slide" style={{ maxWidth: "400px" }}>
          <img
            className="rounded-t-lg d-block"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
            src={Engineer_Day}
            alt=""
          />
          <div className="p-3">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#01a9e2] dark:text-white">
              HOW TO CRACK INTERNSHIP IN TE ?{" "}
            </h1>
            <p className="mb-2 text-xl font-normal text-white dark:text-white-400">
              <span className="font-bold text-gray-600">Date of Event:</span>{" "}
              25th July 2022 <br />
              <span className="font-bold text-gray-600">
                Time of Event:
              </span>{" "}
              5:30 pm <br />
              <span className="font-bold text-gray-600">
                {" "}
                Duration of Event:{" "}
              </span>{" "}
              2 hours <br /> Number of Attendees: 240+ <br />
              <span className="font-bold text-gray-600"> Organizers: </span>CSI,
              PICT <br />
              <span className="font-bold text-gray-600">
                {" "}
                Objective of Event:{" "}
              </span>
              Advice to achieve Internship and gain interview experience <br />{" "}
              <span className="font-bold text-gray-600">Methodology:</span>{" "}
              Offline seminar in auditorium
            </p>
            {/* <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              15 September, 2020
            </p>
            <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              Attendees 100+
            </p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="custom-slide" style={{ maxWidth: "400px" }}>
          <img
            className="rounded-t-lg d-block"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
            src={sudo}
            alt=""
          />
          <div className="p-3">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#01a9e2] dark:text-white">
              FE INDUCTION{" "}
            </h1>
            <p className="mb-2 text-xl font-normal text-white dark:text-white-400">
              <span className="font-bold text-gray-600">Date of Event:</span>{" "}
              13th Dec 2022 <br />
              <span className="font-bold text-gray-600">
                Time of Event:
              </span>{" "}
              4:15 PM (1st Slot) 5:30 PM (2nd slot)
              <br />{" "}
              <span className="font-bold text-gray-600">
                Duration of Event:
              </span>{" "}
              3 hrs <br />
              <span className="font-bold text-gray-600">
                Number of Attendees:{" "}
              </span>
              170+ <br />
              <span className="font-bold text-gray-600">Organizers:</span> Mr
              Samyak Jain Mr Soham Badjate <br />
              <span className="font-bold text-gray-600">
                Objective of Event:{" "}
              </span>
              To introduce PCSB club to new FE members and to start registration
              to include new FE members.
              <br />{" "}
              <span className="font-bold text-gray-600">Methodology:</span>
              Explanation of club through PPT and venue Auditorium of PICT.
            </p>
            {/* <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              27 September, 2020
            </p>
            <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              Registrations 500+
            </p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="custom-slide" style={{ maxWidth: "400px" }}>
          <img
            className="rounded-t-lg d-block"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
            src={investiture}
            alt=""
          />
          <div className="p-3">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#01a9e2] dark:text-white">
              FE CARNIVAL{" "}
            </h1>
            <p className="mb-2 text-xl font-normal text-white dark:text-white-400">
              The purpose of the FE carnival was to introduce FEs to PCSB club
              activities and to forge bonds among call club participants. <br />
              It consisted of 3 main events which were : <br /> 1. Imitation
              Game – 14th JAN’23 <br /> 2. Meme ka Sarkaar-14th JAN’23 <br />
              3. Snaphunt Beta-13th JAN’23 <br />
              <span className="font-bold text-gray-600">Organizers:-</span>{" "}
              CSI,PICT Staff <br />{" "}
              <span className="font-bold text-gray-600">Details:-</span> Dr.
              Kavita Sultanpure
            </p>
            {/* <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              10 November, 2020
            </p>
            <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              Registrations 175+
            </p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="custom-slide" style={{ maxWidth: "400px" }}>
          <img
            className="rounded-t-lg d-block"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
            src={orientation}
            alt=""
          />
          <div className="p-3">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#01a9e2] dark:text-white">
              IMITATION GAME
            </h1>
            <p className="mb-2 text-xl font-normal text-white dark:text-white-400">
              The questions used in the imitation games were aptiude-based. This
              activity's major goal was to put participants' analytical and
              critical thinking skills to the test. <br /> The 35 aptitude-based
              questions were given to the participants. <br />{" "}
              <span className="font-bold text-gray-600">Date of Event: </span>-
              14th Jan’23 <br />
              <span className="font-bold text-gray-600">Winners:</span> <br />
              1st Prize-Karan Patil <br />
              2nd Prize-Ayush Agrawal <br />
              <span className="font-bold text-gray-600">Organizers:</span>-
              CSI,PICT <br />
              <span className="font-bold text-gray-600">Staff Details: </span>-
              Dr. Kavita Sultanpure
            </p>
            {/* <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              10 November, 2020
            </p>
            <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              Registrations 120+
            </p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="custom-slide" style={{ maxWidth: "400px" }}>
          <img
            className="rounded-t-lg d-block"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
            src={interview}
            alt=""
          />
          <div className="p-3">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#01a9e2] dark:text-white">
              MEME KA SARKAAR
            </h1>
            <p className="mb-2 text-xl font-normal text-white dark:text-white-400">
              The contestants in Meme ka Sarkaar had to create a few memes of
              their choosing and submit the best meme of their choosing. <br />
              The participants' originality formed the foundation of this event.{" "}
              <br />
              <span className="font-bold text-gray-600">
                Date of Event:-{" "}
              </span>{" "}
              13th Jan’23 <br />
              <span className="font-bold text-gray-600">Winners:</span> <br />
              1st Prize-Sohan deshpande <br /> 2nd Prize-Yuvraj Patil <br />{" "}
              <span className="font-bold text-gray-600">
                Organizers:-{" "}
              </span>{" "}
              CSI,PICT <br />{" "}
              <span className="font-bold text-gray-600">Staff Details:- </span>{" "}
              Dr. Kavita Sultanpure
            </p>
            {/* <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              3 to 15 November, 2020
            </p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="custom-slide" style={{ maxWidth: "400px" }}>
          <img
            className="rounded-t-lg d-block"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
            src={gs}
            alt=""
          />
          <div className="p-3">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#01a9e2] dark:text-white">
              SNAPHUNT BETA
            </h1>
            <p className="mb-2 text-xl font-normal text-white dark:text-white-400">
              Snaphunt Beta was a team based event where the teams were provided
              with certain tasks and for each task they had to click few snaps .
              <br />
              The main objective was to test presence of mind and team skills of
              the participants. The teams were given 90 minutes to conquer 60
              tasks.
              <br />
              <span className="font-bold text-gray-600">
                Date of Event:-{" "}
              </span>{" "}
              13th Jan’23 <br />
              <span className="font-bold text-gray-600">Winners:</span> <br />
              1st Prize-11 hunters <br /> 2nd Prize-Shamiana <br />{" "}
              <span className="font-bold text-gray-600">
                Organizers:-{" "}
              </span>{" "}
              CSI,PICT <br />{" "}
              <span className="font-bold text-gray-600">Staff Details:- </span>{" "}
              Dr. Kavita Sultanpure
            </p>

            {/* <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              20 November to 1 December, 2020
            </p>
            <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              Registrations 65+
            </p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="custom-slide" style={{ maxWidth: "400px" }}>
          <img
            className="rounded-t-lg d-block"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
            src={newyear}
            alt=""
          />
          <div className="p-3">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#01a9e2] dark:text-white">
              DOMAIN INTRODUCTION{" "}
            </h1>
            <p className="mb-2 text-xl font-normal text-white dark:text-white-400">
              <span className="font-bold text-gray-600">Date of Event: </span>{" "}
              07/02/2023 <br />
              <span className="font-bold text-gray-600">
                Time of Event:{" "}
              </span>{" "}
              4:15 PM <br />
              <span className="font-bold text-gray-600">
                Duration of Event:{" "}
              </span>{" "}
              1 hr <br />
              <span className="font-bold text-gray-600">
                Number of Attendees:{" "}
              </span>{" "}
              150+ <br />
              <span className="font-bold text-gray-600">Organizers: </span> Mr
              Yash Pande <br /> Mr Soham Badjate <br />{" "}
              <span className="font-bold text-gray-600">
                Objective of Event:{" "}
              </span>
              To introduce various domains in the Information Technology field
              to First Year's of college and to give them a broad idea about
              domains. <br />{" "}
              <span className="font-bold text-gray-600">Methodology: </span>{" "}
              Offline in PICT Auditorium
            </p>
            {/* <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              27 December, 2020
            </p>
            <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              Attendees 75+
            </p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="custom-slide" style={{ maxWidth: "400px" }}>
          <img
            className="rounded-t-lg d-block"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
            src={carnival}
            alt=""
          />
          <div className="p-3">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#01a9e2] dark:text-white">
              ROADMAP TO ENGINEERING{" "}
            </h1>
            <p className="mb-2 text-xl font-normal text-white dark:text-white-400">
              <span className="font-bold text-gray-600">Date of Event: </span>{" "}
              7th Feb 2023 <br />
              <span className="font-bold text-gray-600">
                Time of Event:{" "}
              </span>{" "}
              3:15pm
              <br />
              <span className="font-bold text-gray-600">
                Duration of Event:{" "}
              </span>{" "}
              2 hours <br />
              <span className="font-bold text-gray-600">
                Number of Attendees:{" "}
              </span>{" "}
              150+ <br />
              <span className="font-bold text-gray-600">Organizers: </span> Mr
              CSI, PICT
              <br />{" "}
              <span className="font-bold text-gray-600">
                Objective of Event:{" "}
              </span>
              Introduction to Engineering and a roadmap from FE to BE for new FE
              students. <br />{" "}
              <span className="font-bold text-gray-600">Methodology: </span>{" "}
              Offline seminar in PICT auditorium.{" "}
            </p>
            {/* <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              4 to 9 February, 2021
            </p>
            <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              Attendees 75+
            </p> */}
          </div>
        </SwiperSlide>

        {/* <SwiperSlide className="custom-slide" style={{ maxWidth: "400px" }}>
          <img
            className="rounded-t-lg d-block"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
            src={snap}
            alt=""
          />
          <div className="p-3">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#01a9e2] dark:text-white">
              vdv{" "}
            </h1>
            <p className="mb-2 text-xl font-normal text-white dark:text-white-400">
              The aim of the event was to increase the bonding between FE’s in a
              virtual environment. Also, the event was organized by the FE’s, so
              they are getting hands on experience as well. Participants were
              divided into groups of 8-10 randomly using MS Teams breakout
              rooms. Various Technical and Non Technical questions were given,
              and the participants had to find things or do the task and upload
              picture/video of themselves with it.
            </p>
            <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              27 February, 2021
            </p>
            <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              Attendees 120+
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="custom-slide" style={{ maxWidth: "400px" }}>
          <img
            className="rounded-t-lg d-block"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
            src={wids}
            alt=""
          />
          <div className="p-3">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#01a9e2] dark:text-white">
              WIDS Pune Conference
            </h1>
            <p className="mb-2 text-xl font-normal text-white dark:text-white-400">
              A 24 hour virtual conference was held by Women in Data
              Science(WiDS),Pune on March 8, on occasion of Women’s Day, in
              collaboration with Stanford University-ICME Department. The PCSB
              team participated as volunteers. Prominent women personalities in
              data science from all over the world were invited to speak. We got
              an opportunity to listen to global influencers, thought leaders
              and experts selected by WiDS Pune and Stanford University’s WiDS
              team.
            </p>
            <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              8 March, 2021
            </p>
            <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              Volunteers 54+
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="custom-slide" style={{ maxWidth: "400px" }}>
          <img
            className="rounded-t-lg d-block"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
            src={women}
            alt=""
          />
          <div className="p-3">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#01a9e2] dark:text-white">
              Women’s Day 2021
            </h1>
            <p className="mb-2 text-xl font-normal text-white dark:text-white-400">
              Women’s Day was celebrated in PICT by PCSB, in collaboration with
              PICT Art Circle, to honor the women around the world who’ve not
              only made a significant change in our lives but also impacted
              people around the world. The honorable and esteemed guest speaker
              for the event was Leena Patel, who is the founder and CEO of One
              Soul Army, India’s first autonomous global entrepreneurial system.
            </p>
            <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              8 March, 2021
            </p>
            <p className="mb-1 text-xl font-normal text-white dark:text-white-400">
              Attendees 120+
            </p>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
