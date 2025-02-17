const MovingColors = ({ upsideDown = false }) => {
  return (
    <div className="blur-[1px] animate-gradient bg-[length:200%] w-full h-[25px] bg-gradient-to-r from-[#1C76FD] via-[#85aac7] to-[#260757] relative">
      {upsideDown ? (
        <div
          className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-[#0A0118] to-transparent"
          style={{ clipPath: "ellipse(150% 100% at 50% 100%)" }}
        ></div>
      ) : (
        <div
          className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#0A0118] to-transparent"
          style={{ clipPath: "ellipse(150% 100% at 50% 0)" }}
        ></div>
      )}
    </div>
  );
};

export default MovingColors;
