import About from "@/components/about_section/About";
import Contact from "@/components/contact_section/Contact";
import Hero from "@/components/hero_section/Hero";
import Projects from "@/components/project_section/Projects";
import Skills from "@/components/skills_section/Skills";

const Main = () => {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Main;
