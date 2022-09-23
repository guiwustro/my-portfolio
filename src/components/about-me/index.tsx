import { BsGithub, BsLinkedin } from "react-icons/bs";

import Image from "next/image";

// import { withTranslation } from "../../../i18nt";
import MyPhoto from "../../assets/images/myPhoto.png";
import {
  Container,
  Ellipse,
  IconsContainer,
  LeftSideContainer,
  NameContainer,
  PhotoContainer,
} from "./styles";

const AboutMe = () => {
  return (
    <Container id="home">
      <LeftSideContainer>
        <NameContainer>
          {/* <span id="about__hello">{t("hello")}</span>
          <span id="about__name">Guilherme Wustro</span>
          <span id="about__dev">{t("front-end-developer")}</span> */}
        </NameContainer>
        {/* <p id="about__description">{t("about-me")}</p> */}

        <IconsContainer>
          <a
            target="_blank"
            href={"https://www.linkedin.com/in/guilhermewustro/"}
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            target="_blank"
            href={"https://github.com/guiwustro"}
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </IconsContainer>
      </LeftSideContainer>
      <PhotoContainer>
        <Ellipse />
        <Image src={MyPhoto} width="275" height="275" alt="GW" />
      </PhotoContainer>
    </Container>
  );
};

AboutMe.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default AboutMe;
// export default withTranslation("common")(AboutMe);
