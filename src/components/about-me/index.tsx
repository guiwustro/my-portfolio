import { BsGithub, BsLinkedin } from "react-icons/bs";

import { ImageAnimation, TextAnimation } from "components/about-me-animation";
import LightBulbAnimation from "components/lighbulb-animation";
import RocketAnimation from "components/rocket-animation";
import Tooltip from "components/tooltip";
import ToolTipChangeTheme from "components/tooltip-change-theme";
import Image from "next/image";
import { IHomepageProps } from "pages";
import { homePageInfo } from "translations/home";

import DotImage from "../../assets/images/dots_image.png";
import MyPhoto from "../../assets/images/myPhoto.png";
import {
  Container,
  IconContainer,
  IconsContainer,
  LeftSideContainer,
  NameContainer,
  PhotoContainer,
  PositionDots,
} from "./styles";

const AboutMe = ({ locale }: IHomepageProps) => {
  const {
    "about-me": about,
    "full-stack-developer": dev,

    hello,
  } = homePageInfo[locale];

  return (
    <Container id="home" style={{ position: "relative" }}>
      <ToolTipChangeTheme />
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
            <Tooltip
              title={"Linkedin"}
              width={70}
              ContainerWidth={19}
              position="left"
            >
              <a
                target="_blank"
                href={"https://www.linkedin.com/in/guilhermewustro/"}
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </Tooltip>

            <Tooltip
              title={"Github"}
              width={70}
              ContainerWidth={19}
              position="left"
            >
              <IconContainer>
                <a
                  target="_blank"
                  href={"https://github.com/guiwustro"}
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </IconContainer>
            </Tooltip>
          </IconsContainer>
        </TextAnimation>
      </LeftSideContainer>
      <ImageAnimation>
        <PhotoContainer>
          <PositionDots>
            <Image src={DotImage} width="28" height="28" alt="Dots" />
          </PositionDots>
          <LightBulbAnimation />
          <Image src={MyPhoto} width="275" height="275" alt="GW" />
          <RocketAnimation />
        </PhotoContainer>
      </ImageAnimation>
    </Container>
  );
};

export default AboutMe;
