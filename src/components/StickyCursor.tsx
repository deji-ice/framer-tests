import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const StickyCursor = ({ stickyElement }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 60 : 40;
  const cursor = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(cursor.x, smoothOptions),
    y: useSpring(cursor.y, smoothOptions),
  };

  const onMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, height, width } =
      stickyElement.current.getBoundingClientRect();
    //center position of the stickyElement

    const center = { x: left + width / 2, y: top + height / 2 };

    if (isHovered) {
      //distance between the mouse pointer and the center of the custom cursor and

      const distance = { x: clientX - center.x, y: clientY - center.y };
      //move mouse to center of stickyElement + slightly move it towards the mouse pointer

      cursor.x.set(center.x - cursorSize / 2 + distance.x * 0.1);

      cursor.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
    } else {
      cursor.x.set(clientX - cursorSize / 2);
      cursor.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseEnter = () => setIsHovered(true);
  const manageMouseLeave = () => setIsHovered(false);
  useEffect(() => {
    stickyElement.current.addEventListener("mouseenter", manageMouseEnter);
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      stickyElement.current.removeEventListener("mouseenter", manageMouseEnter);
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isHovered]);

  return (
    <div>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className="fixed z-50 w-4 h-4 mix-blend-difference bg-white rounded-[50%] pointer-events-none"
      ></motion.div>
    </div>
  );
};

export default StickyCursor;
