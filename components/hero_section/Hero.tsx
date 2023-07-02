import LinkButton from "@/components/LinkButton";
import SubTitle from "@/components/SubTitle";
import { kumbSansFont } from "@/fonts/font";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex justify-center items-start flex-col min-h-screen h-screen w-full px-6 mx-auto md:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-5xl"
    >
      <div>
        <SubTitle
          title="Hi, my name is"
          style="tracking-wide text-sm xl:text-base"
        />
        <div className="mt-4 lg:mt-6 xl:mt-10">
          <div className={kumbSansFont}>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-textSecondary tracking-tight">
              Marvinel Santos.
            </h1>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-textPrimary tracking-tight mt-3">
              I build things for the web.
            </h1>
          </div>
          <p className="mt-5 lg:mt-8 xl:mt-10 max-w-xs font-normal text-sm md:max-w-md lg:max-w-lg xl:max-w-xl lg:text-base xl:font-medium">
            I’m a software engineer specializing in{" "}
            <span className="text-primary">Front-End Web Development</span> and
            I love to work on web application using technologies like React,
            Next JS and Tailwind CSS and also I always looking forward to
            improve my skills and learn new technologies.
          </p>

          <div className="w-full sm:w-fit mt-8">
            <LinkButton
              title="Download CV"
              style="px-4 py-3 md:px-10 text-sm text-center lg:px-14 xl:px-20 xl:text-base xl:py-3.5"
              href="/marvinel-santos-CV.pdf"
              download
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
