"use client";

import React from "react";
import Title from "../Title";
import Image from "next/image";
import { motion } from "framer-motion";
import ProfilePic from "../../public/marvinel.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-full py-[100px] w-full px-6  md:px-0 md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto"
    >
      <div className="w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Title number="01." title="About Me" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between"
        >
          <p className="mt-8 lg:mt-12 xl:mt-14 text-sm md:text-base lg:max-w-md xl:max-w-xl">
            Hello! My name is Marvinel Santos. I am a graduate of Bachelor of
            Science in Information Technology and I am a self-taught Front-End
            Web Developer{" "}
            <span className="text-primary">who is passionate</span> about
            building beautiful and user-friendly websites. With a well known
            foundation in HTML , CSS and JavaScript.
            <br />
            <br />I have relevant working experience with React. Currently
            seeking a full-time position. I love to work on web application
            using technologies like{" "}
            <span className="text-primary">
              React, NextJS, Tailwind and MongoDB
            </span>{" "}
            and also I always looking forward to improve my skills and learn new
            technologies.The more I learned, the more I realized that this is
            what I want to do for a living.{" "}
            <span className="text-primary">
              What I love most about coding is the challenge of problem-solving.
            </span>{" "}
            I find it deeply satisfying to tackle complex issues and come up
            with solutions that meet both the user's needs and the project's
            requirements. Some of my technical skills include experience with
            HTML, CSS, JavaScript, and frameworks like React and NextJS.
            <br />
            <br />I am also skilled in tools such as Redux/Redux Toolkit and
            have knowledge of UI libraries like Tailwind CSS, MUI and Framer
            Motion.{" "}
            <span className="text-primary">
              I am always looking forward to learn new technologies
            </span>{" "}
            and to achieve my dreams to become a Full Stack Web Developer.
          </p>

          <div className="mt-10 group relative w-3/4 md:w-1/2 lg:w-1/3 xl:w-[30%]">
            <div className=" bg-primary rounded duration-300 hover:-translate-x-2 hover:-translate-y-2">
              <Image
                priority
                src={ProfilePic}
                alt="profile-pic"
                className="rounded opacity-60 cursor-pointer grayscale hover:grayscale-0 hover:opacity-100 duration-300"
              />
            </div>
            <div className="absolute border-2 border-primary top-0 h-full left-0 rounded right-0 translate-x-3 translate-y-3 -z-20 group-hover:translate-x-4 group-hover:translate-y-4 duration-300" />
            <div />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
