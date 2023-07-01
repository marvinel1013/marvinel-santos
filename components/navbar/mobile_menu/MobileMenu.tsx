"use client";

import { useCallback, useState } from "react";
import MenuIcon from "./MenuIcon";
import MobileMenuBar from "./MobileMenuBar";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, [setIsOpen]);
  return (
    <div className="lg:hidden">
      <MenuIcon isOpen={isOpen} handleOpen={handleOpen} />

      <div
        className={`${
          isOpen
            ? "fixed h-full w-full top-0 left-0 bg-black/20 backdrop-blur -z-40"
            : ""
        }`}
      >
        <MobileMenuBar isOpen={isOpen} handleOpen={handleOpen} />
      </div>
    </div>
  );
};

export default MobileMenu;
