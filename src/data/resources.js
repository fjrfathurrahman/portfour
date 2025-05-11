import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
export const content = [
  // content hero Section
  {
    page: "hero",
    title: "Hi there! We’re PortFour",
    description:
      "We are a team of creative developers focused on building websites that help grow your business. With experience across various projects and strong technical skills, we combine modern design with the latest technology to deliver fast, responsive, and user-friendly digital solutions.",
  },

  // content about Section
  {
    page: "about",
    title: "About Us",
    intro: "Web development team delivering tailored digital solutions.",
    description:
      "PortFour was founded on a shared passion for the same field. We are a team dedicated to creating exceptional digital experiences for our clients. By combining creativity and the latest technologies, we deliver innovative and engaging web solutions.",
  },

  // content projects Section
  {
    page: "projects",
    title: "Projects Us",
    content: "Here are some of the projects we have worked on.",
  },

  // content contact Section
  {
    page: "contact",
    title: "Contact",
    content: "Contact content",
  },
];
export const ImagesHero = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/c6/83/20/c683200850332d21b141f2b5cee7e560.jpg",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/736x/6a/09/02/6a0902a42590d4ab203590ff81a96050.jpg",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/736x/33/96/e4/3396e4489ee62f057b45748c35de5e9d.jpg",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/736x/7d/10/c1/7d10c18cd2a5a7d000b6f6e066423403.jpg",
  },
];
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
  },
];
