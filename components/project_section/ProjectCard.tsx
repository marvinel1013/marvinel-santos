import Image, { StaticImageData } from "next/image";
import { firaCodeFont } from "@/fonts/font";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

interface ProjectCardProps {
  title: string;
  desc: string;
  techUsed: string;
  img: StaticImageData;
  codeLink: string;
  demoLink: string;
  rightSide: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { title, desc, techUsed, img, codeLink, demoLink, rightSide } = props;

  const isRightSide = rightSide;

  return (
    <div
      className={`group relative h-full w-full rounded p-4 lg:px-0 overflow-hidden flex items-center ${
        isRightSide ? "justify-end" : "justify-start"
      }`}
    >
      <div>
        <h2
          className={`${firaCodeFont} text-xs lg:text-sm xl:text-base text-primary ${
            isRightSide ? "lg:text-end" : "lg:text-start"
          }`}
        >
          Featured Project
        </h2>
        <h1
          className={`text-xl lg:text-2xl mt-1 font-semibold xl:font-bold xl:text-3xl text-textSecondary ${
            isRightSide ? "lg:text-end" : "lg:text-start"
          }`}
        >
          {title}
        </h1>

        <p
          className={`text-sm mt-5 text-textSecondary lg:max-w-md xl:max-w-lg xl:text-base xl:tracking-tighter lg:bg-secondary lg:p-3 rounded ${
            isRightSide ? "lg:text-end" : "lg:text-start"
          }`}
        >
          {desc}
        </p>
        <p
          className={`text-xs xl:text-sm text-primary mt-5 ${
            isRightSide ? "lg:text-end" : "lg:text-start"
          }`}
        >
          {techUsed}
        </p>
        <div
          className={`flex items-center gap-5 mt-5 text-textSecondary ${
            isRightSide ? "lg:justify-end" : "lg:justify-start"
          }`}
        >
          <a
            href={codeLink}
            className="text-lg xl:text-xl hover:text-primary duration-300"
            title="Code"
            target="_blank"
          >
            <BsGithub />
          </a>

          <a
            href={demoLink}
            className="text-lg xl:text-xl hover:text-primary duration-300"
            title="Demo"
            target="_blank"
          >
            <BsBoxArrowUpRight />
          </a>
        </div>
      </div>

      <div
        className={`absolute rounded top-0 left-0 right-0 h-full bottom-0 bg-primary/10 lg:-z-30 cursor-pointer ${
          isRightSide ? "lg:right-[40%]" : "lg:left-[40%]"
        }`}
      >
        <Image
          src={img}
          alt="project-image"
          priority={true}
          className="w-full rounded h-full object-cover opacity-20 lg:group-hover:opacity-100 duration-300"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
