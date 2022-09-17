import styled from "styled-components";

export const CarouselContainer = styled.div`
  /* !! Colocar um círculo pra cada imagem e deixar ele destacado em cada uma p mostrrar qual é a foto selecionada */
  /* ! Colocar um background azulzinho e uma borda, pq nem sempre a imagem vai se adequar a tela, portanto precisa tomar cuidado nisso */
  padding-top: 15px;
  width: 90%;
  max-height: 600px;
  position: relative;
  ul {
    overflow-x: hidden;
    scroll-behavior: smooth;
    display: flex;
  }
  .carousel-arrow {
    position: absolute;
    top: 50%;
    & > svg {
      color: ${(props) => props.theme.colors["blue-500"]};
      width: 30px;
      height: 30px;
    }
  }
  .arrow-right {
    transform: translateY(-50%);
    left: calc(100% - 30px - 10px);
  }

  .arrow-left {
    margin-left: 10px;
    transform: translateY(-50%);
  }
`;

export const CarouselItem = styled.li`
  min-width: 100%;

  & > div {
    width: 100%;
    max-height: 100%;
    height: 300px;
  }
  @media screen and (min-width: 768px) {
    & > div {
      height: 380px;
    }
  }
  @media screen and (min-width: 1024px) {
    & > div {
      height: 600px;
    }
  }
`;
