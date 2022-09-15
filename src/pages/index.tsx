import { i18n, withTranslation } from "../../i18n.js";
import AboutMe from "../components/about-me/index";
import Header from "../components/header";
import ProjectsList from "../components/projects-list/index";
import TechsList from "../components/techs-list/index";

const Homepage = ({ t }: { t: any }) => {
  return (
    <>
      <main>
        <Header />
        <AboutMe />
        <TechsList />
        <ProjectsList />
        <button
          onClick={() => {
            i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");
          }}
        >
          Clique aqui!
        </button>
      </main>
    </>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Homepage);
