import { forwardRef, Ref, useState } from "react";
import Magnetic from "./Magnetic";

const Header = forwardRef((props, ref: Ref<HTMLDivElement>) => {
  const [isActive, setIsActive] = useState(false);

  const active = () => {
    setIsActive((prev) => !prev);
    console.log("isActive", isActive);
  };
  return (
    <div className="fixed w-[80px]  rounded-full flex justify-center items-center cursor-pointer mix-blend-difference z-20 right-0 h-[80px] m-5">
      <Magnetic>
        <div
          onClick={active}
          className={`after:relative   w-full m-auto transition-transform duration-300 gap-2 
            p-8 pointer-events-none before:relative before:top-[5px] before:block before:w-[40%] before:h-0.5
    before:mix-blend-difference before:bg-white after:block after:w-[40%] after:h-0.5 
    after:mix-blend-difference after:bg-white after:top-[-5px]
    ${
      isActive
        ? "before:top-0 before:-rotate-45 after:top-[-1px] text-blue-900  after:rotate-45"
        : ""
    }`}
        >
          <div className="bounds" ref={ref}></div>
        </div>
      </Magnetic>
    </div>
  );
});

export default Header;
