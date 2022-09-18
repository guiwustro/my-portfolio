import styled from "styled-components";

import image from "../assets/images/background-about.png";
import background from "../assets/images/background-projects.png";
import bgc from "../assets/images/bgc-1.jpg";
import bgc2 from "../assets/images/bgc-2.jpg";
import bgc3 from "../assets/images/bgc-3.jpg";
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
  background-image: url(${bgc3});

  width: 100vw;
  padding-bottom: 70px;
`;

export const ContainerBackGround = styled.div`
  /* background-image: url(${background}); */
  background-image: url(${bgc4});

  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 70px;
  width: 100vw;
  margin-top: -80px;
  /* clip-path: polygon(0 0, 100% 0, 25% 100%); */
`;
export const DivAngle = styled.div`
  background-image: url(${bgc3});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 70px;
  width: 100vw;
  height: 80px;
`;
