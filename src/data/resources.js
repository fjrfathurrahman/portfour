import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
export const Skills = [
  {
    title: "Leanguages",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Next.js", icon: RiNextjsLine },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Visual Studio Code", icon: BiLogoVisualStudio },
      { name: "Postman", icon: SiPostman },
      { name: "Git", icon: FaGitAlt },
      { name: "Figma", icon: FaFigma },
    ],
  }
];
