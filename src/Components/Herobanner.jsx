import Navbar from "./Navbar";

import Frame from "../assets/Frame 2.png";
import banner from "../assets/banner.png";

const Herobanner = () => {
  return (
    <>
      <Navbar />
      <div
        className=" lg:w-[40vw] w-[70vw] z-10 h-screen bg-center bg-cover flex flex-col items-center  justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex justify-center items-center">
          {/* <img src={Frame} alt="" /> */}
        </div>
        <h1 className="bg-gradient-to-r from-pink-600 to-purple-900 inline-block text-transparent bg-clip-text text-center text-[4.8rem] font-bold font-anta relative bottom-8 tracking-wider">
          TECHNOVATE'24
        </h1>
        <h6 className="text-pink-300 text-center text-[2rem] font-miami relative bottom-10">
          HACKATHON '24, UIET
        </h6>
        <p className="text-pink-300 text-center relative bottom-7 font-medium">
          13th March | UIET, Panjab University, Chandigarh
        </p>
      </div>
    </>
  );
};

export default Herobanner;
