"use client";

import { firstSetData, secondSetData } from "@/data/data";
import { RiArrowRightSFill } from "react-icons/ri";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Button from "../Button";

const SkillCard = () => {
  const [showMore, setShowMore] = useState(false);

  const handleOpen = useCallback(() => {
    setShowMore((value) => !value);
  }, [setShowMore]);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {firstSetData.map((data) => (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -8,
              transition: { ease: "easeOut" },
            }}
            viewport={{ once: true }}
            transition={{ delay: data.delay, ease: "easeOut" }}
            key={data.id}
            className="group bg-secondary rounded flex items-center justify-center flex-col py-8 gap-2 cursor-pointer"
          >
            <data.icon className="text-5xl md:text-6xl xl:text-7xl text-textSecondary group-hover:text-primary duration-300" />

            <h1 className="font-semibold text-xl xl:text-2xl group-hover:text-primary duration-300">
              {data.title}
            </h1>
            <h3 className="flex items-center text-textSecondary text-sm font-extralight">
              My rate{" "}
              <span className=" text-primary">
                <RiArrowRightSFill />
              </span>
              <span className="text-primary">{data.rate}</span>
            </h3>
          </motion.div>
        ))}

        {showMore &&
          secondSetData.map((data) => (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                transition: { ease: "easeOut" },
              }}
              transition={{ delay: data.delay, ease: "easeOut" }}
              viewport={{ once: true }}
              key={data.id}
              className="group bg-secondary rounded flex items-center justify-center flex-col py-8 gap-2 cursor-pointer"
            >
              <data.icon className="text-5xl md:text-6xl xl:text-7xl text-textSecondary group-hover:text-primary duration-300" />

              <h1 className="font-semibold text-xl xl:text-2xl group-hover:text-primary duration-300">
                {data.title}
              </h1>
              <h3 className="flex items-center text-textSecondary text-sm font-extralight">
                My rate{" "}
                <span className=" text-primary">
                  <RiArrowRightSFill />
                </span>
                <span className="text-primary">{data.rate}</span>
              </h3>
            </motion.div>
          ))}
      </div>

      <div className="w-full flex justify-center mt-10">
        <Button
          title={`${showMore ? "Show Less" : "Show More"}`}
          style="px-8 p-3 text-sm"
          onClick={handleOpen}
        />
      </div>
    </>
  );
};

export default SkillCard;
