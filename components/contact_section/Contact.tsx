import { firaCodeFont, kumbSansFont } from "@/fonts/font";
import LinkButton from "../LinkButton";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-full flex items-center justify-center flex-col py-[200px] w-full px-6 md:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto"
    >
      <div className="flex items-center justify-center flex-col">
        <h3
          className={`${firaCodeFont} text-primary text-sm md:text-base xl:text-lg`}
        >
          04. What's Next?
        </h3>
        <h1
          className={`${kumbSansFont} text-textSecondary mt-2 font-bold lg:font-extrabold text-3xl md:text-4xl xl:text-5xl`}
        >
          Get In Touch
        </h1>
        <p className="text-center my-5 text-sm md:max-w-sm lg:max-w-lg xl:max-w-xl md:text-base xl:text-lg">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>

        <LinkButton
          title="Say Hello"
          href="mailto:1013marvinel@gmail.com"
          style="py-3 px-7 xl:px-10 lg:py-4 text-sm mt-5"
        />
      </div>
    </section>
  );
};

export default Contact;
