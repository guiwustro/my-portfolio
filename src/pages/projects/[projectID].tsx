import React from "react";

import { Carousel } from "components/carousel";
import Header from "components/header";
import { AnimatePresence, motion } from "framer-motion";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import Link from "next/link.js";
import { useRouter } from "next/router";
import { Container, ContainerBackGround } from "styles/styles-projects";

// import { withTranslation } from "../../../i18nt.js/index.js";
import projects, { IProjects } from "../../database/projects";

const Projects = ({
  locale,
  project: projectSelected,
}: {
  locale: string;
  project: IProjects;
}) => {
  console.log(locale, projectSelected);

  return (
    <React.Fragment>
      <Header />
      <ContainerBackGround>
        <motion.div
          initial={{ x: "-20%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          exit={{ x: "0", opacity: 0 }}
        >
          <Container>
            <div className="project-title">
              {/* <h1>{t(`projects.${projectIndex}.project-name`)}</h1> */}
              <Link href={"t"}>
                <a target="_blank" className="website-link__mobile">
                  {/* {t(`see-website`)} */}
                </a>
              </Link>
            </div>

            <p className="project-description">
              {/* {t(`projects.${projectIndex}.description`)} */}
            </p>
            <Carousel projectSelected={projectSelected} />

            <div className="project-techs-list">
              <div className="background-techs">
                <Link href={"t"}>
                  <a target="_blank" className="website-link__desktop">
                    {/* {t(`see-website`)} */}
                  </a>
                </Link>
                {/* <h3>{t(`techs`)}</h3> */}
                <ul>
                  {projectSelected?.techs.map((e, i) => {
                    return (
                      <li key={e}>
                        {/* {t(`projects.${projectIndex}.techs.${i}`)} */}
                        {+i + 1 === projectSelected?.techs.length ? "." : ";"}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="about-project">
              {/* <h3>{t(`about-project`)}</h3> */}
              <ul>
                {projectSelected?.["about-project"].map((e, i) => {
                  return (
                    <p key={e}>
                      {/* {t(`projects.${projectIndex}.about-project.${i}`)} */}
                    </p>
                  );
                })}
              </ul>
            </div>

            <div className="project-features">
              {/* <h3>{t(`features`)}</h3> */}
              <ul>
                {projectSelected?.features.map((e, i) => {
                  return (
                    <li key={e}>
                      {/* {t(`projects.${projectIndex}.features.${i}`)} */}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Container>
        </motion.div>
      </ContainerBackGround>
    </React.Fragment>
  );
};

// Projects.getInitialProps = async () => ({
//   namespacesRequired: ["projects"],
// });

// export default withTranslation("projects")(Projects);
export default Projects;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { projectID: project["project-name"] },
  }));

  return { paths, fallback: true };
};

export async function getStaticProps(context: GetStaticPropsContext) {
  console.log("hello", projects);
  const projectFound = projects.find(
    (project) => project["project-name"] === context.params.projectID,
  );

  return {
    props: {
      locale: context.locale,
      project: projectFound,
    },
  };
}
