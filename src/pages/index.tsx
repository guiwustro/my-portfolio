import { motion } from "framer-motion";
import { GetStaticPropsContext } from "next";

// import { withTranslation } from "../../i18nt.js/index.js";
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

interface ITranslate {
  [key: string]: Record<string, string>;
}

interface IHomepageProps {
  locale: string;
}

const Homepage = ({ locale }: IHomepageProps) => {
  const translate: ITranslate = {
    en: {
      title: "teste ingles",
    },
    default: {
      title: "teste pt",
    },
  };

  // console.log(props.context.locale);
  return (
    <ContainerMain>
      <h1>{translate[locale].title}</h1>
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
        {/* <ContactMe /> */}
      </>
    </ContainerMain>
  );
};

// Homepage.getInitialProps = async () => ({
//   namespacesRequired: ["common"],
// });

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      locale: context.locale,
    },
  };
}

export default Homepage;
// export default withTranslation("common")(Homepage);
