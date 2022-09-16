import { withTranslation } from "../../i18n.js";
import AboutMe from "../components/about-me/index";
import Header from "../components/header";
import ProjectsList from "../components/projects-list/index";
import TechsList from "../components/techs-list/index";

const Homepage = ({ t }: { t: any }) => {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <TechsList />
        <ProjectsList />
      </main>
    </>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Homepage);
