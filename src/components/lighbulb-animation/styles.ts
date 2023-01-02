import styled from "styled-components";

export const LightBulbContainer = styled.div`
  /* position: relative; */
  & > svg {
    position: absolute;
    top: 69px;
    width: 20px;
    left: -37px;
    height: 100%;
    fill: ${(props) => props.theme.colors["primary-color-500"]};
  }
  @media screen and (min-width: 768px) {
    width: 30px;
  }
`;
