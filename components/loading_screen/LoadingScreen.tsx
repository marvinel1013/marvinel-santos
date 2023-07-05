import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-900">
      <motion.div
        className="cursor-pointer z-20"
        title="Logo"
        initial={{ scale: 1, opacity: 1 }}
        animate={{
          scale: 0,
          opacity: 0,
          transition: { delay: 3.5, ease: "easeIn" },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            stroke="#00F5FF"
            fill="rgb(15, 23 , 42)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 50, 5
                    L 11, 27
                    L 11, 72
                    L 50, 95
                    L 89, 73
                    L 89, 28 z"
          />
          <g transform="translate(30.000000,  30.000000)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 448 512"
            >
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                fill="#00F5FF"
                d="M22.7 33.4c13.5-4.1 28.1 1.1 35.9 12.9l165.4 248L389.4 46.2c7.8-11.7 22.4-17 35.9-12.9S448 49.9 448 64v384c0 17.7-14.3 32-32 32s-32-14.3-32-32V169.7L250.6 369.8c-5.9 8.9-15.9 14.2-26.6 14.2s-20.7-5.3-26.6-14.2L64 169.7V448c0 17.7-14.3 32-32 32S0 465.7 0 448V64c0-14.1 9.2-26.5 22.7-30.6z"
              />
            </svg>
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
