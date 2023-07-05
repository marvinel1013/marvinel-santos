"use client";

import { socialLinks } from "@/data/data";
import { motion } from "framer-motion";

const LeftSideBar = () => {
  return (
    <motion.aside
      className="fixed w-36 bottom-0 hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.5, ease: "easeIn" }}
    >
      <ul className="flex flex-col items-center gap-8">
        {socialLinks.map((data) => (
          <a
            key={data.id}
            title={data.title}
            href={data.link}
            download={data.download}
            target="_blank"
            className="group"
          >
            <li className="text-xl text-textSecondary group-hover:text-primary ease-out duration-300 group-hover:-translate-y-1">
              <data.icon />
            </li>
          </a>
        ))}
        <li className="w-[0.5px] h-[120px] bg-textSecondary" />
      </ul>
    </motion.aside>
  );
};

export default LeftSideBar;
