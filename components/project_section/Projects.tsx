"use client";

import Title from "../Title";
import ProjectsLists from "./ProjectsLists";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-full py-[100px] w-full px-6 md:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Title
          title=" Some Things I’ve Built"
          subtitle="Check out some of my Self/Own Projects right here."
          number="03."
          lineWidth="hidden md:block md:w-[55%]"
        />
      </motion.div>
      <div className="w-full h-full mt-10 md:mt-20 xl:mt-32">
        <ProjectsLists />
      </div>
    </section>
  );
};

export default Projects;
