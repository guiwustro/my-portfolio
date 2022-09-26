import styled from "styled-components";

import bgc4 from "../assets/images/bgc-4.jpg";

export const ContainerBackGround = styled.div`
  background-image: url(${bgc4});
  border-top: 1px solid ${(props) => props.theme.colors["blue-250"]};
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 70px;
  width: 100vw;
  margin-top: 70px;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: grid;
  column-gap: 30px;
  max-width: 1440px;
  grid-template-areas:
    "title"
    "description"
    "img"
    "techs"
    "about"
    "features";

  .project-title {
    grid-area: title;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > h1 {
      color: ${(props) => props.theme.colors.text};
      font-size: 2.2rem;
      font-weight: 700;
      padding-bottom: 20px;
    }
    .website-link__mobile {
      min-width: 120px;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: 500;
      font-size: 1.1rem;
      height: 40px;
      background-color: ${(props) => props.theme.colors["blue-300"]};
      display: block;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.colors["text"]};
    }
  }

  .project-description {
    grid-area: description;
    font-weight: 400;
    text-indent: 25px;
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.text};
  }
  .project-carousel-image {
    grid-area: img;
    justify-self: center;
  }
  .project-techs-list {
    padding-top: 25px;

    grid-area: techs;
  }
  .background-techs {
    padding: 20px 5px;
    min-width: 250px;
    padding-bottom: 50px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${(props) => props.theme.colors["blue-200"]};
    gap: 24px;
    & > h3 {
      padding-left: 30px;

      font-weight: 700;
      font-size: 1.8rem;
      width: 195px;
      color: ${(props) => props.theme.colors["text"]};
    }
    & > ul {
      padding-left: 30px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      list-style-type: circle;
      list-style-position: inside;
      & > li {
        color: ${(props) => props.theme.colors["text"]};
        font-size: 1.1rem;
      }
    }
    @media screen and (min-width: 768px) {
      .background-techs {
        min-height: 500px;
      }
    }
  }
  .website-link__desktop {
    padding: 5px 30px;
    width: 195px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 36px;
    background: ${(props) => props.theme.colors["blue-see-website"]};

    display: none;
    align-self: center;
    text-align: center;
    color: ${(props) => props.theme.colors["text"]};
  }
  .about-project {
    padding-top: 25px;

    grid-area: about;
    & > h3 {
      font-weight: 700;
      font-size: 1.8rem;
      color: ${(props) => props.theme.colors["text"]};
      margin-bottom: 10px;
    }
    & > ul {
      & > p {
        color: ${(props) => props.theme.colors["text"]};
        font-size: 1.1rem;
        line-height: 22px;
        margin-bottom: 15px;
        text-indent: 25px;
      }
    }
  }
  .project-features {
    grid-area: features;
    padding-top: 25px;

    & > h3 {
      font-weight: 700;
      font-size: 1.8rem;
      color: ${(props) => props.theme.colors["text"]};
      margin-bottom: 10px;
    }
    & > ul {
      list-style-type: circle;
      list-style-position: inside;
      & > li {
        color: ${(props) => props.theme.colors["text"]};
        font-size: 1.1rem;
        line-height: 22px;
        margin-bottom: 15px;
      }
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: 250px auto;
    grid-template-areas:
      "techs title"
      "techs description"
      "techs img"
      "about about"
      "features features";
    .project-carousel-image {
      justify-self: flex-start;
    }

    .website-link__mobile {
      display: flex;
      visibility: hidden;
      background-color: blue;
    }
    .website-link__desktop {
      display: block;
    }
  }
`;
