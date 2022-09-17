import styled from "styled-components";
export const Container = styled.div`
  margin-top: 90px;
  display: grid;
  column-gap: 30px;
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
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.text};
  }
  .project-carousel-image {
    grid-area: img;
    justify-self: center;
  }
  .project-techs-list {
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
    min-height: 500px;
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
  }
  .website-link__desktop {
    padding: 5px 30px;
    width: 195px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 36px;
    background-color: ${(props) => props.theme.colors["blue-300"]};
    display: none;
    align-self: center;
    text-align: center;
    color: ${(props) => props.theme.colors["text"]};
  }
  .about-project {
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

  @media (min-width: 768px) {
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
