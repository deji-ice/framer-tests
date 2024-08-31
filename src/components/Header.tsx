import { forwardRef, Ref } from "react";

const Header = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <div className="fixed w-full flex justify-end cursor-pointer mix-blend-difference z-10 p-2.5 box-border">
      <div
        className="relative flex gap-2 flex-col p-8 pointer-events-none before:block before:w-8 before:h-0.5
      before:mix-blend-difference before:bg-white after:block after:w-8 after:h-0.5 after:mix-blend-difference after:bg-white
      "
      >
        <div
          className="absolute left-0 top-0 w-full h-full pointer-events-auto hover:scale-150 transform transition duration-300 "
          ref={ref}
        ></div>
      </div>
    </div>
  );
});

export default Header;
