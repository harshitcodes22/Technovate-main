import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/Mission.json";
import "./hackinfo.css";

function Mission() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="z-10 w-screen flex justify-center items-center py-16">
      <div className="rounded-xl  p-14 w-[60%] h-auto border-2 border-white text-white">
        <h1 className="text-anta text-center font-anta text-3xl">
          Our Mission
        </h1>
        <div className="flex gap-10">
          <div className="content  flex flex-col items-start justify-center gap-10">
            <p className="font-miami text-l tracking-wider">
              Our mission is simple yet profound: to challenge participants to
              harness their creativity, coding skills, and teamwork to solve
              real-world problems. We believe in the transformative power of
              collaboration and coding, and we aim to inspire the next
              generation of tech leaders.
            </p>
          </div>
          <div className="gif flex  items-center justify-center">
            <Lottie
              options={defaultOptions}
              height={300} // Adjust height as needed
              width={300} // Adjust width as needed
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
