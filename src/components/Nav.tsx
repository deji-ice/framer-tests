import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { menuSlide } from "../utils/animate";
import Links from "./Link";

interface NavItem {
  title: string;
  pathname: string;
}

const navItems:NavItem[] = [
  {
    title: "Home",

    pathname: "/",
  },

  {
    title: "Work",

    pathname: "/work",
  },

  {
    title: "About",

    pathname: "/about",
  },

  {
    title: "Contact",

    pathname: "/contact",
  },
];

const Nav = () => {
  const pathname = useLocation();
  const [selectedIndicator, setSelectedIndicator] = useState<string>(pathname.pathname || "");

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen fixed right-0 top-0 bg-[rgb(41,41,41)] text-white "
    >
      <div className={` box-border h-full p-28 flex flex-col justify-between `}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname.pathname);
          }}
          className={`flex flex-col gap-3 text-6xl mt-20`}
        >
          <div
            className={`text-[rgb(153,153,153)] border-b border-b-[rgb(153,153,153)] text-xs mt-10 uppercase`}
          >
            <p>Navigation</p>
          </div>

          {navItems.map((data, index) => {
            return (
              <Links
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.pathname}
                setSelectedIndicator={setSelectedIndicator}
              ></Links>
            );
          })}
        </div>

        <div
          className={`flex gap-10 justify-between w-full text-sm  *:font-light *:text-white`}
        >
          <Link target="_blank" to={"https://github.com/deji-ice"}>
            Github
          </Link>

          <Link target="_blank" to={"https://github.com/deji-ice"}>
            Instagram
          </Link>

          <Link to={""}>Twitter</Link>

          <Link to={""}>NavLinkedIn</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
