import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiStyledcomponents, SiNextdotjs } from "react-icons/si";

import { IHomepageProps } from "pages";

import { homePageInfo } from "../../translations/home";
import { TechsContainer } from "./styles";

const TechsList = ({ locale }: IHomepageProps) => {
  const { techs } = homePageInfo[locale];
  return (
    <TechsContainer
      id="technologies"
      initial={{ y: "20%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ y: "0", opacity: 0 }}
    >
      <h3>{techs}</h3>
      <div className="tech-list">
        <div className="tech-item">
          <h4>React</h4>
          <FaReact />
        </div>
        <div className="tech-item">
          <h4>HTML</h4>
          <AiFillHtml5 />
        </div>
        <div className="tech-item">
          <h4>CSS</h4>
          <FaCss3Alt />
        </div>
        <div className="tech-item">
          <h4>JavaScript</h4>
          <IoLogoJavascript />
        </div>
        <div className="tech-item">
          <h4>TypeScript</h4>
          <SiTypescript />
        </div>
        <div className="tech-item">
          <h4>Styled Components</h4>
          <SiStyledcomponents />
        </div>
        <div className="tech-item">
          <h4>Next JS</h4>
          <SiNextdotjs />
        </div>
      </div>
    </TechsContainer>
  );
};

export default TechsList;
