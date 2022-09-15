import styled from "styled-components";

export const Container = styled.div`
  .project-image {
    transition: transform 0.4s;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }

  @media screen and (min-width: 768px) {
    .project-image {
      width: 400px;
      height: 300px;
    }
  }
`;
