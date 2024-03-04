import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/StayTuned.json";
import "./hackinfo.css";

function StayTuned() {
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
        <h1 className="text-white text-center font-anta text-3xl">
          Stay Tuned
        </h1>
        <div className="flex gap-10">
          <div className="content  flex flex-col items-start justify-center gap-10">
            <p className="font-miami tracking-wider text-l">
              Stay tuned for updates, registration details, and exciting
              announcements as we gear up for an unforgettable hackathon
              experience. Together, let's push the boundaries of innovation and
              make a positive impact on the world through technology.
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

export default StayTuned;
