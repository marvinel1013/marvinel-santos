"use client";

import { useShowMobileMenu } from "@/hooks/useOpenMobileMenu";
import MobileMenuBar from "./MobileMenuBar";

const MobileMenu = () => {
  const openMenu = useShowMobileMenu((value) => value.isOpen);

  return (
    <div
      className={
        openMenu
          ? "fixed top-0 left-0 bottom-0 right-0 bg-black/30 backdrop-blur-lg z-40"
          : ""
      }
    >
      <MobileMenuBar />
    </div>
  );
};

export default MobileMenu;
