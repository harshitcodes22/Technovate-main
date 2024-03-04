import React from "react";
import "./hackinfo.css";
import { Tilt } from "react-tilt";
import Lottie from "react-lottie";
import animationData from "../assets/Infoanimation.json";
import locationanimation from "../assets/locat.json";
// import WordCloud2 from './WordCloud'

function HackInfo() {
  const defaultOptionsimg = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionslocation = {
    loop: true,
    autoplay: true,
    animationData: locationanimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="z-10 flex justify-center items-center py-16">
        <Tilt
          className="Tilt flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
          }}
          options={{
            max: 30,
            perspective: 1400,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            speed: 2000,
            glare: true,
            maxGlare: 0.2,
            scale: 1,
          }}
        >
          <div className="info rounded-xl relative bg-black w-[60%] h-auto p-14  flex gap-10 text-white">
            <div className="gif flex w-1/3 items-center justify-center">
              <Lottie
                options={defaultOptionsimg}
                height={300} // Adjust height as needed
                width={300} // Adjust width as needed
              />
            </div>
            <div className="content w-2/3 flex flex-col items-start justify-center gap-10">
              <h1 className="font-anta text-2xl">TECHNOVATE</h1>
              <p className="font-miami text-l">
                Dive into an immersive experience where your ideas hold the
                power to shape the future. Our inclusive hackathon invites
                developers, innovators, and thinkers from diverse backgrounds to
                come together for an exhilarating challenge. At Technovate,we
                are calling for solutions that are sustainable, innovative, and
                have the potential to redefine our world. Join us in this
                journey of creation, collaboration, and celebration.
              </p>
              <div className="location flex items-center justify-center gap-5">
                <a
                  href="https://maps.app.goo.gl/duEYT9VECn531GSt6"
                  target="_blank"
                >
                  <Lottie
                    options={defaultOptionslocation}
                    height={80} // Adjust height as needed
                    width={80} // Adjust width as needed
                  />
                </a>
                <a
                  className="pt-5"
                  href="https://maps.app.goo.gl/duEYT9VECn531GSt6"
                  target="_blank"
                >
                  <span className="font-ubuntu">
                    UIET, Panjab University, Chandigarh
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  );
}

export default HackInfo;
