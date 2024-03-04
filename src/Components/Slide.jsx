// import React from "react";
// import { Tilt } from "react-tilt";

// const Slide = ({ index, activeIndex, title, paragraph }) => {
//   const distance = index - activeIndex;
//   const stt = Math.abs(distance);
//   const transformValue = distance * 120;

//   // Determine opacity and blur values based on screen size
//   let opacity, blur;
//   if (window.innerWidth >= 1024) { // Desktop
//     opacity = stt <= 3 ? (distance === 0 ? 1 : Math.abs(0.5 / distance)) : 0;
//     blur = stt > 3 ? "blur(15px)" : "none";
//   } else if (window.innerWidth >= 768) { // Tablet
//     opacity = stt <= 2 ? (distance === 0 ? 1 : Math.abs(0.5 / distance)) : 0;
//     blur = stt > 2 ? "blur(15px)" : "none";
//   } else { // Mobile
//     opacity = stt <= 1 ? (distance === 0 ? 1 : Math.abs(0.5 / distance)) : 0;
//     blur = stt > 1 ? "blur(15px)" : "none";
//   }

//   return (
//     <div
//       className="absolute w-[300px] h-auto text-center bg-white rounded-xl p-5 transition duration-400 lg:left-[40%] transform -translate-x-1/2 top-0"
//       style={{
//         transform: `translateX(${transformValue}px) scale(${1 - 0.2 * stt}) rotateY(${distance > 0 ? -1 : 0}deg)`,
//         zIndex: distance === 0 ? 1 : -stt,
//         filter: blur,
//         opacity: opacity,
//       }}
//     >
//       {distance === 0 ? (
//         <Tilt
//           className="Tilt"
//           style={{
//             transformStyle: "preserve-3d",
//           }}
//           options={{
//             max: 30,
//             perspective: 1400,
//             easing: "cubic-bezier(.03,.98,.52,.99)",
//             speed: 2000,
//             glare: true,
//             maxGlare: 0.2,
//             scale: 1,
//           }}
//         >
//           <div className="w-full h-full rounded-xl px-5 py-2" style={{ boxShadow: '0 0 10px 15px lightblue' }}>
//             <h1>{title}</h1>
//             <p>{paragraph}</p>
//           </div>
//         </Tilt>
//       ) : (
//         <div>
//           <h1>{title}</h1>
//           <p>{paragraph}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Slide;
