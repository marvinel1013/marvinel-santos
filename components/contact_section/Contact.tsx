"use client";

import { firaCodeFont, kumbSansFont } from "@/fonts/font";
import LinkButton from "../LinkButton";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-full flex items-center justify-center flex-col py-[200px] w-full px-6 md:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto"
    >
      <div className="flex items-center justify-center flex-col">
        <motion.h3
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`${firaCodeFont} text-primary text-sm md:text-base xl:text-lg`}
        >
          04. What's Next?
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`${kumbSansFont} text-textSecondary mt-2 font-bold lg:font-extrabold text-3xl md:text-4xl xl:text-5xl`}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center my-5 text-sm md:max-w-sm lg:max-w-lg xl:max-w-xl md:text-base xl:text-lg"
        >
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <LinkButton
            title="Say Hello"
            href="mailto:1013marvinel@gmail.com"
            style="py-3 px-7 xl:px-10 lg:py-4 text-sm mt-5"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
