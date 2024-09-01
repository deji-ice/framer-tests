import React from "react";

type Props = {
  children: JSX.Element;
  width: "fit-content" | "100%";
};

const Reveal = ({ children, width = "fit-content" }: Props) => {
  return (
    <div className={`w-[${width}] overflow-hidden relative`}>
      <div>{children}</div>
    </div>
  );
};

export default Reveal;
