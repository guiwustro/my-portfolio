import ContactMe from "components/contact-me";
import Footer from "components/footer";
import ToolTipChangeTheme from "components/tooltip-change-theme";
import { GetStaticPropsContext } from "next";
import Head from "next/head";

import icon from "../assets/icons/gw.svg";
import AboutMe from "../components/about-me";
import Header from "../components/header";
import ProjectsList from "../components/projects-list";
import TechsList from "../components/techs-list";
import {
  BackgroundContact,
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
    <>
      <Head>
        <title>Guilherme Portfolio</title>
      </Head>
      <ContainerMain>
        <Header locale={locale} />
        <>
          <ContainerImage>
            <AboutMe locale={locale} />
            <TechsList locale={locale} />
          </ContainerImage>
          <DivAngle />
          <ContainerBackGround>
            <ProjectsList locale={locale} />
          </ContainerBackGround>
          <BackgroundContact>
            <ContactMe locale={locale} />
            <Footer locale={locale} />
          </BackgroundContact>
        </>
      </ContainerMain>
    </>
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
