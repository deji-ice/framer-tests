import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {
  children: JSX.Element;
  width: "fit-content" | "100%";
};

const Reveal = ({ children, width = "fit-content" }: Props) => {
  const motionDivRef = useRef(null);
  const isInView = useInView(motionDivRef, { once: true });

  const mainControl = useAnimation();
  const slideControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControl.start("show");
      slideControl.start("show");
    }
  }, [isInView]);
  return (
    <div ref={motionDivRef} className={`w-[${width}] overflow-hidden relative`}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          show: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute bg-white top-1 bottom-1 left-0 right-0 z-20"
        variants={{
          hidden: {
            left: 0,
          },
          show: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControl}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
      ></motion.div>
    </div>
  );
};

export default Reveal;
