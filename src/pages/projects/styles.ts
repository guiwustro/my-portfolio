import styled from "styled-components";
export const Container = styled.div`
  margin-top: 90px;
  display: grid;
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
    color: ${(props) => props.theme.colors.text};
    font-size: 2.2rem;
    font-weight: 700;
  }
  .project-description {
    grid-area: description;
  }
  .project-carroussel-image {
    /* !! Colocar um círculo pra cada imagem e deixar ele destacado em cada uma p mostrrar qual é a foto selecionada */
    /* ! Colocar um background azulzinho e uma borda, pq nem sempre a imagem vai se adequar a tela, portanto precisa tomar cuidado nisso */
    grid-area: img;
    width: 100%;
    max-height: 600px;
    & > div {
      width: 100%;
      max-height: 100%;
      height: 600px;

      display: flex;
      align-self: flex-start;
    }
    margin-bottom: 100px;
  }
  .project-techs-list {
    & > a {
      width: 80%;
      height: 50px;
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 36px;
      background-color: ${(props) => props.theme.colors["blue-700"]};

      color: ${(props) => props.theme.colors["text-white"]};
    }
    grid-area: techs;
    background-color: ${(props) => props.theme.colors["blue-200"]};
  }
  .about-project {
    grid-area: about;
  }
  .project-features {
    grid-area: features;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 20% 80%;
    grid-template-areas:
      "techs title"
      "techs description"
      "techs img"
      "about about"
      "features features";
  }
`;
