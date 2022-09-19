import styled from "styled-components";

interface ICarouselIndicatorProps {
  isCurrentImage: boolean;
}
interface ICarouselArrow {
  menuEndAt?: "right" | "left";
}
export const CarouselContainer = styled.div<ICarouselArrow>`
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
  .arrow-right {
    transform: translateY(-50%);
    left: calc(100% - 30px - 10px);
    & > svg {
      background-color: ${({ menuEndAt }) =>
        menuEndAt === "right" ? "grey" : "#1a3c6d"};
      border-color: ${({ menuEndAt }) =>
        menuEndAt === "right" ? "grey" : "#1a3c6d"};
    }
  }

  .arrow-left {
    margin-left: 10px;
    transform: translateY(-50%);
    & > svg {
      background-color: ${({ menuEndAt }) =>
        menuEndAt === "left" ? "grey" : "#1a3c6d"};
      border-color: ${({ menuEndAt }) =>
        menuEndAt === "left" ? "grey" : "#1a3c6d"};
    }
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

export const CarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  margin-top: -10px;

  & > svg {
    width: 30px;
    height: 30px;
    color: #ffffff;
    border-radius: 100%;
    border: 1px solid;
  }
`;

export const CarouselIndicatorList = styled.ul`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 10px;

  & > li {
    display: flex;
    align-items: center;
  }
  justify-content: center;
`;
export const CarouselIndicator = styled.button<ICarouselIndicatorProps>`
  cursor: auto;

  border-radius: 100%;
  background-color: #ffffff;
  width: 15;
  width: ${({ isCurrentImage }) => (isCurrentImage ? "15px" : "10px")};
  height: ${({ isCurrentImage }) => (isCurrentImage ? "15px" : "10px")};
  background-color: ${({ isCurrentImage }) =>
    isCurrentImage ? "#1a3c6d" : "#ffffff"};
`;
