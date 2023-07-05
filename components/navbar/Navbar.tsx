"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import MenuIcon from "../mobile_menu/MenuIcon";

const Navbar = () => {
  const [isShadow, setIsShadow] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  useEffect(() => {
    const shadow = () => {
      if (window.scrollY >= 90) {
        setIsShadow(true);
      } else {
        setIsShadow(false);
      }
    };
    window.addEventListener("scroll", shadow);
    return () => window.removeEventListener("scroll", shadow);
  }, []);

  return (
    <nav
      className={`${visible ? "top-0 left-0" : "-top-[100%]"} ${
        isShadow
          ? "shadow-lg backdrop-blur-lg bg-slate-900/50"
          : "pt-2 md:pt-6 lg:pt-10 xl:pt-12"
      } flex items-center justify-between px-4 md:px-8 lg:px-10 xl:px-14 fixed z-40 h-16 w-full duration-500 ease-in-out`}
    >
      <Logo />
      <NavLink />
      <MenuIcon />
    </nav>
  );
};

export default Navbar;
