"use client";

import Title from "../Title";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-full py-[100px] w-full px-6 md:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Title
          title="Knowledge is Power"
          number="02."
          subtitle="These are the Technologies I've worked with"
          lineWidth="hidden md:block"
        />
      </motion.div>

      <div className="w-full h-full mt-12">
        <SkillCard />
      </div>
    </section>
  );
};

export default Skills;
