import styled from "styled-components";

import backGround from "../../public/images/backgroundHome.jpg";
import image from "../assets/images/background-about.png";
import background from "../assets/images/background-projects.png";
import backgroundHome from "../assets/images/backgroundHome.jpg";
import bgc from "../assets/images/bgc-1.jpg";
import bgc2 from "../assets/images/bgc-2.jpg";
// import bgc3 from "../assets/images/bgc-3.jpg";
import bgc4 from "../assets/images/bgc-4.jpg";

export const ContainerMain = styled.div`
  overflow-y: auto;
  -webkit-font-smoothing: antialiased;
  height: 100vh;
  scroll-behavior: smooth;
  overflow-x: hidden;
`;

export const ContainerImage = styled.div`
  /* background-image: url(${image}); */
  /* background-image: url(${backgroundHome}); */
  background-image: url(${backGround});

  background-size: cover;

  .landingImage {
    z-index: 0;
    height: 100%;
  }
  width: 100vw;
  padding-bottom: 70px;
`;

export const ContainerBackGround = styled.div`
  /* background-image: url(${background}); */
  background-image: url(${bgc4});

  background-size: cover;
  border-top: 1px solid ${(props) => props.theme.colors["blue-250"]};
  background-repeat: no-repeat;
  padding-bottom: 70px;
  width: 100vw;
  margin-top: -80px;
`;

export const DivAngle = styled.div`
  background-image: url(${backgroundHome});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 70px;
  width: 100vw;
  height: 80px;
`;
