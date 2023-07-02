import Title from "../Title";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-full py-[100px] w-full px-6 md:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto"
    >
      <div>
        <Title
          title="Knowledge is Power"
          number="02."
          subtitle="These are the Technologies I've worked with"
          lineWidth="hidden md:block"
        />
      </div>

      <div className="w-full h-full mt-12">
        <SkillCard />
      </div>
    </section>
  );
};

export default Skills;
