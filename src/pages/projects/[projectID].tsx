import React from "react";

import { Carousel } from "components/carousel";
import Header from "components/header";
import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import Link from "next/link.js";
import { ParsedUrlQuery } from "querystring";
import { Container, ContainerBackGround } from "styles/styles-projects";
import { projectsInfo } from "translations/projects";

import projects, { IProjects } from "../../database/projects";

const Projects = ({
  locale,
  project: projectSelected,
}: {
  locale: "default" | "en";
  project: IProjects;
}) => {
  const {
    "about-project": about,
    "see-website": seeWebsite,
    features,
    projects,
    techs,
  } = projectsInfo[locale];

  const projectIndex = projects.findIndex(
    (project) => project["project-name"] === projectSelected["project-name"],
  );

  return (
    <React.Fragment>
      <Header locale={locale} />
      <ContainerBackGround>
        <motion.div
          initial={{ x: "-20%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          exit={{ x: "0", opacity: 0 }}
        >
          <Container>
            <div className="project-title">
              <h1>{projectSelected["project-name"]}</h1>
              <Link href={projectSelected["project-url"]}>
                <a target="_blank" className="website-link__mobile">
                  {seeWebsite}
                </a>
              </Link>
            </div>

            <p className="project-description">
              {projects[projectIndex].description}
            </p>
            <Carousel images={projectSelected.images} />
            <div className="project-techs-list">
              <div className="background-techs">
                <Link href={projectSelected["project-url"]}>
                  <a target="_blank" className="website-link__desktop">
                    {seeWebsite}
                  </a>
                </Link>
                <h3>{techs}</h3>
                <ul>
                  {projectSelected?.techs.map((e, i) => {
                    return (
                      <li key={e}>
                        {projectSelected.techs[i]}
                        {+i + 1 === projectSelected?.techs.length ? "." : ";"}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="about-project">
              <h3>{about}</h3>
              <ul>
                {projectSelected?.["about-project"].map((e, i) => {
                  return (
                    <p key={e}>{projects[projectIndex]["about-project"][i]}</p>
                  );
                })}
              </ul>
            </div>

            <div className="project-features">
              <h3>{features}</h3>
              <ul>
                {projectSelected?.features.map((e, i) => {
                  return <li key={e}>{projects[projectIndex].features[i]}</li>;
                })}
              </ul>
            </div>
          </Container>
        </motion.div>
      </ContainerBackGround>
    </React.Fragment>
  );
};

export default Projects;

export const getStaticPaths: GetStaticPaths = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // Array of locales that will be used for created the static pages
  const locales = ["", "en"];
  const paths = locales
    ?.map((locale) => {
      return projects.map((project) => ({
        params: { projectID: projectNameURL(project["project-name"]) },
        locale,
      }));
    })
    .flat();
  return { paths, fallback: "blocking" };
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const { projectID } = context.params as IParams;
  const projectFound = projects.find(
    (project) => projectNameURL(project["project-name"]) === projectID,
  );

  return {
    props: {
      locale: context.locale,
      project: projectFound,
    },
  };
}
interface IParams extends ParsedUrlQuery {
  projectID: string;
}

function projectNameURL(projectName: string) {
  return projectName.toLowerCase().replaceAll(" ", "-");
}
