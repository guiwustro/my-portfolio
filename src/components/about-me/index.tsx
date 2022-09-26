import { BsGithub, BsLinkedin } from "react-icons/bs";

import { ImageAnimation, TextAnimation } from "components/about-me-animation";
import LightBulbAnimation from "components/lighbulb-animation";
import RocketAnimation from "components/rocket-animation";
import Image from "next/image";
import { IHomepageProps } from "pages";
import { homePageInfo } from "translations/home";

import MyPhoto from "../../assets/images/myPhoto.png";
import {
  Container,
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
          <TextAnimation>
            <span id="about__hello">{hello}</span>
          </TextAnimation>
          <TextAnimation>
            <span data-text="Guilherme Wustro" className="retroshadow">
              Guilherme Wustro
            </span>
          </TextAnimation>
          <TextAnimation>
            <span id="about__dev">{dev}</span>
          </TextAnimation>
        </NameContainer>

        <TextAnimation>
          <p id="about__description">{about}</p>
        </TextAnimation>
        <TextAnimation>
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
        </TextAnimation>
      </LeftSideContainer>
      <ImageAnimation>
        <PhotoContainer>
          {/* <LightBulbAnimation /> */}
          {/* <Ellipse /> */}
          <Image src={MyPhoto} width="275" height="275" alt="GW" />
          <RocketAnimation />
        </PhotoContainer>
      </ImageAnimation>
    </Container>
  );
};

export default AboutMe;
