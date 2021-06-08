import {
  FaHtml5,
  FaPython,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTailwindcss,
  SiRedux,
  SiMaterialUi,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiNextDotJs,
  SiJest,
} from "react-icons/si";

export default {
  languages: {
    title: "Languages",
    lists: [
      {
        icon: <IoLogoJavascript />,
        title: "JavaScript",
      },
      {
        icon: <FaPython />,
        title: "Python",
      },
    ],
  },
  frontend: {
    title: "Frontend",
    lists: [
      {
        icon: <FaHtml5 />,
        title: "HTML5",
      },
      {
        icon: <FaCss3Alt />,
        title: "CSS3",
      },
      {
        icon: <FaBootstrap />,
        title: "Bootstrap",
      },
      {
        icon: <SiTailwindcss />,
        title: "Tailwind CSS",
      },
      {
        icon: <FaSass />,
        title: "Sass",
      },
      {
        icon: <FaReact />,
        title: "Reactjs",
      },
      {
        icon: <SiNextDotJs />,
        title: "Nextjs",
      },
      {
        icon: <FaReact />,
        title: "Context API",
      },
      {
        icon: <SiRedux />,
        title: "Redux",
      },
      {
        icon: <SiMaterialUi />,
        title: "Material UI",
      },
    ],
  },

  backend: {
    title: "Backend",
    lists: [
      {
        icon: <FaNodeJs />,
        title: "Nodejs",
      },
      {
        icon: <FaNodeJs />,
        title: "Expressjs",
      },
      {
        icon: <SiMongodb />,
        title: "MongoDB",
      },
      {
        icon: <SiMysql />,
        title: "MySQL",
      },
      {
        icon: <SiFirebase />,
        title: "Firebase",
      },
    ],
  },

  others: {
    title: "Others",
    lists: [
      {
        icon: <FaGitAlt />,
        title: "Git",
      },
      {
        icon: <FaGithub />,
        title: "GitHub",
      },
      {
        icon: <FaFigma />,
        title: "Figma",
      },
      {
        icon: <SiJest />,
        title: "Jest",
      },
      {
        icon: <FaWordpress />,
        title: "Wordpress",
      },
    ],
  },
};
