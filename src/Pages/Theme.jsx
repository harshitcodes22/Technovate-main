import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/Theme.json"; // Import your JSON animation file

function Theme() {
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
      <div className=" rounded-xl relative border-2 border-white p-5 w-[60%] h-auto text-white">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="font-anta text-2xl">Theme</h1>
          <p className="font-miami">Lorem ipsum dolor sit amet.Random Quote</p>
          <div className="flex gap-10">
            <div className=" flex">
              <div className="Technical font-ubuntu flex flex-col items-center justify-center gap-5 pt-10">
                <h1>Tech used</h1>
                <div class="flex flex-wrap justify-center gap-6">
                  <a class="relative" href="#">
                    <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-white"></span>
                    <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-white bg-white px-3 py-1 text-base font-bold text-black transition duration-10 hover:bg-blue-500 dark:bg-transparent">
                      Blockchain
                    </span>
                  </a>
                  <a href="#" class="relative">
                    <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-blue-500"></span>
                    <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-white bg-blue-500 px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-white dark:bg-transparent">
                      Machine Learning
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <Lottie
                options={defaultOptions}
                height={300} // Adjust height as needed
                width={300} // Adjust width as needed
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme;
