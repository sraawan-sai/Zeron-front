const MovingColors = ({ upsideDown = false }) => {
  return (
    <div className="w-full relative">
      <video
        src="/video/lines.mp4"
        autoPlay={true}
        muted
        loop
        className={`${
          upsideDown ? "rotate-180" : ""
        } w-full h-[250px] object-cover object-center relative`}
      />
      {upsideDown ? (
        <div className="absolute top-0 left-0 w-full h-[80%] bg-gradient-to-b from-[#0A0118] to-transparent" />
      ) : (
      <div className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-t from-[#0A0118] to-transparent" />
      )}
    </div>
  );
};

export default MovingColors;
// const MovingColors = ({ upsideDown = false }) => {
//   return (
//     <div className="blur-[1px] animate-gradient bg-[length:200%] w-full h-[175px] bg-gradient-to-r from-[#206FFC] via-[#45AFC9] to-[#5327F1] relative">
//       {upsideDown ? (
//         <div
//           className="absolute top-0 left-0 w-full h-[90%] bg-gradient-to-b from-[#0A0118] to-transparent" />
//           // style={{ clipPath: "ellipse(150% 100% at 50% 100%)" }}
//       ) : (
//         <div
//           className="absolute bottom-0 left-0 w-full h-[90%] bg-gradient-to-t from-[#0A0118] to-transparent" />
//           // style={{ clipPath: "ellipse(150% 100% at 50% 0)" }}
//       )}
//     </div>
//   );
// };

// export default MovingColors;
