import { motion } from "framer-motion";
import { scale, slide } from "../utils/animate";
import { Link } from "react-router-dom";

type LinkProps = {
  data: {
    title: string;
    pathname: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
};
const Links = ({ data, isActive, setSelectedIndicator }: LinkProps) => {
  const { title, pathname, index } = data;

  return (
    <motion.div
      className={"relative flex items-center"}
      onMouseEnter={() => {
        setSelectedIndicator(pathname);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={"w-3 h-3 absolute bg-white rounded-[50%] left-[-31px]"}
      ></motion.div>
      <Link to={pathname}>{title}</Link>
    </motion.div>
  );
};

export default Links;
