// import React from "react";
// import Typed from "react-typed";
// import VideoBg from "../assets/videos/videobg.mp4";

// const Hero = () => {
//   return (
//     <div className="main relative w-full h-screen overflow-hidden">
//       <video
//         src={VideoBg}
//         autoPlay
//         loop
//         muted
//         className="absolute top-0 left-0 w-full h-full object-cover z-10"
//         style={{ opacity: 0.2 }} // Adjust the opacity value (0.0 to 1.0)
//       />

//       <div className="content absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-20">
//         {" "}
//         {/* Add z-20 class */}
//         <p className="text-[#01a9e2] md:text-5xl sm:text-3xl text-xl font-bold p-2">
//           Grow with us 📈
//         </p>
//         <h1 className="md:text-7xl sm:text-5xl text-3xl font-bold py-2 text-white">
//           PICT CSI Student Branch
//         </h1>
//         <div className="flex justify-center items-center my-2">
//           <p className="md:text-5xl sm:text-3xl text-xl font-bold py-2 text-white">
//             We're here
//           </p>
//           <Typed
//             className="md:text-5xl sm:text-3xl text-xl font-bold pl-2 text-amber-500"
//             strings={["INNOVATE", "EDUCATE", "ELEVATE"]}
//             typeSpeed={100}
//             backSpeed={100}
//             loop
//           />
//         </div>
//         <p className="md:text-3xl text-xl font-bold text-gray-500 mt-10">
//           Unleash Your Potential with Us 🚀
//         </p>
//         <button className="bg-[#01a9e2] w-[200px] rounded-md font-bold tracking-wider my-10 mx-auto py-3 text-white duration-300 hover:scale-110">
//           Join Us
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import Typed from "react-typed";
import heroVideo from "../assets/images/heroVideo.mp4";

import VideoBg from "../assets/videos/videobg.mp4";

const Hero = () => {
  return (
    <div className=" text-white bg-gradient-to-r from-black to-blue-900 items-end justify-center w-full h-screen text-center relative z-15">
      {/* <div className="overlay max-w-[100%] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center"></div> */}
      {/* <video src={VideoBg} autoPlay loop muted className="-z-10" /> */}

      <div className=" max-w-[100%] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[e#01a9e2] md:text-5xl sm:text-3xl text-xl font-bold p-2">
          Grow with us 📈
        </p>
        <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold md:py-6">
          PICT CSI Student Branch
        </h1>
        <div className="flex justify-center items-center my-2">
          <p className="md:text-5xl sm:text-3xl text-xl font-bold py-2">
            We here
          </p>
          <Typed
            className="md:text-5xl sm:text-3xl text-xl font-bold pl-2 text-amber-500 "
            strings={["INNOVATE", "EDUCATE", "ELEVATE"]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </div>
        <p className="md:text-3xl text-xl font-bold text-gray-500 mt-10">
          Unleash Your Potential with Us 🚀
        </p>
        <button className="bg-[#01a9e2] w-[200px] rounded-md font-bold tracking-wider my-10 mx-auto py-3 text-white duration-300 hover:scale-110">
          Join Us
        </button>
      </div>
      <hr className="opacity-40" />
    </div>
  );
};

export default Hero;
