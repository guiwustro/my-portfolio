import styled from "styled-components";

export const TechsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  & > h3 {
    color: ${(props) => props.theme.colors["blue-700"]};
    font-weight: 700;
    font-size: 2rem;
    line-height: 43px;
  }
  .tech-list {
    display: flex;
    flex-direction: row;
    gap: 50px;
    flex-wrap: wrap;
    .tech-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      & > h4 {
        color: ${(props) => props.theme.colors["blue-700"]};
        font-size: 1rem;
        line-height: 24px;
      }
      & > svg {
        fill: ${(props) => props.theme.colors["blue-500"]};
        width: 40px;
        height: 40px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    & > svg {
      fill: ${(props) => props.theme.colors["blue-500"]};
      width: 60px;
      height: 60px;
    }
  }
`;
