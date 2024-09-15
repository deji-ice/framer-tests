import { forwardRef, Ref, useState } from "react";
import Magnetic from "./Magnetic";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";

const Header = forwardRef((props, ref: Ref<HTMLDivElement>) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const active = () => {
    setIsActive((prev) => !prev);
    console.log("isActive", isActive);
  };
  return (
    <div className="fixed w-[80px] rounded-full flex justify-center items-center cursor-pointer mix-blend-difference z-[200] right-0 h-[80px] m-5">
      <Magnetic>
        <div
          onClick={active}
          className={`after:relative w-full m-auto before:transition-transform before:duration-300 after:transition-transform after:duration-300 gap-2 
            p-8 pointer-events-none before:relative before:top-[5px] before:block before:w-8 before:h-0.5
    before:mix-blend-difference before:bg-white after:block after:w-8 after:h-0.5 
    after:mix-blend-difference after:bg-white after:top-[-5px] 
    ${
      isActive
        ? "before:top-0 before:-rotate-45 after:top-[-1px] after:rotate-45"
        : ""
    }`}
        >
          <div className="bounds" ref={ref}></div>
        </div>
      </Magnetic>
      <AnimatePresence mode={"wait"}>
        {isActive && <Nav/>}
      </AnimatePresence>
    </div>
  );
});

export default Header;
