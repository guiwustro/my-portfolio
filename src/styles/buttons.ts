import styled from "styled-components";

export const UnderLineAnimation = styled.div`
  a {
    display: inline-block;
    padding-bottom: 0.35rem;
    position: relative;
    font-size: 1.1rem;
    font-weight: 600;
  }

  a::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(45deg, transparent, #2196f3);

    transition: width 0.25s linear;
  }
  a:hover::before {
    width: 100%;
  }
`;

export const UnderLineAnimationButton = styled.div`
  button {
    padding-bottom: 0.35rem;
    position: relative;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    gap: 6px;
    align-items: center;
    font-weight: 400;
    font-family: "Reggae One", CenturyGothic, "AppleGothic", sans-serif;
  }

  button::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(45deg, transparent, #2196f3);

    transition: width 0.25s linear;
  }
  button:hover::before {
    width: 100%;
  }
`;
