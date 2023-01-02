import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0 20px;

  padding-top: 90px;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;

  #about__description {
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.text};
    line-height: 30px;
    letter-spacing: 0.03rem;
  }
  @media screen and (min-width: 768px) {
    padding-top: 120px;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    #about__description {
      width: 600px;
    }
  }
`;

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  #about__hello,
  #about__dev {
    font-size: 1.875rem;
    font-weight: 700;
    /* font-family: "Reggae One", CenturyGothic, "AppleGothic", sans-serif; */

    color: ${(props) => props.theme.colors["primary-color-700"]};
  }

  span.retroshadow {
    font-family: "Reggae One", CenturyGothic, "AppleGothic", sans-serif;
    font-size: 2.5rem;
    text-transform: uppercase;
    text-rendering: optimizeLegibility;
    color: #bbd2f3;
    position: relative;
    letter-spacing: 0.05em;
    text-shadow: 4px 4px 0px #788aa1, 7px 7px 0px rgba(0, 0, 0, 0.5);
  }
  @keyframes animate {
    0%,
    10%,
    100% {
      width: 0;
    }

    60%,
    70%,
    90% {
      width: 100%;
      width: 140%;
    }
  }
  .retroshadow::before {
    content: attr(data-text);
    position: absolute;
    width: 140%;
    font-size: 2.5rem;
    word-wrap: normal;
    color: #e9f2ff;
    text-shadow: 4px 4px 0px #7a838e, 7px 7px 0px rgba(0, 0, 0, 0.5),
      0 0 10px #fff, 0 0 5px #fff;
    overflow: hidden;

    animation: animate 15s linear infinite;
  }

  @media screen and (min-width: 380px) {
    span.retroshadow {
      font-size: 3rem;
    }
    .retroshadow::before {
      font-size: 3rem;
    }
  }
  @media screen and (min-width: 631px) {
    .retroshadow::before {
      white-space: nowrap;
    }
  }
  @media screen and (min-width: 1440px) {
    span.retroshadow {
      font-size: 4.5rem;
    }
    .retroshadow::before {
      font-size: 4.5rem;
    }
  }
`;

export const IconsContainer = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const IconContainer = styled.div`
  width: 100%;
  position: relative;
  & > a {
    /* position: relative; */
  }
  & > a > svg {
    /* width: 33px; */
    height: 100%;

    fill: ${(props) => props.theme.colors["primary-color-500"]};
  }
  & > a:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    transition: 0.5s;
    transform: scale(0.9);
    z-index: -1;
  }
  & > a:nth-child(2):before {
    border-radius: 50%;
  }
  & > a:hover:before {
    transform: scale(1.2);
    box-shadow: 0 0 15px linear-gradient(45deg, transparent, #2196f3);
    background: #0f558d;

    filter: blur(3px);
  }
  & > a:hover {
    color: linear-gradient(45deg, transparent, #2196f3);
    box-shadow: 0 0 15px linear-gradient(45deg, transparent, #2196f3);
    text-shadow: 0 0 15px linear-gradient(45deg, transparent, #2196f3);
  }
`;

export const PhotoContainer = styled.div`
  position: relative;
  min-width: 200px;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  @media screen and (min-width: 768px) {
    min-width: 370px;
    width: 370px;
    height: 370px;
  }
`;

export const PositionDots = styled.div`
  position: absolute;
  right: -30px;
  top: 10px;

  @media screen and (min-width: 768px) {
    right: 30px;
  }
`;

export const PositionLightBulb = styled.div``;
