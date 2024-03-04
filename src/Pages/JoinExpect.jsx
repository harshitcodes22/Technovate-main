import React from "react";
import Lottie from "react-lottie";
import expectanimation from "../assets/expect.json";
import JoinUsanimation from "../assets/JoinUs.json";
import "./hackinfo.css";

function JoinExpect() {
  const defaultjoin = {
    loop: true,
    autoplay: true,
    animationData: JoinUsanimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultexpect = {
    loop: true,
    autoplay: true,
    animationData: expectanimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="z-10 w-screen flex justify-center items-center py-16">
      <div className="info rounded-xl relative bg-black w-[60%] h-auto p-14  flex gap-8 text-white">
        <div className="flex gap-1">
          <div className="whyjoin w-1/2 h-auto border-2 border-white p-5 rounded-md relative right-6">
            <h1 className="text-white text-center text-2xl font-anta">
              Why Join Us
            </h1>
            <div className="flex flex-col gap-5">
              <div className="gif flex  items-center justify-center">
                <Lottie
                  options={defaultjoin}
                  height={300} // Adjust height as needed
                  width={300} // Adjust width as needed
                />
              </div>
              <div className="content font-miami text-l flex items-start justify-center gap-10">
                <p>
                  Join us to broaden your horizons, sharpen your skills, and
                  make lifelong connections with like-minded individuals.
                  Whether you're a seasoned coder or just getting started, the
                  D4 Community's Hackathon at CGC Jhanjeri is the place to be.
                </p>
              </div>
            </div>
          </div>
          <div className="expect w-1/2 h-auto border-2 border-white p-5 rounded-md">
            <h1 className="text-white text-center text-2xl font-anta">
              What to Expect
            </h1>
            <div className="flex flex-col gap-5">
              <div className="gif flex  items-center justify-center">
                <Lottie
                  options={defaultexpect}
                  height={300} // Adjust height as needed
                  width={300} // Adjust width as needed
                />
              </div>
              <div className="content font-miami flex items-start justify-center gap-10">
                <p className="text-l">
                  Expect an adrenaline-fueled 24 hours of non-stop coding,
                  brainstorming, and networking. Participants will tackle
                  exciting challenges, engage in workshops, and have the
                  opportunity to win fantastic prizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinExpect;
