"use client";

import { useShowMobileMenu } from "@/hooks/useOpenMobileMenu";
import { motion } from "framer-motion";

const MenuIcon: React.FC = () => {
  const openMenu = useShowMobileMenu((value) => value.isOpen);
  const openMenuBar = useShowMobileMenu((value) => value.onOpen);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, ease: "easeInOut", duration: 0.5 }}
      onClick={openMenuBar}
      className="flex flex-col gap-1.5 cursor-pointer lg:hidden z-50"
    >
      <div
        className={`z-50 w-[25px] h-[0.5px] bg-primary duration-300 ease-in-out ${
          openMenu && "rotate-45 translate-y-1"
        } `}
      />
      <div
        className={`z-50 w-[25px] h-[0.5px] bg-primary ${
          openMenu && "opacity-0"
        }`}
      />
      <div
        className={`z-50 w-[25px] h-[0.5px] bg-primary duration-300 ease-in-out ${
          openMenu && "-rotate-45 -translate-y-2"
        }`}
      />
    </motion.div>
  );
};

export default MenuIcon;
