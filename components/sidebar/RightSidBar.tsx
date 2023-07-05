"use client";

import { firaCodeFont } from "@/fonts/font";
import { motion } from "framer-motion";

const RightSideBar = () => {
  return (
    <motion.aside
      className="fixed w-36 right-0 bottom-0 hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.5, ease: "easeIn" }}
    >
      <ul className="flex flex-col items-center gap-24">
        <a
          className={firaCodeFont + " " + "group"}
          href="mailto:1013marvinel@gmail.com"
        >
          <li className="text-textSecondary text-sm tracking-widest group-hover:text-primary duration-300 ease-out w-72 rotate-90 group-hover:-translate-y-1">
            1013marvinel@gmail.com
          </li>
        </a>

        <li className="w-[0.5px] h-[120px] bg-textSecondary" />
      </ul>
    </motion.aside>
  );
};

export default RightSideBar;
