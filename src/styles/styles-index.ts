import styled from "styled-components";

import backgroundHome from "../assets/images/backgroundHome.jpg";
import bgc from "../assets/images/bgc-1.jpg";
import bgc4 from "../assets/images/bgc-4.jpg";

export const ContainerMain = styled.div`
  overflow-y: auto;
  -webkit-font-smoothing: antialiased;
  height: 100vh;
  scroll-behavior: smooth;
  overflow-x: hidden;
`;

export const ContainerImage = styled.div`
  /* background-image: url(${backgroundHome}); */
  background-image: url(${(props) => props.theme.colors["background-image"]});
  transition: all 0.4s cubic-bezier(0.39, 0.58, 0.57, 1);

  background-size: cover;
  .landingImage {
    z-index: 0;
    height: 100%;
  }
  width: 100vw;
  padding-bottom: 70px;
`;

export const ContainerBackGround = styled.div`
  background-image: url(${(props) => props.theme.colors["background-image"]});
  background-size: cover;
  border-top: 1px solid ${(props) => props.theme.colors["primary-color-250"]};
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

export const BackgroundContact = styled.div`
  background-image: url(${(props) => props.theme.colors["background-image"]});
  background: ${(props) => props.theme.colors["footer-color"]};
  border-top: 1px solid ${(props) => props.theme.colors["primary-color-250"]};
  background-repeat: no-repeat;
  background-size: cover;
`;
