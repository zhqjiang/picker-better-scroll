import React, { FC } from "react";

const SingleWheel: FC<{}> = () => {
  return <div></div>;
};

export default SingleWheel;

// import React, { FC, useEffect, useRef } from "react";
// import BScroll from "@better-scroll/core";

// interface ISingleWheelProps {
//   data: { text: string; value: string }[] | { text: string; value: number }[];
//   visible: boolean;
//   selectedIndex: number;
// }

// const SingleWheel: FC<ISingleWheelProps> = ({
//   data,
//   visible,
//   selectedIndex,
// }) => {
//   const bsRef = useRef(null);
//   const wheelRef = useRef<HTMLElement>();

//   const bsInstance = bsRef.current;

//   const createWheel = () => {
//     if (!bsRef.current && wheelRef.current) {
//       //   bsRef.current

//       const a = new BScroll(wheelRef.current, {
//         wheel: {
//           selectedIndex: selectedIndex,
//           wheelWrapperClass: "wheel-scroll",
//           wheelItemClass: "wheel-item",
//         },
//         // probeType: 3,
//       });

//       //   bsRef.current.on("scrollEnd", () => {
//       // this.$emit(EVENT_CHANGE, i, this.wheels[i].getSelectedIndex());
//       //   });
//     } else {
//       //   bsRef.current.refresh();
//     }
//   };

//   useEffect(() => {
//     createWheel();
//   }, []);

//   return (
//     <div className="wheel" ref={wheelRef}>
//       <ul className="wheel-scroll">
//         {data.map((item) => (
//           <li key={item.value} className="wheel-item">
//             {item.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SingleWheel;
