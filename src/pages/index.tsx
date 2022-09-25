// import ContactMe from "components/contact-me";
import { motion } from "framer-motion";
import { GetStaticPropsContext } from "next";

import AboutMe from "../components/about-me";
import Header from "../components/header";
import ProjectsList from "../components/projects-list";
import TechsList from "../components/techs-list";
import {
  ContainerBackGround,
  ContainerImage,
  ContainerMain,
  DivAngle,
} from "../styles/styles-index";

export interface IHomepageProps {
  locale: "en" | "default";
}

const Homepage = ({ locale }: IHomepageProps) => {
  return (
    <ContainerMain>
      <Header locale={locale} />
      <>
        <ContainerImage>
          <motion.div
            initial={{ x: "-20%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            exit={{ x: "0", opacity: 0 }}
          >
            <AboutMe locale={locale} />
          </motion.div>
          <TechsList locale={locale} />
        </ContainerImage>
        <DivAngle />
        <ContainerBackGround>
          <ProjectsList locale={locale} />
        </ContainerBackGround>
        {/* <ContactMe /> */}
      </>
    </ContainerMain>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      locale: context.locale,
    },
  };
}

export default Homepage;
