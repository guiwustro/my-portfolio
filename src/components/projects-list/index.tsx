import Image from "next/image";
import Link from "next/link";

import { withTranslation } from "../../../i18n";
import Blog from "../../assets/images/projects/blog/Blog-login.png";
import projects from "../../database/projects";
import { Container } from "./styles";

const ProjectsList = ({ t }: { t: any }) => {
  return (
    <Container>
      <h1 id="projects">{t("projects")}</h1>
      <Link href="projects/2">Clique aqui</Link>
      <ul>
        {projects.map((project, i) => {
          return (
            <li key={project["project-name"]}>
              <h3>{project["project-name"]}</h3>
              <Link href={`projects/${i}`}>
                <Image
                  src={project.images[0]}
                  alt={project["project-name"]}
                  width={280}
                  height={200}
                  objectFit={"cover"}
                  className="project-image"
                />
              </Link>
              {/* icone */}
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
