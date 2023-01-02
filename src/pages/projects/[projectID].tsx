import React from "react";

import { Carousel } from "components/carousel";
import Header from "components/header";
import Tooltip from "components/tooltip";
import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import Head from "next/head";
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
    "deploy-api-message": deploy_message,
    techs,
  } = projectsInfo[locale];

  const projectIndex = projects.findIndex(
    (project) => project["project-name"] === projectSelected["project-name"],
  );

  const PROJECTS_WITH_DEPLOY_PROBLEM = ["Me Au Pet Hotel", "HealthyGo"];

  return (
    <>
      <Head>
        <title>Guilherme Portfolio - {projectSelected["project-name"]}</title>
      </Head>
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
              <div>
                {PROJECTS_WITH_DEPLOY_PROBLEM.includes(
                  projectSelected["project-name"],
                ) ? (
                  <Tooltip
                    title={deploy_message}
                    ContainerWidth={120}
                    position="right"
                    hiddenDesktop={true}
                  >
                    <a
                      target="_blank"
                      className="website-link__mobile"
                      href={projectSelected["project-url"]}
                      rel="noreferrer"
                    >
                      {seeWebsite}
                    </a>
                  </Tooltip>
                ) : (
                  <a
                    target="_blank"
                    className="website-link__mobile"
                    href={projectSelected["project-url"]}
                    rel="noreferrer"
                  >
                    {seeWebsite}
                  </a>
                )}
              </div>
            </div>
            <p className="project-description">
              {projects[projectIndex].description}
            </p>
            <Carousel images={projectSelected.images} />
            <div className="project-techs-list">
              <div className="background-techs">
                <div>
                  {PROJECTS_WITH_DEPLOY_PROBLEM.includes(
                    projectSelected["project-name"],
                  ) ? (
                    <Tooltip
                      title={deploy_message}
                      ContainerWidth={200}
                      width={281}
                    >
                      <a
                        target="_blank"
                        className="website-link__desktop"
                        href={projectSelected["project-url"]}
                        rel="noreferrer"
                        style={{ marginLeft: "20px" }}
                      >
                        {seeWebsite}
                      </a>
                    </Tooltip>
                  ) : (
                    <a
                      target="_blank"
                      className="website-link__desktop"
                      href={projectSelected["project-url"]}
                      rel="noreferrer"
                      style={{ marginLeft: "20px" }}
                    >
                      {seeWebsite}
                    </a>
                  )}
                </div>
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
              <>
                <h3>{features}</h3>
                <ul>
                  {projectSelected?.features.map((e, i) => {
                    return (
                      <li key={e}>{projects[projectIndex].features[i]}</li>
                    );
                  })}
                </ul>
              </>
            </div>
          </Container>
        </motion.div>
      </ContainerBackGround>
    </>
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
  return { paths, fallback: false };
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
