import React from "react";
import { BsGithub } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";

import { withTranslation } from "../../../i18n";
import projects from "../../database/projects";
import { Container, ContainerSeeProject, ImageContainer } from "./styles";

const ProjectsList = ({ t }: { t: any }) => {
  return (
    <Container id="projects">
      <h3>{t("projects")}</h3>
      <ul>
        {projects.map((project, i) => {
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
              <Link href={`projects/${i}`}>
                <ImageContainer>
                  <Image
                    src={project.images[0]}
                    alt={project["project-name"]}
                    width={9}
                    height={16}
                    layout="responsive"
                    objectFit={"cover"}
                    className="project-image"
                  />
                  <div className="image-overlay">
                    <div className="image-description">
                      <p>{t(`projects_description.${i}`)}</p>
                      <ContainerSeeProject>
                        {t(`see-project`)}
                      </ContainerSeeProject>
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

ProjectsList.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(ProjectsList);
