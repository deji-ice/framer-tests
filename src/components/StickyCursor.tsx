import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
const StickyCursor = ({ stickyElement }) => {
  const cursorSize = 15;
  const cursor = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(cursor.x, smoothOptions),
    y: useSpring(cursor.y, smoothOptions),
  };

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    cursor.x.set(clientX - cursorSize / 2);
    cursor.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        className="fixed z-50 w-4 h-4 bg-black rounded-[50%] pointer-events-none"
      ></motion.div>
    </div>
  );
};

export default StickyCursor;
