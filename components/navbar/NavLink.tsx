import Link from "next/link";
import { NavLinkData } from "@/data/data";
import { firaCodeFont } from "@/fonts/font";
import LinkButton from "../LinkButton";
import { motion } from "framer-motion";

const NavLink = () => {
  return (
    <div className="hidden lg:flex">
      <ul className="flex items-center gap-7">
        {NavLinkData.map((data) => (
          <li key={data.id}>
            <Link href={data.link}>
              <motion.div
                className={firaCodeFont}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: data.delay }}
              >
                <h2 className="group text-xs xl:text-sm">
                  <span className="text-primary mr-1">{data.number}</span>
                  <span className="text-textSecondary font-light group-hover:text-primary duration-200 ease-in ">
                    {data.title}
                  </span>
                </h2>
              </motion.div>
            </Link>
          </li>
        ))}

        {/* Resume Button */}
        <motion.li
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <LinkButton
            title="Resume"
            style="text-xs xl:text-sm px-5 py-2"
            href="/marvinel-santos-CV.pdf"
            download
          />
        </motion.li>
      </ul>
    </div>
  );
};

export default NavLink;
