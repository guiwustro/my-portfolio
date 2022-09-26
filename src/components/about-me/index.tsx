import { BsGithub, BsLinkedin } from "react-icons/bs";

import LightBulbAnimation from "components/lighbulb-animation";
import Image from "next/image";
import { IHomepageProps } from "pages";
import { homePageInfo } from "translations/home";

import MyPhoto from "../../assets/images/myPhoto.png";
import {
  Container,
  Ellipse,
  IconsContainer,
  LeftSideContainer,
  NameContainer,
  PhotoContainer,
} from "./styles";

const AboutMe = ({ locale }: IHomepageProps) => {
  const {
    "about-me": about,
    "front-end-developer": dev,
    hello,
  } = homePageInfo[locale];

  return (
    <Container id="home">
      <LeftSideContainer>
        <NameContainer>
          <span id="about__hello">{hello}</span>
          <span id="about__name">Guilherme Wustro</span>
          <span id="about__dev">{dev}</span>
        </NameContainer>
        <p id="about__description">{about}</p>

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
        <LightBulbAnimation />
        <Ellipse />
        <Image src={MyPhoto} width="275" height="275" alt="GW" />
      </PhotoContainer>
    </Container>
  );
};

export default AboutMe;
