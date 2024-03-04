// import React, { useState, useRef } from "react";
// import { items } from "../Ahackethon/SlideItem";
// import Slide from "./Slide";

// const Cards = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);

//   const nextSlide = () => {
//     if (activeIndex + 1 < items.length) {
//       setActiveIndex(activeIndex + 1);
//     } else {
//       // Move to the next section or div
//       // For example, you can use containerRef.current.nextSibling.scrollIntoView();
//       // to scroll to the next section
//       if (containerRef.current.nextSibling) {
//         containerRef.current.nextSibling.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   const prevSlide = () => {
//     if (activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//     } else {
//       // Move to the previous section or div
//       // For example, you can use containerRef.current.previousSibling.scrollIntoView();
//       // to scroll to the previous section
//       if (containerRef.current.previousSibling) {
//         containerRef.current.previousSibling.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   const handleWheel = (e) => {
//     const delta = Math.sign(e.deltaY);
//     if (delta > 0) {
//       nextSlide();
//     } else if (delta < 0) {
//       prevSlide();
//     }
//   };



//   return (
// <>

// <div
//       className="second min-h-screen bg-gradient-to-tr from-purple-600 to-pink-500 flex justify-center items-center font-mono"
//       onWheel={handleWheel}
//       ref={containerRef}
//     >
//       <div className="relative flex justify-center items-center w-full h-[500px] overflow-hidden z-50 ">
//         {items.map((item, index) => (
//           <Slide
//             key={index}
//             index={index}
//             activeIndex={activeIndex}
//             title={item.title}
//             paragraph={item.paragraph}
//           />
//         ))}
//       </div>
      
//     </div>
//   </>
//   );
// };

// export default Cards;