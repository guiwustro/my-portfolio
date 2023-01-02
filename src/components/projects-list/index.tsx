/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { BsGithub } from "react-icons/bs";

import Tooltip from "components/tooltip";
import Image from "next/image";
import Link from "next/link";
import { IHomepageProps } from "pages";

import { React as ReactIcon, NodeJS, JS, TS } from "../../assets/images/techs";
import dataProjects from "../../database/projects";
import { homePageInfo } from "../../translations/home";
import {
  Container,
  ContainerSeeProject,
  ImageContainer,
  TechIcon,
} from "./styles";

const MAIN_TECHS = ["React", "JavaScript", "NodeJS", "TypeScript"];
const MAIN_TECHS_WITH_ICONS = [
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "JavaScript",
    icon: JS,
  },
  {
    name: "NodeJS",
    icon: NodeJS,
  },
  {
    name: "TypeScript",
    icon: TS,
  },
];

const ProjectsList = ({ locale }: IHomepageProps) => {
  const {
    "see-project": see_project,
    projects_description,
    projects,
    "projects-info": project_info,
    "see-code": see_code,
  } = homePageInfo[locale];
  return (
    <Container id="projects">
      <div className="project-title">
        <h3>{projects}</h3>
        <span>{project_info}</span>
      </div>
      <ul>
        {dataProjects.map((project, i) => {
          return (
            <li key={project["project-name"]}>
              <div className="item-header">
                <h4>{project["project-name"]}</h4>
                <a
                  target="_blank"
                  href={project["github-link"]}
                  rel="noreferrer"
                >
                  <Tooltip title={see_code} width={80}>
                    <BsGithub />
                  </Tooltip>
                </a>
              </div>
              <Link
                href={`projects/${projectNameURL(project["project-name"])}`}
              >
                <ImageContainer>
                  <Image
                    src={project.images[0]}
                    alt={project["project-name"]}
                    layout="fill"
                    objectFit={"cover"}
                    className="project-image"
                  />
                  <div className="image-overlay">
                    <div className="image-description">
                      <p> {projects_description[i]}</p>
                      <div
                        style={{
                          display: "flex",
                          gap: "1.5rem",
                        }}
                      >
                        {project.techs
                          .filter((tech) => MAIN_TECHS.includes(tech))
                          .map((tech) => {
                            const image = MAIN_TECHS_WITH_ICONS.find(
                              (t) => t.name === tech,
                            );
                            return (
                              <TechIcon key={tech}>
                                <span>{tech}</span>
                                <Image
                                  src={image?.icon!}
                                  width={22}
                                  height={22}
                                  objectFit={"contain"}
                                  alt="React"
                                />
                              </TechIcon>
                            );
                          })}
                      </div>

                      <ContainerSeeProject>{see_project}</ContainerSeeProject>
                    </div>
                  </div>
                </ImageContainer>
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ProjectsList;

function projectNameURL(projectName: string) {
  return projectName.toLowerCase().replaceAll(" ", "-");
}
