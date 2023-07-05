"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./loading_screen/LoadingScreen";
import { AnimatePresence } from "framer-motion";

interface WrapperChildren {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4100);
  }, []);

  return (
    <AnimatePresence mode="popLayout">
      {isLoading ? <LoadingScreen /> : children}
    </AnimatePresence>
  );
};

export default Wrapper;
