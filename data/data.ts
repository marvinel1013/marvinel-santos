import { FiGithub, FiFacebook, FiLinkedin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { IconType } from "react-icons/lib";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiReactquery,
  SiMongodb,
  SiGithub,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";

interface NavLinkType {
  id: number;
  title: string;
  number: string;
  link: string;
}

interface SocialLinksType {
  id: number;
  icon: IconType;
  link: string;
  title: string;
  download?: boolean;
}

interface SkillsDataType {
  id: number;
  icon: IconType;
  title: string;
  rate: string;
}

export const NavLinkData: NavLinkType[] = [
  {
    id: 1,
    title: "About",
    number: "01.",
    link: "#about",
  },

  {
    id: 2,
    title: "Skills",
    number: "02.",
    link: "#skills",
  },

  {
    id: 3,
    title: "Projects",
    number: "03.",
    link: "#projects",
  },

  {
    id: 4,
    title: "Contact",
    number: "04.",
    link: "#contact",
  },
];

export const socialLinks: SocialLinksType[] = [
  {
    id: 1,
    icon: FiGithub,
    link: "https://github.com/marvinel1013",
    title: "Github",
  },

  {
    id: 2,
    icon: FiFacebook,
    link: "https://www.facebook.com/marvinel.santos/",
    title: "Facebook",
  },

  {
    id: 3,
    icon: FiLinkedin,
    link: "https://www.linkedin.com/in/marvinel-santos13/",
    title: "LinkedIn",
  },

  {
    id: 4,
    icon: AiOutlineMail,
    link: "mailto:1013marvinel@gmail.com",
    title: "email",
  },

  {
    id: 5,
    icon: HiOutlineDocumentArrowDown,
    link: "/marvinel-santos-CV.pdf",
    title: "Resume",
    download: true,
  },
];

export const firstSetData: SkillsDataType[] = [
  {
    id: 1,
    icon: IoLogoHtml5,
    title: "HTML",
    rate: "83%",
  },

  {
    id: 2,
    icon: IoLogoCss3,
    title: "CSS",
    rate: "78%",
  },

  {
    id: 3,
    icon: SiJavascript,
    title: "JavaScript",
    rate: "68%",
  },

  {
    id: 4,
    icon: IoLogoReact,
    title: "React JS",
    rate: "73%",
  },

  {
    id: 5,
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    rate: "76%",
  },

  {
    id: 6,
    icon: SiNextdotjs,
    title: "Next JS",
    rate: "71%",
  },
];

export const secondSetData: SkillsDataType[] = [
  {
    id: 7,
    icon: SiTypescript,
    title: "TypeScript",
    rate: "64%",
  },

  {
    id: 8,
    icon: SiRedux,
    title: "Redux",
    rate: "61%",
  },

  {
    id: 9,
    icon: SiReactquery,
    title: "ReactQuery",
    rate: "60%",
  },

  {
    id: 10,
    icon: SiMongodb,
    title: "MongoDB",
    rate: "68%",
  },

  {
    id: 11,
    icon: SiNodedotjs,
    title: "Node JS",
    rate: "56%",
  },

  {
    id: 12,
    icon: SiGithub,
    title: "Github",
    rate: "82%",
  },
];
