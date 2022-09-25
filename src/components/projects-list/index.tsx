import { BsGithub } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import { IHomepageProps } from "pages";

import { homePageInfo } from "../../../public/locales/en/common";
import dataProjects from "../../database/projects";
import { Container, ContainerSeeProject, ImageContainer } from "./styles";

const ProjectsList = ({ locale }: IHomepageProps) => {
  const {
    "see-project": see_project,
    projects_description,
    projects,
  } = homePageInfo[locale];
  return (
    <Container id="projects">
      <h3>{projects}</h3>
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
                  <BsGithub />
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
                    objectFit={"contain"}
                    className="project-image"
                  />
                  <div className="image-overlay">
                    <div className="image-description">
                      <p> {projects_description[i]}</p>
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
