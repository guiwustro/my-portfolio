import { motion } from "framer-motion/dist/framer-motion";

import { withTranslation } from "../../i18n.js";
import AboutMe from "../components/about-me/index";
import Header from "../components/header";
import ProjectsList from "../components/projects-list/index";
import TechsList from "../components/techs-list/index";
import {
  ContainerBackGround,
  ContainerImage,
  ContainerMain,
  DivAngle,
} from "../styles/styles-index";

const Homepage = () => {
  return (
    <ContainerMain>
      <Header />
      <>
        <ContainerImage>
          <motion.div
            initial={{ x: "-20%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            exit={{ x: "0", opacity: 0 }}
          >
            <AboutMe />
          </motion.div>
          <TechsList />
        </ContainerImage>

        <DivAngle />
        <ContainerBackGround>
          <ProjectsList />
        </ContainerBackGround>
      </>
    </ContainerMain>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Homepage);
