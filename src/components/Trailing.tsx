import React, { useEffect, useState } from "react";

const Trailing = () => {
  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, []);

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const noOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return [...Array(noOfBlocks).keys()].map((_, index) => {
      return (
        <div
          onMouseEnter={(e) => colorize(e)}
          className="w-full h-[5vw] "
          key={index}
        ></div>
      );
    });
  };

  const colorize = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.style.background = "black";
    setTimeout(() => {
      target.style.background = "transparent";
    }, 300);
  };
  return (
    <div className="flex h-screen items-center bg-white justify-center">
      <div className="text-center pointer-events-none uppercase mix-blend-difference text-white z-10 relative font-bold text-[6vw] w-[70%]">
        <p>We specialize in turning space into complexe shapes</p>
      </div>
      <div className={`flex w-full h-full overflow-hidden absolute`}>
        {windowsWidth > 0 &&
          [...Array(20).keys()].map((_, index) => {
            return (
              <div key={"b_" + index} className={`w-[5vw]`}>
                {getBlocks()}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Trailing;
