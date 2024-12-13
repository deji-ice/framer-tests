import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

interface ScrollCardProps {
  title: string;
  description: string;
  src: string;
  color: string;
  i: number;
  link: string;
}

const ScrollCard = ({
  title,
  description,
  src,
  link,
  color,
  i,
}: ScrollCardProps) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  return (
    <div className={`h-screen flex items-center justify-center sticky top-0 `}>
      <div
        className={`flex flex-col relative h-[500px] w-[1000px] rounded-3xl p-14 origin-center`}
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 26}px)` }}
      >
        <h3 className="text-center text-3xl font-cormorant">{title}</h3>
        <div className="flex items-center h-full gap-[50px] mt-[50px]">
          <div className="w-[40%] flex flex-col gap-2 relative top-[10%]">
            <p className="text-base first-letter:text-3xl  first-letter:font-cormorant">
              {description}
            </p>
            <span className="flex items-center  gap-2">
              <a
                className="text-xs cursor-pointer no-underline"
                href={link}
                target="_blank"
              >
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="relative w-[60%] h-full rounded-3xl overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full ">
              <img className="  object-cover" src={src} alt="image" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollCard;
