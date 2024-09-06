import React, { useEffect, useRef } from "react";

const TextMask = () => {
  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);
  const initialMaskSize: number = 0.8;
  const targetMaskSize: number = 30;
  const easing: number = 0.15;

  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();

    if (stickyMask.current) {
      stickyMask.current.style.maskSize =
        (initialMaskSize + maskSizeProgress) * 100 + "%";
    }

    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    if (stickyMask.current && container.current) {
      const scrollProgress =
        stickyMask.current.offsetTop /
        (container.current.getBoundingClientRect().height - window.innerHeight);
      const delta = scrollProgress - easedScrollProgress;
      easedScrollProgress += delta * easing;
      return easedScrollProgress;
      return scrollProgress;
    }

    return 0; // Return a default value when stickyMask.current or container.current is undefined
  };
  return (
    <div className="mb-[100vh] bg-white ">
      <div
        ref={container}
        className=" h-[300vh] relative bg-white"
      >
        <div
          ref={stickyMask}
          style={{
            maskImage: "url('/mask.svg')",
            // maskPosition: "center center",
            maskRepeat: "no-repeat",
            maskSize: "80%",
            maskPosition: "52.35% center",
          }}
          className="flex sticky z-0 top-0 overflow-hidden h-screen items-center justify-center "
        >
          <video
            autoPlay
            muted
            loop
            className="h-full w-full object-cover"
            src="/media/nature.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default TextMask;
