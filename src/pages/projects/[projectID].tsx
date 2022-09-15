import React from "react";

import { useRouter } from "next/router";

import { i18n, withTranslation } from "../../../i18n.js";
import projects from "../../database/projects";

const Projects = ({ t }: { t: any }) => {
  const router = useRouter();
  const projectIndex = router.query.projectID;
  let projectSelected;
  if (projectIndex) {
    projectSelected = projects[+projectIndex];
  }
  console.log(projectSelected);
  return (
    <React.Fragment>
      <main>
        <p>{t(`projects.${projectIndex}.description`)}</p>;
        <button
          onClick={() => {
            i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
          }}
        >
          Clique aqui!
        </button>
      </main>
    </React.Fragment>
  );
};

Projects.getInitialProps = async () => ({
  namespacesRequired: ["projects"],
});

export default withTranslation("projects")(Projects);
