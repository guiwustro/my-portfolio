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
  }
`;

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const animate = keyframes`
 from {
      background-position: 0%;
    }
    to {
      background-position: 400%;
    }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  #about__hello,
  #about__dev {
    font-size: 1.875rem;
    font-weight: 500;
    font-family: "Reggae One", CenturyGothic, "AppleGothic", sans-serif;

    color: ${(props) => props.theme.colors["blue-700"]};
  }
  #about__name {
    font-size: 4rem;
    width: 320px;
    /* color: ${(props) => props.theme.colors["blue-gradient"]}; */
    font-weight: 700;
    background: linear-gradient(
      ${(props) => props.theme.colors["blue-gradient"]}
    );

    background-size: 400%;
    animation: ${animate} 10s reverse infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  span.retroshadow {
    font-family: "Reggae One", CenturyGothic, "AppleGothic", sans-serif;
    font-size: 2.5rem;

    text-transform: uppercase;
    text-rendering: optimizeLegibility;
  }

  span.retroshadow {
    color: #e9f2ff;
    letter-spacing: 0.05em;
    text-shadow: 4px 4px 0px #788aa1, 7px 7px 0px rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 380px) {
    span.retroshadow {
      font-size: 3.1rem;
    }
  }

  @media screen and (min-width: 768px) {
    #about__name {
      width: 550px;
    }
  }

  @media screen and (min-width: 1440px) {
    span.retroshadow {
      font-size: 4.5rem;
    }
  }
`;

export const IconsContainer = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  & > a {
    position: relative;
  }
  & > a > svg {
    width: 33px;
    height: 100%;

    fill: ${(props) => props.theme.colors["blue-500"]};
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

export const Ellipse = styled.div`
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(99, 143, 174, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;
