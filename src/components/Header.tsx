import { forwardRef, Ref } from "react";
import Magnetic from "./Magnetic";

const Header = forwardRef((props, ref: Ref<HTMLDivElement>) => {
  return (
    <div className="fixed w-full flex justify-end cursor-pointer mix-blend-difference z-10 p-3 box-border">
      <Magnetic>
        <div
          className="relative flex gap-2 flex-col p-8 pointer-events-none before:block before:w-8 before:h-0.5
      before:mix-blend-difference before:bg-white after:block after:w-8 after:h-0.5 after:mix-blend-difference after:bg-white
      "
        >
          <div
            className="bounds "
            ref={ref}
          ></div>
        </div>
      </Magnetic>
    </div>
  );
});

export default Header;
