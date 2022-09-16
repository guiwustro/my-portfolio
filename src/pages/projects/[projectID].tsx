import React, { useEffect, useState } from "react";
import {
  HiOutlineArrowCircleRight,
  HiOutlineArrowCircleLeft,
} from "react-icons/hi";

import Header from "components/header/index";
import Image from "next/image.js";
import Link from "next/link.js";
import { useRouter } from "next/router";

import { withTranslation } from "../../../i18n.js";
import projects from "../../database/projects";
import { Container } from "./styles";

const Projects = ({ t }: { t: any }) => {
  const router = useRouter();
  const projectIndex = router.query.projectID;

  const [imageNumber, setImageNumber] = useState<number>(0);

  let projectSelected;

  if (projectIndex) {
    projectSelected = projects[+projectIndex];
  }

  const amountImages = Number(projectSelected?.images.length) - 1;

  setTimeout(() => {
    imageNumber === amountImages
      ? setImageNumber(0)
      : setImageNumber((state) => state + 1);
  }, 30000);

  const nextImage = () => {
    imageNumber === amountImages
      ? setImageNumber(0)
      : setImageNumber((state) => state + 1);
  };

  const previousImage = () => {
    imageNumber === 0
      ? setImageNumber(amountImages)
      : setImageNumber((state) => state - 1);
  };

  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className="project-title">
          <h1>{t(`projects.${projectIndex}.project-name`)}</h1>
          <Link href={t(`projects.${projectIndex}.project-url`)}>
            <a>Ver site</a>
          </Link>
        </div>
        <p className="project-description">
          {t(`projects.${projectIndex}.description`)}
        </p>

        <div className="project-carroussel-image">
          <button onClick={() => nextImage()}>
            <HiOutlineArrowCircleRight />
          </button>
          {projectSelected?.images[imageNumber] && (
            <Image
              src={projectSelected?.images[imageNumber]}
              alt={t(`projects.${projectIndex}.project-name`)}
              width={9}
              height={16}
              layout="responsive"
              objectFit={"cover"}
              className="project-figure"
            />
          )}
          <button onClick={() => previousImage()}>
            <HiOutlineArrowCircleLeft />
          </button>
        </div>
        <div className="project-techs-list">
          <Link href={t(`projects.${projectIndex}.project-url`)}>
            <a>Ver site</a>
          </Link>
          <ul>
            {projectSelected?.techs.map((e, i) => {
              return (
                <li key={e}>{t(`projects.${projectIndex}.techs.${i}`)}</li>
              );
            })}
          </ul>
        </div>
        <ul className="about-project">
          {projectSelected?.["about-project"].map((e, i) => {
            return (
              <li key={e}>
                {t(`projects.${projectIndex}.about-project.${i}`)}
              </li>
            );
          })}
        </ul>
        <ul className="project-features">
          {projectSelected?.features.map((e, i) => {
            return (
              <li key={e}>{t(`projects.${projectIndex}.features.${i}`)}</li>
            );
          })}
        </ul>
      </Container>
    </React.Fragment>
  );
};

Projects.getInitialProps = async () => ({
  namespacesRequired: ["projects"],
});

export default withTranslation("projects")(Projects);
