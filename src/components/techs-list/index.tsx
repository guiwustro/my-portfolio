import Image from "next/image";
import { IHomepageProps } from "pages";

import {
  BootStrap,
  CSS,
  Django,
  Docker,
  JS,
  Jest,
  MaterialUI,
  MongoDB,
  MySQL,
  NextJS,
  NodeJS,
  PostGreSQL,
  Python,
  React,
  Redux,
  StyledComponents,
  TS,
  HTML,
} from "../../assets/images/techs";
import { homePageInfo } from "../../translations/home";
import { TechsContainer } from "./styles";

interface ITechList {
  name: string;
  width?: number;
  height?: number;
  image: string;
}

const TechList: ITechList[] = [
  {
    name: "React",
    image: React,
  },
  {
    name: "Html",
    image: HTML,
  },
  {
    name: "CSS",
    image: CSS,
  },
  {
    name: "JavaScript",
    image: JS,
  },
  {
    name: "TypeScript",
    image: TS,
  },
  {
    name: "NextJS",
    image: NextJS,
  },
  {
    name: "Styled Components",
    image: StyledComponents,
  },
  {
    name: "BootStrap",
    image: BootStrap,
  },
  {
    name: "MaterialUI",
    image: MaterialUI,
  },
  {
    name: "Jest",
    image: Jest,
  },
  {
    name: "Redux",
    image: Redux,
  },
  {
    name: "NodeJS",
    image: NodeJS,
    width: 30,
  },
  {
    name: "Python",
    image: Python,
  },
  {
    name: "Django",
    image: Django,
    width: 45,
  },
  {
    name: "Docker",
    image: Docker,
    width: 30,
  },
  {
    name: "mySQL",
    image: MySQL,
    width: 45,
  },
  {
    name: "PostgreSQL",
    image: PostGreSQL,
  },
  {
    name: "MongoDB",
    image: MongoDB,
  },
];

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
        {TechList.map(({ image, name, width, height }, index) => {
          return (
            <div key={index} className="tech-item">
              <h4>{name}</h4>
              <Image
                src={image}
                width={width || 25}
                height={height || 25}
                alt="React"
              />
            </div>
          );
        })}
      </div>
    </TechsContainer>
  );
};

export default TechsList;
